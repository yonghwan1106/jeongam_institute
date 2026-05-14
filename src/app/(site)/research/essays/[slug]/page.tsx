import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/post-article";
import { isConfigured } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { postBySlugQuery, postSlugsByCategoryQuery } from "@/sanity/lib/queries";
import type { PostDetail } from "@/sanity/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  if (!isConfigured) return [];
  const slugs = await sanityFetch<string[]>(postSlugsByCategoryQuery, { category: "essay" });
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<PostDetail>(postBySlugQuery, { slug, category: "essay" });
  if (!post) return { title: "에세이" };
  const images = post.coverImage?.asset
    ? [urlForImage(post.coverImage).width(1200).height(630).url()]
    : undefined;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images },
  };
}

export default async function EssayDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<PostDetail>(postBySlugQuery, { slug, category: "essay" });
  if (!post) notFound();
  return (
    <PostArticle
      post={post}
      eyebrow="Essay"
      hanja="文"
      backHref="/research/essays"
      backLabel="에세이 목록으로"
    />
  );
}
