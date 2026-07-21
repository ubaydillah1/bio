import HomePage from "../../views/HomePage";
import StructuredData from "../structured-data";
import {
  createMetadata,
  personJsonLd,
  profilePageJsonLd,
  seoPages,
  websiteJsonLd,
} from "../../lib/seo";
import { getDictionary, normalizeLocale } from "../../i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const t = getDictionary(normalizedLocale);

  return createMetadata({
    ...seoPages.home,
    path: `/${normalizedLocale}`,
    title:
      normalizedLocale === "id"
        ? "Ubay Dillah - Fullstack Web Developer Indonesia"
        : seoPages.home.title,
    description:
      normalizedLocale === "id"
        ? "Portfolio Ubay Dillah, Fullstack Web Developer Indonesia untuk React, Next.js, Node.js, Express, API, dashboard, dan aplikasi AI."
        : seoPages.home.description,
    keywords: [...seoPages.home.keywords, t.common.language],
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return (
    <>
      <StructuredData
        data={[personJsonLd(), websiteJsonLd(), profilePageJsonLd()]}
      />
      <HomePage locale={normalizedLocale} />
    </>
  );
}
