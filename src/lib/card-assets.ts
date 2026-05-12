export type CardAsset = {
  src: string;
  alt: string;
  sourceKind: "official" | "generated";
  attribution: string;
};

export const cardAssets = {
  simgok: {
    src: "/images/cards/real-simgok.jpg",
    alt: "국가유산포털 용인 심곡서원 대표 사진",
    sourceKind: "official",
    attribution: "국가유산청 국가유산포털, 용인 심곡서원",
  },
  chungnyeol: {
    src: "/images/cards/real-chungnyeol.jpg",
    alt: "국가유산포털 충렬서원 대표 사진",
    sourceKind: "official",
    attribution: "국가유산청 국가유산포털, 충렬서원",
  },
  cheoinseong: {
    src: "/images/cards/real-cheoinseong.jpg",
    alt: "국가유산포털 처인성 대표 사진",
    sourceKind: "official",
    attribution: "국가유산청 국가유산포털, 처인성",
  },
  seoriKiln: {
    src: "/images/cards/real-seori-kiln.jpg",
    alt: "국가유산포털 용인 서리 고려백자 요지 대표 사진",
    sourceKind: "official",
    attribution: "국가유산청 국가유산포털, 용인 서리 고려백자 요지",
  },
  institute: {
    src: "/images/cards/jeongam-institute.jpg",
    alt: "한지와 기록물 콜라주로 표현한 조광조 역사연구원",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  lecture: {
    src: "/images/cards/jeongam-lecture.jpg",
    alt: "강의 책상과 역사 자료를 담은 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  pilgrimage: {
    src: "/images/cards/jeongam-pilgrimage.jpg",
    alt: "답사 지도와 서원 길을 담은 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  cleanup: {
    src: "/images/cards/jeongam-cleanup.jpg",
    alt: "역사 현장 환경 정화를 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  content: {
    src: "/images/cards/jeongam-content.jpg",
    alt: "카메라와 아카이브 자료를 담은 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  essay: {
    src: "/images/cards/jeongam-essay.jpg",
    alt: "역사 에세이 집필 책상을 담은 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  koreanHistory: {
    src: "/images/cards/jeongam-korean-history.jpg",
    alt: "한국사 교과 자료를 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  worldHistory: {
    src: "/images/cards/jeongam-world-history.jpg",
    alt: "세계사 흐름을 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  books: {
    src: "/images/cards/jeongam-books.jpg",
    alt: "역사 도서와 독서 큐레이션을 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  community: {
    src: "/images/cards/jeongam-community.jpg",
    alt: "지역 역사 공동체 모임을 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  support: {
    src: "/images/cards/jeongam-support.jpg",
    alt: "역사 교육 후원을 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  dohak: {
    src: "/images/cards/jeongam-dohak.jpg",
    alt: "정암의 도학정치 사상을 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  works: {
    src: "/images/cards/jeongam-works.jpg",
    alt: "정암집과 고문헌 연구를 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
  proposals: {
    src: "/images/cards/jeongam-proposals.jpg",
    alt: "용인 지역 정책 제안을 표현한 정암 기록화 콜라주",
    sourceKind: "generated",
    attribution: "GPT Image 2.0 generated card image",
  },
} satisfies Record<string, CardAsset>;

export type CardAssetKey = keyof typeof cardAssets;
