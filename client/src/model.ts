import * as tf from "@tensorflow/tfjs";

export function createModel() {
  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      units: 10,
      inputShape: [784],
      activation: "relu",
    })
  );

  model.add(
    tf.layers.dense({
      units: 10,
      activation: "softmax",
    })
  );

  model.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  return model;
}
