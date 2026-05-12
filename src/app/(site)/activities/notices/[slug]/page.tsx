import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "next-sanity";
import { PageShell } from "@/components/page-shell";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

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

const postBySlugQuery = /* groq */ `
  *[_type == "post" && slug.current == $slug][0]{
    _id, title, excerpt, publishedAt, coverImage, body, sourceUrl
  }
`;

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const src = urlForImage(value).width(1200).url();
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt ?? ""}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-ink-mute">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => <h2 className="font-display text-3xl font-bold text-ink mt-10 mb-4">{children}</h2>,
    h2: ({ children }) => <h3 className="font-display text-2xl font-bold text-ink mt-8 mb-3">{children}</h3>,
    h3: ({ children }) => <h4 className="font-display text-xl font-bold text-ink mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-dancheong-red pl-4 italic text-ink-soft">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="text-ink-soft leading-relaxed my-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-dancheong-red underline">
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="text-ink font-bold">{children}</strong>,
  },
};

export default async function NoticeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await sanityFetch<PostDetail>(postBySlugQuery, { slug });
  if (!post) notFound();

  return (
    <PageShell
      eyebrow="Notice"
      hanja="告 示"
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
        {post.body && <PortableText value={post.body as never} components={components} />}
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
          <Link
            href="/activities/notices"
            className="text-sm text-ink-mute hover:text-dancheong-red"
          >
            ← 공지사항 목록으로
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
