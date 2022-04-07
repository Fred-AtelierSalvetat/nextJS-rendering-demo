import styles from "./renderpage.module.scss";

import CountUp from "react-countup";

const RenderPage = ({ items, duration }) => {
  return (
    <>
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
      <main className={styles.main}>
        {items &&
          items.map(({ nasa_id, title, thumb, src }) => (
            <div key={nasa_id}>
              <img className={styles.image} src={thumb} alt={title} />
              {/* {src.map(({ href }) => (
                <p>{href}</p>
              ))} */}
            </div>
          ))}
      </main>
    </>
  );
};

export default RenderPage;
