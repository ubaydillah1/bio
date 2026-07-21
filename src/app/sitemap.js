import { absoluteUrl, orderedSeoPages } from "../lib/seo";
import { getBlogPosts } from "../lib/blog";
import { locales, localizedPath } from "../i18n";

export const revalidate = 3600;

const lastModified = new Date("2026-07-20");

export default async function sitemap() {
  const blogPosts = await getBlogPosts();
  const staticPages = locales.flatMap((locale) =>
    orderedSeoPages.map((page) => ({
      url: absoluteUrl(localizedPath(locale, page.path)),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  const blogPages = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: absoluteUrl(localizedPath(locale, `/blog/${post.slug}`)),
      lastModified: post.updatedAt ? new Date(post.updatedAt) : lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    }))
  );

  return [...staticPages, ...blogPages];
}
