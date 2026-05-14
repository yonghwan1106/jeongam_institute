import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets, type CardAsset } from "@/lib/card-assets";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { allLecturesQuery } from "@/sanity/lib/queries";
import { TRACK_LABEL } from "@/lib/lecture-tracks";

export const metadata = { title: "강의·아카데미" };
export const revalidate = 3600;

const TRACK_ASSET: Record<string, CardAsset> = {
  korean: cardAssets.koreanHistory,
  world: cardAssets.worldHistory,
  special: cardAssets.lecture,
  online: cardAssets.content,
};

const representativeLectures = [
  {
    title: "한국사 아카데미",
    description: "교과서 흐름과 현장 답사를 잇는 시민 강좌를 준비 중입니다.",
    meta: "대표 강의",
    hanja: "韓",
    asset: cardAssets.koreanHistory,
  },
  {
    title: "세계사 아카데미",
    description: "동서 문명의 흐름을 오늘의 질문과 함께 읽는 강좌입니다.",
    meta: "준비 중",
    hanja: "世",
    asset: cardAssets.worldHistory,
  },
  {
    title: "온라인 Zoom 특강",
    description: "멀리 있어도 함께 들을 수 있는 주제별 역사 특강입니다.",
    meta: "대표 활동",
    hanja: "學",
    asset: cardAssets.lecture,
  },
];

type Lecture = {
  _id: string;
  title: string;
  slug: string;
  track: string;
  session?: string;
  schedule?: string;
  instructor?: string;
  venue?: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  applyUrl?: string;
};

export default async function LecturesPage() {
  const items = await sanityFetch<Lecture[]>(allLecturesQuery);

  return (
    <PageShell
      eyebrow="Lectures"
      hanja="學 院"
      title="강의·아카데미"
      description="한국사·세계사 아카데미와 특강. 정기 강좌부터 온라인 Zoom 강의까지."
    >
      {!items || items.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {representativeLectures.map((item) => (
            <VisualCard key={item.title} {...item} imageAspect="aspect-[3/4]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((l) => (
            <Link
              key={l._id}
              href={`/activities/lectures/${l.slug}`}
              className="group bg-hanji-warm border border-paper-line hover:border-dancheong-red transition-all overflow-hidden flex flex-col"
            >
              <div className="aspect-[3/4] bg-ink/5 relative overflow-hidden border-b border-paper-line">
                {l.coverImage?.asset ? (
                  <Image
                    src={urlForImage(l.coverImage).width(800).url()}
                    alt={l.coverImage.alt ?? l.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <Image
                    src={(TRACK_ASSET[l.track] ?? cardAssets.lecture).src}
                    alt={(TRACK_ASSET[l.track] ?? cardAssets.lecture).alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <span className="hanja absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center border border-hanji/50 bg-ink/75 px-2 text-xl text-hanji">
                  學
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[11px] tracking-widest text-dancheong-red mb-2">
                  {TRACK_LABEL[l.track] ?? l.track}{l.session && ` · ${l.session}`}
                </div>
                <h3 className="font-display text-lg font-bold text-ink mb-2 leading-snug group-hover:text-dancheong-red transition-colors">
                  {l.title}
                </h3>
                <div className="mt-auto pt-3 text-xs text-ink-mute space-y-1">
                  {l.schedule && <div>📅 {l.schedule}</div>}
                  {l.venue && <div>📍 {l.venue}</div>}
                  {l.instructor && <div>👤 {l.instructor}</div>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </PageShell>
  );
}
