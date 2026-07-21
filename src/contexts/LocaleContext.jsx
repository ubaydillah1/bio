"use client";

import { createContext, useContext } from "react";
import { defaultLocale, getDictionary, localizedPath, normalizeLocale } from "../i18n";

const LocaleContext = createContext({
  locale: defaultLocale,
  t: getDictionary(defaultLocale),
  href: (path) => localizedPath(defaultLocale, path),
});

export function LocaleProvider({ locale = defaultLocale, children }) {
  const normalizedLocale = normalizeLocale(locale);
  const value = {
    locale: normalizedLocale,
    t: getDictionary(normalizedLocale),
    href: (path) => localizedPath(normalizedLocale, path),
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
