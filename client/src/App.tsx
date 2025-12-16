import { useEffect } from "react";
import { io } from "socket.io-client";
import { trainLocalModel } from "./train";

const socket = io("http://localhost:5000");

function App() {
  useEffect(() => {
    const clientId = "client_" + Math.floor(Math.random() * 10000);
    socket.emit("join", clientId);

    // Start local training
    trainLocalModel();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Browser Federated Learning Client</h2>
      <p>Local training running… check console</p>
    </div>
  );
}

export default App;
