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
    verbose: 1,
  });

  const acc =
  (history.history.acc?.slice(-1)[0] as number) ??
  (history.history.accuracy?.slice(-1)[0] as number);

  console.log("Local training done. Accuracy:", acc);

  return {
    model,
    accuracy: acc,
    samples: 200,
    weights: getModelWeights(model),
  };
}
export function getModelWeights(model: any) {
  return model.getWeights().map((w: any) => ({
    data: w.arraySync(),
    shape: w.shape,
  }));
}


