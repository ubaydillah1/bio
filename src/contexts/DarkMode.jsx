"use client";

import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("black");

  useEffect(() => {
    const localTheme = localStorage.getItem("data-theme");

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "winter" ? "black" : "winter"));
  };

  return (
    <DarkModeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeProvider;
