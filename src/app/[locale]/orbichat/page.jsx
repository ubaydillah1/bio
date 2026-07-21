import OrbiChat from "../../../views/OrbiChat";
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
    ...seoPages.orbichat,
    path: `/${normalizedLocale}${seoPages.orbichat.path}`,
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const page = {
    ...seoPages.orbichat,
    path: `/${normalizedLocale}${seoPages.orbichat.path}`,
  };

  return (
    <>
      <StructuredData data={[projectJsonLd(page), breadcrumbJsonLd(page)]} />
      <OrbiChat locale={normalizedLocale} />
    </>
  );
}
