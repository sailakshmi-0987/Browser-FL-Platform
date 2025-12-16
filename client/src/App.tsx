import { useEffect } from "react";
import { io } from "socket.io-client";
import { trainLocalModel } from "./train";

const socket = io("http://localhost:5000");

function App() {
  useEffect(() => {
    const clientId = "client_" + Math.floor(Math.random() * 10000);
    socket.emit("join", clientId);

    async function trainAndSend() {
      const result = await trainLocalModel();

      socket.emit("model-update", {
        clientId,
        weights: result.weights,
        accuracy: result.accuracy,
        samples: result.samples,
      });

      console.log("Model update sent to server");
    }

    trainAndSend();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Browser Federated Learning Client</h2>
      <p>Training & sending updates…</p>
    </div>
  );
}

export default App;
