import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="ink-wash text-hanji/80 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-hanji/40">
                <span className="font-display text-base text-hanji">靜</span>
              </div>
              <div>
                <div className="font-display text-base font-bold text-hanji">{siteConfig.name}</div>
                <div className="text-[11px] tracking-widest text-hanji/50">JEONGAM INSTITUTE</div>
              </div>
            </div>
            <p className="font-display text-lg text-hanji mb-2">{siteConfig.slogan}</p>
            <p className="text-sm text-hanji/60 leading-relaxed">
              정암(靜庵) 조광조 선생의 도학정치 정신을 잇고, 역사·문화 답사와 강의를 통해
              우리 동네의 역사를 함께 만들어갑니다.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href={siteConfig.cafeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-hanji/40 px-4 py-2 text-sm hover:bg-hanji hover:text-ink transition-colors"
              >
                네이버 카페 ↗
              </Link>
              <Link
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-hanji/40 px-4 py-2 text-sm hover:bg-hanji hover:text-ink transition-colors"
              >
                유튜브 ↗
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-hanji mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-dancheong-red">연구원 소개</Link></li>
              <li><Link href="/jeongam" className="hover:text-dancheong-red">정암 조광조</Link></li>
              <li><Link href="/activities/lectures" className="hover:text-dancheong-red">강의·아카데미</Link></li>
              <li><Link href="/activities/pilgrimage" className="hover:text-dancheong-red">답사 아카이브</Link></li>
              <li><Link href="/support" className="hover:text-dancheong-red">후원하기</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-hanji mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-hanji/70">
              <li>{siteConfig.contact.region}</li>
              <li>{siteConfig.contact.email}</li>
              <li className="text-hanji/50">개설 · {siteConfig.founded}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-hanji/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-hanji/40">
          <p>© 2024–{new Date().getFullYear()} 조광조 역사연구원 · {siteConfig.name}. All rights reserved.</p>
          <p className="font-display">院書谷深 — 심곡서원</p>
        </div>
      </div>
    </footer>
  );
}
