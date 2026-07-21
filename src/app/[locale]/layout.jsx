import { notFound } from "next/navigation";
import { LocaleProvider } from "../../contexts/LocaleContext";
import { isLocale } from "../../i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return <LocaleProvider locale={locale}>{children}</LocaleProvider>;
}
