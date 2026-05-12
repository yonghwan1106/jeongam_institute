import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "정암 조광조" };

export default function JeongamPage() {
  const items = [
    { href: "/jeongam/life", title: "생애와 사상", desc: "1482–1519, 정암의 37년", hanja: "生", asset: cardAssets.institute },
    { href: "/jeongam/dohak", title: "도학정치", desc: "지치(至治)를 향한 개혁", hanja: "道", asset: cardAssets.dohak },
    { href: "/jeongam/gimyo", title: "기묘사화", desc: "1519년의 비극", hanja: "禍", asset: cardAssets.dohak },
    { href: "/jeongam/simgok", title: "심곡서원", desc: "정암을 배향하는 서원", hanja: "院", asset: cardAssets.simgok },
    { href: "/jeongam/works", title: "정암집", desc: "남긴 글과 문헌", hanja: "集", asset: cardAssets.works },
  ];
  return (
    <PageShell
      eyebrow="Jeongam"
      hanja="趙 光 祖"
      title="정암 조광조"
      description="지치(至治)를 꿈꾼 도학정치의 영수. 그의 생애·사상·유산을 한자리에."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
