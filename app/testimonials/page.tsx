import type { Metadata } from "next";
import { getAllTestimonials } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsGrid from "@/components/TestimonialsGrid";

export const metadata: Metadata = {
  title: "Testimonials , Intagleo",
  description:
    "What our clients and partners say about working with Intagleo.",
};

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="section-padding pt-32 pb-16 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
            Social Proof
          </p>
          <h1 className="text-4xl md:text-5xl font-bold heading-gradient leading-tight mb-4">
            What Our Clients Say
          </h1>
          <p className="text-white/45 text-base max-w-lg">
            Real feedback from the teams we&apos;ve partnered with. This is what
            it&apos;s like to work with Intagleo.
          </p>
        </div>
      </section>

      {/* Testimonials grid with pagination */}
      <section className="section-padding py-16">
        <div className="mx-auto max-w-[1400px]">
          <TestimonialsGrid testimonials={testimonials} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
