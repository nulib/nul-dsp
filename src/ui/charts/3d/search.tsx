"use client";

import {
  DisplayGrid,
  DisplayGridBigColumn,
  DisplayGridSmallColumn,
} from "@/ui/display-grid";
import { SearchDCApiSchema, Vectors } from "@/lib/definitions";

import { CHART_COLORS } from "@/lib/colors";
import Chart from "@/ui/plotly/chart";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Pre from "@/ui/pre";
import { TextField } from "@radix-ui/themes";
import { searchDCApi } from "@/lib/dc-api";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

type SearchData = SearchDCApiSchema & Vectors;

export default function Search() {
  const [data, setData] = useState<SearchData[]>();

  const handleSearchInput = useDebouncedCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const q = e.target.value;
      if (q.length > 2) {
        const results = await searchDCApi(q);
        console.log("results", results);

        const resultsWithVectors = results?.map((item) => ({
          ...item,
          x: Math.random() * 100,
          y: Math.random() * 100,
          z: Math.random() * 100,
        }));
        setData(resultsWithVectors);
      }
    },
    1000
  );

  const trace1 = data
    ? ({
        hoverinfo: "text",
        ids: data.map((item) => item.id),
        marker: {
          color: CHART_COLORS.darkBlue,
          line: {
            color: "rgba(217, 217, 217, 0.14)",
            width: 0.5,
          },
          opacity: 0.8,
          size: 12,
        },
        mode: "markers",
        text: data.map((item) => item.title),
        type: "scatter3d",
        x: data.map((item) => item.x),
        y: data.map((item) => item.y),
        z: data.map((item) => item.z),
      } as Plotly.Data)
    : null;

  return (
    <>
      <fieldset className="mb-5 lg:w-1/2">
        <label htmlFor="search" className="">
          Search
        </label>
        <div className="mt-2">
          <TextField.Root>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
              placeholder="Search NUL API"
              id="search"
              name="search"
              onChange={handleSearchInput}
            />
          </TextField.Root>
        </div>
      </fieldset>

      <DisplayGrid>
        <DisplayGridBigColumn>
          {data && <Chart traces={trace1 ? [trace1] : []} />}
        </DisplayGridBigColumn>
        <DisplayGridSmallColumn>
          <Pre>{JSON.stringify(data, null, 2)}</Pre>
        </DisplayGridSmallColumn>
      </DisplayGrid>
    </>
  );
}
