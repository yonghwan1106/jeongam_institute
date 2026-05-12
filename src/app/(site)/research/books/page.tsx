import { PageShell, ComingSoon } from "@/components/page-shell";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "추천 도서" };

export default function BooksPage() {
  return (
    <PageShell
      eyebrow="Books"
      hanja="冊"
      title="추천 도서"
      description="역사·인문 입문서부터 정암 연구 전문서까지"
    >
      <ComingSoon
        note="원장 및 강사진이 추천하는 도서 큐레이션이 곧 올라옵니다."
        asset={cardAssets.books}
        hanja="冊"
      />
    </PageShell>
  );
}
