import styles from "./sharedStyles.module.scss";
import { getNasaImages } from "../api/nasaAPI";
import { useEffect } from "react";

const SSG = ({ items }) => {
  const renderingStart = global.performance && global.performance?.now();
  useEffect(() => {
    const renderingEnd = global.performance && global.performance?.now();
    console.log(renderingEnd - renderingStart);
  }, [items]);

  return (
    <main className={styles.main}>
      {items?.map(({ nasa_id, title, src }) => (
        <p>{src}</p>
        // <img className={styles.image} key={nasa_id} src={src} alt={title} />
      ))}
    </main>
  );
};

export async function getStaticProps() {
  const items = await getNasaImages();
  return {
    props: { items }, // will be passed to the page component as props
  };
}
export default SSG;
