/**
 * One-off: upload a PDF and create a US SLED case study in Sanity.
 *
 * Usage:
 *   npx tsx scripts/add-sled-case-study.ts "C:\\path\\to\\file.pdf"
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID + SANITY_API_TOKEN (write) in .env.local
 */

import fs from "fs";
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

// ── Case study data (from the pre-bid intelligence brief, RFP SK0067PD) ──────────
const pdfPath =
  process.argv[2] ?? "C:\\Users\\arslan\\Downloads\\CASE STUDY 1.pdf";

const doc = {
  _type: "sledCaseStudy",
  _id: "sledCaseStudy-sk0067pd",
  title: "Data Integration & Analytics Platform — Public Safety Operations",
  slug: { _type: "slug", current: "data-integration-analytics-platform-public-safety" },
  contractType: "Firm Fixed Price (FFP) — Milestone-Based",
  customer: "Town of South Kingstown, Rhode Island",
  value: "$330K (est.)",
  order: 1,
  seo_description:
    "Pre-bid intelligence brief for RFP SK0067PD — a CJIS-compliant data integration and analytics platform for public safety operations, funded through opioid settlement funds for the Town of South Kingstown, Rhode Island.",
};

async function main() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
    console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local");
    process.exit(1);
  }
  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found: ${pdfPath}`);
    process.exit(1);
  }

  console.log(`Uploading PDF: ${pdfPath}`);
  const buffer = fs.readFileSync(pdfPath);
  const asset = await client.assets.upload("file", buffer, {
    filename: "case-study-sk0067pd.pdf",
    contentType: "application/pdf",
  });
  console.log(`  ✓ Asset uploaded: ${asset._id}`);

  const finalDoc = {
    ...doc,
    pdf: { _type: "file", asset: { _type: "reference", _ref: asset._id } },
  };

  await client.createOrReplace(finalDoc);
  console.log(`  ✓ Document created: ${finalDoc._id}`);
  console.log(`\nDone. Title: ${finalDoc.title}`);
  console.log(`Slug:  /us-sled/${finalDoc.slug.current}`);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
