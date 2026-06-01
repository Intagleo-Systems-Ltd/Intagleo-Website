import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { blogPost } from "./schemaTypes/blogPost";
import { caseStudy } from "./schemaTypes/caseStudy";
import { testimonial } from "./schemaTypes/testimonial";
import { vacancy } from "./schemaTypes/vacancy";
import { sledCaseStudy } from "./schemaTypes/sledCaseStudy";

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
            S.listItem().title("Vacancies").schemaType("vacancy").child(S.documentTypeList("vacancy")),
            S.listItem().title("US SLED Case Studies").schemaType("sledCaseStudy").child(S.documentTypeList("sledCaseStudy")),
          ]),
    }),
  ],

  schema: { types: [blogPost, caseStudy, testimonial, vacancy, sledCaseStudy] },
});
