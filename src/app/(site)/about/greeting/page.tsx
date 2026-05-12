import { PageShell } from "@/components/page-shell";

export const metadata = { title: "원장 인사말" };

export default function GreetingPage() {
  return (
    <PageShell
      eyebrow="Greeting"
      hanja="謁"
      title="원장 인사말"
      description="조광조 역사연구원을 찾아주신 여러분께"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-6">
          반갑습니다. 조광조 역사연구원 원장 <strong className="text-ink">오룡</strong>입니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-6">
          우리는 2024년 8월 14일, 정암(靜庵) 조광조 선생을 배향한 <strong className="text-ink">심곡서원</strong>이 있는 용인에서
          작은 모임으로 시작했습니다. 역사를 책 속에 가두지 않고, 현장의 발걸음과 시민의 일상으로
          돌려놓고자 함이었습니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-6">
          정암 선생은 짧은 생애 동안 <em className="text-ink">지치(至治)</em>의 이상을
          실천하고자 했습니다. 임금이 도(道)로써 자신을 닦고 어진 이를 등용해 백성을 다스리는 정치 —
          오백 년이 지난 지금 우리에게는 어떤 의미일까요. 연구원은 이 질문을 시민과 함께 묻는 자리가
          되고자 합니다.
        </p>

        <blockquote className="my-10 border-l-2 border-dancheong-red pl-6 py-2">
          <p className="font-display text-xl text-ink-soft leading-relaxed">
            나라를 바로 세우고자 했던 정신이,<br />
            오늘 우리 동네를 바로 세우는 작은 발걸음으로 이어지길.
          </p>
        </blockquote>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">우리가 하는 일</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          한국사·세계사 아카데미 강좌, 정기 답사, 환경 정화 활동, 그리고 유튜브
          <strong className="text-ink"> 쏠쏠한 역사TV</strong>를 통한 콘텐츠 제작. 학문과 실천,
          기록과 만남이 어우러지는 그릇을 만들고 있습니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-10">
          325명이 넘는 회원이 네이버 카페에서 함께하고 있으며, 답사·강의·시민 제안의 순환이
          매월 이어지고 있습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">함께해주세요</h2>
        <p className="text-ink-soft leading-relaxed mb-6">
          이 작은 연구원이 풍부한 시민의 학교로 자라기 위해서는 여러분의 동행이 필요합니다.
          회원 가입, 강의 신청, 답사 참여, 그리고 후원 — 어떤 형태든 환영합니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-6">
          역사는 박물관에 있지 않고, 우리가 매일 걷는 골목과 우리가 하는 결정 속에 있습니다.
          정암의 정신이 오백 년을 건너 오늘 여러분을 만나기를 바랍니다.
        </p>
        <p className="mt-12 text-right text-ink">
          조광조 역사연구원 원장<br />
          <span className="font-display text-2xl font-bold">오 룡</span>
        </p>
      </article>
    </PageShell>
  );
}
