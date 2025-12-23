import * as tf from "@tensorflow/tfjs";
import { createModel } from "./model";

export async function trainLocalModel() {
  const model = createModel();

  const xs = tf.randomNormal([200, 784]);
  const labels = tf.oneHot(
    tf.randomUniform([200], 0, 10, "int32"),
    10
  );

  const history = await model.fit(xs, labels, {
    epochs: 2,
    batchSize: 32,
  });

  const acc =
    (history.history.accuracy?.slice(-1)[0] as number) ??
    (history.history.acc?.slice(-1)[0] as number);

  const weights = getModelWeights(model);

  console.log("Local training done. Accuracy:", acc);

  return {
    weights,
    accuracy: acc,
    samples: 200,
  };
}

export function getModelWeights(model: tf.LayersModel) {
  return model.getWeights().map((w) => ({
    data: w.arraySync(),
    shape: w.shape,
  }));
}
