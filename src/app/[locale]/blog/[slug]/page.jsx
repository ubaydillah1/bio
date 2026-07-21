import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContentRenderer from "../../../../components/Layouts/BlogContentRenderer";
import StructuredData from "../../../structured-data";
import {
  getBlogImageUrl,
  getBlogPost,
  getBlogPosts,
} from "../../../../lib/blog";
import {
  blogPostJsonLd,
  breadcrumbJsonLd,
  imageUrl,
  siteConfig,
} from "../../../../lib/seo";
import { localizedPath, normalizeLocale } from "../../../../i18n";

export const revalidate = 3600;
export const dynamicParams = true;

function formatDate(value) {
  if (!value) return null;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return ["en", "id"].flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog post not found | Portfolio Ubay Dillah",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = localizedPath(normalizedLocale, `/blog/${post.slug}`);
  const postImage = imageUrl(post.coverImage);

  return {
    title: `${post.title} | Blog Ubay Dillah`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: `/en/blog/${post.slug}`,
        id: `/id/blog/${post.slug}`,
      },
    },
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: normalizedLocale === "id" ? "id_ID" : "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [{ url: postImage, alt: post.title }],
      creator: "@ubaydillah1",
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { locale, slug } = await params;
  const normalizedLocale = normalizeLocale(locale);
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const publishedAt = formatDate(post.publishedAt);
  const updatedAt = formatDate(post.updatedAt);

  return (
    <>
      <StructuredData
        data={[
          blogPostJsonLd(post),
          breadcrumbJsonLd({
            path: localizedPath(normalizedLocale, `/blog/${post.slug}`),
            title: post.title,
            description: post.excerpt,
            image: post.coverImage,
          }),
        ]}
      />

      <main className="font-blog-sans mx-auto min-h-screen w-full max-w-[920px] px-5 py-12 sm:px-8 lg:py-16">
        <Link
          href={localizedPath(normalizedLocale, "/blog")}
          className="mb-10 inline-flex text-sm font-medium text-base-content/60 transition hover:text-primary"
        >
          {normalizedLocale === "id" ? "Kembali ke blog" : "Back to blog"}
        </Link>

        <article>
          <header className="mb-10">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-base-content/50">
              {publishedAt && <span>{publishedAt}</span>}
              {post.readingTime && <span>{post.readingTime}</span>}
              {updatedAt && updatedAt !== publishedAt && (
                <span>
                  {normalizedLocale === "id" ? "Diperbarui" : "Updated"}{" "}
                  {updatedAt}
                </span>
              )}
            </div>

            <h1 className="text-[42px] font-semibold leading-tight text-base-content sm:text-[58px]">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="font-blog-serif mt-6 text-[22px] leading-9 text-base-content/70">
                {post.excerpt}
              </p>
            )}

            {post.tags.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-base-300 px-3 py-1 text-xs text-base-content/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <img
            src={getBlogImageUrl(post.coverImage)}
            alt={post.title}
            fetchPriority="high"
            decoding="async"
            className="mb-12 aspect-video w-full rounded-2xl object-cover bg-base-200"
          />

          <BlogContentRenderer blocks={post.content} />
        </article>
      </main>
    </>
  );
}
