import { createContext, useContext, useState } from "react";

export const API = "API url here";
const ApiContext = createContext();

export function ApiProvider({ children }) {
  const value = {};
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

// custom hook
export function useApi() {
  const context = useContext(ApiContext);
  if (!context) throw Error("useApi must be used within ApiProvider");
  return context;
}
