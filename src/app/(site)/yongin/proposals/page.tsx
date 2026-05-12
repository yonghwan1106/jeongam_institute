import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "용인특례시에 바란다" };

export default function ProposalsPage() {
  return (
    <PageShell
      eyebrow="Proposals"
      hanja="議"
      title="용인특례시에 바란다"
      description="시민이 함께 만드는 우리 동네의 미래"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-lg text-ink-soft leading-relaxed mb-8">
          조광조 역사연구원은 용인을 거점으로 활동하는 시민 모임으로서,
          시정에 대한 의견과 제안을 정리해 공유합니다.
        </p>

        <h2 className="font-display text-2xl font-bold text-ink mt-12 mb-4">현재 의견을 모으고 있는 주제</h2>
        <ul className="space-y-3 text-ink-soft leading-relaxed mb-10">
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">심곡서원 일대 보존·정비</strong> — 진입 동선, 안내판, 주차장 등.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">용인 역사 콘텐츠 강화</strong> — 정몽주 묘·처인성 등 사적 연계 코스.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">청소년 역사 교육</strong> — 학교·시민 연계 답사 프로그램.
          </li>
          <li className="border-l-2 border-paper-line pl-4">
            <strong className="text-ink">생활 환경 개선</strong> — 골목 정화, 보행 안전, 공공 공간 활용.
          </li>
        </ul>

        <div className="bg-hanji-warm border border-paper-line p-8 mb-10">
          <h3 className="font-display text-xl font-bold text-ink mb-3">의견 보내기</h3>
          <p className="text-ink-soft leading-relaxed mb-6">
            시정 제안이나 의견은 아래 경로로 보내주세요. 모인 의견은 정리해 시에 전달하거나,
            연구원 자료로 활용합니다.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href={siteConfig.cafeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-sm border border-ink px-5 py-3 text-ink hover:bg-ink hover:text-hanji-warm transition-colors"
            >
              네이버 카페 '용인특례시에 바란다' ↗
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=%5B%EC%8B%9C%EC%A0%95%20%EC%A0%9C%EC%95%88%5D`}
              className="block text-center rounded-sm bg-dancheong-red px-5 py-3 text-hanji-warm hover:bg-ink transition-colors"
            >
              이메일로 보내기
            </a>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
