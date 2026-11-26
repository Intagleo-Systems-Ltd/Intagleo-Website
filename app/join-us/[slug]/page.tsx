import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VacancyApplyForm from "@/components/VacancyApplyForm";
import type { Vacancy } from "@/lib/content";

export const revalidate = 60;

async function getVacancy(slug: string): Promise<Vacancy | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
    const { getVacancyBySlugAsync } = await import("@/lib/providers/sanity");
    return await getVacancyBySlugAsync(slug);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = await getVacancy(slug);
  if (!vacancy) return { title: "Role Not Found | Intagleo" };
  return {
    title: `${vacancy.title} | Careers at Intagleo`,
    description: vacancy.shortDescription,
  };
}

const deptColors: Record<string, { bg: string; text: string }> = {
  "Engineering":          { bg: "rgba(99,102,241,0.12)",  text: "#a5b4fc" },
  "DevOps & Cloud":       { bg: "rgba(139,92,246,0.12)",  text: "#c4b5fd" },
  "AI & ML":              { bg: "rgba(168,85,247,0.12)",  text: "#d8b4fe" },
  "Design":               { bg: "rgba(236,72,153,0.12)",  text: "#f9a8d4" },
  "QA":                   { bg: "rgba(16,185,129,0.12)",  text: "#6ee7b7" },
  "Product":              { bg: "rgba(245,158,11,0.12)",  text: "#fcd34d" },
  "Business Development": { bg: "rgba(249,115,22,0.12)",  text: "#fdba74" },
  "Operations":           { bg: "rgba(107,114,128,0.12)", text: "#d1d5db" },
};

function deptStyle(dept?: string) {
  return deptColors[dept ?? ""] ?? { bg: "rgba(99,102,241,0.12)", text: "#a5b4fc" };
}

export default async function VacancyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacancy = await getVacancy(slug);
  if (!vacancy || !vacancy.isOpen) notFound();

  const ds = deptStyle(vacancy.department);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">

          {/* Back link */}
          <Link
            href="/join-us#open-roles"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-10"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All open roles
          </Link>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* Left: role details */}
            <div>
              {/* Meta chips */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {vacancy.department && (
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: ds.bg, color: ds.text }}
                  >
                    {vacancy.department}
                  </span>
                )}
                {vacancy.location && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/[0.08] text-white/50">
                    {vacancy.location}
                  </span>
                )}
                {vacancy.type && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/[0.08] text-white/50">
                    {vacancy.type}
                  </span>
                )}
                {vacancy.experience && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/[0.08] text-white/50">
                    {vacancy.experience}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-medium customHeading tracking-tight leading-[1.05] mb-4">
                {vacancy.title}
              </h1>

              {/* Salary */}
              {vacancy.salary && (
                <p className="text-white/40 text-sm mb-8">{vacancy.salary}</p>
              )}

              {/* Short description */}
              <p className="text-white/60 text-base leading-relaxed mb-10 max-w-2xl">
                {vacancy.shortDescription}
              </p>

              <div className="space-y-10">
                {vacancy.responsibilities && vacancy.responsibilities.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">What you&apos;ll do</h2>
                    <ul className="space-y-3">
                      {vacancy.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full btn-shimmer bg-[#3B82F6] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {vacancy.requirements && vacancy.requirements.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">What we&apos;re looking for</h2>
                    <ul className="space-y-3">
                      {vacancy.requirements.map((item, i) => (
                        <li key={i} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full btn-shimmer bg-[#3B82F6] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {vacancy.niceToHave && vacancy.niceToHave.length > 0 && (
                  <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Nice to have</h2>
                    <ul className="space-y-3">
                      {vacancy.niceToHave.map((item, i) => (
                        <li key={i} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right: sticky application form */}
            <div className="lg:sticky lg:top-28">
              <div className="bg-[#0d0d10] border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="px-7 pt-7 pb-5 border-b border-white/[0.06]">
                  <p className="text-[#3B82F6] text-xs font-medium tracking-widest uppercase mb-1">
                    Apply now
                  </p>
                  <h2 className="text-lg font-semibold text-white leading-tight">
                    {vacancy.title}
                  </h2>
                </div>
                <VacancyApplyForm vacancyTitle={vacancy.title} />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  );
}
