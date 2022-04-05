import type { AppProps, NextWebVitalsMetric } from "next/app";

import { DurationsProvider } from "../state/DurationsProvider";

import "./globalStyles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DurationsProvider>
      <Component {...pageProps} />
    </DurationsProvider>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
//   switch (metric.name) {
//     case "FCP":
//       // handle FCP results
//       // TODO Nice to illustrate fetching benefits on SSR/SSG
//       break;
//     case "LCP":
//       // handle LCP results
//       break;
//     case "CLS":
//       // handle CLS results
//       break;
//     case "FID":
//       // handle FID results
//       break;
//     case "TTFB":
//       // handle TTFB results
//       break;
//     case "Next.js-hydration":
//       // handle hydration results
//       break;
//     case "Next.js-route-change-to-render":
//       // handle route-change to render results
//       break;
//     case "Next.js-render":
//       // handle render results
//       break;
//     default:
//       break;
//   }
// }

export default MyApp;
