import { getNasaImages } from "../api/nasaAPI";
import { useDurationsContext } from "../state/DurationsProvider";

import styles from "./sharedStyles.module.scss";

const SSR = ({ duration, items }) => {
  const {
    ssr: [ssrDuration, setSsrDuration],
  } = useDurationsContext();

  setSsrDuration(duration);

  return (
    <main className={styles.main}>
      {ssrDuration && <p>{ssrDuration}</p>}
      {items?.map(({ nasa_id, title, src }) => (
        <p>{src}</p>
        // <img className={styles.image} key={nasa_id} src={src} alt={title} />
      ))}
    </main>
  );
};

export async function getServerSideProps() {
  return {
    props: { ...(await getNasaImages()) },
  };
}
export default SSR;
