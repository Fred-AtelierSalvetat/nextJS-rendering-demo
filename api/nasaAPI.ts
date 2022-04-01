export interface Item {
  nasa_id: string;
  title: string;
  src: string;
}

async function getNasaImages() {
  //Get collection
  await fetch(`https://data.ratp.fr/api/datasets/1.0/search/?q=&rows=10000`);

  const response = await fetch(
    `https://images-api.nasa.gov/search?q=moon&media_type=image`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  //Now get collection for each nasa_id
  const requestsMap = data.collection.items.map(async (item) => {
    const { nasa_id, title } = item.data[0];
    return {
      nasa_id,
      title,
      response: await fetch(`https://images-api.nasa.gov/asset/${nasa_id}`),
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
