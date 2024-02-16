import * as d3 from "d3";

import Plotly from "plotly.js-dist-min";

async function init() {
  const rows = await d3.csv(
    "https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv"
  );
  console.log("rows", rows);

  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  const trace1 = {
    x: unpack(rows, "x1"),
    y: unpack(rows, "y1"),
    z: unpack(rows, "z1"),
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
  };

  const trace2 = {
    x: unpack(rows, "x2"),
    y: unpack(rows, "y2"),
    z: unpack(rows, "z2"),
    mode: "markers",
    marker: {
      color: "rgb(127, 127, 127)",
      size: 12,
      symbol: "circle",
      line: {
        color: "rgb(204, 204, 204)",
        width: 1,
      },
      opacity: 0.8,
    },
    type: "scatter3d",
  };

  const data = [trace1, trace2];
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
  Plotly.newPlot("myDiv", data, layout, { responsive: true });
}

await init();
