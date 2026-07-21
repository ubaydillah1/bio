import StraightDeal from "../../../views/StraightDeal";
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
    ...seoPages.straightDeal,
    path: `/${normalizedLocale}${seoPages.straightDeal.path}`,
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const page = {
    ...seoPages.straightDeal,
    path: `/${normalizedLocale}${seoPages.straightDeal.path}`,
  };

  return (
    <>
      <StructuredData data={[projectJsonLd(page), breadcrumbJsonLd(page)]} />
      <StraightDeal locale={normalizedLocale} />
    </>
  );
}
