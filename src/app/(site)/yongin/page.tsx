import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "우리 동네 용인" };

export default function YonginPage() {
  const items = [
    { href: "/yongin/heritage", title: "용인의 역사·문화·인물", desc: "심곡서원·기흥·수지의 어제와 오늘", hanja: "鄕" },
    { href: "/yongin/proposals", title: "용인특례시에 바란다", desc: "시정 제안과 시민 의견", hanja: "議" },
  ];
  return (
    <PageShell
      eyebrow="Yongin"
      hanja="龍 仁"
      title="우리 동네 용인"
      description="심곡서원이 있는 도시, 용인. 지역의 역사와 문화를 가꾸고 시정에 의견을 더합니다."
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
