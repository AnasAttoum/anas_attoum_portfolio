import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function ThemeProvider({children}) {
  const [mode, setMode] = useState("light");

  useEffect(()=>{
    const modeInStorage = localStorage.getItem("theme") || "light";
    setMode(modeInStorage)
  },[])

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", mode === "dark" ? "light" : "dark");
  };

  return (
    <Context.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </Context.Provider>
  );
}
