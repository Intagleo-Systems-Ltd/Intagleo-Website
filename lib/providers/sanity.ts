import { createClient } from "@sanity/client";
import type { BlogPost, CaseStudy, Testimonial, Vacancy } from "@/lib/content";
import type { ContentProvider } from "./interface";

let _client: ReturnType<typeof createClient> | null = null;
function getClient() {
  if (!_client) {
    _client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
      token: process.env.SANITY_API_TOKEN,
    });
  }
  return _client;
}

// ── GROQ query fragments ──────────────────────────────────────────────────────

const blogFields = `
  "slug": slug.current,
  title, date, author,
  cover_image,
  excerpt, seo_description,
  show_on_homepage,
  pages,
  body
`;

const caseStudyFields = `
  "slug": slug.current,
  title, client, industry,
  cover_image,
  rive_url, challenge, solution, results,
  seo_description, show_on_homepage, pages,
  body
`;

const testimonialFields = `
  "slug": slug.current,
  name, title, company, quote,
  "photo": photo.asset->url,
  show_on_homepage
`;

// ── Helpers ───────────────────────────────────────────────────────────────────

function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ── Provider ──────────────────────────────────────────────────────────────────

const sanityProvider: ContentProvider = {
  // ── Blog ────────────────────────────────────────────────────────────────────

  getAllPosts(): BlogPost[] {
    throw new Error("getAllPosts must be called async — use getAllPostsAsync");
  },

  getFeaturedPosts(): BlogPost[] {
    throw new Error("Use getFeaturedPostsAsync");
  },

  getPostsByPage(_pageSlug: string): BlogPost[] {
    throw new Error("Use getPostsByPageAsync");
  },

  getPostBySlug(_slug: string): BlogPost | null {
    throw new Error("Use getPostBySlugAsync");
  },

  getBlogSlugs(): string[] {
    throw new Error("Use getBlogSlugsAsync");
  },

  // ── Case Studies ────────────────────────────────────────────────────────────

  getAllCaseStudies(): CaseStudy[] {
    throw new Error("Use getAllCaseStudiesAsync");
  },

  getFeaturedCaseStudies(): CaseStudy[] {
    throw new Error("Use getFeaturedCaseStudiesAsync");
  },

  getCaseStudiesByPage(_pageSlug: string): CaseStudy[] {
    throw new Error("Use getCaseStudiesByPageAsync");
  },

  getCaseStudyBySlug(_slug: string): CaseStudy | null {
    throw new Error("Use getCaseStudyBySlugAsync");
  },

  getCaseStudySlugs(): string[] {
    throw new Error("Use getCaseStudySlugsAsync");
  },

  // ── Testimonials ────────────────────────────────────────────────────────────

  getAllTestimonials(): Testimonial[] {
    throw new Error("Use getAllTestimonialsAsync");
  },

  getFeaturedTestimonials(): Testimonial[] {
    throw new Error("Use getFeaturedTestimonialsAsync");
  },
};

// ── Async API (Sanity requires async fetching) ────────────────────────────────

export async function getAllPostsAsync(): Promise<BlogPost[]> {
  const posts = await getClient().fetch<BlogPost[]>(`*[_type == "blogPost"] | order(date desc) { ${blogFields} }`);
  return sortByDate(posts);
}

export async function getFeaturedPostsAsync(): Promise<BlogPost[]> {
  return getClient().fetch<BlogPost[]>(`*[_type == "blogPost" && show_on_homepage != false] | order(date desc) { ${blogFields} }`);
}

export async function getPostsByPageAsync(pageSlug: string): Promise<BlogPost[]> {
  return getClient().fetch<BlogPost[]>(
    `*[_type == "blogPost" && $pageSlug in pages] | order(date desc) { ${blogFields} }`,
    { pageSlug }
  );
}

export async function getPostBySlugAsync(slug: string): Promise<BlogPost | null> {
  const result = await getClient().fetch<BlogPost>(
    `*[_type == "blogPost" && slug.current == $slug][0] { ${blogFields} }`,
    { slug }
  );
  return result ?? null;
}

export async function getBlogSlugsAsync(): Promise<string[]> {
  const results = await getClient().fetch<{ slug: string }[]>(`*[_type == "blogPost"] { "slug": slug.current }`);
  return results.map((r) => r.slug);
}

export async function getAllCaseStudiesAsync(): Promise<CaseStudy[]> {
  return getClient().fetch<CaseStudy[]>(`*[_type == "caseStudy"] { ${caseStudyFields} }`);
}

export async function getFeaturedCaseStudiesAsync(): Promise<CaseStudy[]> {
  return getClient().fetch<CaseStudy[]>(`*[_type == "caseStudy" && show_on_homepage != false] { ${caseStudyFields} }`);
}

export async function getCaseStudiesByPageAsync(pageSlug: string): Promise<CaseStudy[]> {
  return getClient().fetch<CaseStudy[]>(
    `*[_type == "caseStudy" && $pageSlug in pages] { ${caseStudyFields} }`,
    { pageSlug }
  );
}

export async function getCaseStudyBySlugAsync(slug: string): Promise<CaseStudy | null> {
  const result = await getClient().fetch<CaseStudy>(
    `*[_type == "caseStudy" && slug.current == $slug][0] { ${caseStudyFields} }`,
    { slug }
  );
  return result ?? null;
}

export async function getCaseStudySlugsAsync(): Promise<string[]> {
  const results = await getClient().fetch<{ slug: string }[]>(`*[_type == "caseStudy"] { "slug": slug.current }`);
  return results.map((r) => r.slug);
}

export async function getAllTestimonialsAsync(): Promise<Testimonial[]> {
  return getClient().fetch<Testimonial[]>(`*[_type == "testimonial"] { ${testimonialFields} }`);
}

export async function getFeaturedTestimonialsAsync(): Promise<Testimonial[]> {
  return getClient().fetch<Testimonial[]>(`*[_type == "testimonial" && show_on_homepage != false] { ${testimonialFields} }`);
}

export async function getVacanciesAsync(): Promise<Vacancy[]> {
  return getClient().fetch<Vacancy[]>(
    `*[_type == "vacancy" && isOpen != false] | order(postedAt desc) {
      "_id": _id,
      title,
      "slug": slug.current,
      department, location, type, experience, salary,
      shortDescription, responsibilities, requirements, niceToHave,
      isOpen, postedAt
    }`
  );
}

export { getClient as sanityClient };
export default sanityProvider;
