import { defineField, defineType } from "sanity";

export const vacancy = defineType({
  name: "vacancy",
  title: "Job Vacancy",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Job Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Engineering", value: "Engineering" },
          { title: "DevOps & Cloud", value: "DevOps & Cloud" },
          { title: "AI & ML", value: "AI & ML" },
          { title: "Design", value: "Design" },
          { title: "QA", value: "QA" },
          { title: "Product", value: "Product" },
          { title: "Business Development", value: "Business Development" },
          { title: "Operations", value: "Operations" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      options: {
        list: [
          { title: "Remote", value: "Remote" },
          { title: "Hybrid – UK", value: "Hybrid – UK" },
          { title: "Hybrid – UAE", value: "Hybrid – UAE" },
          { title: "Hybrid – US", value: "Hybrid – US" },
          { title: "On-site – UK", value: "On-site – UK" },
          { title: "On-site – UAE", value: "On-site – UAE" },
        ],
      },
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Contract", value: "Contract" },
        ],
      },
    }),
    defineField({ name: "experience", title: "Experience Required", type: "string", description: "e.g. 3–5 years" }),
    defineField({ name: "salary", title: "Salary Range", type: "string", description: "Optional — e.g. £60k–£80k" }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "responsibilities", title: "Responsibilities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "requirements", title: "Requirements", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "niceToHave", title: "Nice to Have", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "isOpen", title: "Is Open", type: "boolean", initialValue: true }),
    defineField({ name: "postedAt", title: "Posted At", type: "date" }),
  ],
  orderings: [
    { title: "Newest First", name: "postedAtDesc", by: [{ field: "postedAt", direction: "desc" }] },
  ],
});
