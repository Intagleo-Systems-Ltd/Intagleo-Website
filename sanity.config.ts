import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { blogPost } from "./sanity/schemaTypes/blogPost";
import { caseStudy } from "./sanity/schemaTypes/caseStudy";
import { testimonial } from "./sanity/schemaTypes/testimonial";
import { sledCaseStudy } from "./sanity/schemaTypes/sledCaseStudy";

export default defineConfig({
  name: "intagleo",
  title: "Intagleo CMS",
  basePath: "/studio",

  // `sanity dev`/`deploy` (Vite) only expose SANITY_STUDIO_* env — NEXT_PUBLIC_* is undefined there,
  // so fall back to the committed project values (same as sanity.cli.ts) to keep the Studio bootable.
  projectId:
    process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "212gkasf",
  dataset:
    process.env.SANITY_STUDIO_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Blog Posts").schemaType("blogPost").child(S.documentTypeList("blogPost")),
            S.listItem().title("Case Studies").schemaType("caseStudy").child(S.documentTypeList("caseStudy")),
            S.listItem().title("Testimonials").schemaType("testimonial").child(S.documentTypeList("testimonial")),
            S.listItem().title("US SLED Case Studies").schemaType("sledCaseStudy").child(S.documentTypeList("sledCaseStudy")),
          ]),
    }),
  ],

  schema: { types: [blogPost, caseStudy, testimonial, sledCaseStudy] },
});
