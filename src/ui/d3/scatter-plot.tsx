import * as d3 from "d3";

import { InteractionData, Tooltip } from "@/ui/d3/tooltip";

import { CHART_COLORS } from "@/lib/colors";
import { Thin2DData } from "@/lib/definitions";
import { getRangeEndpointValues } from "@/lib/d3-helpers";
import { useState } from "react";

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type ScatterplotProps = {
  width: number;
  height: number;
  data: Thin2DData[];
};

const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const [hovered, setHovered] = useState<InteractionData | null>(null);

  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const xRangePointEndValues = getRangeEndpointValues(data, "x");
  const yRangePointEndValues = getRangeEndpointValues(data, "y");

  const yScale = d3
    .scaleLinear()
    .domain(yRangePointEndValues)
    .range([boundsHeight, 0]);
  const xScale = d3
    .scaleLinear()
    .domain(xRangePointEndValues)
    .range([0, boundsWidth]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={13}
        cx={xScale(d.y)}
        cy={yScale(d.x)}
        opacity={1}
        fill={CHART_COLORS.green}
        stroke={CHART_COLORS.green}
        fillOpacity={0.2}
        strokeWidth={1}
        onMouseEnter={() =>
          setHovered({
            xPos: xScale(d.x),
            yPos: yScale(d.y),
            name: d.title,
          })
        }
        onMouseLeave={() => setHovered(null)}
      />
    );
  });

  return (
    <div className="relative">
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {/* Circles */}
          {allShapes}
        </g>
      </svg>

      {/* Tooltip */}
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          marginLeft: MARGIN.left,
          marginTop: MARGIN.top,
        }}
      >
        <Tooltip interactionData={hovered} />
      </div>
    </div>
  );
};

export default Scatterplot;
