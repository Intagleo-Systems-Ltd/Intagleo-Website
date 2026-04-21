/**
 * Migration script: content/*.md files -> Sanity dataset
 *
 * Usage:
 *   npx tsx scripts/migrate-to-sanity.ts
 *
 * Prerequisites:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 *   - NEXT_PUBLIC_SANITY_DATASET in .env.local  (defaults to "production")
 *   - SANITY_API_TOKEN in .env.local  (needs write access — Editor or above)
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const contentRoot = path.join(process.cwd(), "content");

function readMarkdownFiles(type: string) {
  const dir = path.join(contentRoot, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      if (data.date instanceof Date) {
        data.date = data.date.toISOString().split("T")[0];
      }
      return { slug, frontmatter: data, body: content };
    });
}

async function migrateBlogPosts() {
  console.log("\n📝 Migrating blog posts...");
  const posts = readMarkdownFiles("blog");
  for (const post of posts) {
    const doc = {
      _type: "blogPost",
      _id: `blogPost-${post.slug}`,
      title: post.frontmatter.title ?? post.slug,
      slug: { _type: "slug", current: post.slug },
      date: post.frontmatter.date ?? new Date().toISOString().split("T")[0],
      author: post.frontmatter.author ?? "",
      excerpt: post.frontmatter.excerpt ?? "",
      seo_description: post.frontmatter.seo_description ?? "",
      show_on_homepage: post.frontmatter.show_on_homepage ?? true,
      pages: post.frontmatter.pages ?? [],
      cover_image: post.frontmatter.cover_image ?? "",
      body: post.body,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${post.slug}`);
  }
  console.log(`  Done: ${posts.length} posts`);
}

async function migrateCaseStudies() {
  console.log("\n📋 Migrating case studies...");
  const studies = readMarkdownFiles("case-studies");
  for (const study of studies) {
    const doc = {
      _type: "caseStudy",
      _id: `caseStudy-${study.slug}`,
      title: study.frontmatter.title ?? study.slug,
      slug: { _type: "slug", current: study.slug },
      client: study.frontmatter.client ?? "",
      industry: study.frontmatter.industry ?? "",
      rive_url: study.frontmatter.rive_url ?? "",
      challenge: study.frontmatter.challenge ?? "",
      solution: study.frontmatter.solution ?? "",
      results: study.frontmatter.results ?? "",
      seo_description: study.frontmatter.seo_description ?? "",
      show_on_homepage: study.frontmatter.show_on_homepage ?? true,
      pages: study.frontmatter.pages ?? [],
      cover_image: study.frontmatter.cover_image ?? "",
      body: study.body,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${study.slug}`);
  }
  console.log(`  Done: ${studies.length} case studies`);
}

async function migrateTestimonials() {
  console.log("\n💬 Migrating testimonials...");
  const testimonials = readMarkdownFiles("testimonials");
  for (const t of testimonials) {
    const doc = {
      _type: "testimonial",
      _id: `testimonial-${t.slug}`,
      name: t.frontmatter.name ?? t.slug,
      slug: { _type: "slug", current: t.slug },
      title: t.frontmatter.title ?? "",
      company: t.frontmatter.company ?? "",
      quote: t.frontmatter.quote ?? "",
      show_on_homepage: t.frontmatter.show_on_homepage ?? true,
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${t.slug}`);
  }
  console.log(`  Done: ${testimonials.length} testimonials`);
}

async function main() {
  console.log("Starting migration to Sanity...");
  console.log(`Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"}`);

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
    console.error("\nError: Missing required env vars.");
    console.error("Make sure NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN are set in .env.local");
    process.exit(1);
  }

  await migrateBlogPosts();
  await migrateCaseStudies();
  await migrateTestimonials();

  console.log("\nMigration complete. Next step: set CONTENT_PROVIDER=sanity in .env.local");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
