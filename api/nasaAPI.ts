import { cp } from "fs";
import { performance } from "universal-perf-hooks";

export interface Item {
  nasa_id: string;
  title: string;
  src: string;
}

async function getNasaImages() {
  //Get collection
  const renderingStart = performance.now();
  try {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=moon&media_type=image&page=4`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    //const renderingEnd = global.performance && global.performance?.now();
    await fetch(
      `https://images-api.nasa.gov/search?q=moon&media_type=image&page=100`,
      { cache: "no-store" }
    );

    //Now get collection for each nasa_id
    const requestsMap = data.collection.items.map(async (item) => {
      const { nasa_id, title, description, date_created } = item.data[0];
      const thumb = item.links[0].href;
      return {
        nasa_id,
        title,
        thumb,
        response: await fetch(
          `https://images-api.nasa.gov/metadata/${nasa_id}`,
          {
            cache: "no-store",
          }
        ),
      };
    });
    const responsesMap = await Promise.all(requestsMap);

    const items: Item[] = [];
    for (const item of responsesMap) {
      if (!item.response.ok) {
        throw Error(item.response.statusText);
      }
      // const itemData = await item.response.json();
      items.push({
        nasa_id: item.nasa_id,
        title: item.title,
        thumb: item.thumb,
        // src: itemData.collection.items,
      });
    }
    const renderingEnd = performance.now();
    return {
      duration: renderingEnd - renderingStart,
      items,
    };
  } catch (error) {
    throw new Error(`getNasaImages fetch error: ${error}`);
  }
}

export { getNasaImages };
