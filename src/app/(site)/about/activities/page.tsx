import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "주요 활동" };

export default function AboutActivitiesPage() {
  const pillars = [
    {
      hanja: "學",
      title: "강의·아카데미",
      desc: "한국사·세계사 정기 강좌와 Zoom 온라인 강의, 시민을 위한 특강을 운영합니다.",
      bullets: [
        "한국사 아카데미 (기수제 강좌)",
        "세계사 아카데미",
        "Zoom 온라인 강의",
        "용인 지역 특강",
      ],
      href: "/activities/lectures",
    },
    {
      hanja: "行",
      title: "역사 답사",
      desc: "심곡서원을 시작으로 충남·경기·강원의 역사 현장을 함께 걷습니다.",
      bullets: [
        "심곡서원·향교 답사",
        "충청·호남 사림 유적",
        "서울 도성·궁궐 답사",
        "참여 인원 평균 30~50명",
      ],
      href: "/activities/pilgrimage",
    },
    {
      hanja: "淨",
      title: "환경 정화",
      desc: "역사 현장과 우리 동네를 깨끗이. \"쓰레기도 줍고 역사도 배우고\" 캠페인.",
      bullets: [
        "심곡서원 일대 정화",
        "용인 마을 골목 청소",
        "환경의 날 캠페인",
      ],
      href: "https://cafe.naver.com/jkjhistoy",
      external: true,
    },
    {
      hanja: "記",
      title: "콘텐츠 제작",
      desc: "유튜브 \"쏠쏠한 역사TV\"와 답사 후기·인물 연구 자료를 시민과 나눕니다.",
      bullets: [
        "쏠쏠한 역사TV (유튜브)",
        "답사 후기 아카이브",
        "정암·기묘사림 자료 정리",
        "교과서 한국사·세계사 풀이",
      ],
      href: "/research/essays",
    },
  ];

  return (
    <PageShell
      eyebrow="Activities"
      hanja="學 行 淨 記"
      title="주요 활동"
      description="배우고, 걷고, 나누고, 기록합니다. 연구원의 네 가지 축."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p) => {
          const Card = (
            <div className="group bg-hanji-warm border border-paper-line p-8 hover:border-dancheong-red transition-all h-full">
              <div className="flex items-start gap-4">
                <div className="hanja text-5xl group-hover:text-dancheong-red transition-colors">{p.hanja}</div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-mute mb-4 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-1 text-sm text-ink-soft">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="pl-3 relative before:absolute before:left-0 before:top-2.5 before:h-px before:w-2 before:bg-ink/30">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
          return p.external ? (
            <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer">{Card}</a>
          ) : (
            <Link key={p.href} href={p.href}>{Card}</Link>
          );
        })}
      </div>
    </PageShell>
  );
}
