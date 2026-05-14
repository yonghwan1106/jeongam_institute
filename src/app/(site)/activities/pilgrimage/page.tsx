import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { allPilgrimagesQuery } from "@/sanity/lib/queries";

export const metadata = { title: "답사 아카이브" };
export const revalidate = 3600;

type Pilgrimage = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  location?: string;
  summary?: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
  photoCount?: number;
};

const representativePilgrimages = [
  {
    title: "심곡서원 답사",
    description: "정암 조광조 선생을 배향한 연구원의 첫 현장입니다.",
    meta: "대표 답사",
    hanja: "院",
    asset: cardAssets.simgok,
  },
  {
    title: "사림 유적 답사",
    description: "정몽주·조광조로 이어지는 사림의 길을 걷는 프로그램입니다.",
    meta: "준비 중",
    hanja: "行",
    asset: cardAssets.pilgrimage,
  },
  {
    title: "충렬서원 연계 답사",
    description: "용인과 인근 역사 현장을 묶어 시민 답사 코스로 준비합니다.",
    meta: "대표 활동",
    hanja: "忠",
    asset: cardAssets.chungnyeol,
  },
];

export default async function PilgrimagePage() {
  const items = await sanityFetch<Pilgrimage[]>(allPilgrimagesQuery);

  return (
    <PageShell
      eyebrow="Pilgrimage"
      hanja="行 路"
      title="답사 아카이브"
      description="발로 만나는 역사. 심곡서원·서산·예산 등 정기 답사의 기록을 모았습니다."
    >
      {!items || items.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {representativePilgrimages.map((item) => (
            <VisualCard key={item.title} {...item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <Link
              key={p._id}
              href={`/activities/pilgrimage/${p.slug}`}
              className="group bg-hanji-warm border border-paper-line hover:border-dancheong-red transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] bg-ink/5 relative overflow-hidden border-b border-paper-line">
                {p.coverImage?.asset ? (
                  <Image
                    src={urlForImage(p.coverImage).width(800).url()}
                    alt={p.coverImage.alt ?? p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <Image
                    src={cardAssets.pilgrimage.src}
                    alt={cardAssets.pilgrimage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <span className="hanja absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center border border-hanji/50 bg-ink/75 px-2 text-xl text-hanji">
                  行
                </span>
              </div>
              <div className="p-5">
                <div className="text-[11px] tracking-widest text-dancheong-red mb-2">
                  {p.date?.slice(0, 10)}{p.location && ` · ${p.location}`}
                </div>
                <h3 className="font-display text-lg font-bold text-ink mb-2 leading-snug group-hover:text-dancheong-red transition-colors">
                  {p.title}
                </h3>
                {p.summary && <p className="text-sm text-ink-mute line-clamp-2">{p.summary}</p>}
                {p.photoCount ? (
                  <div className="mt-3 text-xs text-ink-mute">사진 {p.photoCount}장</div>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      )}
    </PageShell>
  );
}
