import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { cardAssets } from "@/lib/card-assets";

export const metadata = { title: "후원하기" };

export default function SupportPage() {
  const tiers = [
    {
      amount: "10,000",
      label: "한 권의 책",
      desc: "청소년 역사 교실에 책 한 권을 보탭니다.",
      hanja: "冊",
      asset: cardAssets.books,
    },
    {
      amount: "30,000",
      label: "한 사람의 답사",
      desc: "참여 회원 1인의 답사 차량비를 지원합니다.",
      hanja: "行",
      asset: cardAssets.pilgrimage,
      highlight: true,
    },
    {
      amount: "100,000",
      label: "한 번의 강의",
      desc: "지역 강좌 1회 운영을 함께 만들 수 있습니다.",
      hanja: "學",
      asset: cardAssets.lecture,
    },
  ];

  return (
    <PageShell
      eyebrow="Support"
      hanja="同 行 之 援"
      title="역사를 함께 잇다"
      description="여러분의 후원은 답사·강의·청소년 콘텐츠 제작에 쓰입니다. 영수증은 요청 시 발급해드립니다."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {tiers.map((t) => (
          <div
            key={t.amount}
            className={`relative bg-hanji-warm border p-8 text-center ${
              t.highlight ? "border-dancheong-red shadow-lg shadow-dancheong-red/10" : "border-paper-line"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dancheong-red text-hanji px-3 py-1 text-xs tracking-widest">
                추천
              </span>
            )}
            <div className="-mx-8 -mt-8 mb-6 relative aspect-[4/3] border-b border-paper-line bg-ink/5">
              <Image
                src={t.asset.src}
                alt={t.asset.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="hanja absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center border border-hanji/50 bg-ink/75 px-2 text-xl text-hanji">
                {t.hanja}
              </span>
            </div>
            <div className="font-display text-4xl font-bold text-ink mb-1">
              {t.amount}<span className="text-base ml-1 font-sans text-ink-mute">원</span>
            </div>
            <div className="text-sm tracking-widest text-dancheong-red mb-3">{t.label}</div>
            <p className="text-sm text-ink-mute leading-relaxed mb-6">{t.desc}</p>
            <button
              disabled
              className="w-full rounded-sm bg-ink/40 px-5 py-3 text-sm font-medium text-hanji-warm cursor-not-allowed"
              title="토스페이먼츠 연동 준비 중"
            >
              결제 준비 중
            </button>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-2xl bg-hanji border border-paper-line p-8">
        <h2 className="font-display text-xl font-bold text-ink mb-4">계좌 후원</h2>
        <div className="space-y-2 text-sm text-ink-soft">
          <p><span className="text-ink-mute">예금주</span> &nbsp; 조광조 역사연구원</p>
          <p><span className="text-ink-mute">은행</span> &nbsp; (준비 중)</p>
          <p><span className="text-ink-mute">계좌번호</span> &nbsp; (준비 중)</p>
        </div>
        <p className="mt-6 text-xs text-ink-mute leading-relaxed">
          * 온라인 결제(토스페이먼츠) 연동을 준비 중입니다. 그동안은 계좌 후원 또는
          <Link href="https://cafe.naver.com/jkjhistoy" target="_blank" rel="noopener noreferrer" className="text-dancheong-red underline mx-1">
            네이버 카페
          </Link>
          를 통해 문의 부탁드립니다.
        </p>
      </div>
    </PageShell>
  );
}
