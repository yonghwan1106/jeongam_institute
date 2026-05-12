import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "게시글",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (r) => r.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "URL 슬러그",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "분류",
      type: "string",
      options: {
        list: [
          { title: "공지사항", value: "notice" },
          { title: "언론 보도", value: "press" },
          { title: "활동 소식", value: "activity" },
          { title: "에세이", value: "essay" },
        ],
        layout: "radio",
      },
      initialValue: "notice",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "요약",
      type: "text",
      rows: 3,
      description: "목록 카드에 보여질 짧은 요약 (200자 이내)",
      validation: (r) => r.max(200),
    }),
    defineField({
      name: "coverImage",
      title: "대표 이미지",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "대체 텍스트", type: "string" }),
      ],
    }),
    defineField({
      name: "body",
      title: "본문",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "대체 텍스트", type: "string" }),
            defineField({ name: "caption", title: "캡션", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "발행일",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "sourceUrl",
      title: "원문 링크 (언론 보도용)",
      type: "url",
      hidden: ({ document }) => document?.category !== "press",
    }),
  ],
  orderings: [
    {
      title: "발행일 (최신순)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", category: "category", publishedAt: "publishedAt", media: "coverImage" },
    prepare({ title, category, publishedAt, media }) {
      const labels: Record<string, string> = {
        notice: "공지",
        press: "언론",
        activity: "활동",
        essay: "에세이",
      };
      return {
        title,
        subtitle: `[${labels[category as string] ?? category}] ${publishedAt?.slice(0, 10) ?? ""}`,
        media,
      };
    },
  },
});
