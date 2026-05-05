"use client";
import { useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import Pagination from "@/components/Pagination";

const PER_PAGE = 6;

export default function CaseStudiesGrid({ studies }: { studies: CaseStudy[] }) {
  const industries = Array.from(new Set(studies.map((s) => s.industry).filter(Boolean)));

  const [activeIndustry, setActiveIndustry] = useState("All");
  const [page, setPage] = useState(1);

  const filtered =
    activeIndustry === "All"
      ? studies
      : studies.filter((s) => s.industry === activeIndustry);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleIndustry(industry: string) {
    setActiveIndustry(industry);
    setPage(1);
  }

  return (
    <>
      {/* Industry filter */}
      {industries.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...industries].map((industry) => (
            <button
              key={industry}
              onClick={() => handleIndustry(industry)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                activeIndustry === industry
                  ? "bg-[#3B82F6]/15 border-[#3B82F6]/40 text-[#3B82F6]"
                  : "bg-white/[0.03] border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      )}

      {/* List */}
      {visible.length === 0 ? (
        <p className="text-white/30 text-sm">No case studies found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {visible.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group grid lg:grid-cols-[1fr_2fr] gap-0 rounded-2xl bg-[#0d0d10] border border-white/[0.08] overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Cover */}
              <div className="aspect-video lg:aspect-auto bg-[#161618] overflow-hidden">
                {study.cover_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={study.cover_image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#3B82F6]/10 via-[#3B82F6]/5 to-transparent" />
                )}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-3 py-1">
                      {study.industry}
                    </span>
                    <span className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                      {study.client}
                    </span>
                  </div>
                  <h2 className="customHeading font-medium text-xl leading-snug mb-3">
                    {study.title}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                    {study.challenge}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <p className="text-white/50 text-xs leading-relaxed max-w-xs line-clamp-2">
                    <span className="text-white/70 font-medium">Results: </span>
                    {study.results}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#3B82F6] text-xs font-medium flex-shrink-0 ml-6">
                    Read more
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M9 4L13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      )}
    </>
  );
}
