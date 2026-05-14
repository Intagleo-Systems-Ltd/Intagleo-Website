"use client";

import Link from "next/link";

export default function AIStrategySection() {
  return (
    <section className="bg-[#0a0a0a] section-padding py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 items-stretch relative overflow-hidden border border-white/[0.06]" style={{borderRadius: '32px', background: '#0E121D', backdropFilter: 'blur(3px)'}}>
          {/* Left , text content */}
          <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center relative z-10">
            <h2
              className="customHeading mb-6"
              style={{
                fontSize: 'clamp(24px, 3.5vw, 42px)',
                fontWeight: 500,
                lineHeight: '1.2',
                letterSpacing: '-1px',
                fontFamily: '"Roobert TRIAL", sans-serif'
              }}
            >
              If your AI strategy is moving fast but your governance isn&apos;t keeping pace, let&apos;s fix that.
            </h2>
            <p className="text-white/60 font-normal leading-relaxed mb-8 max-w-sm" style={{ fontSize: '16px' }}>
              We help companies build the readiness, security, and compliance foundations needed for responsible AI adoption at scale.
            </p>
            <Link
              href="/contact?type=ai-strategy"
              className="self-start px-6 py-2.5 rounded-full btn-shimmer bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium transition-colors duration-200"
            >
              Explore More
            </Link>
          </div>

          {/* Right , AI Chip GIF */}
          <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
            <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-50">
              <source src="/AI.webm" type="video/webm" />
              <source src="/AI.mp4" type="video/mp4" />
            </video>
            {/* Fade blend into left panel */}
            <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#0E121D] to-transparent" style={{left: '0%', right: '0%'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
