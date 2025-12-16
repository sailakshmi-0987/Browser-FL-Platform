import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  useEffect(() => {
    const clientId = "client_" + Math.floor(Math.random() * 10000);
    socket.emit("join", clientId);
    console.log("Joined as", clientId);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Browser Federated Learning Client</h2>
      <p>Connected to Federated Server</p>
    </div>
  );
}

export default App;
