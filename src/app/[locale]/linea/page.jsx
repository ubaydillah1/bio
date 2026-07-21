import Linea from "../../../views/Linea";
import StructuredData from "../../structured-data";
import {
  breadcrumbJsonLd,
  createMetadata,
  projectJsonLd,
  seoPages,
} from "../../../lib/seo";
import { normalizeLocale } from "../../../i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  return createMetadata({
    ...seoPages.linea,
    path: `/${normalizedLocale}${seoPages.linea.path}`,
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const page = {
    ...seoPages.linea,
    path: `/${normalizedLocale}${seoPages.linea.path}`,
  };

  return (
    <>
      <StructuredData data={[projectJsonLd(page), breadcrumbJsonLd(page)]} />
      <Linea locale={normalizedLocale} />
    </>
  );
}
