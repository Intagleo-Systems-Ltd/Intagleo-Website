import { MetadataRoute } from "next";
import {
  getBlogSlugsAsync,
  getCaseStudySlugsAsync,
  getSledCaseStudySlugsAsync,
} from "@/lib/providers/sanity";
import { sanityClient } from "@/lib/providers/sanity";

const BASE = "https://intagleo.com";

const staticRoutes: MetadataRoute.Sitemap = [
  // Core
  { url: BASE,                  priority: 1.0, changeFrequency: "weekly"  },
  { url: `${BASE}/about`,       priority: 0.9, changeFrequency: "monthly" },
  { url: `${BASE}/contact`,     priority: 0.9, changeFrequency: "monthly" },
  { url: `${BASE}/our-products`,priority: 0.8, changeFrequency: "monthly" },

  // Content hubs
  { url: `${BASE}/blog`,         priority: 0.8, changeFrequency: "daily"  },
  { url: `${BASE}/case-studies`, priority: 0.8, changeFrequency: "weekly" },
  { url: `${BASE}/testimonials`, priority: 0.7, changeFrequency: "weekly" },
  { url: `${BASE}/join-us`,      priority: 0.7, changeFrequency: "weekly" },

  // Services
  { url: `${BASE}/custom-software`,      priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE}/us-sled`,              priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE}/ai-transformation`,    priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE}/mobile-dev`,           priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE}/cloud-devops`,         priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE}/qa-services`,          priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/staff-augmentation`,   priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/legacy-modernization`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/data-analytics`,       priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/embedded-iot`,         priority: 0.7, changeFrequency: "monthly" },

  // Industries
  { url: `${BASE}/smart-cities`,          priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/fintech`,               priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/healthcare`,            priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/digital-signage`,       priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/ecommerce-retail`,      priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/hr-recruitment`,        priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/facilities-management`, priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE}/edtech`,                priority: 0.6, changeFrequency: "monthly" },
  { url: `${BASE}/real-estate`,           priority: 0.6, changeFrequency: "monthly" },
  { url: `${BASE}/transportation`,        priority: 0.6, changeFrequency: "monthly" },
  { url: `${BASE}/travel`,               priority: 0.6, changeFrequency: "monthly" },

  // Legal
  { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" },
  { url: `${BASE}/cookie-policy`,  priority: 0.3, changeFrequency: "yearly" },
];

async function getVacancySlugs(): Promise<string[]> {
  try {
    const results = await sanityClient().fetch<{ slug: string }[]>(
      `*[_type == "vacancy" && isOpen != false] { "slug": slug.current }`
    );
    return results.map((r) => r.slug).filter(Boolean);
  } catch {
    return [];
  }
}

async function getTestimonialSlugs(): Promise<string[]> {
  try {
    const results = await sanityClient().fetch<{ slug: string }[]>(
      `*[_type == "testimonial"] { "slug": slug.current }`
    );
    return results.map((r) => r.slug).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogSlugs, caseSlugs, sledSlugs, testimonialSlugs, vacancySlugs] =
    await Promise.all([
      getBlogSlugsAsync().catch(() => [] as string[]),
      getCaseStudySlugsAsync().catch(() => [] as string[]),
      getSledCaseStudySlugsAsync().catch(() => [] as string[]),
      getTestimonialSlugs(),
      getVacancySlugs(),
    ]);

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const caseRoutes: MetadataRoute.Sitemap = caseSlugs.map((slug) => ({
    url: `${BASE}/case-studies/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly",
  }));

  const sledRoutes: MetadataRoute.Sitemap = sledSlugs.map((slug) => ({
    url: `${BASE}/us-sled/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const testimonialRoutes: MetadataRoute.Sitemap = testimonialSlugs.map((slug) => ({
    url: `${BASE}/testimonials/${slug}`,
    priority: 0.5,
    changeFrequency: "yearly",
  }));

  const vacancyRoutes: MetadataRoute.Sitemap = vacancySlugs.map((slug) => ({
    url: `${BASE}/join-us/${slug}`,
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...caseRoutes,
    ...sledRoutes,
    ...testimonialRoutes,
    ...vacancyRoutes,
  ];
}
