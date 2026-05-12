import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "활동·소식" };

export default function ActivitiesPage() {
  const items = [
    { href: "/activities/pilgrimage", title: "답사 아카이브", desc: "서산·예산·심곡서원 답사 기록", hanja: "行" },
    { href: "/activities/lectures", title: "강의·아카데미", desc: "한국사·세계사 아카데미", hanja: "學" },
    { href: "/activities/gallery", title: "사진 갤러리", desc: "활동 현장 사진 모음", hanja: "影" },
    { href: "/activities/notices", title: "공지사항", desc: "연구원 공식 안내", hanja: "告" },
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
          <Link
            key={s.href}
            href={s.href}
            className="group bg-hanji-warm border border-paper-line p-8 hover:border-dancheong-red transition-all"
          >
            <div className="hanja text-4xl mb-4 group-hover:text-dancheong-red transition-colors">{s.hanja}</div>
            <h3 className="font-display text-xl font-bold text-ink mb-2">{s.title}</h3>
            <p className="text-sm text-ink-mute">{s.desc}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
