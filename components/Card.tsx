import Link from "next/link";
import CountUp from "react-countup";

import styles from "./card.module.scss";

interface ICard {
  title: string;
  description: string;
  duration?: number;
  linkDesc: string;
  linkHref: string;
}

// Card component presenting rendering solution, test results and launch test button
const Card = ({ title, description, duration, linkDesc, linkHref }: ICard) => {
  return (
    <div className={styles.renderCard}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <div className={styles.measureBox}>
          <p>Collecte des données</p>
          <div className={styles.duration}>
            {duration ? (
              <CountUp start={0} end={~~duration} delay={0} duration={0.5}>
                {({ countUpRef }) => (
                  <p>
                    <span ref={countUpRef} />
                    <span>{` ms`}</span>
                  </p>
                )}
              </CountUp>
            ) : (
              <p>--- ms</p>
            )}
          </div>
        </div>
      </div>
      <Link href={linkHref}>
        <a className={styles.link}>{linkDesc}</a>
      </Link>
    </div>
  );
};

export default Card;
