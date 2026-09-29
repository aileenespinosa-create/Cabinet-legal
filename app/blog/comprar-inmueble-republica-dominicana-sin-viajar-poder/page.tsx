import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { articleMetadata } from "@/lib/blog";
import { articleByKey } from "@/lib/blogArticles";

const article = articleByKey("poder")!;

export const metadata: Metadata = articleMetadata(article, "es");

export default function Page() {
  return <BlogArticle article={article} lang="es" />;
}
