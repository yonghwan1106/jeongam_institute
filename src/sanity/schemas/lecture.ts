import { defineField, defineType } from "sanity";

export const lecture = defineType({
  name: "lecture",
  title: "강의·아카데미",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "강의명",
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
      name: "track",
      title: "트랙",
      type: "string",
      options: {
        list: [
          { title: "한국사 아카데미", value: "korean" },
          { title: "세계사 아카데미", value: "world" },
          { title: "특강", value: "special" },
          { title: "온라인(Zoom)", value: "online" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "session",
      title: "회차",
      type: "string",
      placeholder: "예: 제1기 3강",
    }),
    defineField({
      name: "schedule",
      title: "일정",
      type: "string",
      placeholder: "예: 2026.06.07 (토) 14:00",
    }),
    defineField({
      name: "instructor",
      title: "강사",
      type: "string",
    }),
    defineField({
      name: "venue",
      title: "장소",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "강의 소개",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coverImage",
      title: "포스터/이미지",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "대체 텍스트" })],
    }),
    defineField({
      name: "videoUrl",
      title: "영상 링크 (유튜브 등)",
      type: "url",
    }),
    defineField({
      name: "applyUrl",
      title: "신청 링크",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "title", track: "track", schedule: "schedule", media: "coverImage" },
    prepare({ title, track, schedule, media }) {
      return { title, subtitle: `[${track}] ${schedule ?? ""}`, media };
    },
  },
});
