import { useEffect } from "react";

import styles from "./sharedStyles.module.scss";
import { getNasaImages } from "../api/nasaAPI";

import { performance, PerformanceObserver } from "perf_hooks";

const SSR = ({ items }) => {
  const renderingStart = performance.now();
  useEffect(() => {
    const renderingEnd = performance.now();
    console.log(renderingEnd - renderingStart);
  });

  return (
    <main className={styles.main}>
      {items?.map(({ nasa_id, title, src }) => (
        <img className={styles.image} key={nasa_id} src={src} alt={title} />
      ))}
    </main>
  );
};

export async function getServerSideProps() {
  const items = await getNasaImages();
  return {
    props: { items }, // will be passed to the page component as props
  };
}
export default SSR;
