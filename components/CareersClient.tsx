"use client";

import { useState } from "react";
import Link from "next/link";
import type { Vacancy } from "@/lib/content";


/* ── Department colour mapping ─────────────────────────────────────────────── */
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

/* ── Chip ──────────────────────────────────────────────────────────────────── */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/[0.08] text-white/50">
      {children}
    </span>
  );
}

/* ── Vacancy Card ──────────────────────────────────────────────────────────── */
function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  const ds = deptStyle(vacancy.department);

  return (
    <Link
      href={`/join-us/${vacancy.slug}`}
      className="group flex flex-col bg-[#0d0d10] border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
    >
      {/* Department + meta */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {vacancy.department && (
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
            style={{ background: ds.bg, color: ds.text }}
          >
            {vacancy.department}
          </span>
        )}
        {vacancy.location && <Chip>{vacancy.location}</Chip>}
        {vacancy.type && <Chip>{vacancy.type}</Chip>}
        {vacancy.experience && <Chip>{vacancy.experience}</Chip>}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white leading-snug mb-3 tracking-tight group-hover:text-[#a5b4fc] transition-colors duration-200">
        {vacancy.title}
      </h3>

      {/* Description */}
      <p className="text-white/45 text-sm leading-relaxed flex-1 mb-6">
        {vacancy.shortDescription}
      </p>

      {/* Salary + CTA */}
      <div className="flex items-center justify-between gap-4">
        {vacancy.salary ? (
          <span className="text-white/40 text-xs">{vacancy.salary}</span>
        ) : (
          <span />
        )}
        <span className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#3B82F6] group-hover:bg-[#2563EB] text-white text-sm font-medium transition-colors duration-200">
          View Role
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}



/* ── Dept filter tabs ──────────────────────────────────────────────────────── */
function FilterTabs({
  departments,
  active,
  onChange,
}: {
  departments: string[];
  active: string;
  onChange: (d: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...departments].map((d) => (
        <button
          key={d}
          onClick={() => onChange(d)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
            active === d
              ? "bg-[#3B82F6] text-white"
              : "border border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/80"
          }`}
        >
          {d}
        </button>
      ))}
    </div>
  );
}

/* ── Main export ───────────────────────────────────────────────────────────── */
export default function CareersClient({ vacancies }: { vacancies: Vacancy[] }) {
  const [dept, setDept] = useState("All");

  const departments = Array.from(
    new Set(vacancies.map((v) => v.department).filter(Boolean) as string[])
  );

  const filtered = dept === "All" ? vacancies : vacancies.filter((v) => v.department === dept);

  return (
    <>
      <section id="open-roles" className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          {/* Section header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-xs font-medium tracking-wide">Open Positions</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                  {filtered.length} {filtered.length === 1 ? "role" : "roles"} available
                </h2>
                <p className="text-white/40 text-sm">All roles are open to remote applicants unless otherwise stated.</p>
              </div>
              {departments.length > 0 && (
                <FilterTabs departments={departments} active={dept} onChange={setDept} />
              )}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((v) => (
                <VacancyCard key={v._id} vacancy={v} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-white/30 text-sm">No open roles in this department right now.</p>
              <button
                onClick={() => setDept("All")}
                className="mt-4 text-[#3B82F6] text-sm hover:underline cursor-pointer"
              >
                View all roles
              </button>
            </div>
          )}
        </div>
      </section>

    </>
  );
}
