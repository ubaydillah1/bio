"use client";

import LocaleSwitcher from "../LocaleSwitcher";
import ThemeIcon from "../ThemeIcon";

export default function SiteControls() {
  return (
    <div className="fixed top-6 right-5 z-[99] flex items-center gap-1.5 sm:right-10 lg:right-20">
      <LocaleSwitcher />
      <ThemeIcon />
    </div>
  );
}
