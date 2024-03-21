import { NULWorkWithVectors, ThinData } from "@/lib/definitions";

import { CHART_COLORS } from "@/lib/colors";
import { getSampleData } from "@/lib/dc-api";

type CollectionThinData = ThinData & {
  collection: string;
};

function filterByCollection(collection: string, data: NULWorkWithVectors[]) {
  return data
    .filter((item) => item.collection === collection)
    .map((item) => ({
      id: item.id,
      x: item.x,
      y: item.y,
      z: item.z,
      collection: item.collection,
      title: item.title,
    })) as CollectionThinData[];
}

function createTrace(data: CollectionThinData[], color: string) {
  return {
    hoverinfo: "text",
    ids: data.map((item) => item.id),
    marker: {
      color,
      line: {
        color: "rgba(217, 217, 217, 0.14)",
        width: 0.5,
      },
      opacity: 0.8,
      size: 12,
    },
    mode: "markers",
    name: data[0].collection,
    text: data.map((item) => item.title),
    type: "scatter3d",
    x: data.map((item) => item.x),
    y: data.map((item) => item.y),
    z: data.map((item) => item.z),
  } as Plotly.Data;
}

const collectionOptions = [
  "Berkeley Folk Music Festival",
  "Edward S. Curtis's The North American Indian",
  "Rosenthal Art Slides, Records of Department of Art History",
];

const data = getSampleData();
const data1 = filterByCollection(collectionOptions[0], data);
const data2 = filterByCollection(collectionOptions[1], data);
const data3 = filterByCollection(collectionOptions[2], data);

const trace1 = createTrace(data1, CHART_COLORS.purpleLight);
const trace2 = createTrace(data2, CHART_COLORS.blue);
const trace3 = createTrace(data3, CHART_COLORS.red);

export default function getMultipleTrace3D() {
  return {
    traces: [trace1, trace2, trace3],
  };
}
