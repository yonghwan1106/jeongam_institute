import Link from "next/link";
import { PageShell, ComingSoon } from "@/components/page-shell";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allPostsByCategoryQuery } from "@/sanity/lib/queries";

export const metadata = { title: "공지사항" };
export const revalidate = 60;

type PostRow = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
};

export default async function NoticesPage() {
  const posts = await sanityFetch<PostRow[]>(allPostsByCategoryQuery, { category: "notice" });
  return (
    <PageShell
      eyebrow="Notices"
      hanja="告 示"
      title="공지사항"
      description="조광조 역사연구원의 공식 공지를 모은 곳입니다."
    >
      {!posts || posts.length === 0 ? (
        <ComingSoon note="아직 발행된 공지가 없습니다. /studio 에서 공지를 작성해 발행해주세요." />
      ) : (
        <ul className="mx-auto max-w-3xl divide-y divide-paper-line border-y border-paper-line bg-hanji-warm">
          {posts.map((p) => (
            <li key={p._id}>
              <Link
                href={`/activities/notices/${p.slug}`}
                className="group flex flex-col gap-1 p-6 hover:bg-hanji-deep transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-dancheong-red transition-colors">
                    {p.title}
                  </h3>
                  <time className="shrink-0 text-xs text-ink-mute tabular-nums">
                    {p.publishedAt?.slice(0, 10)}
                  </time>
                </div>
                {p.excerpt && (
                  <p className="text-sm text-ink-mute line-clamp-2">{p.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
