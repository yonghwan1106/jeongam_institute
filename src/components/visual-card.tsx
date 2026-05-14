import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { CardAsset } from "@/lib/card-assets";

type ImageAspect = "aspect-[4/3]" | "aspect-[3/4]" | "aspect-square" | "aspect-video";

type VisualCardProps = {
  asset: CardAsset;
  title: string;
  description?: string;
  hanja?: string;
  href?: string;
  external?: boolean;
  meta?: string;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  imageAspect?: ImageAspect;
};

export function VisualCard({
  asset,
  title,
  description,
  hanja,
  href,
  external,
  meta,
  footer,
  children,
  className = "",
  imageAspect = "aspect-[4/3]",
}: VisualCardProps) {
  const card = (
    <article
      className={`group flex h-full flex-col overflow-hidden border border-paper-line bg-hanji-warm transition-all hover:border-dancheong-red ${className}`}
    >
      <div className={`relative overflow-hidden border-b border-paper-line bg-ink/5 ${imageAspect}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        {hanja && (
          <span className="hanja absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center border border-hanji/50 bg-ink/75 px-2 text-xl text-hanji shadow-sm">
            {hanja}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {meta && <div className="mb-2 text-[11px] tracking-widest text-dancheong-red">{meta.toUpperCase()}</div>}
        <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-dancheong-red">
          {title}
        </h3>
        {description && <p className="mt-2 text-sm leading-relaxed text-ink-mute">{description}</p>}
        {children && <div className="mt-4 text-sm leading-relaxed text-ink-soft">{children}</div>}
        {footer && <div className="mt-auto pt-4 text-xs text-ink-mute">{footer}</div>}
      </div>
    </article>
  );

  if (!href) {
    return card;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  );
}
