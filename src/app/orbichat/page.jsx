import OrbiChat from "../../views/OrbiChat";
import StructuredData from "../structured-data";
import {
  breadcrumbJsonLd,
  createMetadata,
  projectJsonLd,
  seoPages,
} from "../../lib/seo";

export const metadata = createMetadata(seoPages.orbichat);

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          projectJsonLd(seoPages.orbichat),
          breadcrumbJsonLd(seoPages.orbichat),
        ]}
      />
      <OrbiChat />
    </>
  );
}
