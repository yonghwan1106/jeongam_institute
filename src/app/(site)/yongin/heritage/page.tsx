import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets, type CardAsset } from "@/lib/card-assets";

export const metadata = { title: "용인의 역사·문화·인물" };

export default function HeritagePage() {
  return (
    <PageShell
      eyebrow="Heritage"
      hanja="龍 仁"
      title="용인의 역사·문화·인물"
      description="심곡서원의 도시, 용인에서 만나는 역사"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          용인은 한반도 중부, 한양과 충청·호남을 잇는 길목에 자리한 도시입니다. 삼국 시대부터 교통의
          요지였고, 조선 시대에는 사림의 학통과 정착지가 모인 학문의 고장이었습니다.
          오늘날 100만 인구의 특례시로 성장했지만, 도시 곳곳에는 옛 시대의 결이 살아 있습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">정암 조광조와 용인</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          용인이 정암 조광조 역사연구원의 거점이 된 것은 우연이 아닙니다.
          정암의 가족 묘역이 수지구 상현동·모현면 일대에 있고, 그를 배향한
          <strong className="text-ink"> 심곡서원</strong>이 이곳에 자리잡고 있습니다.
          1871년 흥선대원군의 서원 철폐령에서도 살아남은 47개 사액서원 중 하나입니다.
        </p>
        <Link href="/jeongam/simgok" className="inline-block text-dancheong-red underline mb-10">
          심곡서원 자세히 보기 →
        </Link>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">용인의 주요 사적</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <Heritage
            hanja="院"
            name="심곡서원"
            loc="수지구 상현동"
            desc="정암 조광조·학포 양팽손 배향. 사액서원, 도 유형문화재."
            asset={cardAssets.simgok}
          />
          <Heritage
            hanja="陵"
            name="조선왕릉(서울 외곽)"
            loc="용인 인근"
            desc="용인 자체 왕릉은 없지만 인근 화성·여주 왕릉 답사 거점."
            asset={cardAssets.pilgrimage}
          />
          <Heritage
            hanja="塚"
            name="포은 정몽주 묘"
            loc="모현면 능원리"
            desc="고려 충신 정몽주의 묘. 사림 학통의 출발점."
            asset={cardAssets.pilgrimage}
          />
          <Heritage
            hanja="閣"
            name="충렬서원"
            loc="모현면"
            desc="정몽주를 배향한 서원. 심곡서원과 한 묶음으로 답사 가능."
            asset={cardAssets.chungnyeol}
          />
          <Heritage
            hanja="窯"
            name="용인 가마터"
            loc="처인구 일대"
            desc="조선 도자기의 본향 중 하나. 백자 가마 유적 다수."
            asset={cardAssets.seoriKiln}
          />
          <Heritage
            hanja="戰"
            name="처인성"
            loc="처인구 남사면"
            desc="고려 김윤후가 몽골군을 격퇴한 전적지(1232년 처인성 전투)."
            asset={cardAssets.cheoinseong}
          />
        </div>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">용인의 사림 인물</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          용인은 조선 사림의 인물들이 인연을 맺은 땅이기도 합니다.
        </p>
        <ul className="space-y-3 text-ink-soft leading-relaxed mb-10">
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">포은 정몽주(圃隱 鄭夢周, 1338~1392)</strong> — 사림 학통의 정신적
            시조. 사후 묘소가 모현면 능원리에 안장되어 있음.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">정암 조광조(靜庵 趙光祖, 1482~1519)</strong> — 가족 묘역이 용인.
            사후 심곡서원에 배향.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">학포 양팽손(學圃 梁彭孫, 1488~1545)</strong> — 정암과 함께 심곡서원에
            배향. 정암의 동지이자 의리의 신하.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">오늘의 용인 — 우리 동네</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          용인은 1996년 시 승격 이후 인구가 폭발적으로 늘어, 2024년 1월 특례시로 지정되었습니다.
          기흥·수지·처인 3개 구가 합쳐 약 110만 인구가 살고 있으며, 신도시와 옛 마을이 공존합니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          연구원은 이 도시에 사는 시민들이 우리 동네 역사에 자긍심을 느낄 수 있도록,
          심곡서원·정몽주 묘·처인성 등 지역의 사적을 답사하고, 이를 다음 세대에 이어주는 일을 합니다.
        </p>
        <p className="text-ink-soft leading-relaxed">
          <Link href="/yongin/proposals" className="text-dancheong-red underline">
            용인특례시에 바라는 시정 제안 →
          </Link>
        </p>
      </article>
    </PageShell>
  );
}

function Heritage({
  hanja,
  name,
  loc,
  desc,
  asset,
}: {
  hanja: string;
  name: string;
  loc: string;
  desc: string;
  asset: CardAsset;
}) {
  return (
    <VisualCard asset={asset} hanja={hanja} title={name} description={desc} meta={loc} />
  );
}
