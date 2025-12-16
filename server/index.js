const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

let clients = {};
let updates = [];

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join", (clientId) => {
    clients[clientId] = socket.id;
  });

  socket.on("model-update", (data) => {
    updates.push(data);
    console.log("Received update from", data.clientId);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("Federated server running on port 5000");
});
