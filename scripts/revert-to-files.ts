/**
 * Revert script: Sanity dataset -> content/*.md files
 *
 * Usage:
 *   npx tsx scripts/revert-to-files.ts
 *
 * This pulls all documents from Sanity and writes them back as
 * identical .md files with frontmatter — a perfect round-trip.
 */

import fs from "fs";
import path from "path";
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

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function buildFrontmatter(fields: Record<string, unknown>): string {
  const lines = ["---"];
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined || v === null || v === "") continue;
    if (Array.isArray(v)) {
      if (v.length === 0) continue;
      lines.push(`${k}:`);
      v.forEach((item) => lines.push(`  - ${item}`));
    } else if (typeof v === "boolean") {
      lines.push(`${k}: ${v}`);
    } else {
      const safe = String(v).includes("\n")
        ? `|\n  ${String(v).replace(/\n/g, "\n  ")}`
        : `"${String(v).replace(/"/g, '\\"')}"`;
      lines.push(`${k}: ${safe}`);
    }
  }
  lines.push("---");
  return lines.join("\n");
}

async function revertBlogPosts() {
  console.log("\n📝 Reverting blog posts...");
  const dir = path.join(contentRoot, "blog");
  ensureDir(dir);

  const posts = await client.fetch(`*[_type == "blogPost"] {
    "slug": slug.current, title, date, author,
    "cover_image": coverImage.asset->url,
    excerpt, seo_description, show_on_homepage, pages, body
  }`);

  for (const post of posts) {
    const { slug, body, ...frontmatter } = post;
    const fm = buildFrontmatter(frontmatter);
    fs.writeFileSync(path.join(dir, `${slug}.md`), `${fm}\n\n${body ?? ""}`);
    console.log(`  ✓ ${slug}`);
  }
  console.log(`  Done: ${posts.length} posts`);
}

async function revertCaseStudies() {
  console.log("\n📋 Reverting case studies...");
  const dir = path.join(contentRoot, "case-studies");
  ensureDir(dir);

  const studies = await client.fetch(`*[_type == "caseStudy"] {
    "slug": slug.current, title, client, industry,
    "cover_image": coverImage.asset->url,
    rive_url, challenge, solution, results,
    seo_description, show_on_homepage, pages, body
  }`);

  for (const study of studies) {
    const { slug, body, ...frontmatter } = study;
    const fm = buildFrontmatter(frontmatter);
    fs.writeFileSync(path.join(dir, `${slug}.md`), `${fm}\n\n${body ?? ""}`);
    console.log(`  ✓ ${slug}`);
  }
  console.log(`  Done: ${studies.length} case studies`);
}

async function revertTestimonials() {
  console.log("\n💬 Reverting testimonials...");
  const dir = path.join(contentRoot, "testimonials");
  ensureDir(dir);

  const testimonials = await client.fetch(`*[_type == "testimonial"] {
    "slug": slug.current, name, title, company, quote,
    "photo": photo.asset->url, show_on_homepage
  }`);

  for (const t of testimonials) {
    const { slug, ...frontmatter } = t;
    const fm = buildFrontmatter(frontmatter);
    fs.writeFileSync(path.join(dir, `${slug}.md`), `${fm}\n`);
    console.log(`  ✓ ${slug}`);
  }
  console.log(`  Done: ${testimonials.length} testimonials`);
}

async function main() {
  console.log("Reverting from Sanity back to markdown files...");

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
    console.error("\nError: Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local");
    process.exit(1);
  }

  await revertBlogPosts();
  await revertCaseStudies();
  await revertTestimonials();

  console.log("\nRevert complete.");
  console.log("Next step: set CONTENT_PROVIDER=files in .env.local");
}

main().catch((err) => {
  console.error("Revert failed:", err);
  process.exit(1);
});
