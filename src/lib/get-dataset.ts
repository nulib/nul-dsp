import getMultipleTrace3D from "./mock-data/multiple-trace-3d";
import getSingleTrace3D from "./mock-data/single-trace-3d";

export const mockDatasets = [
  {
    id: 1,
    name: "Single Trace 3d",
  },
  {
    id: 2,
    name: "Multiple Trace 3d",
  },
];

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getDataset(id: string) {
  await sleep(2000);

  switch (id) {
    case "1": {
      const { traces } = getSingleTrace3D();
      return {
        traces,
        name: mockDatasets[0].name,
      };
    }
    case "2": {
      const { traces } = getMultipleTrace3D();
      return {
        traces,
        name: mockDatasets[1].name,
      };
    }
    default: {
      return {
        traces: [],
        name: null,
      };
    }
  }
}

export { getDataset };
