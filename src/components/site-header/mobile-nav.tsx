"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type Props = {
  onClose: () => void;
};

export function MobileNav({ onClose }: Props) {
  return (
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
                  onClick={onClose}
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
  );
}
