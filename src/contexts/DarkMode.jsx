/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("data-theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (localTheme) {
      return localTheme;
    }

    return prefersDarkScheme.matches ? "black" : "winter";
  });

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
