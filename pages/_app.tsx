import type { AppProps, NextWebVitalsMetric } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
  switch (metric.name) {
    case "FCP":
      // handle FCP results
      break;
    case "LCP":
      // handle LCP results
      break;
    case "CLS":
      // handle CLS results
      break;
    case "FID":
      // handle FID results
      break;
    case "TTFB":
      // handle TTFB results
      break;
    case "Next.js-hydration":
      // handle hydration results
      console.log(metric);
      break;
    case "Next.js-route-change-to-render":
      // handle route-change to render results
      console.log(metric);
      break;
    case "Next.js-render":
      // handle render results
      console.log(metric);
      break;
    default:
      break;
  }
}

export default MyApp;
