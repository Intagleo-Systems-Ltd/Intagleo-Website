import type { BlogPost, CaseStudy, Testimonial } from "@/lib/content";

export interface ContentProvider {
  // Blog
  getAllPosts(): BlogPost[];
  getFeaturedPosts(): BlogPost[];
  getPostsByPage(pageSlug: string): BlogPost[];
  getPostBySlug(slug: string): BlogPost | null;
  getBlogSlugs(): string[];

  // Case Studies
  getAllCaseStudies(): CaseStudy[];
  getFeaturedCaseStudies(): CaseStudy[];
  getCaseStudiesByPage(pageSlug: string): CaseStudy[];
  getCaseStudyBySlug(slug: string): CaseStudy | null;
  getCaseStudySlugs(): string[];

  // Testimonials
  getAllTestimonials(): Testimonial[];
  getFeaturedTestimonials(): Testimonial[];
}
