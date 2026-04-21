import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { blogPost } from "./sanity/schemaTypes/blogPost";
import { caseStudy } from "./sanity/schemaTypes/caseStudy";
import { testimonial } from "./sanity/schemaTypes/testimonial";

export default defineConfig({
  name: "intagleo",
  title: "Intagleo CMS",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Blog Posts").schemaType("blogPost").child(S.documentTypeList("blogPost")),
            S.listItem().title("Case Studies").schemaType("caseStudy").child(S.documentTypeList("caseStudy")),
            S.listItem().title("Testimonials").schemaType("testimonial").child(S.documentTypeList("testimonial")),
          ]),
    }),
  ],

  schema: { types: [blogPost, caseStudy, testimonial] },
});
