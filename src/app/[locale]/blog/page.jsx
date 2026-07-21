import BlogListPage from "../../../views/BlogListPage";
import { createMetadata, seoPages } from "../../../lib/seo";
import { normalizeLocale } from "../../../i18n";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const normalizedLocale = normalizeLocale(locale);

  return createMetadata({
    ...seoPages.blog,
    path: `/${normalizedLocale}${seoPages.blog.path}`,
    title:
      normalizedLocale === "id" ? "Blog - Ubay Dillah" : seoPages.blog.title,
    description:
      normalizedLocale === "id"
        ? "Catatan teknis, pembelajaran, dan cerita engineering dari Ubay Dillah tentang web development, backend, frontend, dan AI."
        : seoPages.blog.description,
  });
}

export default async function Page({ params }) {
  const { locale } = await params;
  return <BlogListPage locale={normalizeLocale(locale)} />;
}
