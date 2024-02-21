import { useEffect, useState } from "react";

import Plot from "react-plotly.js";
import React from "react";
import debounce from "lodash.debounce";
import textAndVectorData from "../data/vectors_tsne_3d_300_count.json";

const MemoChart = React.memo(function Memo({ handlePlotItemHover }) {
  const [plotInstance, setPlotInstance] = useState(null);

  useEffect(() => {
    if (!plotInstance) return;

    plotInstance.on("plotly_hover", debounce(handlePlotItemHover, 300));

    return () => {
      if (plotInstance) {
        plotInstance.removeAllListeners("plotly_hover");
      }
    };
  }, [handlePlotItemHover, plotInstance]);

  const trace1 = {
    ids: textAndVectorData.map((item) => item.id),
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
    <Plot
      data={data}
      layout={layout}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
      onInitialized={(figure, graphDiv) => setPlotInstance(graphDiv)}
      onUpdate={(figure, graphDiv) => setPlotInstance(graphDiv)}
    />
  );
});

export default MemoChart;
