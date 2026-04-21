import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { blogPost } from "./schemaTypes/blogPost";
import { caseStudy } from "./schemaTypes/caseStudy";
import { testimonial } from "./schemaTypes/testimonial";

export default defineConfig({
  name: "intagleo",
  title: "Intagleo CMS",
  basePath: "/",

  projectId: "212gkasf",
  dataset: "production",

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
