import Chart from "./Chart";
import Details from "./Details";
import { getWork } from "../lib/dc-api";
import { useCallback } from "react";
import { useState } from "react";

const Wrapper = () => {
  const [activeWork, setActiveWork] = useState(null);

  const handlePlotItemHover = useCallback(async (data) => {
    const workId = data.points[0].id;
    const work = await getWork(workId);
    setActiveWork(work);
  }, []);

  return (
    <div className="grid grid-cols-12 h-[60vh] gap-5">
      <div className="col-span-9">
        <Chart handlePlotItemHover={handlePlotItemHover} />
      </div>
      <div className="col-span-3">
        {activeWork ? <Details activeWork={activeWork} /> : null}
      </div>
    </div>
  );
};

export default Wrapper;
