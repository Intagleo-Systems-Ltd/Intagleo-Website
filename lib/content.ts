import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentRoot = path.join(process.cwd(), "content");

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  cover_image?: string;
  excerpt: string;
  seo_description: string;
  show_on_homepage?: boolean;
  pages?: string[];
  body: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  cover_image?: string;
  rive_url?: string;
  challenge: string;
  solution: string;
  results: string;
  seo_description?: string;
  show_on_homepage?: boolean;
  pages?: string[];
  body: string;
}

export interface Testimonial {
  slug: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  photo?: string;
  show_on_homepage?: boolean;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function readDir(type: string): string[] {
  const dir = path.join(contentRoot, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

function parseFile<T>(type: string, slug: string): (T & { body: string }) | null {
  const fullPath = path.join(contentRoot, type, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  // Convert Date objects to strings
  const processedData = { ...data };
  if (processedData.date instanceof Date) {
    processedData.date = processedData.date.toISOString().split('T')[0];
  }

  return { slug, ...(processedData as Omit<T, "slug" | "body">), body: content } as T & {
    body: string;
  };
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
  return readDir("blog")
    .map((file) => parseFile<BlogPost>("blog", file.replace(/\.md$/, "")))
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as BlogPost[];
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.show_on_homepage !== false);
}

export function getPostsByPage(pageSlug: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => Array.isArray(post.pages) && post.pages.includes(pageSlug)
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  return parseFile<BlogPost>("blog", slug);
}

export function getBlogSlugs(): string[] {
  return readDir("blog").map((f) => f.replace(/\.md$/, ""));
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export function getAllCaseStudies(): CaseStudy[] {
  return readDir("case-studies")
    .map((file) =>
      parseFile<CaseStudy>("case-studies", file.replace(/\.md$/, ""))
    )
    .filter(Boolean) as CaseStudy[];
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((study) => study.show_on_homepage !== false);
}

export function getCaseStudiesByPage(pageSlug: string): CaseStudy[] {
  return getAllCaseStudies().filter(
    (study) => Array.isArray(study.pages) && study.pages.includes(pageSlug)
  );
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return parseFile<CaseStudy>("case-studies", slug);
}

export function getCaseStudySlugs(): string[] {
  return readDir("case-studies").map((f) => f.replace(/\.md$/, ""));
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export function getAllTestimonials(): Testimonial[] {
  return readDir("testimonials")
    .map((file) =>
      parseFile<Testimonial>("testimonials", file.replace(/\.md$/, ""))
    )
    .filter(Boolean) as Testimonial[];
}

export function getFeaturedTestimonials(): Testimonial[] {
  return getAllTestimonials().filter((testimonial) => testimonial.show_on_homepage !== false);
}
