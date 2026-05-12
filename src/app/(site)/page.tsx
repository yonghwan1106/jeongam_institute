import Image from "next/image";
import Link from "next/link";
import { cardAssets, type CardAsset } from "@/lib/card-assets";
import { siteConfig } from "@/lib/site-config";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { recentPostsQuery } from "@/sanity/lib/queries";

type RecentPost = {
  _id: string;
  title: string;
  slug: string;
  category: "notice" | "press" | "activity" | "essay";
  excerpt?: string;
  publishedAt: string;
  coverImage?: { asset: { _ref: string }; alt?: string };
};

export const revalidate = 60;

export default async function Home() {
  const posts = await sanityFetch<RecentPost[]>(recentPostsQuery);
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ActivitiesSection posts={posts ?? []} />
      <JeongamSection />
      <YoutubeSection />
      <SupportCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden ink-wash text-hanji">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #f5f0e8 0px, transparent 2px), radial-gradient(circle at 80% 70%, #f5f0e8 0px, transparent 2px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="hanja text-sm tracking-[0.3em]">靜 庵 學 院</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-hanji mb-6">
            나라를 바로<br />세우고자 했던 정신
          </h1>
          <p className="text-base md:text-xl text-hanji/75 leading-relaxed mb-10 max-w-2xl">
            정암(靜庵) 조광조 선생의 도학정치 정신을 잇고,<br />
            역사·문화 답사와 강의를 통해 우리 동네의 역사를 함께 만들어갑니다.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/jeongam/life"
              className="rounded-sm bg-hanji px-7 py-3.5 text-center font-medium text-ink hover:bg-gold hover:text-hanji transition-colors"
            >
              정암을 만나다 →
            </Link>
            <Link
              href={siteConfig.cafeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-hanji/40 px-7 py-3.5 text-center font-medium text-hanji hover:bg-hanji/10 transition-colors"
            >
              네이버 카페 가입 ↗
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-hanji/15 pt-10">
          <Stat label="개설" value="2024.08" />
          <Stat label="회원" value="325명+" />
          <Stat label="누적 게시글" value="25,370" />
          <Stat label="활동 지역" value="용인 거점" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] tracking-widest text-hanji/50 mb-1">{label.toUpperCase()}</div>
      <div className="font-display text-2xl md:text-3xl text-hanji">{value}</div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="paper-texture py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-dancheong-red" />
              <span className="text-xs tracking-widest text-dancheong-red font-medium">ABOUT</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 leading-tight">
              깊은 골짜기에서<br />
              <span className="hanja">院書谷深</span>
            </h2>
            <p className="text-ink-soft leading-relaxed mb-4 text-base md:text-lg [overflow-wrap:anywhere]">
              조광조 역사연구원은 정암 선생을 배향한 <strong className="text-dancheong-red">심곡서원</strong>이 자리한
              용인을 거점으로, 역사 연구와 시민 교육을 잇는 비영리 단체입니다.
            </p>
            <p className="text-ink-mute leading-relaxed mb-8 [overflow-wrap:anywhere]">
              답사, 강의, 환경 정화, 지역 콘텐츠 제작을 통해 역사가 책 속에 머물지 않고
              <strong className="text-ink"> 우리 일상의 자긍심</strong>이 되도록 합니다.
            </p>
            <Link
              href="/about/intro"
              className="inline-flex items-center gap-2 text-ink font-medium border-b border-ink hover:text-dancheong-red hover:border-dancheong-red transition-colors pb-0.5"
            >
              연구원 소개 자세히 보기 →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCard hanja="學" title="역사 강의" desc="한국사·세계사 아카데미, Zoom 온라인 강의" asset={cardAssets.lecture} />
            <FeatureCard hanja="行" title="역사 답사" desc="심곡서원·서산·예산 등 정기 답사 프로그램" asset={cardAssets.pilgrimage} />
            <FeatureCard hanja="淨" title="환경 정화" desc="우리 동네 함께 가꾸는 시민 실천 활동" asset={cardAssets.cleanup} />
            <FeatureCard hanja="記" title="콘텐츠" desc="유튜브 쏠쏠한 역사TV, 답사 후기, 인물 연구" asset={cardAssets.content} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ hanja, title, desc, asset }: { hanja: string; title: string; desc: string; asset: CardAsset }) {
  return (
    <div className="group overflow-hidden border border-paper-line bg-hanji-warm transition-colors hover:border-dancheong-red">
      <div className="relative aspect-[4/3] border-b border-paper-line bg-ink/5">
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <span className="hanja absolute left-3 top-3 flex h-9 min-w-9 items-center justify-center border border-hanji/50 bg-ink/75 px-2 text-lg text-hanji">
          {hanja}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink mb-2">{title}</h3>
        <p className="text-sm text-ink-mute leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

const CATEGORY_HANJA: Record<RecentPost["category"], { tag: string; hanja: string; asset: CardAsset; baseHref: string }> = {
  notice: { tag: "공지", hanja: "告", asset: cardAssets.institute, baseHref: "/activities/notices" },
  press: { tag: "보도", hanja: "報", asset: cardAssets.content, baseHref: "/about/press" },
  activity: { tag: "활동", hanja: "行", asset: cardAssets.pilgrimage, baseHref: "/activities/notices" },
  essay: { tag: "에세이", hanja: "文", asset: cardAssets.essay, baseHref: "/research/essays" },
};

function ActivitiesSection({ posts }: { posts: RecentPost[] }) {
  const fallback = [
    { tag: "답사", title: "서산과 예산 답사", date: "26.05.01", views: 15, hanja: "行", asset: cardAssets.pilgrimage, href: "/activities/pilgrimage" },
    { tag: "강의", title: "역사와 문화가 있는 용인", date: "26.05.01", views: 17, hanja: "學", asset: cardAssets.lecture, href: "/activities/lectures" },
    { tag: "환경", title: "쓰레기도 줍고 역사도 배우고", date: "26.03.23", views: 40, hanja: "淨", asset: cardAssets.cleanup, href: siteConfig.cafeUrl, external: true },
    { tag: "아카데미", title: "제1기 한국사 아카데미 강좌", date: "26.02.07", views: 41, hanja: "院", asset: cardAssets.koreanHistory, href: "/activities/lectures" },
  ];
  const cmsItems = posts.map((p) => {
    const category = CATEGORY_HANJA[p.category] ?? CATEGORY_HANJA.notice;

    return {
      tag: category.tag,
      hanja: category.hanja,
      title: p.title,
      date: p.publishedAt.slice(2, 10).replace(/-/g, "."),
      views: 0,
      asset: category.asset,
      coverImage: p.coverImage,
      href: `${category.baseHref}/${p.slug}`,
      external: false,
    };
  });
  const items = [...cmsItems, ...fallback].slice(0, 4);

  return (
    <section className="bg-hanji-warm py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-dancheong-red" />
              <span className="text-xs tracking-widest text-dancheong-red font-medium">ACTIVITIES</span>
            </div>
            <h2 className="font-display text-4xl font-bold text-ink">최근 활동</h2>
          </div>
          <Link
            href={siteConfig.cafeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-mute hover:text-dancheong-red mt-4 md:mt-0"
          >
            카페에서 모두 보기 ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ActivityCard key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ActivityItem = {
  tag: string;
  hanja: string;
  title: string;
  date: string;
  views: number;
  asset: CardAsset;
  href: string;
  external?: boolean;
  coverImage?: RecentPost["coverImage"];
};

function ActivityCard({ item }: { item: ActivityItem }) {
  const imageSrc = item.coverImage?.asset ? urlForImage(item.coverImage).width(800).height(600).url() : item.asset.src;
  const imageAlt = item.coverImage?.alt ?? item.asset.alt;
  const card = (
    <article className="group h-full overflow-hidden border border-paper-line bg-hanji transition-all hover:border-ink">
      <div className="relative aspect-[4/3] border-b border-paper-line bg-ink/5">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="hanja absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center border border-hanji/50 bg-ink/75 px-2 text-xl text-hanji">
          {item.hanja}
        </span>
      </div>
      <div className="p-5">
        <div className="text-[11px] tracking-widest text-dancheong-red mb-2">{item.tag.toUpperCase()}</div>
        <h3 className="font-display text-base font-bold text-ink mb-3 leading-snug group-hover:text-dancheong-red transition-colors">
          {item.title}
        </h3>
        <div className="flex justify-between text-xs text-ink-mute">
          <span>{item.date}</span>
          {item.views > 0 && <span>조회 {item.views}</span>}
        </div>
      </div>
    </article>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {card}
      </a>
    );
  }

  return (
    <Link href={item.href} className="block h-full">
      {card}
    </Link>
  );
}

function JeongamSection() {
  return (
    <section className="relative ink-wash text-hanji py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="hanja text-xs tracking-[0.3em]">趙 光 祖</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-hanji mb-8 leading-tight">
            정암 조광조,<br />지치(至治)를 꿈꾼 개혁가
          </h2>
          <blockquote className="border-l-2 border-gold pl-6 py-2 mb-10">
            <p className="font-display text-xl md:text-2xl text-hanji/90 leading-relaxed italic">
              &ldquo;임금은 마땅히 도(道)로써 자신을 닦고,<br />
              어진 이를 등용하여 백성을 다스려야 한다.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-hanji/50">— 정암집(靜庵集) 중에서</footer>
          </blockquote>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <YearCard year="1482" event="한양 출생, 본관 한양 조씨" />
            <YearCard year="1515" event="성균관 추천으로 출사, 사림파 영수" />
            <YearCard year="1519" event="기묘사화로 사사(賜死), 향년 37세" />
          </div>
          <Link
            href="/jeongam/life"
            className="inline-flex items-center gap-2 border-b border-gold text-gold font-medium hover:text-hanji hover:border-hanji transition-colors pb-0.5"
          >
            정암의 생애와 사상 →
          </Link>
        </div>
      </div>
    </section>
  );
}

function YearCard({ year, event }: { year: string; event: string }) {
  return (
    <div className="border-t border-hanji/20 pt-4">
      <div className="font-display text-3xl text-gold mb-2">{year}</div>
      <p className="text-sm text-hanji/70 leading-relaxed">{event}</p>
    </div>
  );
}

function YoutubeSection() {
  return (
    <section className="paper-texture py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-dancheong-red" />
          <span className="text-xs tracking-widest text-dancheong-red font-medium">YOUTUBE</span>
          <span className="h-px w-8 bg-dancheong-red" />
        </div>
        <h2 className="font-display text-4xl font-bold text-ink mb-4">쏠쏠한 역사TV</h2>
        <p className="text-ink-mute mb-10 max-w-xl mx-auto">
          영상으로 만나는 한국사와 세계사. 답사 현장과 강의 핵심을 함께.
        </p>
        <Link
          href={siteConfig.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-sm bg-ink px-7 py-3.5 font-medium text-hanji-warm hover:bg-dancheong-red transition-colors"
        >
          <span className="text-lg">▶</span> 채널 바로가기
        </Link>
      </div>
    </section>
  );
}

function SupportCTA() {
  return (
    <section className="bg-dancheong-red text-hanji py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          역사를 함께 잇는 동행자가 되어주세요
        </h2>
        <p className="text-hanji/80 mb-8 leading-relaxed">
          여러분의 후원은 답사 프로그램, 강의 운영, 청소년 역사 교육 콘텐츠 제작에 쓰입니다.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/support"
            className="rounded-sm bg-hanji-warm px-7 py-3.5 font-medium text-ink hover:bg-ink hover:text-hanji-warm transition-colors"
          >
            후원하기 →
          </Link>
          <Link
            href="/join/apply"
            className="rounded-sm border border-hanji/50 px-7 py-3.5 font-medium hover:bg-hanji/10 transition-colors"
          >
            강의·답사 신청
          </Link>
        </div>
      </div>
    </section>
  );
}
