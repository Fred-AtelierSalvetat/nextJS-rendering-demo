import { performance } from "universal-perf-hooks";

export interface Item {
  nasa_id: string;
  title: string;
  src: string;
}

async function getNasaImages() {
  //Get collection
  //const renderingStart = performance && global.performance?.now();
  const renderingStart = performance.now();
  const response = await fetch(
    `https://images-api.nasa.gov/search?q=moon&media_type=image&page=100`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  //const renderingEnd = global.performance && global.performance?.now();
  const renderingEnd = performance.now();

  return [
    {
      nasa_id: "1",
      title: "titre",
      src: (renderingEnd - renderingStart).toString(),
    } as Item,
  ];
  //Now get collection for each nasa_id
  const requestsMap = data.collection.items.map(async (item) => {
    const { nasa_id, title } = item.data[0];
    return {
      nasa_id,
      title,
      response: await fetch(`https://images-api.nasa.gov/asset/${nasa_id}`, {
        cache: "no-store",
      }),
    };
  });
  const responsesMap = await Promise.all(requestsMap);

  const items: Item[] = [];
  for (const item of responsesMap) {
    if (!item.response.ok) {
      throw Error(item.response.statusText);
    }
    const itemData = await item.response.json();
    items.push({
      nasa_id: item.nasa_id,
      title: item.title,
      src: itemData.collection.items[0].href,
    });
  }

  return items;
}

export { getNasaImages };
