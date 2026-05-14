import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { PortableText } from "@/components/portable-text";
import { isConfigured } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { pilgrimageBySlugQuery, pilgrimageSlugsQuery } from "@/sanity/lib/queries";
import type { PortableTextBlock } from "@portabletext/types";

export const revalidate = 3600;

type PilgrimageDetail = {
  _id: string;
  title: string;
  date: string;
  location?: string;
  summary?: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  gallery?: { asset: { _ref: string }; alt?: string; caption?: string }[];
  report?: unknown[];
  participantCount?: number;
};

export async function generateStaticParams() {
  if (!isConfigured) return [];
  const slugs = await sanityFetch<string[]>(pilgrimageSlugsQuery);
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await sanityFetch<PilgrimageDetail>(pilgrimageBySlugQuery, { slug });
  if (!item) return { title: "답사" };
  const images = item.coverImage?.asset
    ? [urlForImage(item.coverImage).width(1200).height(630).url()]
    : undefined;
  return {
    title: item.title,
    description: item.summary,
    openGraph: { title: item.title, description: item.summary, images },
  };
}

export default async function PilgrimageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await sanityFetch<PilgrimageDetail>(pilgrimageBySlugQuery, { slug });
  if (!item) notFound();

  const meta = [
    item.date?.slice(0, 10),
    item.location,
    item.participantCount ? `참가 ${item.participantCount}명` : null,
  ].filter(Boolean).join(" · ");

  return (
    <PageShell eyebrow="Pilgrimage" hanja="行 路" title={item.title} description={meta}>
      <article className="mx-auto max-w-4xl">
        {item.coverImage?.asset && (
          <div className="mb-10">
            <Image
              src={urlForImage(item.coverImage).width(1200).url()}
              alt={item.coverImage.alt ?? item.title}
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        )}
        {item.summary && (
          <p className="text-lg text-ink-soft leading-relaxed border-l-2 border-paper-line pl-4 mb-10">
            {item.summary}
          </p>
        )}
        {item.report && <PortableText value={item.report as PortableTextBlock[]} />}

        {item.gallery && item.gallery.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-ink mb-6">현장 사진</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {item.gallery.map((img, i) => (
                <figure key={i} className="bg-hanji border border-paper-line">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={urlForImage(img).width(800).url()}
                      alt={img.alt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="px-3 py-2 text-xs text-ink-mute">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 pt-8 border-t border-paper-line">
          <Link href="/activities/pilgrimage" className="text-sm text-ink-mute hover:text-dancheong-red">
            ← 답사 아카이브로
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
