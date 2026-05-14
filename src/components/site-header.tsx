"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line/60 bg-hanji-warm/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/30 bg-ink text-hanji-warm transition-colors group-hover:bg-dancheong-red">
            <span className="font-display text-lg">靜</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-ink">조광조 역사연구원</div>
            <div className="text-[11px] tracking-widest text-ink-mute">JEONGAM INSTITUTE</div>
          </div>
        </Link>

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

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/support"
            className="rounded-sm bg-dancheong-red px-4 py-2 text-sm font-medium text-hanji-warm hover:bg-ink transition-colors"
          >
            후원하기
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-ink"
          aria-label="메뉴"
        >
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-paper-line bg-hanji-warm">
          <nav className="px-6 py-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <details key={item.href} className="group">
                <summary className="cursor-pointer py-2 font-medium text-ink-soft">
                  {item.label}
                </summary>
                <div className="pl-4 space-y-1 mt-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-sm text-ink-mute hover:text-dancheong-red"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link
              href="/support"
              className="block text-center rounded-sm bg-dancheong-red px-4 py-3 text-sm font-medium text-hanji-warm"
            >
              후원하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
