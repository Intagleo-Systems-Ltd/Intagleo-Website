"use client";

import { useState } from "react";
import type { ContactConfig } from "@/lib/contactConfigs";

interface Props {
  config: ContactConfig;
  type: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  context: string;
  message: string;
}

const inputBase =
  "w-full bg-[#0d0d10] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/20 focus:bg-[#111114] transition-all duration-200";

const labelBase = "block text-xs text-white/40 uppercase tracking-widest mb-2";

export default function ContactForm({ config, type }: Props) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    context: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Success state ───────────────────────────────────────────── */
  if (success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 h-full min-h-[480px]">
        {/* Animated checkmark */}
        <div className="w-16 h-16 rounded-full bg-[#e8341c]/10 border border-[#e8341c]/20 flex items-center justify-center mb-6">
          <svg
            className="w-7 h-7 text-[#e8341c]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          Request received.
        </h3>
        <p className="text-white/45 text-sm leading-relaxed max-w-xs">
          We&apos;ve sent a confirmation to your email. Expect to hear from us
          within 24 hours.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to home
        </a>
      </div>
    );
  }

  /* ── Form ────────────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelBase}>Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputBase}
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelBase}>Work Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={inputBase}
            autoComplete="email"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className={labelBase}>Company</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Your company name (optional)"
          className={inputBase}
          autoComplete="organization"
        />
      </div>

      {/* Context field , only if configured */}
      {config.contextLabel && (
        <div>
          <label className={labelBase}>{config.contextLabel}</label>
          {config.contextFieldType === "select" ? (
            <select
              name="context"
              value={form.context}
              onChange={handleChange}
              className={`${inputBase} appearance-none cursor-pointer`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="" disabled style={{ background: "#0d0d10" }}>
                Select an option
              </option>
              {config.contextOptions?.map((opt) => (
                <option key={opt} value={opt} style={{ background: "#0d0d10" }}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              name="context"
              value={form.context}
              onChange={handleChange}
              placeholder={config.contextPlaceholder ?? ""}
              className={inputBase}
            />
          )}
        </div>
      )}

      {/* Message */}
      <div>
        <label className={labelBase}>Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder={config.messagePlaceholder}
          className={`${inputBase} resize-none leading-relaxed`}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-[#e8341c] text-xs leading-relaxed">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#e8341c] hover:bg-[#c02a16] disabled:bg-[#e8341c]/40 text-white font-medium text-sm py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-white/20 text-xs text-center leading-relaxed">
        By submitting you agree to our privacy policy. We never share your
        information.
      </p>
    </form>
  );
}
