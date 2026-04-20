"use client";

import { useEffect, useState } from "react";
import type { Testimonial } from "@/lib/content";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const response = await fetch("/api/testimonials/featured");
        const data = await response.json();
        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error("Failed to load featured testimonials:", error);
      } finally {
        setLoading(false);
      }
    }
    loadTestimonials();
  }, []);

  return (
    <section className="bg-[#0a0a0a] section-padding py-24 border-t border-white/5">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col justify-start">
            <div className="rounded-3xl border border-white/[0.06] p-8 md:p-10 bg-[#0d0d10] h-full">
              {/* Wave mesh graphic */}
              <div className="mb-8 w-full h-48 opacity-50">
                <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="0.5" fill="rgba(255,255,255,0.2)" />
                    </pattern>
                  </defs>
                  <path
                    d="M0,150 Q100,50 200,150 T400,150"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,180 Q100,80 200,180 T400,180"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0,120 Q100,20 200,120 T400,120"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <rect width="400" height="300" fill="url(#dots)" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                What makes Intagleo<br />different?
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Beyond technical expertise, we bring a partnership grounded in
                transparency, clarity, and the ability to turn complex roadmaps
                into scalable results.
              </p>
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-4">
            {loading ? (
              <div className="text-center text-white/40 py-12">Loading testimonials...</div>
            ) : testimonials.length === 0 ? (
              <div className="text-center text-white/40 py-12">No featured testimonials available.</div>
            ) : (
              testimonials.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial.slug}
                  className="rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-6 transition-all"
                >
                  {/* Header with logo and location */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#c41e3a] flex items-center justify-center text-white text-xs font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{testimonial.title}</h3>
                        <p className="text-white/50 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                    <span className="text-white/40 text-xs whitespace-nowrap ml-2">
                      📍 London, UK
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-white/70 text-sm leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
