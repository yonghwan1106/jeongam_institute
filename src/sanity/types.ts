export type SanityImage = {
  asset: { _ref: string };
  alt?: string;
  caption?: string;
};

export type PostDetail = {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: SanityImage;
  body?: unknown[];
  sourceUrl?: string;
  category?: string;
};
