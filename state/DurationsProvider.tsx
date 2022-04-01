import { createContext, useContext, useState } from "react";

// Create Context object.
const DurationsContext = createContext();

// Export Provider.
export function DurationsProvider({ children }) {
  const [csrDuration, setCsrDuration] = useState();
  const [ssrDuration, setSsrDuration] = useState();
  const [ssgDuration, setSsgDuration] = useState();

  const store = {
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

export function useDurationsContext() {
  return useContext(DurationsContext);
}
