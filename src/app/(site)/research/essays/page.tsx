import Link from "next/link";
import { PageShell, ComingSoon } from "@/components/page-shell";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsByCategoryQuery } from "@/sanity/lib/queries";

export const metadata = { title: "역사에 풍덩 빠지다" };
export const revalidate = 60;

type Row = { _id: string; title: string; slug: string; excerpt?: string; publishedAt: string };

export default async function EssaysPage() {
  const posts = await sanityFetch<Row[]>(allPostsByCategoryQuery, { category: "essay" });
  return (
    <PageShell
      eyebrow="Essays"
      hanja="文"
      title="역사에 풍덩 빠지다"
      description="역사 속 이야기를 풀어내는 에세이와 칼럼을 모은 곳입니다."
    >
      {!posts || posts.length === 0 ? (
        <ComingSoon note="에세이가 곧 올라옵니다. /studio 에서 '에세이' 분류로 글을 발행해주세요." />
      ) : (
        <ul className="mx-auto max-w-3xl divide-y divide-paper-line border-y border-paper-line bg-hanji-warm">
          {posts.map((p) => (
            <li key={p._id}>
              <Link
                href={`/research/essays/${p.slug}`}
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
