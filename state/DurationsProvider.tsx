import { createContext, useContext, useState } from "react";

// Create Context object.
const DurationsContext = createContext();

export interface IStore {
  csr: [number | undefined, (value?: number) => void];
  ssr: [number | undefined, (value?: number) => void];
  ssg: [number | undefined, (value?: number) => void];
}

// Export Provider.
export function DurationsProvider({ children }) {
  const [csrDuration, setCsrDuration] = useState();
  const [ssrDuration, setSsrDuration] = useState();
  const [ssgDuration, setSsgDuration] = useState();

  const store: IStore = {
    csr: [csrDuration, setCsrDuration],
    ssr: [ssrDuration, setSsrDuration],
    ssg: [ssgDuration, setSsgDuration],
  };

  return (
    <DurationsContext.Provider value={store}>
      {children}
    </DurationsContext.Provider>
  );
}

export function useDurationsContext(): IStore {
  return useContext(DurationsContext);
}
