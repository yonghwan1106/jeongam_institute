import { PageShell } from "@/components/page-shell";
import { VisualCard } from "@/components/visual-card";
import { cardAssets } from "@/lib/card-assets";

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
        <VisualCard
          href="https://cafe.naver.com/jkjhistoy"
          external
          title="회원 가입 ↗"
          description="네이버 카페에서 가입하고 회원 활동을 시작하세요."
          hanja="會"
          asset={cardAssets.community}
        />
        <VisualCard
          href="/join/apply"
          title="강의·답사 신청"
          description="아카데미 강좌와 정기 답사 프로그램 신청."
          hanja="申"
          asset={cardAssets.lecture}
        />
        <VisualCard
          href="/support"
          title="후원하기"
          description="연구원의 활동을 함께 만들어주세요."
          hanja="援"
          asset={cardAssets.support}
        />
      </div>
    </PageShell>
  );
}
