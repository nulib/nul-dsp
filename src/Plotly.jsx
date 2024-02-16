import * as d3 from "d3";

import Plot from "react-plotly.js";
import React from "react";
import textAndVectorData from "./data/vectors_tsne_3d_300_count.json";

const PlotlyTest = () => {
  const trace1 = {
    x: textAndVectorData.map((item) => item.x),
    y: textAndVectorData.map((item) => item.y),
    z: textAndVectorData.map((item) => item.z),
    mode: "markers",
    marker: {
      size: 12,
      line: {
        color: "rgba(217, 217, 217, 0.14)",
        width: 0.5,
      },
      opacity: 0.8,
    },
    type: "scatter3d",
    text: textAndVectorData.map((item) => item.title),
    hoverinfo: "text",
  };

  const data = [trace1];
  const layout = {
    title: "3D Scatter Plot",
    autosize: true,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },
  };

  return (
    <div className="space-y-8 h-[60vh]">
      <Plot
        data={data}
        layout={layout}
        useResizeHandler
        style={{ width: "100%", height: "100%" }}
        onHover={(e) => console.log("hover", e)}
      />
    </div>
  );
};

export default PlotlyTest;
