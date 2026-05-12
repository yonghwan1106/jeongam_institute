import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "찾아오시는 길" };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      hanja="路"
      title="찾아오시는 길"
      description="용인을 거점으로 활동합니다. 연락은 이메일과 네이버 카페로."
    >
      <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-hanji-warm border border-paper-line p-8">
          <div className="hanja text-3xl mb-4">院</div>
          <h2 className="font-display text-xl font-bold text-ink mb-4">활동 거점</h2>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-ink-mute mb-1">지역</dt>
              <dd className="text-ink">{siteConfig.contact.region}</dd>
            </div>
            <div>
              <dt className="text-ink-mute mb-1">중심 답사지</dt>
              <dd className="text-ink">심곡서원 (수지구 상현동 203-2)</dd>
            </div>
            <div>
              <dt className="text-ink-mute mb-1">개설일</dt>
              <dd className="text-ink">{siteConfig.founded}</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-ink-mute leading-relaxed">
            상시 사무실은 운영하지 않으며, 답사·강의·모임 단위로 활동합니다.
            방문이 필요할 경우 사전 연락 부탁드립니다.
          </p>
        </div>

        <div className="bg-hanji-warm border border-paper-line p-8">
          <div className="hanja text-3xl mb-4">通</div>
          <h2 className="font-display text-xl font-bold text-ink mb-4">연락 방법</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-ink-mute mb-1">이메일</dt>
              <dd>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-dancheong-red underline">
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-mute mb-1">네이버 카페</dt>
              <dd>
                <a
                  href={siteConfig.cafeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dancheong-red underline"
                >
                  cafe.naver.com/jkjhistoy ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-mute mb-1">유튜브</dt>
              <dd>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dancheong-red underline"
                >
                  쏠쏠한 역사TV ↗
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-ink-mute leading-relaxed">
            가장 빠른 응답은 카페에 댓글 또는 쪽지를 남기는 것입니다.
          </p>
        </div>
      </div>

      <div className="mt-12 mx-auto max-w-3xl bg-hanji border border-paper-line p-8 text-center">
        <h3 className="font-display text-xl font-bold text-ink mb-3">강의·답사 신청</h3>
        <p className="text-ink-mute mb-6">
          참여를 원하시는 분은 아래 신청 페이지에서 양식을 작성해주세요.
        </p>
        <Link
          href="/join/apply"
          className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-hanji-warm hover:bg-dancheong-red transition-colors"
        >
          신청서 작성 →
        </Link>
      </div>
    </PageShell>
  );
}
