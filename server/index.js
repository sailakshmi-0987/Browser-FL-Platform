const express = require("express");
const http = require("http");
const { Server } = require("socket.io");


const MIN_CLIENTS = 2;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

let clients = {};
let updates = [];
function weightedAdd(a, b, weight) {
  if (Array.isArray(a)) {
    return a.map((v, i) => weightedAdd(v, b[i], weight));
  }
  return a + b * weight;
}

function scaleArray(arr, scale) {
  if (Array.isArray(arr)) {
    return arr.map(v => scaleArray(v, scale));
  }
  return arr * scale;
}

function fedAvg(updates) {
  const totalSamples = updates.reduce(
    (sum, u) => sum + u.samples,
    0
  );

  const numLayers = updates[0].weights.length;
  const aggregated = [];

  for (let l = 0; l < numLayers; l++) {
    let layerSum = null;

    updates.forEach((u) => {
      const weight = u.samples / totalSamples;
      const layerData = u.weights[l].data;

      if (!layerSum) {
        layerSum = scaleArray(layerData, weight);
      } else {
        layerSum = weightedAdd(layerSum, layerData, weight);
      }
    });

    aggregated.push({
      data: layerSum,
      shape: updates[0].weights[l].shape,
    });
  }

  return aggregated;
}

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join", (clientId) => {
    clients[clientId] = socket.id;
  });

  socket.on("model-update", (data) => {
  updates.push(data);

  console.log("Received update count:", updates.length);

  if (updates.length >= MIN_CLIENTS) {
    console.log("Running FedAvg...");
    const globalWeights = fedAvg(updates);

    io.emit("global-model", {
      weights: globalWeights,
      round: 1,
    });

    updates = [];
  }
});


  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("Federated server running on port 5000");
});
