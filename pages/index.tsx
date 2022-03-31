import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const App: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <title>Next.js demonstrateur: CSR vs SSR vs SSG</title> */}
      <h1>Pourquoi Next.js?</h1>
      <p>
        {" "}
        Notamment parce qu'il facilite le serveur side rendering (<i>SSR</i>)
      </p>
      <p>Une petite démo?</p>
      <p>
        Un cas simple, nous allons aller interroger une API de la NASA pour
        ramener toutes les images concernant la lune.
      </p>
      <div className="renderBox">
        <Link href="/CSR">
          <a>CSR</a>
        </Link>
        <Link href="/SSR">
          <a>SSR</a>
        </Link>
        <Link href="/SSG">
          <a>SSG</a>
        </Link>
      </div>
      <style jsx global>
        {`
          body {
            background: black;
            color: white;
          }
          .renderBox {
            display: flex;
            justify-content: center;
            gap: 2em;
          }
          a {
            display: block;
          }
        `}
      </style>
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
