import { absoluteUrl, orderedSeoPages } from "../lib/seo";
import { getBlogPosts } from "../lib/blog";

export const revalidate = 3600;

const lastModified = new Date("2026-07-20");

export default async function sitemap() {
  const blogPosts = await getBlogPosts();
  const staticPages = orderedSeoPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt ? new Date(post.updatedAt) : lastModified,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticPages, ...blogPages];
}
