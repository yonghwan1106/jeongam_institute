import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "연구원 소개" };

export default function AboutPage() {
  const sections = [
    { href: "/about/greeting", title: "원장 인사말", desc: "오룡 원장의 인사", hanja: "謁", asset: cardAssets.institute },
    { href: "/about/intro", title: "연구원 소개", desc: "설립 취지와 비전", hanja: "院", asset: cardAssets.institute },
    { href: "/about/activities", title: "주요 활동", desc: "강의·답사·환경·콘텐츠", hanja: "行", asset: cardAssets.pilgrimage },
    { href: "/about/press", title: "언론 보도", desc: "신문·방송 보도 모음", hanja: "報", asset: cardAssets.content },
    { href: "/about/contact", title: "찾아오시는 길", desc: "용인 거점 연락처", hanja: "路", asset: cardAssets.simgok },
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
