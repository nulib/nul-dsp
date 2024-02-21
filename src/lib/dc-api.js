const DC_API_URL = "https://api.dc.library.northwestern.edu/api/v2/works/";

export async function getWork(id) {
  try {
    const response = await fetch(`${DC_API_URL}${id}`);
    const { data: work } = await response.json();

    return {
      canonicalLink: work.canonical_link,
      collection: work.collection,
      description: work.description,
      id: work.id,
      thumbnail: work.thumbnail,
      title: work.title,
    };
  } catch (error) {
    console.error("Error fetching work data", error);
    return Promise.reject(error);
  }
}
