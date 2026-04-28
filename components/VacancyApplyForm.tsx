"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const EXPERIENCE_OPTIONS = ["Less than 1 year", "1-2 years", "3-5 years", "5-8 years", "8+ years"];
const SOURCE_OPTIONS = ["LinkedIn", "Google search", "Referral from colleague", "Intagleo website", "Job board", "Social media", "Other"];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_FILE_BYTES = 10 * 1024 * 1024;

const FIELD = "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#6366f1]/60 focus:bg-white/[0.06] transition-colors duration-200";
const SELECT_FIELD = "w-full px-4 py-3 rounded-xl bg-[#0d0f1c] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#6366f1]/60 transition-colors duration-200 cursor-pointer appearance-none";

export default function VacancyApplyForm({ vacancyTitle = "Open Application" }: { vacancyTitle?: string }) {
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
    if (SITE_KEY && !captchaToken) { setErrorMsg("Please complete the CAPTCHA."); return; }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("role", vacancyTitle);
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

  if (status === "success") {
    return (
      <div className="px-7 py-14 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#6366f1]" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Application submitted</h3>
        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
          We review every application personally and will be in touch within 5-7 business days if there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="vaf-name" className="block text-white/50 text-xs font-medium mb-1.5">
            Full Name <span className="text-[#6366f1]">*</span>
          </label>
          <input id="vaf-name" type="text" required placeholder="Jane Smith"
            value={form.name} onChange={(e) => set("name", e.target.value)} className={FIELD} />
        </div>
        <div>
          <label htmlFor="vaf-email" className="block text-white/50 text-xs font-medium mb-1.5">
            Email <span className="text-[#6366f1]">*</span>
          </label>
          <input id="vaf-email" type="email" required placeholder="jane@company.com"
            value={form.email} onChange={(e) => set("email", e.target.value)} className={FIELD} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="vaf-phone" className="block text-white/50 text-xs font-medium mb-1.5">Phone</label>
          <input id="vaf-phone" type="tel" placeholder="+44 7700 900000"
            value={form.phone} onChange={(e) => set("phone", e.target.value)} className={FIELD} />
        </div>
        <div>
          <label htmlFor="vaf-experience" className="block text-white/50 text-xs font-medium mb-1.5">Experience</label>
          <select id="vaf-experience" value={form.experience}
            onChange={(e) => set("experience", e.target.value)} className={SELECT_FIELD}>
            <option value="" disabled>Select...</option>
            {EXPERIENCE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="vaf-linkedin" className="block text-white/50 text-xs font-medium mb-1.5">LinkedIn</label>
          <input id="vaf-linkedin" type="url" placeholder="linkedin.com/in/..."
            value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} className={FIELD} />
        </div>
        <div>
          <label htmlFor="vaf-portfolio" className="block text-white/50 text-xs font-medium mb-1.5">Portfolio / GitHub</label>
          <input id="vaf-portfolio" type="url" placeholder="github.com/..."
            value={form.portfolio} onChange={(e) => set("portfolio", e.target.value)} className={FIELD} />
        </div>
      </div>

      <div>
        <label htmlFor="vaf-cover" className="block text-white/50 text-xs font-medium mb-1.5">Tell us about yourself</label>
        <textarea id="vaf-cover" rows={4}
          placeholder="What excites you about this role? What have you built that you're most proud of?"
          value={form.coverLetter} onChange={(e) => set("coverLetter", e.target.value)}
          className={FIELD + " resize-none"} />
      </div>

      {/* Resume upload */}
      <div>
        <label className="block text-white/50 text-xs font-medium mb-1.5">
          Resume / CV <span className="text-white/25 font-normal">(PDF or Word, max 10 MB)</span>
        </label>
        <div
          className="relative flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-white/[0.10] hover:border-white/20 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white/35 flex-shrink-0" aria-hidden="true">
            <path d="M10 3v10M6 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-white/30 text-sm flex-1 truncate">
            {resumeFile ? resumeFile.name : "Click to upload"}
          </span>
          {resumeFile && (
            <button type="button" onClick={(e) => { e.stopPropagation(); setResumeFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
              className="text-white/30 hover:text-white/60 transition-colors cursor-pointer" aria-label="Remove file">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          )}
          <input ref={fileInputRef} type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFile} className="sr-only" aria-label="Upload resume" />
        </div>
        {resumeError && <p className="mt-1.5 text-red-400 text-xs">{resumeError}</p>}
      </div>

      <div>
        <label htmlFor="vaf-source" className="block text-white/50 text-xs font-medium mb-1.5">How did you hear about us?</label>
        <select id="vaf-source" value={form.source}
          onChange={(e) => set("source", e.target.value)} className={SELECT_FIELD}>
          <option value="" disabled>Select...</option>
          {SOURCE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      {SITE_KEY && (
        <div className="flex justify-center">
          <ReCAPTCHA key={captchaKey} sitekey={SITE_KEY} theme="dark"
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)} />
        </div>
      )}

      {status === "error" && <p className="text-red-400 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6366f1] hover:bg-[#4f46e5] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
            </svg>
            Submitting...
          </>
        ) : "Submit Application"}
      </button>
    </form>
  );
}
