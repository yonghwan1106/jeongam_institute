import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "정암 조광조" };

export default function JeongamPage() {
  const items = [
    { href: "/jeongam/life", title: "생애와 사상", desc: "1482–1519, 정암의 37년", hanja: "生" },
    { href: "/jeongam/dohak", title: "도학정치", desc: "지치(至治)를 향한 개혁", hanja: "道" },
    { href: "/jeongam/gimyo", title: "기묘사화", desc: "1519년의 비극", hanja: "禍" },
    { href: "/jeongam/simgok", title: "심곡서원", desc: "정암을 배향하는 서원", hanja: "院" },
    { href: "/jeongam/works", title: "정암집", desc: "남긴 글과 문헌", hanja: "集" },
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
