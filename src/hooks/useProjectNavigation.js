"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { useLocale } from "../contexts/LocaleContext";

export function useProjectNavigation(theme) {
  const router = useRouter();
  const lenis = useLenis();
  const { href } = useLocale();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      lenis?.scrollTo(0, { immediate: true });
    };

    const frame = requestAnimationFrame(scrollToTop);
    return () => cancelAnimationFrame(frame);
  }, [lenis]);

  const backToPortfolio = () => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
    document.cookie = `data-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(href("/"), { scroll: false });
  };

  return { backToPortfolio };
}
