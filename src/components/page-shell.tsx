import Image from "next/image";
import Link from "next/link";
import { cardAssets, type CardAsset } from "@/lib/card-assets";
import { siteConfig } from "@/lib/site-config";

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

export function ComingSoon({
  note,
  asset = cardAssets.institute,
  hanja = "院",
}: {
  note?: string;
  asset?: CardAsset;
  hanja?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden border border-paper-line bg-hanji-warm text-center">
      <div className="relative aspect-[16/9] border-b border-paper-line bg-ink/5">
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 640px"
        />
        <span className="hanja absolute left-5 top-5 flex h-12 min-w-12 items-center justify-center border border-hanji/50 bg-ink/75 px-3 text-2xl text-hanji">
          {hanja}
        </span>
      </div>
      <div className="p-8">
        <h2 className="font-display text-2xl font-bold text-ink mb-3">콘텐츠 준비 중입니다</h2>
        <p className="text-ink-mute leading-relaxed mb-8">
          {note ?? "정성껏 자료를 정리하고 있습니다. 그동안 네이버 카페에서 풍부한 글을 만나보실 수 있습니다."}
        </p>
        <Link
          href={siteConfig.cafeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-hanji-warm hover:bg-dancheong-red transition-colors"
        >
          네이버 카페에서 보기 ↗
        </Link>
      </div>
    </div>
  );
}
