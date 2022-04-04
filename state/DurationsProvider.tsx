import { createContext, useContext, useState } from "react";

export interface IStore {
  csr: [DOMHighResTimeStamp | undefined, (value?: DOMHighResTimeStamp) => void];
  ssr: [DOMHighResTimeStamp | undefined, (value?: DOMHighResTimeStamp) => void];
  ssg: [DOMHighResTimeStamp | undefined, (value?: DOMHighResTimeStamp) => void];
}

// Create Context object.
const DurationsContext = createContext(undefined);

// Export Provider.
export function DurationsProvider({ children }) {
  const [csrDuration, setCsrDuration] = useState<DOMHighResTimeStamp>();
  const [ssrDuration, setSsrDuration] = useState<DOMHighResTimeStamp>();
  const [ssgDuration, setSsgDuration] = useState<DOMHighResTimeStamp>();

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
