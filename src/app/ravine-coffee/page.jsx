import RavineCoffee from "../../views/RavineCoffee";
import StructuredData from "../structured-data";
import {
  breadcrumbJsonLd,
  createMetadata,
  projectJsonLd,
  seoPages,
} from "../../lib/seo";

export const metadata = createMetadata(seoPages.ravineCoffee);

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          projectJsonLd(seoPages.ravineCoffee),
          breadcrumbJsonLd(seoPages.ravineCoffee),
        ]}
      />
      <RavineCoffee />
    </>
  );
}
