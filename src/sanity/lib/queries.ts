export const recentPostsQuery = /* groq */ `
  *[_type == "post"] | order(publishedAt desc)[0...$limit] {
    _id, title, "slug": slug.current, category, excerpt, publishedAt, coverImage
  }
`;

export const allPostsByCategoryQuery = /* groq */ `
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, publishedAt, coverImage
  }
`;

export const postBySlugQuery = /* groq */ `
  *[_type == "post" && category == $category && slug.current == $slug][0]{
    _id, title, excerpt, publishedAt, coverImage, body, sourceUrl, category
  }
`;

export const postSlugsByCategoryQuery = /* groq */ `
  *[_type == "post" && category == $category && defined(slug.current)][].slug.current
`;

export const allPilgrimagesQuery = /* groq */ `
  *[_type == "pilgrimage"] | order(date desc) {
    _id, title, "slug": slug.current, date, location, summary, coverImage,
    "photoCount": count(gallery)
  }
`;

export const pilgrimageBySlugQuery = /* groq */ `
  *[_type == "pilgrimage" && slug.current == $slug][0]{
    _id, title, date, location, summary, coverImage, gallery, report, participantCount
  }
`;

export const pilgrimageSlugsQuery = /* groq */ `
  *[_type == "pilgrimage" && defined(slug.current)][].slug.current
`;

export const allLecturesQuery = /* groq */ `
  *[_type == "lecture"] | order(schedule desc) {
    _id, title, "slug": slug.current, track, session, schedule, instructor, venue,
    coverImage, applyUrl, videoUrl
  }
`;

export const lectureBySlugQuery = /* groq */ `
  *[_type == "lecture" && slug.current == $slug][0]{
    _id, title, track, session, schedule, instructor, venue,
    coverImage, description, videoUrl, applyUrl
  }
`;

export const lectureSlugsQuery = /* groq */ `
  *[_type == "lecture" && defined(slug.current)][].slug.current
`;

export const allGalleryImagesQuery = /* groq */ `
  *[_type == "pilgrimage" && defined(gallery) && count(gallery) > 0] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    "images": gallery[]{ asset, alt, caption }
  }
`;
