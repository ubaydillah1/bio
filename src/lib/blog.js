import { imageUrl } from "./seo";

export const BLOG_REVALIDATE_SECONDS = 3600;

const blogApiBaseUrl =
  process.env.BLOG_API_BASE_URL || process.env.NEXT_PUBLIC_BLOG_API_BASE_URL || "";

const dummyBlogPosts = [
  {
    id: "dummy-1",
    slug: "building-a-portfolio-that-feels-fast",
    title: "Building a Portfolio That Feels Fast",
    excerpt:
      "How I trimmed heavy media, moved expensive assets out of the first load, and kept the portfolio smooth for visitors.",
    coverImage: "/assets/img/orbi-front.webp",
    publishedAt: "2026-07-21T08:00:00.000Z",
    updatedAt: "2026-07-21T08:00:00.000Z",
    tags: ["Performance", "Frontend", "Next.js"],
    readingTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "A portfolio can look polished and still feel slow if the first screen competes with heavy images, autoplay videos, and hydration work. The goal is not only to reduce file size, but to decide what deserves attention first.",
      },
      {
        type: "heading",
        level: 2,
        text: "Start With The First Interaction",
      },
      {
        type: "paragraph",
        text: "The most important improvement was making navigation usable before the rest of the page finished loading. Real links and stable section anchors are small details, but they make the page feel responsive immediately.",
      },
      {
        type: "image",
        src: "/assets/img/straight-deal.webp",
        alt: "Straight Deal portfolio preview",
        caption: "Compressed WebP previews keep the portfolio visual without forcing multi-megabyte downloads.",
      },
      {
        type: "quote",
        text: "Good performance is often less about removing beauty and more about choosing when beauty loads.",
      },
      {
        type: "heading",
        level: 2,
        text: "Use Images For Browsing, Video For Intent",
      },
      {
        type: "paragraph",
        text: "Videos are better reserved for detail pages or deliberate play actions. On the listing page, a lightweight WebP thumbnail gives enough context and protects the initial experience.",
      },
      {
        type: "list",
        items: [
          "Convert large PNG previews into WebP or AVIF.",
          "Use lazy loading for below-the-fold images.",
          "Avoid autoplay video on the homepage.",
          "Keep image containers stable with a fixed aspect ratio.",
        ],
      },
      {
        type: "code",
        code: "const imageBudget = {\n  portfolioPreview: '150-400 KB',\n  heroImage: 'under 200 KB',\n  homepageVideo: 'avoid autoplay',\n};",
      },
      {
        type: "callout",
        title: "CMS note",
        text: "This dummy article uses the same block JSON shape expected from the future backend, so the frontend renderer can be evaluated before the CMS exists.",
      },
    ],
  },
  {
    id: "dummy-2",
    slug: "why-i-like-backend-first-product-work",
    title: "Why I Like Backend-First Product Work",
    excerpt:
      "A short note on why durable APIs, clear data models, and boring reliability make frontend experiences easier to trust.",
    coverImage: "/assets/img/ravine-bg.webp",
    publishedAt: "2026-07-18T09:30:00.000Z",
    updatedAt: "2026-07-18T09:30:00.000Z",
    tags: ["Backend", "Product", "API"],
    readingTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "Backend work shapes the boundaries of a product. A good API makes the interface feel calm because the frontend does not need to guess, patch, or fight inconsistent data.",
      },
      {
        type: "heading",
        level: 2,
        text: "Reliability Is A UX Feature",
      },
      {
        type: "paragraph",
        text: "Users rarely describe reliability as a design detail, but they feel it. A button that works, a payment that updates, and a dashboard that stays in sync all come from systems that respect state.",
      },
      {
        type: "gallery",
        items: [
          {
            src: "/assets/img/stora-bg.webp",
            alt: "Stora storage management preview",
          },
          {
            src: "/assets/img/madura-bg.webp",
            alt: "MaduraKita project preview",
          },
        ],
      },
      {
        type: "paragraph",
        text: "That is why I enjoy building from the data flow outward. When the model is honest, the UI has room to be expressive without becoming fragile.",
      },
    ],
  },
];

function getApiUrl(path) {
  if (!blogApiBaseUrl) return null;

  return new URL(path, blogApiBaseUrl.endsWith("/") ? blogApiBaseUrl : `${blogApiBaseUrl}/`);
}

function unwrapList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.posts)) return payload.posts;
  return [];
}

function unwrapItem(payload) {
  if (!payload) return null;
  return payload.data || payload.item || payload.post || payload;
}

function normalizeTags(tags) {
  if (Array.isArray(tags)) return tags.filter(Boolean).map(String);
  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
}

function normalizeContent(content) {
  if (Array.isArray(content)) return content;
  if (Array.isArray(content?.blocks)) return content.blocks;
  return [];
}

export function normalizeBlogPost(post) {
  if (!post || !post.slug || !post.title) return null;

  return {
    id: post.id || post.slug,
    slug: String(post.slug),
    title: String(post.title),
    excerpt: post.excerpt ? String(post.excerpt) : "",
    coverImage: post.coverImage || post.cover_image || "",
    publishedAt: post.publishedAt || post.published_at || post.createdAt || post.created_at || "",
    updatedAt: post.updatedAt || post.updated_at || post.publishedAt || post.published_at || "",
    tags: normalizeTags(post.tags),
    readingTime: post.readingTime || post.reading_time || "",
    content: normalizeContent(post.content),
  };
}

async function fetchJson(path) {
  const url = getApiUrl(path);
  if (!url) return null;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    });

    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

export async function getBlogPosts() {
  const payload = await fetchJson("blogs");
  const posts = unwrapList(payload).map(normalizeBlogPost).filter(Boolean);

  if (posts.length > 0) return posts;
  return dummyBlogPosts.map(normalizeBlogPost).filter(Boolean);
}

export async function getBlogPost(slug) {
  if (!slug) return null;

  const payload = await fetchJson(`blogs/${encodeURIComponent(slug)}`);
  const post = normalizeBlogPost(unwrapItem(payload));

  if (post) return post;
  return normalizeBlogPost(dummyBlogPosts.find((item) => item.slug === slug));
}

export function getBlogImageUrl(path) {
  return imageUrl(path || "/assets/img/mySelf.webp");
}
