import Link from "next/link";
import Image from "next/image";
import { PageShell, ComingSoon } from "@/components/page-shell";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { allPilgrimagesQuery } from "@/sanity/lib/queries";

export const metadata = { title: "답사 아카이브" };
export const revalidate = 60;

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
        <ComingSoon note="답사 기록이 곧 올라갑니다. /studio 에서 첫 답사 글을 발행해보세요." />
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
                  <div className="flex h-full items-center justify-center">
                    <span className="hanja text-6xl text-ink/20 group-hover:text-dancheong-red transition-colors">行</span>
                  </div>
                )}
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
