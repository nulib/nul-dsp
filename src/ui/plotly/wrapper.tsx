"use client";

import Chart from "./chart";
import Details from "./details";
import { WorkItem } from "@/lib/definitions";
import { getWork } from "@/lib/dc-api";
import { useCallback } from "react";
import { useState } from "react";

const Wrapper = ({ traces }) => {
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);

  const handlePlotItemHover = useCallback(async (data) => {
    const workId = data.points[0].id;
    const work = await getWork(workId);
    setActiveWork(work);
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-[60vh] gap-5">
      <div className="col-span-3">
        {activeWork ? <Details activeWork={activeWork} /> : null}
      </div>
      <div className="col-span-9">
        <Chart handlePlotItemHover={handlePlotItemHover} traces={traces} />
      </div>
    </div>
  );
};

export default Wrapper;
