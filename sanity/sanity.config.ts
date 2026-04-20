import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { markdownPlugin } from "sanity-plugin-markdown";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "intagleo",
  title: "Intagleo CMS",

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
    markdownPlugin(),
  ],

  schema: { types: schemaTypes },
});
