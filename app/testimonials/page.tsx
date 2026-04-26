import type { Metadata } from "next";
import { getAllTestimonials } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            What Our Clients Say
          </h1>
          <p className="text-white/45 text-base max-w-lg">
            Real feedback from the teams we&apos;ve partnered with. This is what
            it&apos;s like to work with Intagleo.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-padding py-16">
        <div className="mx-auto max-w-[1400px]">
          {testimonials.length === 0 ? (
            <p className="text-white/30 text-sm">
              No testimonials yet , check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.slug}
                  className="rounded-2xl bg-[#0d0d10] border border-white/8 p-8 hover:border-white/20 transition-all duration-300 flex flex-col"
                >
                  {/* Quote */}
                  <p className="text-white/65 text-base leading-relaxed mb-8 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/10 mb-6" />

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-[#161618] flex-shrink-0 overflow-hidden">
                      {testimonial.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 to-transparent flex items-center justify-center">
                          <span className="text-white/30 text-sm font-medium">
                            {testimonial.name[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Name, title, company */}
                    <div className="min-w-0">
                      <p className="text-white font-medium text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-white/40 text-xs">
                        {testimonial.title}
                      </p>
                      <p className="text-[#6366f1] text-xs font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
