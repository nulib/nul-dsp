import { CHART_COLORS } from "@/lib/colors";
import { getSampleData } from "@/lib/dc-api";

export default function getSingleTrace3D() {
  const data = getSampleData();

  const trace1 = {
    ids: data.map((item) => item.id),
    x: data.map((item) => item.x),
    y: data.map((item) => item.y),
    z: data.map((item) => item.z),
    mode: "markers",
    marker: {
      color: CHART_COLORS.orange,
      size: 12,
      line: {
        color: "rgba(217, 217, 217, 0.14)",
        width: 0.5,
      },
      opacity: 0.8,
    },
    type: "scatter3d",
    text: data.map((item) => item.title),
    hoverinfo: "text",
  } as Plotly.Data;

  return {
    traces: [trace1],
  };
}
