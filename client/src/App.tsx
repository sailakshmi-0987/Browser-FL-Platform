import { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import { createModel } from "./fl/model";
import { trainLocalModel } from "./fl/train";
import { socket } from "./socket/socket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ClientDashboard from "./pages/ClientDashboard";

function App() {
  const modelRef = useRef<tf.LayersModel | null>(null);

  useEffect(() => {
    modelRef.current = createModel();

    async function trainAndSend() {
      const result = await trainLocalModel();

      socket.emit("model-update", {
        weights: result.weights,
        samples: result.samples,
        accuracy: result.accuracy
      });
    }

    trainAndSend();

    socket.on("global-model", (data) => {
      const newWeights = data.weights.map(
        (w: { data: number[]; shape: number[] }) =>
          tf.tensor(w.data, w.shape)
      );

      modelRef.current?.setWeights(newWeights);
    });

    return () => {
      socket.off("global-model");
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
