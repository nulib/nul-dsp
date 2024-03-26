import getChicagoCorpusData from "./get-chicago-corpus-data";
import getMultipleTrace3D from "./mock-data/multiple-trace-3d";
import getSingleTrace3D from "./mock-data/single-trace-3d";

export const mockDatasets = [
  {
    id: "7bd8574b-315e-4494-bb38-3bb377b76b33",
    name: "Chicago Corpus",
  },
  {
    id: "317fc19f-728e-4dc2-b244-2debdd7dd64c",
    name: "Single Trace 3d",
  },
  {
    id: "96bf0718-455c-4564-b35f-e832ab19e371",
    name: "Multiple Trace 3d",
  },
];

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getDataset(id: string) {
  switch (id) {
    case mockDatasets[0].id: {
      const { traces } = await getChicagoCorpusData();
      return {
        traces,
        name: mockDatasets[0].name,
      };
    }
    case mockDatasets[1].id: {
      const { traces } = getSingleTrace3D();
      return {
        traces,
        name: mockDatasets[0].name,
      };
    }
    case mockDatasets[2].id: {
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
