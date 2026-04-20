import { getPostsByPage } from "@/lib/content";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const pageSlug = req.nextUrl.searchParams.get("slug");
  if (!pageSlug) {
    return Response.json({ error: "Missing slug parameter" }, { status: 400 });
  }
  try {
    const posts = getPostsByPage(pageSlug);
    return Response.json({ posts });
  } catch {
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
