import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = { title: "참여하기" };

export default function JoinPage() {
  return (
    <PageShell
      eyebrow="Join"
      hanja="同 行"
      title="함께 만들어가요"
      description="회원 가입은 네이버 카페에서, 강의·답사 신청은 홈페이지에서, 후원도 한 번에."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="https://cafe.naver.com/jkjhistoy"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-hanji-warm border border-paper-line p-8 hover:border-dancheong-red transition-all"
        >
          <div className="hanja text-4xl mb-4 group-hover:text-dancheong-red transition-colors">會</div>
          <h3 className="font-display text-xl font-bold text-ink mb-2">회원 가입 ↗</h3>
          <p className="text-sm text-ink-mute">네이버 카페에서 가입하고 회원 활동을 시작하세요.</p>
        </Link>
        <Link
          href="/join/apply"
          className="group bg-hanji-warm border border-paper-line p-8 hover:border-dancheong-red transition-all"
        >
          <div className="hanja text-4xl mb-4 group-hover:text-dancheong-red transition-colors">申</div>
          <h3 className="font-display text-xl font-bold text-ink mb-2">강의·답사 신청</h3>
          <p className="text-sm text-ink-mute">아카데미 강좌와 정기 답사 프로그램 신청.</p>
        </Link>
        <Link
          href="/support"
          className="group bg-hanji-warm border border-paper-line p-8 hover:border-dancheong-red transition-all"
        >
          <div className="hanja text-4xl mb-4 group-hover:text-dancheong-red transition-colors">援</div>
          <h3 className="font-display text-xl font-bold text-ink mb-2">후원하기</h3>
          <p className="text-sm text-ink-mute">연구원의 활동을 함께 만들어주세요.</p>
        </Link>
      </div>
    </PageShell>
  );
}
