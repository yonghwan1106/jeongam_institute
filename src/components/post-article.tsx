import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { PortableText } from "@/components/portable-text";
import { urlForImage } from "@/sanity/lib/image";
import type { PortableTextBlock } from "@portabletext/types";
import type { PostDetail } from "@/sanity/types";

export function PostArticle({
  post,
  eyebrow,
  hanja,
  backHref,
  backLabel,
}: {
  post: PostDetail;
  eyebrow: string;
  hanja: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <PageShell
      eyebrow={eyebrow}
      hanja={hanja}
      title={post.title}
      description={post.publishedAt?.slice(0, 10)}
    >
      <article className="mx-auto max-w-3xl">
        {post.coverImage?.asset && (
          <div className="mb-10">
            <Image
              src={urlForImage(post.coverImage).width(1200).url()}
              alt={post.coverImage.alt ?? post.title}
              width={1200}
              height={675}
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
        {post.body && <PortableText value={post.body as PortableTextBlock[]} />}
        {post.sourceUrl && (
          <p className="mt-10 text-sm">
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow ugc"
              className="text-dancheong-red underline"
            >
              원문 보기 ↗
            </a>
          </p>
        )}
        <div className="mt-16 pt-8 border-t border-paper-line">
          <Link href={backHref} className="text-sm text-ink-mute hover:text-dancheong-red">
            ← {backLabel}
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
