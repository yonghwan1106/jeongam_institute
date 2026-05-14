import Link from "next/link";

export default function SiteNotFound() {
  return (
    <section className="paper-texture py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="mb-4 flex justify-center">
          <span className="hanja text-4xl text-dancheong-red">無</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-ink mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-ink-mute leading-relaxed mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-block rounded-sm bg-ink px-6 py-3 font-medium text-hanji-warm hover:bg-dancheong-red transition-colors"
        >
          홈으로 돌아가기 →
        </Link>
      </div>
    </section>
  );
}
