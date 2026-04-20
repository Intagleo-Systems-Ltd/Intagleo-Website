import { getFeaturedCaseStudies } from "@/lib/content";

export async function GET() {
  try {
    const caseStudies = getFeaturedCaseStudies();
    return Response.json({ caseStudies });
  } catch (error) {
    console.error("Error fetching featured case studies:", error);
    return Response.json({ error: "Failed to fetch featured case studies" }, { status: 500 });
  }
}
