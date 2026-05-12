import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "정암의 생애" };

const timeline = [
  { year: "1482", event: "한성부에서 출생. 본관 한양 조씨, 자(字) 효직(孝直), 호(號) 정암(靜庵)." },
  { year: "1498", event: "무오사화로 김굉필이 평안도 희천에 유배되자, 부친의 임지에서 그를 사사(師事)하며 사림의 학통을 잇기 시작." },
  { year: "1510", event: "사마시 합격, 진사가 되어 성균관에 입학." },
  { year: "1515", event: "성균관 유생들의 추천과 안당의 천거로 출사, 알성문과에 급제. 사간원·홍문관·사헌부 요직을 거치며 사림파 영수로 부상." },
  { year: "1517", event: "현량과(賢良科) 실시를 건의 — 학문과 덕행이 뛰어난 인재를 추천제로 등용하는 새로운 인재 선발 제도." },
  { year: "1518", event: "대사헌에 임명. 소격서(昭格署) 혁파를 주청해 도교 제사 폐지 등 개혁 정책을 본격 추진." },
  { year: "1519", event: "기묘사화 — 11월 중종이 훈구파의 무고를 받아들여 정암을 체포. 12월 능주(현 화순)에 유배된 뒤 한 달 만에 사사(賜死). 향년 37세." },
  { year: "1568", event: "선조 즉위와 함께 신원(伸寃) — 영의정으로 추증되고 문정(文正) 시호를 받음." },
  { year: "1610", event: "광해군 때 문묘에 종사(從祀) — 동방오현(東方五賢)의 한 명으로 모셔짐." },
];

export default function LifePage() {
  return (
    <PageShell
      eyebrow="Life"
      hanja="生 涯"
      title="정암 조광조의 생애"
      description="1482–1519, 37년의 짧고 강렬한 삶"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-12">
          정암 조광조(靜庵 趙光祖, 1482~1519)는 조선 중종 때의 문신·성리학자로,
          <strong className="text-ink"> 기묘사림의 영수</strong>이자 <strong className="text-ink">도학정치의
          상징</strong>입니다. 37년의 생애 동안 그가 추구한 지치(至治)의 이상은
          이후 조선 사림의 정신적 좌표가 되었습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mb-6">연표</h2>
        <ol className="border-l border-paper-line pl-6 space-y-6 mb-16">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full bg-dancheong-red" />
              <div className="font-display text-xl font-bold text-ink mb-1">{t.year}</div>
              <p className="text-ink-soft leading-relaxed">{t.event}</p>
            </li>
          ))}
        </ol>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">출생과 학통</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          정암은 1482년(성종 13년) 한성부에서 태어났습니다. 본관은 <strong className="text-ink">한양 조씨</strong>로,
          개국 공신 조온의 후손입니다. 17세 무렵 평안도 희천에서 유배 생활을 하던 <strong className="text-ink">한훤당
          김굉필(寒暄堂 金宏弼)</strong>을 만나 그의 문하에서 수학하게 되는데, 이로써 정몽주 → 길재 → 김숙자 →
          김종직 → 김굉필로 이어지는 조선 사림 학통을 이어받게 됩니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">기묘사림의 영수</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          1515년 출사 후 정암은 4년 만에 대사헌(현재의 검찰총장에 해당)까지 오릅니다. 이 짧은 기간에
          그는 <strong className="text-ink">현량과</strong>(추천제 과거), <strong className="text-ink">소격서 혁파</strong>(도교 제사 폐지),
          <strong className="text-ink"> 위훈삭제</strong>(부당한 공신 책봉 취소), <strong className="text-ink">향약 보급</strong>(지방
          자치 교화 규약) 등 광범위한 개혁을 추진했습니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          개혁의 명분은 분명했습니다 — 임금이 도(道)로써 자신을 닦고, 어진 이를 골라 등용해
          백성을 다스리는 정치. 이를 <strong className="text-ink">지치주의(至治主義)</strong>라 하며,
          정암이 평생 견지한 정치 이상이었습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">기묘사화와 사사</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          그러나 급진적 개혁은 훈구 공신들의 강한 반발을 불러왔습니다. 1519년 11월,
          홍경주·남곤·심정 등 훈구파가 중종에게 정암을 무고하면서
          <strong className="text-ink"> 기묘사화</strong>가 일어났습니다.
          궁녀들을 시켜 궁중 후원의 나뭇잎에 꿀로 <em className="text-ink">&ldquo;주초위왕(走肖爲王)&rdquo;</em>(走+肖 = 趙) 글자를 쓰게 하고,
          벌레가 갉아먹은 것처럼 위장해 중종을 동요시켰다는 전설이 전해집니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          정암은 능주(현 전남 화순)에 유배되었고, 한 달 만인 12월 사약을 받아 세상을 떠났습니다.
          유배지에서 사약을 받기 직전 그가 남긴 절명시는 다음과 같이 알려져 있습니다.
        </p>
        <blockquote className="my-8 border-l-2 border-dancheong-red pl-6 py-2">
          <p className="font-display text-lg text-ink-soft leading-relaxed">
            愛君如愛父 (애군여애부) — 임금을 사랑함이 아비를 사랑하는 듯하였고<br />
            憂國如憂家 (우국여우가) — 나라를 걱정함이 집을 걱정하는 듯하였노라<br />
            白日臨下土 (백일임하토) — 밝은 해가 세상을 비추고 있으니<br />
            昭昭照丹衷 (소소조단충) — 환히 나의 붉은 마음 비추리라
          </p>
        </blockquote>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">신원과 후대 평가</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          정암은 1568년 선조 즉위와 함께 신원되어 영의정에 추증되고 <strong className="text-ink">문정(文正)</strong>이라는
          최고의 시호를 받았습니다. 1610년 광해군 때에는 문묘에 종사되어
          <strong className="text-ink"> 동방오현</strong>(김굉필·정여창·조광조·이언적·이황)의 한 명으로
          모셔지게 됩니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-10">
          비록 살아생전 이루지 못한 꿈이었지만, 정암의 도학정치 이상은 이황·이이로 이어지는
          조선 성리학의 근간이 되었고, 사림 정치의 정통성을 부여하는 정신적 토대가 되었습니다.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <Link
            href="/jeongam/dohak"
            className="bg-hanji-warm border border-paper-line p-5 hover:border-dancheong-red transition-colors group"
          >
            <div className="hanja text-2xl mb-2 group-hover:text-dancheong-red">道</div>
            <div className="font-display font-bold text-ink">도학정치</div>
            <div className="text-xs text-ink-mute mt-1">지치(至治)의 사상</div>
          </Link>
          <Link
            href="/jeongam/gimyo"
            className="bg-hanji-warm border border-paper-line p-5 hover:border-dancheong-red transition-colors group"
          >
            <div className="hanja text-2xl mb-2 group-hover:text-dancheong-red">禍</div>
            <div className="font-display font-bold text-ink">기묘사화</div>
            <div className="text-xs text-ink-mute mt-1">1519년의 비극</div>
          </Link>
          <Link
            href="/jeongam/simgok"
            className="bg-hanji-warm border border-paper-line p-5 hover:border-dancheong-red transition-colors group"
          >
            <div className="hanja text-2xl mb-2 group-hover:text-dancheong-red">院</div>
            <div className="font-display font-bold text-ink">심곡서원</div>
            <div className="text-xs text-ink-mute mt-1">정암을 배향하는 서원</div>
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
