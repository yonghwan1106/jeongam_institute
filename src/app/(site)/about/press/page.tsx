import Link from "next/link";
import { PageShell, ComingSoon } from "@/components/page-shell";
import { cardAssets } from "@/lib/card-assets";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsByCategoryQuery } from "@/sanity/lib/queries";

export const metadata = { title: "언론 보도" };
export const revalidate = 3600;

type Row = { _id: string; title: string; slug: string; excerpt?: string; publishedAt: string };

export default async function PressPage() {
  const posts = await sanityFetch<Row[]>(allPostsByCategoryQuery, { category: "press" });
  return (
    <PageShell
      eyebrow="Press"
      hanja="報"
      title="언론 보도"
      description="조광조 역사연구원이 언론에 소개된 기록을 모은 곳입니다."
    >
      {!posts || posts.length === 0 ? (
        <ComingSoon note="아직 등록된 언론 보도가 없습니다." asset={cardAssets.content} hanja="報" />
      ) : (
        <ul className="mx-auto max-w-3xl divide-y divide-paper-line border-y border-paper-line bg-hanji-warm">
          {posts.map((p) => (
            <li key={p._id}>
              <Link
                href={`/about/press/${p.slug}`}
                className="group flex flex-col gap-1 p-6 hover:bg-hanji-deep transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-dancheong-red transition-colors">
                    {p.title}
                  </h3>
                  <time className="shrink-0 text-xs text-ink-mute tabular-nums">{p.publishedAt?.slice(0, 10)}</time>
                </div>
                {p.excerpt && <p className="text-sm text-ink-mute line-clamp-2">{p.excerpt}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
