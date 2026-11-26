import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTestimonialsAsync } from "@/lib/providers/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// ─── Static paths ──────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const testimonials = await getAllTestimonialsAsync();
  return testimonials.map((t) => ({ slug: t.slug }));
}

// ─── SEO metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const testimonials = await getAllTestimonialsAsync();
  const { slug } = await params;
  const testimonial = testimonials.find((t) => t.slug === slug);
  if (!testimonial) return {};

  return {
    title: `${testimonial.name} , Intagleo Testimonial`,
    description: `"${testimonial.quote}" , ${testimonial.name}, ${testimonial.title} at ${testimonial.company}`,
    openGraph: {
      title: `${testimonial.name} on Intagleo`,
      description: testimonial.quote,
      type: "article",
      ...(testimonial.photo && { images: [{ url: testimonial.photo }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${testimonial.name} on Intagleo`,
      description: testimonial.quote,
      ...(testimonial.photo && { images: [testimonial.photo] }),
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function TestimonialPage({ params }: Props) {
  const testimonials = await getAllTestimonialsAsync();
  const { slug } = await params;
  const testimonial = testimonials.find((t) => t.slug === slug);
  if (!testimonial) notFound();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32 pb-24 flex items-center justify-center min-h-[80vh]">
        <div className="mx-auto max-w-[900px] text-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-[#161618] flex-shrink-0 overflow-hidden mx-auto mb-8">
            {testimonial.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#3B82F6]/30 to-transparent flex items-center justify-center">
                <span className="text-white/40 text-4xl font-bold">
                  {testimonial.name[0]}
                </span>
              </div>
            )}
          </div>

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8">
              "{testimonial.quote}"
            </p>
          </blockquote>

          {/* Author */}
          <div>
            <p className="text-white font-semibold text-lg">
              {testimonial.name}
            </p>
            <p className="text-white/50 text-sm mb-1">{testimonial.title}</p>
            <p className="text-[#3B82F6] text-sm font-medium">
              {testimonial.company}
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center gap-4">
            <a
              href="/testimonials"
              className="text-white/50 hover:text-white transition-colors text-sm"
            >
              ← Back to testimonials
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
