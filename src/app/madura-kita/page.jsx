import MaduraKita from "../../views/MaduraKita";
import StructuredData from "../structured-data";
import {
  breadcrumbJsonLd,
  createMetadata,
  projectJsonLd,
  seoPages,
} from "../../lib/seo";

export const metadata = createMetadata(seoPages.maduraKita);

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          projectJsonLd(seoPages.maduraKita),
          breadcrumbJsonLd(seoPages.maduraKita),
        ]}
      />
      <MaduraKita />
    </>
  );
}
