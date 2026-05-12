import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "우리 동네 용인" };

export default function YonginPage() {
  const items = [
    { href: "/yongin/heritage", title: "용인의 역사·문화·인물", desc: "심곡서원·기흥·수지의 어제와 오늘", hanja: "鄕", asset: cardAssets.simgok },
    { href: "/yongin/proposals", title: "용인특례시에 바란다", desc: "시정 제안과 시민 의견", hanja: "議", asset: cardAssets.proposals },
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
