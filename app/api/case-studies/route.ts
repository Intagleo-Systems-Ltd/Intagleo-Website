import { getAllCaseStudiesAsync } from "@/lib/providers/sanity";

export const revalidate = 60;

export async function GET() {
  try {
    const studies = await getAllCaseStudiesAsync();
    return Response.json({ caseStudies: studies });
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return Response.json({ error: "Failed to fetch case studies" }, { status: 500 });
  }
}
