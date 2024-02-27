import { NULWork, ThinData, WorkPartial } from "./definitions";

import textAndVectorData from "@/lib/data/vectors_tsne_3d_300_count.json";

const DC_API_URL = "https://api.dc.library.northwestern.edu/api/v2";

export function getSampleData() {
  return textAndVectorData;
}

export function getThinData(data: any) {
  const thinData = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      x: item.x,
      y: item.y,
      z: item.z,
    };
  });
  return thinData as ThinData[];
}

export function get2DThinData(data: any) {
  const thinData = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      x: item.x,
      y: item.y,
    };
  });
  return thinData as ThinData[];
}

export async function getWork(id: string): Promise<WorkPartial> {
  try {
    const response = await fetch(`${DC_API_URL}/works/${id}`);
    const { data: work } = await response.json();
    const workData = work as NULWork;

    return {
      canonical_link: workData.canonical_link || "",
      collection: workData.collection,
      description: workData.description,
      id: workData.id,
      thumbnail: workData.thumbnail,
      title: workData.title,
    };
  } catch (error) {
    console.error("Error fetching work data", error);
    return Promise.reject(error);
  }
}

export async function searchDCApi(q: string) {
  const query = {
    _source: ["id", "collection", "title", "thumbnail", "work_type"],
    query: {
      bool: {
        must: [
          {
            query_string: {
              fields: [
                "title^5",
                "all_text",
                "all_controlled_labels",
                "all_ids",
              ],
              query: q,
            },
          },
        ],
      },
    },
    size: 100,
  };

  try {
    const response = await fetch(`${DC_API_URL}/search?q=${query}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    const json = await response.json();
    return json.data as unknown as NULWork;
  } catch (error) {
    console.error("Error fetching search data", error);
  }
}
