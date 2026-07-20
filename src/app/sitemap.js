import { absoluteUrl, orderedSeoPages } from "../lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-20");

export default function sitemap() {
  return orderedSeoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
