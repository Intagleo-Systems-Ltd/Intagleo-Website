import { getFeaturedPostsAsync } from "@/lib/providers/sanity";

export const revalidate = 60;

export async function GET() {
  try {
    const posts = await getFeaturedPostsAsync();
    return Response.json({ posts });
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return Response.json({ error: "Failed to fetch featured posts" }, { status: 500 });
  }
}
