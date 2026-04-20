import { getFeaturedPosts } from "@/lib/content";

export async function GET() {
  try {
    const posts = getFeaturedPosts();
    return Response.json({ posts });
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return Response.json({ error: "Failed to fetch featured posts" }, { status: 500 });
  }
}
