import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "연구원 소개" };

export default function IntroPage() {
  return (
    <PageShell
      eyebrow="About"
      hanja="院 書 谷 深"
      title="연구원 소개"
      description="정암 조광조의 정신을 잇는 시민 역사 모임"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-10">
          조광조 역사연구원은 정암 조광조 선생을 배향한 <strong className="text-ink">심곡서원</strong>(深谷書院,
          경기도 용인특례시 수지구 상현동)이 자리한 용인을 거점으로 활동하는
          시민 역사 모임입니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">설립 취지</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          역사가 책상 위 지식이 아닌 <strong className="text-ink">시민의 일상</strong>으로 작동하기 위해서는
          현장과 만나야 합니다. 우리는 정암 선생의 도학정치 정신 — 학문과 실천,
          기록과 만남이 분리되지 않는 태도 — 를 오늘의 시민 활동으로 옮기고자 2024년 8월 14일
          연구원의 문을 열었습니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">미션</h2>
        <ul className="space-y-3 text-ink-soft leading-relaxed">
          <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:h-px before:w-3 before:bg-dancheong-red">
            <strong className="text-ink">학문</strong> — 한국사·세계사를 시민의 언어로 다시 풉니다.
          </li>
          <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:h-px before:w-3 before:bg-dancheong-red">
            <strong className="text-ink">현장</strong> — 답사를 통해 역사를 발로 만납니다.
          </li>
          <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:h-px before:w-3 before:bg-dancheong-red">
            <strong className="text-ink">실천</strong> — 환경 정화·시정 제안으로 동네에 자긍심을 보탭니다.
          </li>
          <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:h-px before:w-3 before:bg-dancheong-red">
            <strong className="text-ink">기록</strong> — 영상·글·사진으로 활동을 자산으로 남깁니다.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">조직</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <Card label="원장" value="오 룡" sub="역사 강사" />
          <Card label="회원" value="325명+" sub="네이버 카페 기준" />
          <Card label="개설" value="2024.08.14" sub="용인 거점" />
        </div>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">심곡서원과의 관계</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          심곡서원은 정암 조광조 선생을 배향한 서원으로, 1650년(효종 1년) 설립되어 1871년 흥선대원군의
          서원 철폐령에도 살아남은 47개 사액서원 중 하나입니다. 연구원은 심곡서원을 답사·교육의
          출발점으로 삼고, 정암의 학문과 실천 정신을 오늘에 맞게 풀어내고자 합니다.
        </p>
        <p className="text-ink-soft leading-relaxed mb-10">
          <Link href="/jeongam/simgok" className="text-dancheong-red underline">심곡서원에 대해 자세히 →</Link>
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">사이트와 카페의 분업</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          이 홈페이지는 연구원의 <strong className="text-ink">공식 기록과 외부 안내</strong>를 담당하며,
          회원 간의 일상 소통은 네이버 카페에서 이어집니다. 양쪽이 함께 굴러가는 구조입니다.
        </p>
        <div className="bg-hanji-warm border border-paper-line p-6 text-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-display font-bold text-ink mb-2">홈페이지</h3>
              <ul className="space-y-1 text-ink-mute">
                <li>· 공식 공지·언론 보도</li>
                <li>· 정암 콘텐츠 아카이브</li>
                <li>· 강의·답사 신청</li>
                <li>· 후원</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-ink mb-2">네이버 카페</h3>
              <ul className="space-y-1 text-ink-mute">
                <li>· 회원 가입·소통</li>
                <li>· 자유게시판·댓글</li>
                <li>· 일상 답사 후기</li>
                <li>· 회원 업체 소개</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}

function Card({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="border border-paper-line bg-hanji-warm p-5 text-center">
      <div className="text-[11px] tracking-widest text-ink-mute mb-1">{label.toUpperCase()}</div>
      <div className="font-display text-xl font-bold text-ink mb-1">{value}</div>
      <div className="text-xs text-ink-mute">{sub}</div>
    </div>
  );
}
