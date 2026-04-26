"use client";

import React from "react";
import Link from "next/link";

const stats = [
  { value: "98%", label: "On-Time Delivery" },
  { value: "150+", label: "Scaled Products" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Partners" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#000000]">

      {/* GIF background - full cover */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.gif"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay - subtle fade at bottom only, GIF fully visible above */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(0deg, #050914 15%, rgba(5, 9, 20, 0.15) 55%, rgba(5, 9, 20, 0.00) 75%)'
          }}
        />
      </div>

      {/* Main content - sits in the upper sky area of the GIF */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pt-28 pb-0">
        <h1
          className="text-white leading-[1.1] tracking-tight mb-6 max-w-4xl drop-shadow-lg font-medium"
          style={{
            fontFamily: '"Roobert TRIAL", sans-serif',
            fontSize: '68px',
            letterSpacing: '-2.74px',
            lineHeight: '1.1'
          }}
        >
          We Build Production-Ready<br />
          <span style={{
            background: 'linear-gradient(90deg, #6366f1 0%, #ff6b4a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Software That Scales
          </span>
        </h1>

        <p
          className="text-white max-w-xl mb-10 leading-relaxed drop-shadow"
          style={{
            color: '#D6D8D8',
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: '31px',
            fontFamily: '"Roobert TRIAL", sans-serif'
          }}
        >
          Elite development team trusted by CTOs to deliver complex systems, modernize
          legacy infrastructure, and ship reliable products right on schedule.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/case-studies"
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-7 py-3 rounded-full text-sm font-medium transition-colors duration-200 w-full sm:w-auto text-center shadow-lg"
          >
            View Our Portfolio
          </Link>
          <Link
            href="#services"
            className="border border-white/25 hover:border-white/50 text-white/85 hover:text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 w-full sm:w-auto text-center bg-white/5 backdrop-blur-sm"
          >
            How we work
          </Link>
        </div>
      </div>

      {/* Stats - positioned over the dune terrain in the GIF */}
      <div className="relative z-10 mt-auto pb-12 pt-12">
        <div className="flex items-center justify-evenly w-full px-8">
          {stats.flatMap((stat, i) => [
            <div key={stat.label} className="flex-1 text-center">
              <div
                className="font-medium mb-1 drop-shadow"
                style={{
                  fontFamily: '"Roobert TRIAL", sans-serif',
                  fontSize: '34px',
                  color: '#D9D9D9',
                  letterSpacing: '0.5px',
                  fontWeight: 500,
                }}
              >
                {stat.value}
              </div>
              <div
                className="whitespace-nowrap"
                style={{
                  color: '#BFBFBF',
                  fontSize: '15px',
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
                className="w-10 h-10 flex-shrink-0 opacity-60"
              />
            ) : null,
          ])}
        </div>

        {/* Tagline with dotted lines */}
        <div className="flex items-center mt-6">
          <div className="flex-1 border-t border-dashed border-white/20" />
          <p className="text-white/40 text-xs tracking-widest whitespace-nowrap px-6">
            US HQ · ISO Certified Processes · 12+ Industries
          </p>
          <div className="flex-1 border-t border-dashed border-white/20" />
        </div>
      </div>
    </section>
  );
}
