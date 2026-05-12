import Link from "next/link";
import Image from "next/image";
import { PageShell, ComingSoon } from "@/components/page-shell";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { allGalleryImagesQuery } from "@/sanity/lib/queries";

export const metadata = { title: "사진 갤러리" };
export const revalidate = 60;

type GalleryGroup = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  images: { asset: { _ref: string }; alt?: string; caption?: string }[];
};

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
        <ComingSoon note="답사 글이 발행되면 첨부된 사진이 이곳에 자동으로 모입니다." />
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
