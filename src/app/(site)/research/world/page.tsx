import { PageShell, ComingSoon } from "@/components/page-shell";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "교과서 세계사" };

export default function WorldPage() {
  return (
    <PageShell
      eyebrow="World History"
      hanja="世 界 史"
      title="교과서 세계사"
      description="동서 문명의 흐름을 시민의 시선으로 정리합니다"
    >
      <ComingSoon
        note="세계사 단원별 풀이 콘텐츠를 준비 중입니다."
        asset={cardAssets.worldHistory}
        hanja="世"
      />
    </PageShell>
  );
}
