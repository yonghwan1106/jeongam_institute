import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "활동·소식" };

export default function ActivitiesPage() {
  const items = [
    { href: "/activities/pilgrimage", title: "답사 아카이브", desc: "서산·예산·심곡서원 답사 기록", hanja: "行", asset: cardAssets.pilgrimage },
    { href: "/activities/lectures", title: "강의·아카데미", desc: "한국사·세계사 아카데미", hanja: "學", asset: cardAssets.lecture },
    { href: "/activities/gallery", title: "사진 갤러리", desc: "활동 현장 사진 모음", hanja: "影", asset: cardAssets.content },
    { href: "/activities/notices", title: "공지사항", desc: "연구원 공식 안내", hanja: "告", asset: cardAssets.institute },
  ];
  return (
    <PageShell
      eyebrow="Activities"
      hanja="行 學 影"
      title="활동·소식"
      description="현장에서 만든 자료를 자산으로. 답사·강의·환경 활동의 기록."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((s) => (
          <VisualCard
            key={s.href}
            href={s.href}
            title={s.title}
            description={s.desc}
            hanja={s.hanja}
            asset={s.asset}
          />
        ))}
      </div>
    </PageShell>
  );
}
