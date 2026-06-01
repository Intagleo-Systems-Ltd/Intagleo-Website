import { remark } from "remark";
import html from "remark-html";
import type { PortableTextBlock } from "@portabletext/react";

export type { PortableTextBlock };
import filesProvider from "./providers/files";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category?: string;
  cover_image?: string;
  excerpt: string;
  seo_description: string;
  show_on_homepage?: boolean;
  pages?: string[];
  body: PortableTextBlock[] | string;
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
  body: PortableTextBlock[] | string;
}

export interface SledCaseStudy {
  slug: string;
  title: string;
  contractType?: string;
  customer?: string;
  value?: string;
  pdf_url?: string;
  pdf_name?: string;
  seo_description?: string;
  order?: number;
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

export interface Vacancy {
  _id: string;
  title: string;
  slug: string;
  department?: string;
  location?: string;
  type?: string;
  experience?: string;
  salary?: string;
  shortDescription: string;
  responsibilities?: string[];
  requirements?: string[];
  niceToHave?: string[];
  isOpen: boolean;
  postedAt?: string;
}

// ─── Markdown utility ─────────────────────────────────────────────────────────

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

// ─── Public API — delegates to active provider ────────────────────────────────
// Switch provider by setting CONTENT_PROVIDER=sanity in .env.local
// When using Sanity, import the async functions from lib/providers/sanity.ts
// directly in your API routes and page components.

const p = filesProvider;

export const getAllPosts         = () => p.getAllPosts();
export const getFeaturedPosts    = () => p.getFeaturedPosts();
export const getPostsByPage      = (slug: string) => p.getPostsByPage(slug);
export const getPostBySlug       = (slug: string) => p.getPostBySlug(slug);
export const getBlogSlugs        = () => p.getBlogSlugs();

export const getAllCaseStudies      = () => p.getAllCaseStudies();
export const getFeaturedCaseStudies = () => p.getFeaturedCaseStudies();
export const getCaseStudiesByPage   = (slug: string) => p.getCaseStudiesByPage(slug);
export const getCaseStudyBySlug     = (slug: string) => p.getCaseStudyBySlug(slug);
export const getCaseStudySlugs      = () => p.getCaseStudySlugs();

export const getAllTestimonials     = () => p.getAllTestimonials();
export const getFeaturedTestimonials = () => p.getFeaturedTestimonials();
