"use client";

import {
  DisplayGrid,
  DisplayGridBigColumn,
  DisplayGridSmallColumn,
} from "@/ui/display-grid";
import { useCallback, useState } from "react";

import { CHART_COLORS } from "@/lib/colors";
import Chart from "@/ui/plotly/chart";
import Details from "../../plotly/details";
import { Work } from "@nulib/dcapi-types";
import { getSampleData } from "@/lib/dc-api";
import { getWork } from "@/lib/dc-api";

const data = getSampleData();

const trace1 = {
  ids: data.map((item) => item.id),
  x: data.map((item) => item.x),
  y: data.map((item) => item.y),
  z: data.map((item) => item.z),
  mode: "markers",
  marker: {
    color: CHART_COLORS.green,
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

export default function Interactive() {
  const [activeWork, setActiveWork] = useState<Partial<Work> | null>(null);

  const handlePlotItemClick = useCallback(async (data: any) => {
    const workId = data.points[0].id;
    const work = await getWork(workId);

    setActiveWork(work);
  }, []);

  return (
    <DisplayGrid>
      <DisplayGridSmallColumn>
        {!activeWork && <p>Click on a point to see Work details</p>}
        {activeWork && <Details activeWork={activeWork} />}
      </DisplayGridSmallColumn>
      <DisplayGridBigColumn>
        <Chart traces={[trace1]} handlePlotItemClick={handlePlotItemClick} />
      </DisplayGridBigColumn>
    </DisplayGrid>
  );
}
