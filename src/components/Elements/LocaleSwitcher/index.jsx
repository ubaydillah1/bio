"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, normalizeLocale } from "../../../i18n";
import { useLocale } from "../../../contexts/LocaleContext";

function switchPath(pathname, nextLocale) {
  const segments = pathname.split("/").filter(Boolean);

  if (locales.includes(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const { locale, t } = useLocale();
  const activeLocale = normalizeLocale(locale);

  return (
    <div className="flex items-center gap-2 rounded-full border border-current/20 bg-base-100/60 px-3 py-2 text-xs font-semibold uppercase backdrop-blur">
      <span className="sr-only">{t.common.language}</span>
      {locales.map((item) => (
        <Link
          key={item}
          href={switchPath(pathname, item)}
          className={`transition ${
            item === activeLocale ? "text-primary" : "opacity-60 hover:opacity-100"
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
