import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "인물",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "성명",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL 슬러그",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "courtesyName", title: "자(字)", type: "string" }),
    defineField({ name: "penName", title: "호(號)", type: "string", placeholder: "예: 정암(靜庵)" }),
    defineField({ name: "birthYear", title: "출생", type: "number" }),
    defineField({ name: "deathYear", title: "타계", type: "number" }),
    defineField({
      name: "role",
      title: "역할",
      type: "string",
      options: {
        list: [
          { title: "정암 본인", value: "jeongam" },
          { title: "관련 인물", value: "related" },
          { title: "연구원", value: "staff" },
          { title: "강사", value: "instructor" },
        ],
      },
    }),
    defineField({
      name: "portrait",
      title: "초상/사진",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "대체 텍스트" })],
    }),
    defineField({
      name: "summary",
      title: "한 줄 소개",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "biography",
      title: "약전",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "timeline",
      title: "연표",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "year", type: "string", title: "연도" }),
          defineField({ name: "event", type: "string", title: "사건" }),
        ],
        preview: { select: { title: "year", subtitle: "event" } },
      }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "penName", media: "portrait" },
  },
});
