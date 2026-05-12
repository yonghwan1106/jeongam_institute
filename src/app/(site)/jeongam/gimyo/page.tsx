import { PageShell } from "@/components/page-shell";

export const metadata = { title: "기묘사화" };

export default function GimyoPage() {
  return (
    <PageShell
      eyebrow="Gimyo"
      hanja="己 卯 士 禍"
      title="기묘사화"
      description="1519년, 정암을 비롯한 신진 사림이 무너진 정변"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          <strong className="text-ink">기묘사화(己卯士禍)</strong>는 1519년(중종 14년) 11월,
          조선 중종이 훈구 공신들의 무고를 받아들여 정암 조광조를 위시한 사림파를 일거에 숙청한 사건입니다.
          이로 인해 정암을 포함한 70여 명의 사림 신진이 처형·유배·삭탈관직되었으며,
          이들을 통칭하여 <strong className="text-ink">기묘명현(己卯名賢)</strong>이라 부릅니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">배경</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          중종은 1506년 연산군을 폐위시킨 <strong className="text-ink">중종반정</strong>으로 즉위했습니다.
          반정 공신들이 정권을 장악한 상황에서, 중종은 견제 세력으로 사림을 등용했습니다.
          이 흐름의 정점에 있었던 인물이 1515년 출사한 정암 조광조였습니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          4년 만에 대사헌에 오른 정암은 현량과·소격서 혁파·향약 보급 등 개혁을 추진하며 사림의 영수가
          됐습니다. 그러나 1519년 11월의 <strong className="text-ink">위훈삭제(僞勳削除)</strong> —
          반정 공신 117명 중 76명의 공훈을 취소하는 조치는 훈구 세력에게 결정적 위협이었습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">발발</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          1519년 11월 15일 밤, 훈구파 홍경주·남곤·심정은 비밀리에 중종을 만나 사림이 반역을
          꾀한다고 고변(告變)했습니다. 그날 밤 중종은 정암을 비롯한 사림 핵심 인물들의 체포를
          명했고, 사화는 거의 군사 작전처럼 전격적으로 진행됐습니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          유명한 <strong className="text-ink">주초위왕(走肖爲王)</strong> 전설도 이때의 일화입니다.
          궁궐 후원의 나뭇잎에 꿀로 &ldquo;走肖爲王&rdquo;(走+肖 = 趙) 글자를 써놓고
          벌레가 갉아먹게 한 뒤, &ldquo;조씨가 왕이 된다&rdquo;는 참언으로 중종을 동요시켰다는 이야기로,
          『기묘록(己卯錄)』 등 후대 기록에 전해집니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">처분</h2>
        <ul className="space-y-3 text-ink-soft leading-relaxed mb-8">
          <li className="border-l-2 border-dancheong-red pl-4">
            <strong className="text-ink">조광조</strong> — 능주(현 화순) 유배 후 한 달 만에 사사(賜死). 향년 37세.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">김정·김식·김구·기준</strong> — 유배 또는 사사. 모두 사림 핵심 인물.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">박세희·박훈·홍언필 등</strong> — 삭탈관직·유배.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">현량과 자체 폐지</strong> — 이미 등용된 28명도 모두 자격 박탈.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">기묘명현 — 그날의 사람들</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          기묘사화로 화를 입은 사림들을 후대에 <strong className="text-ink">&ldquo;기묘명현&rdquo;</strong>이라 칭하며
          존숭했습니다. 정암을 정점으로 김정(金淨)·김식(金湜)·기준(奇遵)·박세희(朴世熹) 등
          학문과 덕행으로 뜻을 함께한 인물들의 명단은 이후 사림의 정체성을 이루는 기념비가 됐습니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          유배지에서 죽거나 살아남은 자손들이 모여 형성한 학통과 인맥은 16세기 후반 사림 정치
          복원의 토대가 되었습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">신원과 평가</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          1568년 선조 즉위와 함께 정암은 영의정으로 추증되었고, <strong className="text-ink">문정(文正)</strong>
          이라는 시호를 받았습니다. 1610년 광해군 때는 문묘에 종사되어
          김굉필·정여창·이언적·이황과 함께 <strong className="text-ink">동방오현</strong>으로 모셔지게 됩니다.
        </p>
        <p className="text-ink-soft leading-relaxed">
          기묘사화는 단지 한 시대 인물들의 비극이 아니라, <em className="text-ink">권력과 이상이
          충돌할 때 무엇이 살아남는가</em>를 묻는 사건으로 오늘까지 읽힙니다. 정암은 패배했지만,
          그가 패배함으로써 후대 사림은 그의 정신을 정통으로 받아들였습니다.
        </p>
      </article>
    </PageShell>
  );
}
