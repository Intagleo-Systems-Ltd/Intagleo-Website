"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import AutoplayVideo from "@/components/AutoplayVideo";

const stats = [
  { value: "100%", label: "On-Time Delivery" },
  { value: "150+", label: "Scaled Products" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Partners" },
];

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isLight = mounted && resolvedTheme === "light";

  return (
    <section className={`relative min-h-screen flex flex-col overflow-hidden ${isLight ? "bg-slate-50" : "bg-[#0a0a0a]"}`}>

      {/* GIF background - full cover */}
      <div className="absolute inset-0 z-0">
        <AutoplayVideo
          sources={[
            { src: "/hero.webm", type: "video/webm" },
            { src: "/hero.mp4", type: "video/mp4" },
          ]}
          className={`w-full h-full object-cover object-center ${isLight ? "opacity-40 grayscale" : ""}`}
        />
        {/* Overlay - fade at bottom to blend into page background */}
        <div
          className="absolute inset-0"
          style={{
            background: isLight
              ? "linear-gradient(0deg, #F8FAFC 25%, rgba(248,250,252,0.25) 55%, rgba(248,250,252,0.00) 75%)"
              : "linear-gradient(0deg, #0a0a0a 20%, rgba(10,10,10,0.15) 55%, rgba(10,10,10,0.00) 75%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pt-28 pb-0">
        <h1
          className="customHeading leading-[1.1] tracking-tight mb-4 drop-shadow-lg font-medium"
          style={{
            fontFamily: '"Roobert TRIAL", sans-serif',
            fontSize: "clamp(28px, 5vw, 64px)",
            letterSpacing: "-1.5px",
            lineHeight: "1.1",
          }}
        >
          We Build Production-Ready<br />
          Software That Scales
        </h1>

        <p
          className="max-w-3xl mb-10 leading-relaxed drop-shadow px-2 sm:px-0"
          style={{
            color: isLight ? "#475569" : "#D6D8D8",
            fontSize: "clamp(14px, 2.5vw, 22px)",
            fontWeight: 200,
            lineHeight: "1.4",
            fontFamily: '"Roobert TRIAL", sans-serif',
          }}
        >
          Elite development team trusted by CTOs to deliver complex systems,<span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>modernize infrastructure, and ship reliable products right on schedule.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/contact?type=general"
            className="btn-shimmer bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-full text-[16px] font-medium transition-colors duration-200 w-full sm:w-auto text-center shadow-lg"
          >
            Get Started
          </Link>
          <Link
            href="#services"
            className={`px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-200 w-full sm:w-auto text-center ${
              isLight
                ? "border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 bg-white/60 backdrop-blur-sm"
                : "border border-white/25 hover:border-white/50 text-white/85 hover:text-white bg-white/5 backdrop-blur-sm"
            }`}
          >
            How we work
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-auto pb-10 pt-10">
        {/* Mobile: 2×2 grid */}
        <div className="sm:hidden grid grid-cols-2 gap-4 px-6 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-medium mb-1 drop-shadow"
                style={{
                  fontFamily: '"Roobert TRIAL", sans-serif',
                  fontSize: "26px",
                  color: isLight ? "#1E293B" : "#D9D9D9",
                  letterSpacing: "0.5px",
                  fontWeight: 500,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: isLight ? "#64748B" : "#BFBFBF",
                  fontSize: "12px",
                  fontFamily: '"Roobert TRIAL", sans-serif',
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: single row */}
        <div className="hidden sm:flex items-center justify-evenly w-full px-8">
          {stats.flatMap((stat, i) => [
            <div key={stat.label} className="flex-1 text-center">
              <div
                className="font-medium mb-1 drop-shadow"
                style={{
                  fontFamily: '"Roobert TRIAL", sans-serif',
                  fontSize: "clamp(22px, 2.5vw, 34px)",
                  color: isLight ? "#1E293B" : "#D9D9D9",
                  letterSpacing: "0.5px",
                  fontWeight: 500,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: isLight ? "#64748B" : "#BFBFBF",
                  fontSize: "15px",
                  fontFamily: '"Roobert TRIAL", sans-serif',
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>,
            i < stats.length - 1 ? (
              <img
                key={`sep-${i}`}
                src="/stat-separator.svg"
                alt=""
                aria-hidden="true"
                className={`w-10 h-10 flex-shrink-0 opacity-60 ${isLight ? "invert" : ""}`}
              />
            ) : null,
          ])}
        </div>

        {/* Tagline with dotted lines */}
        <div className="flex items-center mt-6">
          <div className={`flex-1 border-t border-dashed ${isLight ? "border-slate-300" : "border-white/20"}`} />
          <p className={`text-[10px] sm:text-xs tracking-widest px-4 sm:px-6 text-center ${isLight ? "text-slate-400" : "text-white/40"}`}>
            US HQ · ISO Certified Processes · 12+ Industries
          </p>
          <div className={`flex-1 border-t border-dashed ${isLight ? "border-slate-300" : "border-white/20"}`} />
        </div>
      </div>
    </section>
  );
}
