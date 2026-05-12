import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "연구원 소개" };

export default function AboutPage() {
  const sections = [
    { href: "/about/greeting", title: "원장 인사말", desc: "오룡 원장의 인사", hanja: "謁" },
    { href: "/about/intro", title: "연구원 소개", desc: "설립 취지와 비전", hanja: "院" },
    { href: "/about/activities", title: "주요 활동", desc: "강의·답사·환경·콘텐츠", hanja: "行" },
    { href: "/about/press", title: "언론 보도", desc: "신문·방송 보도 모음", hanja: "報" },
    { href: "/about/contact", title: "찾아오시는 길", desc: "용인 거점 연락처", hanja: "路" },
  ];
  return (
    <PageShell
      eyebrow="About"
      hanja="靜 庵 學 院"
      title="연구원 소개"
      description="정암 조광조의 정신을 잇고, 시민과 함께 역사를 일상으로 가져옵니다."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
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
