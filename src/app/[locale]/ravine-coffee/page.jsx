import RavineCoffee from "../../../views/RavineCoffee";
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
    ...seoPages.ravineCoffee,
    path: `/${normalizedLocale}${seoPages.ravineCoffee.path}`,
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const page = {
    ...seoPages.ravineCoffee,
    path: `/${normalizedLocale}${seoPages.ravineCoffee.path}`,
  };

  return (
    <>
      <StructuredData data={[projectJsonLd(page), breadcrumbJsonLd(page)]} />
      <RavineCoffee locale={normalizedLocale} />
    </>
  );
}
