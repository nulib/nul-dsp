"use client";

import React from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

type MemoChartProps = {
  handlePlotItemClick?: (data: any) => void;
  traces: Plotly.Data[];
};

const MemoChart = React.memo(function Memo({
  handlePlotItemClick,
  traces,
}: MemoChartProps) {
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
      className=""
      data={traces}
      layout={layout}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
      onClick={handlePlotItemClick}
    />
  );
});

export default MemoChart;
