import { useState, useEffect } from "react";

import { Item, getNasaImages } from "../api/nasaAPI";

import styles from "./sharedStyles.module.scss";

const CSR = () => {
  const [items, setItems] = useState<Item[]>();

  const renderingStart = performance.now();
  useEffect(() => {
    const renderingEnd = performance.now();
    console.log(renderingEnd - renderingStart);
  });

  useEffect(() => {
    (async () => {
      const items = await getNasaImages();
      setItems([...items]);
    })();
  }, []);

  return (
    <main className={styles.main}>
      {items &&
        items.map(({ nasa_id, title, src }) => (
          <img className={styles.image} key={nasa_id} src={src} alt={title} />
        ))}
    </main>
  );
};

//CSR.getInitialProps = async () => ({}); //prevent useless optimization that lead to performance

export default CSR;
