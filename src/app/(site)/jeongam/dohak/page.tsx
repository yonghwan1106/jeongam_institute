import { PageShell } from "@/components/page-shell";

export const metadata = { title: "도학정치" };

export default function DohakPage() {
  return (
    <PageShell
      eyebrow="Dohak"
      hanja="道 學 政 治"
      title="도학정치"
      description="지치(至治)를 향한 정암의 정치 이상"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          <strong className="text-ink">도학정치(道學政治)</strong>는 성리학의 도(道)에 입각해
          국가를 다스려야 한다는 정치 사상입니다. 정암 조광조가 평생 추구한 정치 이상으로,
          그 이론적 뿌리는 송대 주자학(朱子學)에 있고, 조선에서는 정몽주·길재 이래의 사림 학통 속에서
          완성되었습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">지치(至治)란 무엇인가</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          <em className="text-ink">&ldquo;지극히 잘 다스려진 상태&rdquo;</em>를 뜻하는 <strong className="text-ink">지치(至治)</strong>는
          유학에서 이상적 정치를 가리키는 핵심 개념입니다. 고대 요·순 시대를 모범으로 삼아,
          임금이 사사로움을 벗고 천리(天理)에 따라 다스릴 때 백성이 절로 교화되는 정치를 의미합니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          정암은 이 지치를 단순한 추상적 이상이 아닌 <strong className="text-ink">당장 실현해야 할
          정치 강령</strong>으로 받아들였습니다. 그것이 짧은 시간에 폭발적 개혁을 시도한 동력이자,
          동시에 그를 무너뜨린 비극의 단초이기도 했습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">세 기둥</h2>
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <Pillar
            hanja="修"
            title="군주의 수신"
            desc="임금이 먼저 도(道)로 자신을 닦아야 한다. 경연(經筵)을 통한 학문 연마와 도덕적 자기 성찰이 정치의 출발."
          />
          <Pillar
            hanja="擧"
            title="현인의 등용"
            desc="문벌·인맥이 아닌 학문과 덕행으로 인재를 골라야 한다. 현량과(賢良科)는 이 원칙의 제도화."
          />
          <Pillar
            hanja="化"
            title="백성의 교화"
            desc="법과 형벌보다 향약·교육·예의로 백성을 이끌어야 한다. 자치적 향촌 공동체가 도덕의 토대."
          />
        </div>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">실제 개혁 정책</h2>
        <ul className="space-y-4 text-ink-soft leading-relaxed">
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">현량과 실시 (1518)</strong> — 추천에 의한 인재 등용. 문벌·과거 제도의 한계를
            보완해 실력 있는 신진 사림을 대거 등용함.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">소격서 혁파 (1518)</strong> — 도교 제사를 관장하던 관청을 폐지. 유학적
            정치 질서 확립의 상징적 조치.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">위훈삭제 (1519)</strong> — 중종반정 공신 117명 중 76명의 부당한 공훈을
            취소. 훈구파를 직접 겨냥한 가장 격렬한 개혁이자, 결국 기묘사화의 도화선.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">향약 보급</strong> — 송대 여씨향약을 조선에 맞게 변용. 향촌 공동체의
            자치 규약을 통해 도학의 가르침을 일상화하고자 함.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">언로 확장</strong> — 사간원·사헌부 등 언관(言官)의 권한을 강화해
            임금에게 직언할 수 있는 통로를 넓힘.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">실패한 이상, 살아남은 정신</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          정암의 개혁은 4년 만에 좌절되었습니다. 너무 급했고, 훈구의 반발은 거셌으며,
          중종의 신뢰는 단단하지 못했습니다. 그러나 그 좌절은 도학정치의 패배가 아니라,
          <strong className="text-ink"> 그것이 진심이었음을 증명한 사건</strong>이었습니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          이후 이황·이이로 이어지는 조선 성리학은 모두 정암의 정신적 후예입니다.
          16세기 후반 사림 정치가 자리잡고, 향약과 서원 체제가 정착하면서
          도학정치는 늦었지만 결국 조선의 통치 원리로 자리잡게 됩니다.
        </p>
        <p className="text-ink-soft leading-relaxed">
          오늘날 도학정치의 외형은 사라졌지만, 그 핵심 — <em className="text-ink">권력자의 자기
          성찰, 능력에 기반한 인재 등용, 시민 공동체의 자치</em> — 는 여전히 우리 정치에
          던지는 질문입니다.
        </p>
      </article>
    </PageShell>
  );
}

function Pillar({ hanja, title, desc }: { hanja: string; title: string; desc: string }) {
  return (
    <div className="bg-hanji-warm border border-paper-line p-6">
      <div className="hanja text-3xl mb-3">{hanja}</div>
      <h3 className="font-display text-lg font-bold text-ink mb-2">{title}</h3>
      <p className="text-sm text-ink-mute leading-relaxed">{desc}</p>
    </div>
  );
}
