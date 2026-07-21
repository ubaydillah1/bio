"use client";

import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function normalizeTheme(theme) {
  return theme === "winter" ? "winter" : "black";
}

const DarkModeProvider = ({ children, initialTheme = "black" }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return normalizeTheme(initialTheme);

    return normalizeTheme(
      localStorage.getItem("data-theme") ||
        document.documentElement.getAttribute("data-theme") ||
        initialTheme
    );
  });

  useEffect(() => {
    const syncTheme = () => {
      const savedTheme =
        localStorage.getItem("data-theme") ||
        document.documentElement.getAttribute("data-theme");

      if (!savedTheme) return;

      setTheme((currentTheme) => {
        const normalizedTheme = normalizeTheme(savedTheme);
        return normalizedTheme === currentTheme ? currentTheme : normalizedTheme;
      });

      document.documentElement.setAttribute(
        "data-theme",
        normalizeTheme(savedTheme)
      );
    };

    syncTheme();
    window.addEventListener("pageshow", syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("pageshow", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
    document.cookie = `data-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
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
