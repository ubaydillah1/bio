"use client";

import { ReactLenis } from "lenis/react";
import DarkModeProvider from "../contexts/DarkMode";

export default function Providers({ children }) {
  return (
    <ReactLenis root>
      <DarkModeProvider>{children}</DarkModeProvider>
    </ReactLenis>
  );
}
