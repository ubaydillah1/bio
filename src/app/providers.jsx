"use client";

import { ReactLenis } from "lenis/react";
import DarkModeProvider from "../contexts/DarkMode";

export default function Providers({ children, initialTheme }) {
  return (
    <ReactLenis root>
      <DarkModeProvider initialTheme={initialTheme}>{children}</DarkModeProvider>
    </ReactLenis>
  );
}
