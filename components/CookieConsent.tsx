"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "intagleo-cookie-consent";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    setConsent(stored);
  }, []);

  function dismiss(choice: "accepted" | "rejected") {
    setLeaving(true);
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, choice);
      setConsent(choice);
      setVisible(false);
      setLeaving(false);
    }, 280);
  }

  if (!visible || consent !== null) return null;

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] w-full max-w-xl px-4 transition-all duration-300
        ${leaving ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        className="rounded-2xl border border-white/[0.1] p-5 flex flex-col sm:flex-row sm:items-center gap-4"
        style={{
          background: "linear-gradient(135deg, #16171f 0%, #111218 100%)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Cookie icon */}
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#e8341c]/10 border border-[#e8341c]/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-[#e8341c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v.008M8.25 12v.008M15.75 12v.008M12 15.75v.008M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            <circle cx="8.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="15.5" cy="9.5" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="10" cy="14.5" r="0.75" fill="currentColor" stroke="none" />
            <circle cx="14.5" cy="14" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white/80 text-sm font-medium leading-snug">We use cookies</p>
          <p className="text-white/40 text-xs leading-relaxed mt-0.5">
            We use essential and analytics cookies to improve your experience.{" "}
            <Link href="/cookie-policy" className="text-[#e8341c]/80 hover:text-[#e8341c] transition-colors underline underline-offset-2">
              Cookie Policy
            </Link>
            {" "}·{" "}
            <Link href="/privacy-policy" className="text-[#e8341c]/80 hover:text-[#e8341c] transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => dismiss("rejected")}
            className="px-4 py-2 rounded-full border border-white/[0.12] text-white/50 text-xs font-medium hover:text-white/80 hover:border-white/25 transition-colors cursor-pointer"
          >
            Reject
          </button>
          <button
            onClick={() => dismiss("accepted")}
            className="px-4 py-2 rounded-full bg-[#e8341c] text-white text-xs font-semibold hover:bg-[#d42e18] transition-colors cursor-pointer"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
