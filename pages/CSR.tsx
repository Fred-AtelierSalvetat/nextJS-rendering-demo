import { useState, useEffect } from "react";

import { Item, getNasaImages } from "../api/nasaAPI";
import { useDurationsContext } from "../state/DurationsProvider";

import styles from "./sharedStyles.module.scss";

const CSR = () => {
  const [items, setItems] = useState<Item[]>();

  const {
    csr: [csrDuration, setCsrDuration],
  } = useDurationsContext();

  useEffect(() => {
    (async () => {
      setCsrDuration();
      const { items, duration } = await getNasaImages();
      setItems([...items]);
      setCsrDuration(duration);
    })();
  }, []);

  return (
    <main className={styles.main}>
      {csrDuration && <p>{csrDuration}</p>}
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
