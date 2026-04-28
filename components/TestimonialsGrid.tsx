"use client";
import { useState } from "react";
import type { Testimonial } from "@/lib/content";
import Pagination from "@/components/Pagination";

const PER_PAGE = 9;

export default function TestimonialsGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(testimonials.length / PER_PAGE));
  const visible = testimonials.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      {visible.length === 0 ? (
        <p className="text-white/30 text-sm">No testimonials yet, check back soon.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((testimonial) => (
            <div
              key={testimonial.slug}
              className="rounded-2xl bg-[#0d0d10] border border-white/[0.08] p-8 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <svg
                className="w-6 h-6 text-[#6366f1]/40 mb-4 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-white/65 text-base leading-relaxed mb-8 flex-grow">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
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

                <div className="min-w-0">
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/40 text-xs">{testimonial.title}</p>
                  <p className="text-[#6366f1] text-xs font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      )}
    </>
  );
}
