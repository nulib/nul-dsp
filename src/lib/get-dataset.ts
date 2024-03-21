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
  {
    id: 3,
    name: "Searchable 3d",
  },
  {
    id: 4,
    name: "Interactive 3d",
  },
  {
    id: 5,
    name: "Basic 2d d3 chart",
  },
];

const sleep = (ms: number) => {
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

    // case "3":
    //   return {
    //     trace: trace1,
    //     data: thinData,
    //     name: mockDatasets[2].name,
    //   };
    // case "4":
    //   return {
    //     trace: trace1,
    //     data: thinData,
    //     name: mockDatasets[3].name,
    //   };
    // case "5":
    //   return {
    //     trace: trace1,
    //     data: thinData,
    //     name: mockDatasets[4].name,
    //   };
    default: {
      return {
        traces: [],
        name: null,
      };
    }
  }
}

export { getDataset };
