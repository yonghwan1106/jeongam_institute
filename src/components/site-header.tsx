"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DesktopNav } from "@/components/site-header/desktop-nav";
import { MobileNav } from "@/components/site-header/mobile-nav";

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

        <DesktopNav open={open} setOpen={setOpen} />

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

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
