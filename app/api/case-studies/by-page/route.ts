import { getCaseStudiesByPageAsync } from "@/lib/providers/sanity";
import { NextRequest } from "next/server";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  const pageSlug = req.nextUrl.searchParams.get("slug");
  if (!pageSlug) {
    return Response.json({ error: "Missing slug parameter" }, { status: 400 });
  }
  try {
    const studies = await getCaseStudiesByPageAsync(pageSlug);
    return Response.json({ caseStudies: studies });
  } catch {
    return Response.json({ error: "Failed to fetch case studies" }, { status: 500 });
  }
}
