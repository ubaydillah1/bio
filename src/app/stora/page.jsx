import Stora from "../../views/Stora";
import StructuredData from "../structured-data";
import {
  breadcrumbJsonLd,
  createMetadata,
  projectJsonLd,
  seoPages,
} from "../../lib/seo";

export const metadata = createMetadata(seoPages.stora);

export default function Page() {
  return (
    <>
      <StructuredData
        data={[projectJsonLd(seoPages.stora), breadcrumbJsonLd(seoPages.stora)]}
      />
      <Stora />
    </>
  );
}
