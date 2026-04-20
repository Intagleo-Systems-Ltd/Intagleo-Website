import { getAllCaseStudies } from "@/lib/content";

export async function GET() {
  try {
    const studies = getAllCaseStudies();
    return Response.json({ caseStudies: studies });
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return Response.json({ error: "Failed to fetch case studies" }, { status: 500 });
  }
}
