import { getNasaImages } from "../api/nasaAPI";
import { useDurationsContext } from "../state/DurationsProvider";

import styles from "./sharedStyles.module.scss";

const SSG = ({ duration, items }) => {
  const {
    ssg: [ssgDuration, setSsgDuration],
  } = useDurationsContext();

  setSsgDuration(duration);

  return (
    <main className={styles.main}>
      {ssgDuration && <p>{ssgDuration}</p>}
      {items?.map(({ nasa_id, title, src }) => (
        <p>{src}</p>
        // <img className={styles.image} key={nasa_id} src={src} alt={title} />
      ))}
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: { ...(await getNasaImages()) },
  };
}
export default SSG;
