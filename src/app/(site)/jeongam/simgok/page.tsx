import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "심곡서원" };

export default function SimgokPage() {
  return (
    <PageShell
      eyebrow="Simgok"
      hanja="深 谷 書 院"
      title="심곡서원"
      description="정암 조광조 선생을 배향한 사액서원"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          <strong className="text-ink">심곡서원(深谷書院)</strong>은 정암 조광조와 학포 양팽손(學圃 梁彭孫)을
          배향한 서원으로, 경기도 용인특례시 수지구 상현동에 있습니다.
          1650년(효종 1년) 창건되었으며, 1871년 흥선대원군의 서원 철폐령에도 살아남은
          <strong className="text-ink"> 47개 사액서원 중 하나</strong>입니다.
        </p>

        <div className="mb-10">
          <VisualCard
            asset={cardAssets.simgok}
            hanja="院"
            title="용인 심곡서원"
            description="국가유산포털 공식 대표 이미지를 사용한 정암 배향 서원 카드입니다."
            meta="공식 사진"
          />
        </div>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">위치와 의미</h2>
        <div className="bg-hanji-warm border border-paper-line p-6 mb-8 grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-ink-mute mb-1">주소</div>
            <div className="text-ink">경기도 용인특례시 수지구 상현동 203-2</div>
          </div>
          <div>
            <div className="text-ink-mute mb-1">지정</div>
            <div className="text-ink">경기도 유형문화재 제7호</div>
          </div>
          <div>
            <div className="text-ink-mute mb-1">창건</div>
            <div className="text-ink">1650년 (효종 1년)</div>
          </div>
          <div>
            <div className="text-ink-mute mb-1">사액</div>
            <div className="text-ink">1660년 (현종 1년) &ldquo;심곡&rdquo; 편액 하사</div>
          </div>
        </div>
        <p className="text-ink-soft leading-relaxed mb-4">
          심곡서원이 용인에 자리잡은 것은 우연이 아닙니다. 정암의 가족 묘역이 이 일대(현 수지구 상현동
          모현면)에 있었고, 사후 그의 신주를 모실 곳으로 가장 가까운 자리로 선택되었습니다.
          서원 이름 &ldquo;심곡(深谷)&rdquo;은 &ldquo;깊은 골짜기&rdquo;라는 뜻으로, 정암이 추구한
          깊이 있는 학문과 은거의 자세를 상징합니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">건축과 구성</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          전형적인 조선 서원 양식인 <strong className="text-ink">전학후묘(前學後廟)</strong> 배치를 따릅니다.
          앞쪽에는 강학 공간, 뒤쪽에는 사당(祠堂)이 자리합니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <Build name="사당 (一兩室)" desc="정암 조광조와 학포 양팽손의 위패 봉안" />
          <Build name="강당 (講堂)" desc="제자들이 학문을 닦던 공간" />
          <Build name="동재·서재" desc="유생들의 기숙 공간" />
          <Build name="외삼문·내삼문" desc="서원의 격을 알리는 솟을삼문" />
        </div>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">배향 인물</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          심곡서원에는 두 분이 배향되어 있습니다.
        </p>
        <ul className="space-y-3 text-ink-soft leading-relaxed mb-8">
          <li className="border-l-2 border-dancheong-red pl-4">
            <strong className="text-ink">정암 조광조(靜庵 趙光祖, 1482~1519)</strong> — 주벽(主壁,
            중심 위패). 기묘사림의 영수이자 도학정치의 상징.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">학포 양팽손(學圃 梁彭孫, 1488~1545)</strong> — 정암의 동지로,
            기묘사화 당시 정암을 변호하다 함께 화를 입은 인물. 정암이 능주로 유배될 때 그를 따라가
            마지막을 함께한 의리의 신하.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">철폐령에서 살아남다</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          1871년(고종 8년) 흥선대원군은 전국 서원을 47개만 남기고 모두 철폐하는 명을 내렸습니다.
          <strong className="text-ink"> 심곡서원은 그 47개 중 하나로 선정되어 오늘날까지 보존</strong>되고
          있습니다. 이는 정암 조광조의 학문적·역사적 위상을 단적으로 보여주는 증거입니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          오늘날 심곡서원은 매년 음력 9월 정기 향사(享祀)를 봉행하며, 시민과 학생들을 위한
          교육·답사 프로그램을 운영하고 있습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">우리 연구원과의 관계</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          조광조 역사연구원은 심곡서원이 자리한 용인을 거점으로 활동합니다.
          서원은 연구원에게 정신적 출발점이자, 정기 답사·교육의 첫 번째 현장입니다.
          정암의 학문이 책에 머물지 않고 시민의 발걸음으로 이어지도록,
          서원과 연구원은 옛 강학(講學)의 정신을 오늘에 맞게 잇고자 합니다.
        </p>
      </article>
    </PageShell>
  );
}

function Build({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="border border-paper-line bg-hanji-warm p-4">
      <div className="font-display font-bold text-ink mb-1">{name}</div>
      <div className="text-xs text-ink-mute">{desc}</div>
    </div>
  );
}
