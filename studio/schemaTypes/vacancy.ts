import { defineField, defineType } from "sanity";

export const vacancy = defineType({
  name: "vacancy",
  title: "Vacancy",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "isOpen",
      title: "Position Open",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this role from the Careers page.",
    }),
    defineField({
      name: "postedAt",
      title: "Posted Date",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Engineering", value: "Engineering" },
          { title: "AI & ML", value: "AI & ML" },
          { title: "DevOps & Cloud", value: "DevOps & Cloud" },
          { title: "Mobile", value: "Mobile" },
          { title: "Design", value: "Design" },
          { title: "QA", value: "QA" },
          { title: "Product", value: "Product" },
          { title: "Sales", value: "Sales" },
          { title: "Operations", value: "Operations" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      placeholder: "e.g. Remote, Hybrid – UK, On-site – Dubai",
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
          { title: "Freelance", value: "Freelance" },
        ],
      },
    }),
    defineField({
      name: "experience",
      title: "Experience Required",
      type: "string",
      placeholder: "e.g. 3–5 years, 5+ years",
    }),
    defineField({
      name: "salary",
      title: "Salary Range",
      type: "string",
      placeholder: "e.g. £60k–£80k, Competitive",
      description: "Leave blank to keep salary confidential.",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
      description: "1–2 sentence summary shown on the role card.",
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
      description: "What the candidate will be doing day-to-day.",
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      description: "Must-have skills and experience.",
    }),
    defineField({
      name: "niceToHave",
      title: "Nice to Have",
      type: "array",
      of: [{ type: "string" }],
      description: "Bonus skills that would set a candidate apart.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "department",
      isOpen: "isOpen",
    },
    prepare({ title, subtitle, isOpen }) {
      return {
        title: `${isOpen ? "🟢" : "🔴"} ${title ?? "Untitled"}`,
        subtitle: subtitle ?? "No department",
      };
    },
  },
  orderings: [
    {
      title: "Posted Date (newest)",
      name: "postedAtDesc",
      by: [{ field: "postedAt", direction: "desc" }],
    },
  ],
});
