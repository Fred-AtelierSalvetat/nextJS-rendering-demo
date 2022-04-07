import type { NextPage } from "next";
import Head from "next/head";

import { useDurationsContext } from "../state/DurationsProvider";
import styles from "./index.module.scss";

import Card from "../components/Card";

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
        <Card
          title="Client Side Rendering"
          description="Le client se charge de la collecte des données et du rendu de la page."
          duration={csrDuration}
          linkDesc="CSR test"
          linkHref="/CSR"
        />
        <Card
          title="Server Side Rendering"
          description="Le serveur collecte les donnée et effectue un pré-rendu des pages."
          duration={ssrDuration}
          linkDesc="SSR test"
          linkHref="/SSR"
        />
        <Card
          title="Static Site Generation"
          description="Tout est préparé en amont sur le serveur lors de la compilation."
          duration={ssgDuration}
          linkDesc="SSG test"
          linkHref="/SSG"
        />
      </div>
    </>
  );
};
export default App;
