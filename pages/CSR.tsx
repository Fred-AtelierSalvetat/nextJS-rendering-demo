import { useState, useEffect } from "react";

import { Item, getNasaImages } from "../api/nasaAPI";

import styles from "./sharedStyles.module.scss";

const CSR = () => {
  const [items, setItems] = useState<Item[]>();

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
          <p>{src}</p>
          // <img className={styles.image} key={nasa_id} src={src} alt={title} />
        ))}
    </main>
  );
};

// //prevent useless optimization that lead "toReferenceError: performance is not defined"
// CSR.getInitialProps = async () => ({});

export default CSR;
