import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { PortableText } from "@/components/portable-text";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { postBySlugQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

type PostDetail = {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  body?: unknown[];
  sourceUrl?: string;
};

export default async function PressDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<PostDetail>(postBySlugQuery, { slug });
  if (!post) notFound();

  return (
    <PageShell
      eyebrow="Press"
      hanja="報"
      title={post.title}
      description={post.publishedAt?.slice(0, 10)}
    >
      <article className="mx-auto max-w-3xl">
        {post.coverImage?.asset && (
          <div className="mb-10">
            <Image
              src={urlForImage(post.coverImage).width(1600).url()}
              alt={post.coverImage.alt ?? post.title}
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        )}
        {post.excerpt && (
          <p className="text-lg text-ink-soft leading-relaxed border-l-2 border-paper-line pl-4 mb-10">
            {post.excerpt}
          </p>
        )}
        {post.body && <PortableText value={post.body} />}
        {post.sourceUrl && (
          <p className="mt-10 text-sm">
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dancheong-red underline"
            >
              원문 보기 ↗
            </a>
          </p>
        )}
        <div className="mt-16 pt-8 border-t border-paper-line">
          <Link href="/about/press" className="text-sm text-ink-mute hover:text-dancheong-red">
            ← 언론 보도 목록으로
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
