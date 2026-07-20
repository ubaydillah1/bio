import StraightDeal from "../../views/StraightDeal";
import StructuredData from "../structured-data";
import {
  breadcrumbJsonLd,
  createMetadata,
  projectJsonLd,
  seoPages,
} from "../../lib/seo";

export const metadata = createMetadata(seoPages.straightDeal);

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          projectJsonLd(seoPages.straightDeal),
          breadcrumbJsonLd(seoPages.straightDeal),
        ]}
      />
      <StraightDeal />
    </>
  );
}
