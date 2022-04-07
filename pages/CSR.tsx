import { useState, useEffect } from "react";

import RenderPage from "../components/RenderPage";
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
      try {
        const { items, duration } = await getNasaImages();
        setItems([...items]);
        setCsrDuration(duration);
      } catch {
        console.log("Oups");
      }
    })();
  }, []);

  return (
    <>
      <main>
        <h1>Client Side Rendering</h1>
        <RenderPage items={items} duration={csrDuration} />
      </main>
    </>
  );
};

// //prevent useless optimization that lead "toReferenceError: performance is not defined"
// CSR.getInitialProps = async () => ({});

export default CSR;
