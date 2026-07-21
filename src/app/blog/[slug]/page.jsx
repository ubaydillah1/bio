import { redirect } from "next/navigation";

export default async function BlogDetailRedirect({ params }) {
  const { slug } = await params;
  redirect(`/en/blog/${slug}`);
}
