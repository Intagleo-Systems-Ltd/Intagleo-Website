import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, CaseStudy, Testimonial } from "@/lib/content";
import type { ContentProvider } from "./interface";

const contentRoot = path.join(process.cwd(), "content");

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
  const processedData = { ...data };
  if (processedData.date instanceof Date) {
    processedData.date = processedData.date.toISOString().split("T")[0];
  }
  return { slug, ...(processedData as Omit<T, "slug" | "body">), body: content } as T & { body: string };
}

const filesProvider: ContentProvider = {
  // ── Blog ──────────────────────────────────────────────────────────────────

  getAllPosts(): BlogPost[] {
    return readDir("blog")
      .map((file) => parseFile<BlogPost>("blog", file.replace(/\.md$/, "")))
      .filter(Boolean)
      .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as BlogPost[];
  },

  getFeaturedPosts(): BlogPost[] {
    return filesProvider.getAllPosts().filter((p) => p.show_on_homepage !== false);
  },

  getPostsByPage(pageSlug: string): BlogPost[] {
    return filesProvider.getAllPosts().filter(
      (p) => Array.isArray(p.pages) && p.pages.includes(pageSlug)
    );
  },

  getPostBySlug(slug: string): BlogPost | null {
    return parseFile<BlogPost>("blog", slug);
  },

  getBlogSlugs(): string[] {
    return readDir("blog").map((f) => f.replace(/\.md$/, ""));
  },

  // ── Case Studies ──────────────────────────────────────────────────────────

  getAllCaseStudies(): CaseStudy[] {
    return readDir("case-studies")
      .map((file) => parseFile<CaseStudy>("case-studies", file.replace(/\.md$/, "")))
      .filter(Boolean) as CaseStudy[];
  },

  getFeaturedCaseStudies(): CaseStudy[] {
    return filesProvider.getAllCaseStudies().filter((s) => s.show_on_homepage !== false);
  },

  getCaseStudiesByPage(pageSlug: string): CaseStudy[] {
    return filesProvider.getAllCaseStudies().filter(
      (s) => Array.isArray(s.pages) && s.pages.includes(pageSlug)
    );
  },

  getCaseStudyBySlug(slug: string): CaseStudy | null {
    return parseFile<CaseStudy>("case-studies", slug);
  },

  getCaseStudySlugs(): string[] {
    return readDir("case-studies").map((f) => f.replace(/\.md$/, ""));
  },

  // ── Testimonials ──────────────────────────────────────────────────────────

  getAllTestimonials(): Testimonial[] {
    return readDir("testimonials")
      .map((file) => parseFile<Testimonial>("testimonials", file.replace(/\.md$/, "")))
      .filter(Boolean) as Testimonial[];
  },

  getFeaturedTestimonials(): Testimonial[] {
    return filesProvider.getAllTestimonials().filter((t) => t.show_on_homepage !== false);
  },
};

export default filesProvider;
