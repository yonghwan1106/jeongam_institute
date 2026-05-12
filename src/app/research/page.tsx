import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "연구·콘텐츠" };

export default function ResearchPage() {
  const items = [
    { href: "/research/essays", title: "역사에 풍덩 빠지다", desc: "역사 에세이·칼럼", hanja: "文" },
    { href: "/research/korean", title: "교과서 한국사", desc: "교과 연계 한국사 정리", hanja: "韓" },
    { href: "/research/world", title: "교과서 세계사", desc: "교과 연계 세계사 정리", hanja: "世" },
    { href: "/research/books", title: "추천 도서", desc: "역사·인문 큐레이션", hanja: "冊" },
  ];
  return (
    <PageShell
      eyebrow="Research"
      hanja="文 韓 世"
      title="연구·콘텐츠"
      description="읽고 정리하고 나누는 역사. 교과서를 넘어 일상으로."
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
