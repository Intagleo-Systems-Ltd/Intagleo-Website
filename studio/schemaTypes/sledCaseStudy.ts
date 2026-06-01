import { defineField, defineType } from "sanity";

export const sledCaseStudy = defineType({
  name: "sledCaseStudy",
  title: "US SLED Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "contractType", title: "Contract Type", type: "string" }),
    defineField({ name: "customer", title: "Customer", type: "string" }),
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({
      name: "pdf",
      title: "Attached PDF Document",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
    }),
    defineField({ name: "seo_description", title: "SEO Description", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "title", subtitle: "customer" },
  },
});
