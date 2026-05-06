"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="w-9 h-9 flex-shrink-0" />;

  const isLight = resolvedTheme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 flex-shrink-0 ${
        isLight
          ? "border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-100"
          : "border-white/10 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
      } ${className}`}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? (
        /* Moon — switch to dark */
        <svg viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15px]" aria-hidden="true">
          <path
            d="M17.5 11.5A7.5 7.5 0 1 1 8.5 2.5a5.5 5.5 0 0 0 9 9z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      ) : (
        /* Sun — switch to light */
        <svg viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15px]" aria-hidden="true">
          <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <path
            d="M10 2v1.5M10 16.5V18M2 10h1.5M16.5 10H18M4.4 4.4l1.06 1.06M14.54 14.54l1.06 1.06M4.4 15.6l1.06-1.06M14.54 5.46l1.06-1.06"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
