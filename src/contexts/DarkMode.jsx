"use client";

import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function normalizeTheme(theme) {
  return theme === "black" ? "black" : "winter";
}

function applyTheme(theme) {
  const normalizedTheme = normalizeTheme(theme);
  document.documentElement.setAttribute("data-theme", normalizedTheme);
  localStorage.setItem("data-theme", normalizedTheme);
  document.cookie = `data-theme=${normalizedTheme}; path=/; max-age=31536000; SameSite=Lax`;
}

const DarkModeProvider = ({ children, initialTheme = "winter" }) => {
  const [theme, setTheme] = useState(normalizeTheme(initialTheme));

  useEffect(() => {
    const syncThemeAcrossTabs = (event) => {
      if (event.key === "data-theme" && event.newValue) {
        setTheme(normalizeTheme(event.newValue));
      }
    };

    window.addEventListener("storage", syncThemeAcrossTabs);

    return () => {
      window.removeEventListener("storage", syncThemeAcrossTabs);
    };
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "winter" ? "black" : "winter";
      applyTheme(nextTheme);
      return nextTheme;
    });
  };

  return (
    <DarkModeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeProvider;
