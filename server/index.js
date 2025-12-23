const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const MIN_CLIENTS = 2;

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let connectedClients = new Set();
let updates = [];
let round = 0;
let accuracyHistory = [];

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
  const totalSamples = updates.reduce((s, u) => s + u.samples, 0);
  const numLayers = updates[0].weights.length;
  const aggregated = [];

  for (let l = 0; l < numLayers; l++) {
    let layerSum = null;

    updates.forEach(u => {
      const weight = u.samples / totalSamples;
      const layerData = u.weights[l].data;
      layerSum = layerSum
        ? weightedAdd(layerSum, layerData, weight)
        : scaleArray(layerData, weight);
    });

    aggregated.push({
      data: layerSum,
      shape: updates[0].weights[l].shape,
    });
  }

  return aggregated;
}

io.on("connection", socket => {
  connectedClients.add(socket.id);

  // send current dashboard state to NEW client
  socket.emit("dashboard-update", {
    round,
    clients: connectedClients.size,
    accuracyHistory,
  });

  socket.on("model-update", data => {
    updates.push(data);

    if (updates.length >= MIN_CLIENTS) {
      round++;
      const globalWeights = fedAvg(updates);
      accuracyHistory.push(data.accuracy);

      io.emit("global-model", { weights: globalWeights, round });

      io.emit("dashboard-update", {
        round,
        clients: connectedClients.size,
        accuracyHistory,
      });

      updates = [];
    }
  });

  socket.on("disconnect", () => {
    connectedClients.delete(socket.id);

    io.emit("dashboard-update", {
      round,
      clients: connectedClients.size,
      accuracyHistory,
    });
  });
});

server.listen(5000, () =>
  console.log("Federated server running on port 5000")
);
