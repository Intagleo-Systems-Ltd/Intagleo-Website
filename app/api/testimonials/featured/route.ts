import { getFeaturedTestimonialsAsync } from "@/lib/providers/sanity";

export const revalidate = 60;

export async function GET() {
  try {
    const testimonials = await getFeaturedTestimonialsAsync();
    return Response.json({ testimonials });
  } catch (error) {
    console.error("Error fetching featured testimonials:", error);
    return Response.json({ error: "Failed to fetch featured testimonials" }, { status: 500 });
  }
}
