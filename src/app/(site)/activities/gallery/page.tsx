import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { allGalleryImagesQuery } from "@/sanity/lib/queries";

export const metadata = { title: "사진 갤러리" };
export const revalidate = 3600;

type GalleryGroup = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  images: { asset: { _ref: string }; alt?: string; caption?: string }[];
};

const representativeGallery = [
  {
    title: "답사 현장",
    description: "현장 사진이 올라오기 전까지 대표 답사 이미지를 보여줍니다.",
    meta: "갤러리 준비 중",
    hanja: "行",
    asset: cardAssets.pilgrimage,
  },
  {
    title: "심곡서원",
    description: "연구원의 출발점인 심곡서원 사진을 대표 이미지로 둡니다.",
    meta: "대표 장소",
    hanja: "院",
    asset: cardAssets.simgok,
  },
  {
    title: "강의 기록",
    description: "아카데미와 특강 현장 기록이 이곳에 모입니다.",
    meta: "대표 활동",
    hanja: "學",
    asset: cardAssets.lecture,
  },
  {
    title: "자료 아카이브",
    description: "답사 후기와 인물 연구 자료를 함께 큐레이션합니다.",
    meta: "준비 중",
    hanja: "記",
    asset: cardAssets.content,
  },
];

export default async function GalleryPage() {
  const groups = await sanityFetch<GalleryGroup[]>(allGalleryImagesQuery);

  const flat = (groups ?? []).flatMap((g) =>
    (g.images ?? []).map((img, i) => ({
      key: `${g._id}-${i}`,
      img,
      source: g,
    }))
  );

  return (
    <PageShell
      eyebrow="Gallery"
      hanja="影 像"
      title="사진 갤러리"
      description="답사 현장에서 담은 사진을 한자리에 모았습니다."
    >
      {flat.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {representativeGallery.map((item) => (
            <VisualCard key={item.title} {...item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {flat.map(({ key, img, source }) => (
            <Link
              key={key}
              href={`/activities/pilgrimage/${source.slug}`}
              className="group relative aspect-square bg-hanji border border-paper-line overflow-hidden block"
              title={`${source.title} · ${source.date?.slice(0, 10) ?? ""}`}
            >
              <Image
                src={urlForImage(img).width(600).height(600).url()}
                alt={img.alt ?? source.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                <div className="text-hanji">
                  <div className="text-[10px] tracking-widest text-hanji/70">{source.date?.slice(0, 10)}</div>
                  <div className="font-display text-sm font-bold leading-tight line-clamp-2">{source.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </PageShell>
  );
}
