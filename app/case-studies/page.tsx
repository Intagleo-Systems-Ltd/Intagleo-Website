import type { Metadata } from "next";
import Link from "next/link";
import { getAllCaseStudiesAsync } from "@/lib/providers/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Case Studies , Intagleo",
  description:
    "Real-world engineering outcomes. See how Intagleo has helped enterprises and product teams solve complex technical challenges.",
};

export default async function CaseStudiesPage() {
  const studies = await getAllCaseStudiesAsync();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="section-padding pt-32 pb-16 border-b border-white/5">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Case Studies
          </h1>
          <p className="text-white/45 text-base max-w-lg">
            Real problems. Real constraints. Real outcomes. A selection of
            engagements where the engineering made the difference.
          </p>
        </div>
      </section>

      {/* Case study list */}
      <section className="section-padding py-16">
        <div className="mx-auto max-w-[1400px]">
          {studies.length === 0 ? (
            <p className="text-white/30 text-sm">No case studies yet , check back soon.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {studies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group grid lg:grid-cols-[1fr_2fr] gap-0 rounded-2xl bg-[#0d0d10] border border-white/8 overflow-hidden hover:border-white/20 transition-all duration-300"
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
                      <div className="w-full h-full bg-gradient-to-br from-[#e8341c]/10 via-[#e8341c]/5 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs text-[#e8341c] bg-[#e8341c]/10 border border-[#e8341c]/20 rounded-full px-3 py-1">
                          {study.industry}
                        </span>
                        <span className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                          {study.client}
                        </span>
                      </div>
                      <h2 className="text-white font-semibold text-xl leading-snug mb-3 group-hover:text-white/90 transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Results preview */}
                    <div className="mt-6 pt-6 border-t border-white/8 flex items-center justify-between">
                      <p className="text-white/50 text-xs leading-relaxed max-w-xs line-clamp-2">
                        <span className="text-white/70 font-medium">Results: </span>
                        {study.results}
                      </p>
                      <div className="flex items-center gap-1.5 text-[#e8341c] text-xs font-medium flex-shrink-0 ml-6">
                        Read more
                        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
