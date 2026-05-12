import Link from "next/link";

export function PageShell({
  eyebrow,
  hanja,
  title,
  description,
  children,
}: {
  eyebrow: string;
  hanja?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="ink-wash text-hanji">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <nav className="text-xs tracking-widest text-hanji/50 mb-6">
            <Link href="/" className="hover:text-hanji">HOME</Link>
            <span className="mx-2">/</span>
            <span>{eyebrow.toUpperCase()}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            {hanja && <span className="hanja text-sm tracking-[0.3em]">{hanja}</span>}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-hanji mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-hanji/70 max-w-3xl leading-relaxed">{description}</p>
          )}
        </div>
      </section>
      <section className="paper-texture py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">{children}</div>
      </section>
    </>
  );
}

export function ComingSoon({ note }: { note?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center py-16">
      <div className="hanja text-5xl text-ink/30 mb-6">院</div>
      <h2 className="font-display text-2xl font-bold text-ink mb-3">콘텐츠 준비 중입니다</h2>
      <p className="text-ink-mute leading-relaxed mb-8">
        {note ?? "정성껏 자료를 정리하고 있습니다. 그동안 네이버 카페에서 풍부한 글을 만나보실 수 있습니다."}
      </p>
      <Link
        href="https://cafe.naver.com/jkjhistoy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-hanji-warm hover:bg-dancheong-red transition-colors"
      >
        네이버 카페에서 보기 ↗
      </Link>
    </div>
  );
}
