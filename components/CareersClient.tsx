"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import type { Vacancy } from "@/lib/content";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

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
function VacancyCard({ vacancy, onApply }: { vacancy: Vacancy; onApply: (v: Vacancy) => void }) {
  const ds = deptStyle(vacancy.department);

  return (
    <div className="group flex flex-col bg-[#0d0d10] border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.12] transition-all duration-300">
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
      <h3 className="text-lg font-semibold text-white leading-snug mb-3 tracking-tight">
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
        <button
          onClick={() => onApply(vacancy)}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
        >
          Apply Now
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ── Application Modal ─────────────────────────────────────────────────────── */
const EXPERIENCE_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "5–8 years",
  "8+ years",
];

const SOURCE_OPTIONS = [
  "LinkedIn",
  "Google search",
  "Referral from colleague",
  "Intagleo website",
  "Job board",
  "Social media",
  "Other",
];

const FIELD = "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#6366f1]/60 focus:bg-white/[0.06] transition-colors duration-200";

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_FILE_BYTES = 10 * 1024 * 1024;

function ApplyModal({ vacancy, onClose }: { vacancy: Vacancy; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", linkedin: "",
    portfolio: "", experience: "", source: "", coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function set(key: string, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setResumeError("");
    if (!file) { setResumeFile(null); return; }
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setResumeError("Only PDF or Word documents (.pdf, .doc, .docx) are accepted.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setResumeError("File must be under 10 MB.");
      e.target.value = "";
      return;
    }
    setResumeFile(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (SITE_KEY && !captchaToken) {
      setErrorMsg("Please complete the CAPTCHA.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("role", vacancy.title);
      fd.append("linkedin", form.linkedin);
      fd.append("portfolio", form.portfolio);
      fd.append("experience", form.experience);
      fd.append("source", form.source);
      fd.append("coverLetter", form.coverLetter);
      fd.append("captchaToken", captchaToken ?? "");
      if (resumeFile) fd.append("resume", resumeFile);

      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setCaptchaToken(null);
      setCaptchaKey((k) => k + 1);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Apply for ${vacancy.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0d10] border border-white/[0.08] rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-8 pt-8 pb-6 bg-[#0d0d10] border-b border-white/[0.06]">
          <div>
            <p className="text-[#6366f1] text-xs font-medium tracking-widest uppercase mb-1">
              {vacancy.department}
            </p>
            <h2 className="text-xl font-semibold text-white leading-tight">
              Apply for {vacancy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="px-8 py-16 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#6366f1]" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Application submitted</h3>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm mb-8">
              Thanks for applying! We review every application personally and will be in touch within 5–7 business days if there's a fit.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/40 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-name" className="block text-white/50 text-xs font-medium mb-1.5">
                  Full Name <span className="text-[#6366f1]">*</span>
                </label>
                <input
                  id="apply-name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={FIELD}
                />
              </div>
              <div>
                <label htmlFor="apply-email" className="block text-white/50 text-xs font-medium mb-1.5">
                  Email <span className="text-[#6366f1]">*</span>
                </label>
                <input
                  id="apply-email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={FIELD}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-phone" className="block text-white/50 text-xs font-medium mb-1.5">
                  Phone
                </label>
                <input
                  id="apply-phone"
                  type="tel"
                  placeholder="+44 7700 900000"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={FIELD}
                />
              </div>
              <div>
                <label htmlFor="apply-experience" className="block text-white/50 text-xs font-medium mb-1.5">
                  Years of Experience
                </label>
                <select
                  id="apply-experience"
                  value={form.experience}
                  onChange={(e) => set("experience", e.target.value)}
                  className={FIELD + " cursor-pointer"}
                >
                  <option value="" disabled>Select…</option>
                  {EXPERIENCE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-linkedin" className="block text-white/50 text-xs font-medium mb-1.5">
                  LinkedIn Profile
                </label>
                <input
                  id="apply-linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/…"
                  value={form.linkedin}
                  onChange={(e) => set("linkedin", e.target.value)}
                  className={FIELD}
                />
              </div>
              <div>
                <label htmlFor="apply-portfolio" className="block text-white/50 text-xs font-medium mb-1.5">
                  Portfolio / GitHub
                </label>
                <input
                  id="apply-portfolio"
                  type="url"
                  placeholder="https://github.com/…"
                  value={form.portfolio}
                  onChange={(e) => set("portfolio", e.target.value)}
                  className={FIELD}
                />
              </div>
            </div>

            {/* Cover letter */}
            <div>
              <label htmlFor="apply-cover" className="block text-white/50 text-xs font-medium mb-1.5">
                Tell us about yourself
              </label>
              <textarea
                id="apply-cover"
                rows={5}
                placeholder="What excites you about this role? What have you built that you're most proud of?"
                value={form.coverLetter}
                onChange={(e) => set("coverLetter", e.target.value)}
                className={FIELD + " resize-none"}
              />
            </div>

            {/* Resume upload */}
            <div>
              <label className="block text-white/50 text-xs font-medium mb-1.5">
                Resume / CV
                <span className="ml-1 text-white/25 font-normal">(PDF or Word, max 10 MB)</span>
              </label>
              <div
                className="relative flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-white/[0.10] hover:border-white/20 transition-colors duration-200 cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.06] transition-colors">
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white/40" aria-hidden="true">
                    <path d="M10 3v10M6 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  {resumeFile ? (
                    <p className="text-white/70 text-sm truncate">{resumeFile.name}</p>
                  ) : (
                    <p className="text-white/25 text-sm">Click to upload or drag and drop</p>
                  )}
                </div>
                {resumeFile && (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                    className="text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                    aria-label="Remove file"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFile}
                  className="sr-only"
                  aria-label="Upload resume"
                />
              </div>
              {resumeError && <p className="mt-1.5 text-red-400 text-xs">{resumeError}</p>}
            </div>

            {/* Source */}
            <div>
              <label htmlFor="apply-source" className="block text-white/50 text-xs font-medium mb-1.5">
                How did you hear about us?
              </label>
              <select
                id="apply-source"
                value={form.source}
                onChange={(e) => set("source", e.target.value)}
                className={FIELD + " cursor-pointer"}
              >
                <option value="" disabled>Select…</option>
                {SOURCE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            {/* reCAPTCHA */}
            {SITE_KEY && (
              <div className="flex justify-center">
                <ReCAPTCHA
                  key={captchaKey}
                  sitekey={SITE_KEY}
                  theme="dark"
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/60 text-sm hover:border-white/40 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6366f1] hover:bg-[#4f46e5] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
                    </svg>
                    Submitting…
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
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
              ? "bg-[#6366f1] text-white"
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
  const [activeVacancy, setActiveVacancy] = useState<Vacancy | null>(null);
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
            <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-medium tracking-wide">Open Positions</span>
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
                <VacancyCard key={v._id} vacancy={v} onApply={setActiveVacancy} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-white/30 text-sm">No open roles in this department right now.</p>
              <button
                onClick={() => setDept("All")}
                className="mt-4 text-[#6366f1] text-sm hover:underline cursor-pointer"
              >
                View all roles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Apply modal */}
      {activeVacancy && (
        <ApplyModal vacancy={activeVacancy} onClose={() => setActiveVacancy(null)} />
      )}
    </>
  );
}
