"use client";

import {
  DisplayGrid,
  DisplayGridBigColumn,
  DisplayGridSmallColumn,
} from "@/ui/display-grid";
import { get2DThinData, getSampleData } from "@/lib/dc-api";

import Pre from "@/ui/pre";
import Scatterplot from "@/ui/d3/scatter-plot";
import { useDimensions } from "@/hooks/use-dimensions";
import { useRef } from "react";

const data = getSampleData();
const thinData = get2DThinData(data);

export default function Simple() {
  const plotRef = useRef(null);

  const { width, height } = useDimensions(plotRef);

  return (
    <DisplayGrid>
      <DisplayGridBigColumn ref={plotRef}>
        <Scatterplot width={width} height={height} data={thinData} />
      </DisplayGridBigColumn>
      <DisplayGridSmallColumn>
        <Pre>{JSON.stringify(thinData, null, 2)}</Pre>
      </DisplayGridSmallColumn>
    </DisplayGrid>
  );
}
