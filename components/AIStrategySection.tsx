"use client";

import Link from "next/link";

export default function AIStrategySection() {
  return (
    <section className="bg-[#0a0a0a] section-padding py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 items-stretch relative overflow-hidden border border-white/[0.06]" style={{borderRadius: '32px', background: '#0E121D', backdropFilter: 'blur(3px)'}}>
          {/* Left , text content */}
          <div className="p-10 lg:p-14 flex flex-col justify-center relative z-10">
            <h2
              className="text-white mb-6"
              style={{
                fontSize: '42px',
                fontWeight: 500,
                lineHeight: '48px',
                letterSpacing: '-1.74px',
                fontFamily: '"Roobert TRIAL", sans-serif'
              }}
            >
              If your AI strategy is moving fast but your governance isn&apos;t keeping pace, let&apos;s fix that.
            </h2>
            <p
              className="mb-8 max-w-md"
              style={{
                color: '#D6D8D8',
                fontSize: '22px',
                fontWeight: 400,
                lineHeight: '31px',
                fontFamily: '"Roobert TRIAL", sans-serif'
              }}
            >
              We help companies build the readiness, security, and compliance foundations needed for responsible AI adoption at scale.
            </p>
            <Link
              href="/contact?type=ai-strategy"
              className="self-start inline-flex items-center gap-2 bg-[#e8341c] hover:bg-[#c02a16] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Explore More
            </Link>
          </div>

          {/* Right , AI Chip GIF */}
          <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/AI.gif"
              alt="AI Circuit Chip"
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-50"
            />
            {/* Fade blend into left panel */}
            <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#0E121D] to-transparent" style={{left: '0%', right: '0%'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
