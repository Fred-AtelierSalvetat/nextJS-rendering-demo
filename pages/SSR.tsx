import styles from "./sharedStyles.module.scss";
import { getNasaImages } from "../api/nasaAPI";

const SSR = ({ items }) => {
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
