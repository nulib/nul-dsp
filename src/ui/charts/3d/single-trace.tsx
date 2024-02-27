import {
  DisplayGrid,
  DisplayGridBigColumn,
  DisplayGridSmallColumn,
} from "@/ui/display-grid";
import { getSampleData, getThinData } from "@/lib/dc-api";

import { CHART_COLORS } from "@/lib/colors";
import Chart from "@/ui/plotly/chart";
import Pre from "@/ui/pre";

const data = getSampleData();
const thinData = getThinData(data);

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

export default function SingleTrace() {
  return (
    <DisplayGrid>
      <DisplayGridBigColumn>
        <Chart traces={[trace1]} />
      </DisplayGridBigColumn>
      <DisplayGridSmallColumn>
        <Pre>{JSON.stringify(thinData, null, 2)}</Pre>
      </DisplayGridSmallColumn>
    </DisplayGrid>
  );
}
