import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { PortableText } from "@/components/portable-text";
import { isConfigured } from "@/sanity/env";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { lectureBySlugQuery, lectureSlugsQuery } from "@/sanity/lib/queries";
import { TRACK_LABEL } from "@/lib/lecture-tracks";
import type { PortableTextBlock } from "@portabletext/types";

export const revalidate = 3600;

type LectureDetail = {
  _id: string;
  title: string;
  track: string;
  session?: string;
  schedule?: string;
  instructor?: string;
  venue?: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  description?: unknown[];
  videoUrl?: string;
  applyUrl?: string;
};

export async function generateStaticParams() {
  if (!isConfigured) return [];
  const slugs = await sanityFetch<string[]>(lectureSlugsQuery);
  return (slugs ?? []).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = await sanityFetch<LectureDetail>(lectureBySlugQuery, { slug });
  if (!l) return { title: "강의" };
  const images = l.coverImage?.asset
    ? [urlForImage(l.coverImage).width(1200).height(630).url()]
    : undefined;
  const description = [TRACK_LABEL[l.track] ?? l.track, l.session, l.schedule]
    .filter(Boolean)
    .join(" · ");
  return {
    title: l.title,
    description,
    openGraph: { title: l.title, description, images },
  };
}

export default async function LectureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = await sanityFetch<LectureDetail>(lectureBySlugQuery, { slug });
  if (!l) notFound();

  return (
    <PageShell
      eyebrow="Lecture"
      hanja="學"
      title={l.title}
      description={[TRACK_LABEL[l.track] ?? l.track, l.session, l.schedule].filter(Boolean).join(" · ")}
    >
      <article className="mx-auto max-w-3xl">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 mb-10 items-start">
          {l.coverImage?.asset && (
            <div className="bg-hanji border border-paper-line">
              <Image
                src={urlForImage(l.coverImage).width(800).url()}
                alt={l.coverImage.alt ?? l.title}
                width={800}
                height={1067}
                className="w-full h-auto"
                priority
              />
            </div>
          )}
          <div className="bg-hanji-warm border border-paper-line p-6 space-y-3 text-sm">
            <InfoRow label="트랙" value={TRACK_LABEL[l.track] ?? l.track} />
            <InfoRow label="회차" value={l.session} />
            <InfoRow label="일정" value={l.schedule} />
            <InfoRow label="장소" value={l.venue} />
            <InfoRow label="강사" value={l.instructor} />
            {l.applyUrl && (
              <div className="pt-3">
                <a
                  href={l.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow ugc"
                  className="block w-full text-center rounded-sm bg-dancheong-red px-5 py-3 font-medium text-hanji-warm hover:bg-ink transition-colors"
                >
                  신청하기 ↗
                </a>
              </div>
            )}
            {l.videoUrl && (
              <a
                href={l.videoUrl}
                target="_blank"
                rel="noopener noreferrer nofollow ugc"
                className="block w-full text-center rounded-sm border border-ink px-5 py-3 font-medium text-ink hover:bg-ink hover:text-hanji-warm transition-colors"
              >
                ▶ 영상 보기
              </a>
            )}
          </div>
        </div>

        {l.description && <PortableText value={l.description as PortableTextBlock[]} />}

        <div className="mt-16 pt-8 border-t border-paper-line">
          <Link href="/activities/lectures" className="text-sm text-ink-mute hover:text-dancheong-red">
            ← 강의 목록으로
          </Link>
        </div>
      </article>
    </PageShell>
  );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-3 border-b border-paper-line/60 pb-2 last:border-0">
      <div className="w-16 shrink-0 text-ink-mute">{label}</div>
      <div className="text-ink font-medium">{value}</div>
    </div>
  );
}

