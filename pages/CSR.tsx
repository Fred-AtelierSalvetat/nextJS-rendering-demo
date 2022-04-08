import { useState, useEffect } from "react";

import type { NextPage } from "next";

import RenderPage from "../components/RenderPage";
import { Item, getNasaImages } from "../api/nasaAPI";
import { useDurationsContext } from "../state/DurationsProvider";

import styles from "./sharedStyles.module.scss";

const CSR: NextPage = () => {
  const [items, setItems] = useState<Item[]>();
  const [fetchError, setFetchError] = useState<boolean>(false);
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
      } catch (error) {
        console.log(error.message);
        setFetchError(true);
      }
    })();
  }, []);

  return (
    <>
      <main>
        {fetchError ? (
          <p>Les API de la NASA ne répondent plus DAMNED!</p>
        ) : (
          <>
            <h1>Client Side Rendering</h1>
            <RenderPage items={items} duration={csrDuration} />
          </>
        )}
      </main>
    </>
  );
};

export default CSR;
