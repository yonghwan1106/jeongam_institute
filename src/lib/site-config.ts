export const REVALIDATE_SECONDS = 3600;

const CAFE_URL = "https://cafe.naver.com/jkjhistoy";
const YOUTUBE_URL = "https://www.youtube.com/results?search_query=쏠쏠한+역사TV";

export const siteConfig = {
  name: "조광조 역사연구원",
  shortName: "역사연구원",
  slogan: "나라를 바로 세우고자 했던 정신",
  founded: "2024.08.14",
  cafeUrl: CAFE_URL,
  youtubeUrl: YOUTUBE_URL,
  contact: {
    email: "info@jeongam.org",
    region: "경기도 용인특례시",
  },
  nav: [
    {
      label: "연구원 소개",
      href: "/about",
      children: [
        { label: "원장 인사말", href: "/about/greeting" },
        { label: "연구원 소개", href: "/about/intro" },
        { label: "주요 활동", href: "/about/activities" },
        { label: "언론 보도", href: "/about/press" },
        { label: "찾아오시는 길", href: "/about/contact" },
      ],
    },
    {
      label: "정암 조광조",
      href: "/jeongam",
      children: [
        { label: "생애와 사상", href: "/jeongam/life" },
        { label: "도학정치", href: "/jeongam/dohak" },
        { label: "기묘사화", href: "/jeongam/gimyo" },
        { label: "심곡서원", href: "/jeongam/simgok" },
        { label: "정암집", href: "/jeongam/works" },
      ],
    },
    {
      label: "연구·콘텐츠",
      href: "/research",
      children: [
        { label: "역사에 풍덩 빠지다", href: "/research/essays" },
        { label: "교과서 한국사", href: "/research/korean" },
        { label: "교과서 세계사", href: "/research/world" },
        { label: "추천 도서", href: "/research/books" },
      ],
    },
    {
      label: "활동·소식",
      href: "/activities",
      children: [
        { label: "답사 아카이브", href: "/activities/pilgrimage" },
        { label: "강의·아카데미", href: "/activities/lectures" },
        { label: "사진 갤러리", href: "/activities/gallery" },
        { label: "공지사항", href: "/activities/notices" },
      ],
    },
    {
      label: "우리 동네 용인",
      href: "/yongin",
      children: [
        { label: "용인의 역사·문화·인물", href: "/yongin/heritage" },
        { label: "시정 제안", href: "/yongin/proposals" },
      ],
    },
    {
      label: "참여하기",
      href: "/join",
      children: [
        { label: "회원 가입 (카페)", href: CAFE_URL, external: true },
        { label: "강의·답사 신청", href: "/join/apply" },
        { label: "후원하기", href: "/support" },
        { label: "쏠쏠한 역사TV", href: YOUTUBE_URL, external: true },
      ],
    },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
export type NavChild = NavItem["children"][number];
