import { getFeaturedCaseStudiesAsync } from "@/lib/providers/sanity";

export const revalidate = 60;

export async function GET() {
  try {
    const caseStudies = await getFeaturedCaseStudiesAsync();
    return Response.json({ caseStudies });
  } catch (error) {
    console.error("Error fetching featured case studies:", error);
    return Response.json({ error: "Failed to fetch featured case studies" }, { status: 500 });
  }
}
