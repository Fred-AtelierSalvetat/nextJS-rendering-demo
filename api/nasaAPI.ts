export interface Item {
  nasa_id: string;
  title: string;
  src: string;
}

async function getNasaImages() {
  //Get collection
  const response = await fetch(
    `https://images-api.nasa.gov/search?q=moon&media_type=image`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  //Now get collection for each nasa_id
  const items: Item[] = [];
  for (const item of data.collection.items) {
    const { nasa_id, title } = item.data[0];
    const response = await fetch(
      `https://images-api.nasa.gov/asset/${nasa_id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const itemData = await response.json();
    items.push({ nasa_id, title, src: itemData.collection.items[0].href });
  }
  return items;
}

export { getNasaImages };
