import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useDurationsContext } from "../state/DurationsProvider";
import styles from "./index.module.scss";

const App: NextPage = () => {
  const {
    csr: [csrDuration],
    ssr: [ssrDuration],
    ssg: [ssgDuration],
  } = useDurationsContext();

  return (
    <>
      {/* <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <title>Next.js demonstrateur: CSR vs SSR vs SSG</title> */}
      <h1>Pourquoi Next.js?</h1>
      <p>
        {
          "Notamment parce qu'il facilite le serveur side rendering.\nCette technique permet d'effectuer certaines tâches que la collecte d'information sur le serveur et non sur le device client comme c'est la cas avec du \"simple\" React."
        }
      </p>
      <p>Une petite expérience?</p>
      <p>
        Un cas simple: nous allons aller interroger des API de la NASA pour
        ramener quelques images et inforamtions concernant la lune.
      </p>

      <div className={styles.renderBox}>
        <div className={styles.renderCard}>
          <h2>Client Side Rendering</h2>
          <p>
            Le client se charge de la collecte des données et du rendu de la
            page.
          </p>
          <div>
            <div className={styles.measureBox}>
              <p>Collecte des données</p>
              <div className={styles.duration}>
                {csrDuration ? <p>{`${~~csrDuration} ms`}</p> : <p>--- ms</p>}
              </div>
            </div>
          </div>
          <Link href="/CSR">
            <a className={styles.link}>CSR test</a>
          </Link>
        </div>
        <div className={styles.renderCard}>
          <h2>Server Side Rendering</h2>
          <p>
            Le serveur collecte les donnée et effectue un pré-rendu des pages.
          </p>
          <div>
            <div className={styles.measureBox}>
              <p>Collecte des données</p>
              <div className={styles.duration}>
                {ssrDuration ? <p>{`${~~ssrDuration} ms`}</p> : <p>--- ms</p>}
              </div>
            </div>
          </div>
          <Link href="/SSR">
            <a className={styles.link}>SSR test</a>
          </Link>
        </div>
        <div className={styles.renderCard}>
          <h2>Static Site Generation</h2>
          <p>
            Tout est préparé en amont sur le serveur lors de la compilation.
          </p>
          <div>
            <div className={styles.measureBox}>
              <p>Collecte des données</p>
              <div className={styles.duration}>
                {ssgDuration !== undefined ? (
                  <p>{`${~~ssgDuration} ms`}</p>
                ) : (
                  <p>--- ms</p>
                )}
              </div>
            </div>
          </div>
          <Link href="/SSG">
            <a className={styles.link}>SSG test</a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default App;

// {/* A quoi ça sert? A optimiser les performances.
//
//

// 3 cartes
//     CSR : client <-> API
//     SSR : client <-> Server <-> API
//     SSG : client <-> Server [prerender <-> API]

// A noter que Next.js propose d'autres optimisation et facilite beaucoup le travail des développeurs.
// Vous avez une web app React pas vraiment réactive, ce n'était pas le but non? Contactez-moi ;-) */}
