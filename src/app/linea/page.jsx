import Linea from "../../views/Linea";
import StructuredData from "../structured-data";
import {
  breadcrumbJsonLd,
  createMetadata,
  projectJsonLd,
  seoPages,
} from "../../lib/seo";

export const metadata = createMetadata(seoPages.linea);

export default function Page() {
  return (
    <>
      <StructuredData
        data={[projectJsonLd(seoPages.linea), breadcrumbJsonLd(seoPages.linea)]}
      />
      <Linea />
    </>
  );
}
