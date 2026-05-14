import Image from "next/image";
import { PortableText as BasePortableText, PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const src = urlForImage(value).width(1200).url();
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt ?? ""}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-ink-mute">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => <h2 className="font-display text-3xl font-bold text-ink mt-10 mb-4">{children}</h2>,
    h2: ({ children }) => <h3 className="font-display text-2xl font-bold text-ink mt-8 mb-3">{children}</h3>,
    h3: ({ children }) => <h4 className="font-display text-xl font-bold text-ink mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-dancheong-red pl-4 italic text-ink-soft">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="text-ink-soft leading-relaxed my-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const rawHref = typeof value?.href === "string" ? value.href : "";
      const safeHref = /^(https?:|mailto:|tel:|\/)/i.test(rawHref) ? rawHref : "#";
      const isExternal = /^https?:/i.test(safeHref);
      return (
        <a
          href={safeHref}
          {...(isExternal && {
            target: "_blank",
            rel: "noopener noreferrer nofollow ugc",
          })}
          className="text-dancheong-red underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="text-ink font-bold">{children}</strong>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-1 text-ink-soft">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-1 text-ink-soft">{children}</ol>,
  },
};

export function PortableText({ value }: { value: PortableTextBlock | PortableTextBlock[] | unknown }) {
  return <BasePortableText value={value as PortableTextBlock[]} components={components} />;
}
