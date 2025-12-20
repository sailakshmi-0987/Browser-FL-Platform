import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import * as tf from "@tensorflow/tfjs";
import { createModel } from "./model";
import { trainLocalModel } from "./train";
import Landing from "./pages/Landing";

const socket = io("http://localhost:5000");

function App() {
  const modelRef = useRef<tf.LayersModel | null>(null);
  const clientId = useRef(
    "client_" + Math.floor(Math.random() * 10000)
  );

  useEffect(() => {
    socket.emit("join", clientId.current);

    modelRef.current = createModel();

    async function trainAndSend() {
      const result = await trainLocalModel();

      socket.emit("model-update", {
        clientId: clientId.current,
        weights: result.weights,
        accuracy: result.accuracy,
        samples: result.samples,
      });
    }

    trainAndSend();

    socket.on("global-model", async (data) => {
      console.log("Global model received");

      const newWeights = data.weights.map(
  (w: { data: number[]; shape: number[] }) =>
    tf.tensor(w.data, w.shape)
);
;

      modelRef.current?.setWeights(newWeights);

      console.log("Global model applied. Ready for next round.");
    });

    return () => {
      socket.off("global-model");
    };
  }, []);


  return(
  <Landing />
  );

}

export default App;
