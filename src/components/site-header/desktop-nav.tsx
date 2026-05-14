"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type Props = {
  open: string | null;
  setOpen: (href: string | null) => void;
};

export function DesktopNav({ open, setOpen }: Props) {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {siteConfig.nav.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => setOpen(item.href)}
          onMouseLeave={() => setOpen(null)}
          onFocus={() => setOpen(item.href)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
          }}
        >
          <Link
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-ink-soft hover:text-dancheong-red transition-colors"
          >
            {item.label}
          </Link>
          {open === item.href && (
            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
              <div className="min-w-[180px] rounded-sm border border-paper-line bg-hanji-warm shadow-lg shadow-ink/10">
                {item.children.map((child) => {
                  const isExternal = "external" in child && child.external;
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="block px-4 py-2.5 text-sm text-ink-soft hover:bg-hanji-deep hover:text-dancheong-red transition-colors"
                    >
                      {child.label}
                      {isExternal && <span className="ml-1 text-xs text-ink-mute">↗</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
