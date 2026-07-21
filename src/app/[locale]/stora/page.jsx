import Stora from "../../../views/Stora";
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
    ...seoPages.stora,
    path: `/${normalizedLocale}${seoPages.stora.path}`,
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const page = {
    ...seoPages.stora,
    path: `/${normalizedLocale}${seoPages.stora.path}`,
  };

  return (
    <>
      <StructuredData data={[projectJsonLd(page), breadcrumbJsonLd(page)]} />
      <Stora locale={normalizedLocale} />
    </>
  );
}
