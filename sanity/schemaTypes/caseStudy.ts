import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "client", title: "Client Name", type: "string" }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "cover_image", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "rive_url", title: "Rive Animation URL", type: "url" }),
    defineField({ name: "challenge", title: "Challenge", type: "text", rows: 4 }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 4 }),
    defineField({ name: "results", title: "Results", type: "text", rows: 4 }),
    defineField({ name: "seo_description", title: "SEO Description", type: "text", rows: 2 }),
    defineField({ name: "show_on_homepage", title: "Show on Homepage", type: "boolean", initialValue: true }),
    defineField({
      name: "pages",
      title: "Show on Pages",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Digital Signage", value: "digital-signage" },
          { title: "Facilities Management", value: "facilities-management" },
          { title: "E-Commerce & Retail", value: "ecommerce-retail" },
          { title: "Healthcare", value: "healthcare" },
          { title: "Transportation", value: "transportation" },
          { title: "EdTech", value: "edtech" },
          { title: "Real Estate", value: "real-estate" },
          { title: "Travel", value: "travel" },
          { title: "Smart Cities & IoT", value: "smart-cities" },
          { title: "Fintech", value: "fintech" },
          { title: "HR & Recruitment", value: "hr-recruitment" },
          { title: "AI Transformation", value: "ai-transformation" },
          { title: "Data & Analytics", value: "data-analytics" },
          { title: "Custom Software Dev", value: "custom-software" },
          { title: "Mobile Development", value: "mobile-dev" },
          { title: "Embedded & IoT", value: "embedded-iot" },
          { title: "Cloud & DevOps", value: "cloud-devops" },
          { title: "Legacy Modernisation", value: "legacy-modernization" },
          { title: "QA & Testing", value: "qa-services" },
          { title: "Staff Augmentation", value: "staff-augmentation" },
        ],
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
        {
          type: "object",
          name: "codeBlock",
          title: "Code Block",
          fields: [
            { name: "language", type: "string", title: "Language" },
            { name: "code", type: "text", title: "Code" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "cover_image" },
  },
});
