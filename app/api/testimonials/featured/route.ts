import { getFeaturedTestimonials } from "@/lib/content";

export async function GET() {
  try {
    const testimonials = getFeaturedTestimonials();
    return Response.json({ testimonials });
  } catch (error) {
    console.error("Error fetching featured testimonials:", error);
    return Response.json({ error: "Failed to fetch featured testimonials" }, { status: 500 });
  }
}
