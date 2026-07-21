import Link from "next/link";
import StructuredData from "../app/structured-data";
import { getBlogImageUrl, getBlogPosts } from "../lib/blog";
import { blogJsonLd } from "../lib/seo";
import { getDictionary, localizedPath, normalizeLocale } from "../i18n";

function formatDate(value) {
  if (!value) return "Unpublished";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogListPage({ locale = "en" }) {
  const normalizedLocale = normalizeLocale(locale);
  const t = getDictionary(normalizedLocale);
  const posts = await getBlogPosts();

  return (
    <>
      <StructuredData data={blogJsonLd(normalizedLocale)} />
      <main className="font-blog-sans mx-auto flex min-h-screen w-full max-w-[1060px] flex-col px-5 py-12 sm:px-8 lg:py-16">
        <Link
          href={localizedPath(normalizedLocale, "/")}
          className="mb-10 w-fit text-sm font-medium text-base-content/60 transition hover:text-primary"
        >
          {t.common.back}
        </Link>

        <header className="mb-12 max-w-[760px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Blog
          </p>
          <h1 className="text-[42px] font-semibold leading-tight text-base-content sm:text-[56px]">
            {normalizedLocale === "id"
              ? "Catatan tentang membangun software yang berguna."
              : "Notes on building useful software."}
          </h1>
          <p className="font-blog-serif mt-5 text-[20px] leading-8 text-base-content/70">
            {normalizedLocale === "id"
              ? "Tulisan teknis, catatan project, dan pembelajaran engineering dari sistem yang saya bangun di backend, frontend, dan produk AI."
              : "Technical writing, project notes, and engineering lessons from the systems I build across backend, frontend, and AI products."}
          </p>
        </header>

        {posts.length === 0 ? (
          <section className="rounded-2xl border border-base-300 bg-base-200/45 p-8">
            <h2 className="text-2xl font-semibold text-base-content">
              {normalizedLocale === "id"
                ? "Artikel blog akan segera hadir."
                : "Blog posts are coming soon."}
            </h2>
            <p className="mt-3 max-w-[620px] text-base-content/65">
              {normalizedLocale === "id"
                ? "Halaman blog sudah siap membaca data dari backend API. Artikel published akan tampil di sini setelah API mengirim data dari CMS."
                : "The blog is ready to read from the backend API. Published articles will appear here once the API returns data from the CMS."}
            </p>
          </section>
        ) : (
          <section className="grid gap-7">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100/55 transition hover:border-primary/50"
              >
                <Link
                  href={localizedPath(normalizedLocale, `/blog/${post.slug}`)}
                  className="grid gap-0 md:grid-cols-[280px_1fr]"
                >
                  <div className="aspect-video bg-base-200 md:aspect-auto">
                    <img
                      src={getBlogImageUrl(post.coverImage)}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-base-content/50">
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.readingTime && <span>{post.readingTime}</span>}
                    </div>

                    <h2 className="text-2xl font-semibold text-base-content transition group-hover:text-primary">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="font-blog-serif mt-3 text-[18px] leading-7 text-base-content/70">
                        {post.excerpt}
                      </p>
                    )}

                    {post.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
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
                  </div>
                </Link>
              </article>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
