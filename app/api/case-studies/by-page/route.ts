import { getCaseStudiesByPage } from "@/lib/content";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const pageSlug = req.nextUrl.searchParams.get("slug");
  if (!pageSlug) {
    return Response.json({ error: "Missing slug parameter" }, { status: 400 });
  }
  try {
    const studies = getCaseStudiesByPage(pageSlug);
    return Response.json({ caseStudies: studies });
  } catch {
    return Response.json({ error: "Failed to fetch case studies" }, { status: 500 });
  }
}
