"use client";

import {
  DisplayGrid,
  DisplayGridBigColumn,
  DisplayGridSmallColumn,
} from "@/ui/display-grid";
import { ExtendedPlotMouseEvent, NULWork } from "@/lib/definitions";
import { useCallback, useState } from "react";

import { CHART_COLORS } from "@/lib/colors";
import Chart from "@/ui/plotly/chart";
import ImageCard from "@/ui/image-card";
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
  const [activeWork, setActiveWork] = useState<Partial<NULWork> | null>(null);

  const handlePlotItemClick = useCallback(
    async (data: ExtendedPlotMouseEvent) => {
      const workId = data.points[0].id;
      const work = workId ? await getWork(workId) : null;

      setActiveWork(work);
    },
    []
  );

  return (
    <DisplayGrid inverted>
      <DisplayGridSmallColumn>
        {!activeWork && <p>Click on a point to see Work details</p>}
        {activeWork && <ImageCard activeWork={activeWork} />}
      </DisplayGridSmallColumn>
      <DisplayGridBigColumn>
        <Chart traces={[trace1]} handlePlotItemClick={handlePlotItemClick} />
      </DisplayGridBigColumn>
    </DisplayGrid>
  );
}
