import { PageShell, ComingSoon } from "@/components/page-shell";

export const metadata = { title: "교과서 한국사" };

export default function KoreanPage() {
  return (
    <PageShell
      eyebrow="Korean History"
      hanja="韓 國 史"
      title="교과서 한국사"
      description="교과 연계 한국사를 시민의 언어로 풀어내는 자료실"
    >
      <ComingSoon note="교과서 단원에 맞춘 시민 해설 자료를 준비 중입니다. 그동안 카페의 '교과서 한국사' 게시판을 참고해주세요." />
    </PageShell>
  );
}
