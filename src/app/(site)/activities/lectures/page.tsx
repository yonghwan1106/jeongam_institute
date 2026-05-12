import Link from "next/link";
import Image from "next/image";
import { PageShell, ComingSoon } from "@/components/page-shell";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { allLecturesQuery } from "@/sanity/lib/queries";

export const metadata = { title: "강의·아카데미" };
export const revalidate = 60;

const TRACK_LABEL: Record<string, string> = {
  korean: "한국사 아카데미",
  world: "세계사 아카데미",
  special: "특강",
  online: "온라인 (Zoom)",
};

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
        <ComingSoon note="강의 공지가 곧 등록됩니다. 카페에서 모집 안내를 먼저 확인하세요." />
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
                  <div className="flex h-full items-center justify-center">
                    <span className="hanja text-6xl text-ink/20 group-hover:text-dancheong-red transition-colors">學</span>
                  </div>
                )}
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
