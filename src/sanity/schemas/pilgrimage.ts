import { defineField, defineType } from "sanity";

export const pilgrimage = defineType({
  name: "pilgrimage",
  title: "답사",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "답사명",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL 슬러그",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "답사일",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "location",
      title: "지역",
      type: "string",
      placeholder: "예: 충남 서산·예산",
    }),
    defineField({
      name: "summary",
      title: "한 줄 소개",
      type: "text",
      rows: 2,
      validation: (r) => r.max(200),
    }),
    defineField({
      name: "coverImage",
      title: "대표 이미지",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "대체 텍스트" })],
    }),
    defineField({
      name: "gallery",
      title: "현장 사진",
      type: "array",
      of: [{ type: "image", options: { hotspot: true }, fields: [
        defineField({ name: "alt", type: "string", title: "대체 텍스트" }),
        defineField({ name: "caption", type: "string", title: "캡션" }),
      ]}],
    }),
    defineField({
      name: "report",
      title: "답사 후기",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "participantCount",
      title: "참가 인원",
      type: "number",
    }),
  ],
  orderings: [
    { title: "답사일 (최신순)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", location: "location", date: "date", media: "coverImage" },
    prepare({ title, location, date, media }) {
      return { title, subtitle: `${date ?? ""} · ${location ?? ""}`, media };
    },
  },
});
