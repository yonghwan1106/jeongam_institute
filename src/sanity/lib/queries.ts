export const recentPostsQuery = /* groq */ `
  *[_type == "post"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    publishedAt,
    coverImage
  }
`;

export const recentPilgrimagesQuery = /* groq */ `
  *[_type == "pilgrimage"] | order(date desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    date,
    location,
    summary,
    coverImage
  }
`;

export const recentLecturesQuery = /* groq */ `
  *[_type == "lecture"] | order(_createdAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    track,
    schedule,
    coverImage,
    applyUrl
  }
`;

export const allPostsByCategoryQuery = /* groq */ `
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage
  }
`;
