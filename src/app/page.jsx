import HomePage from "../views/HomePage";
import StructuredData from "./structured-data";
import {
  createMetadata,
  personJsonLd,
  profilePageJsonLd,
  seoPages,
  websiteJsonLd,
} from "../lib/seo";

export const metadata = createMetadata(seoPages.home);

export default function Page() {
  return (
    <>
      <StructuredData
        data={[personJsonLd(), websiteJsonLd(), profilePageJsonLd()]}
      />
      <HomePage />
    </>
  );
}
