import * as tf from "@tensorflow/tfjs";

import React from "react";
import textAndVectorData from "./data/vectors-with-text.json";

const TFVis = () => {
  const myRef = React.useRef();

  const vectors = textAndVectorData.map((item) => item.vector);
  console.log("vectors", vectors);

  const embeddings = tf.tensor(vectors);
  console.log("embeddings", embeddings);

  return <div ref={myRef} className="space-y-8"></div>;
};

export default TFVis;
