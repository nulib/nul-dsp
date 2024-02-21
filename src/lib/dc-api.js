const DC_API_URL = "https://api.dc.library.northwestern.edu/api/v2/works/";

export async function getWork(id) {
  try {
    const response = await fetch(`${DC_API_URL}${id}`);
    const { data: work } = await response.json();

    return {
      id: work.id,
      title: work.title,
      description: work.description,
      thumbnail: work.thumbnail,
      collection: work.collection,
    };
  } catch (error) {
    console.error("Error fetching work data", error);
    return Promise.reject(error);
  }
}
