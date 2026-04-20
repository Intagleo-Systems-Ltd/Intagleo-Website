"use client";

import { useEffect, useRef, useState } from "react";

export interface UseCaseCard {
  index: number;
  title: string;
  description: string;
  riveUrl: string;
  slug: string;
}

const STEP = 750; // scroll px per card transition
const DEPTH_SCALE = 0.035;
const DEPTH_Y = 14;
const DEPTH_OPACITY = [1, 0.82, 0.65, 0.5];

export default function UseCasesSection() {
  const [cards, setCards] = useState<UseCaseCard[]>([]);

  useEffect(() => {
    fetch("/api/case-studies")
      .then((r) => r.json())
      .then((data) => {
        const all = data.caseStudies ?? [];
        const mapped: UseCaseCard[] = all
          .filter((cs: any) => cs.rive_url)
          .slice(0, 4)
          .map((cs: any, i: number) => ({
            index: i,
            title: cs.title,
            description: cs.challenge,
            riveUrl: cs.rive_url,
            slug: cs.slug,
          }));
        setCards(mapped);
      })
      .catch(() => {});
  }, []);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  useEffect(() => {
    if (!cards.length) return;
    const riveInstances: any[] = [];
    let STRef: any = null;
    let stInstance: any = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      STRef = ScrollTrigger;

      // Load Rive animations
      try {
        const { Rive, Layout, Fit, Alignment } = await import("@rive-app/canvas");
        canvasRefs.current.forEach((canvas, i) => {
          if (!canvas || !cards[i]) return;
          try {
            const r = new Rive({
              src: cards[i].riveUrl,
              canvas,
              autoplay: true,
              layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
              onLoad: () => r.resizeDrawingSurfaceToCanvas(),
            });
            riveInstances.push(r);
          } catch (e) {
            console.warn("Rive load error", i, e);
          }
        });
      } catch (e) {
        console.warn("Rive import error", e);
      }

      const validCards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!wrapperRef.current || !validCards.length) return;

      const n = validCards.length;

      // --- Initial stacked depth state ---
      validCards.forEach((card, i) => {
        gsap.set(card, {
          scale: 1 - i * DEPTH_SCALE,
          y: i * DEPTH_Y,
          opacity: DEPTH_OPACITY[i] ?? 0.45,
          transformOrigin: "center bottom",
        });
      });

      // --- Master timeline: each "step" = one card exit + stack advance ---
      // Timeline is n-1 "beats" long; ScrollTrigger maps scroll → progress
      const tl = gsap.timeline({ paused: true });

      for (let step = 0; step < n - 1; step++) {
        const at = step; // beat position

        // Top card accelerates out upward (power2.in = slow start, fast exit)
        tl.to(
          validCards[step],
          { scale: 0.78, opacity: 0, y: -90, ease: "power2.in", duration: 1 },
          at
        );

        // All cards below glide forward one depth level (power2.out = fast start, gentle landing)
        for (let j = step + 1; j < n; j++) {
          const newDepth = j - step - 1;
          tl.to(
            validCards[j],
            {
              scale: 1 - newDepth * DEPTH_SCALE,
              y: newDepth * DEPTH_Y,
              opacity: DEPTH_OPACITY[newDepth] ?? 0.45,
              ease: "power2.out",
              duration: 1,
            },
            at
          );
        }
      }

      stInstance = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${(n - 1) * STEP}`,
        scrub: 1,
        onUpdate: (self: any) => {
          tl.progress(self.progress);
        },
      });
    };

    init();

    return () => {
      try { stInstance?.kill(); } catch {}
      riveInstances.forEach((r) => { try { r.cleanup?.(); } catch {} });
    };
  }, [cards]);

  // Extra viewport height so the last card stays visible while the section scrolls out
  const totalScrollHeight = (cards.length - 1) * STEP + (typeof window !== "undefined" ? window.innerHeight : 900);

  return (
    <div
      ref={wrapperRef}
      className="relative bg-[#0a0a0a]"
      style={{ height: `${totalScrollHeight}px` }}
    >
      {/* CSS sticky — stays pinned while wrapper provides scroll distance */}
      <div
        className="sticky top-0 w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Header */}
        <div className="text-center mb-10 px-6 relative z-10">
          <h2
            className="text-white font-medium mb-4"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(28px, 3.5vw, 48px)",
              letterSpacing: "-1px",
            }}
          >
            The work speaks best.
          </h2>
          <p
            className="text-white/50 font-normal"
            style={{
              fontFamily: '"Roobert TRIAL", sans-serif',
              fontSize: "clamp(14px, 1.1vw, 17px)",
            }}
          >
            See how we've helped businesses turn complex challenges into scalable digital solutions.
          </p>
        </div>

        {/* Card stack */}
        <div
          className="relative"
          style={{ width: "min(900px, 92vw)", height: "460px" }}
        >
          {cards.map((card, i) => (
            <div
              key={card.slug}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute inset-0 rounded-2xl overflow-hidden flex"
              style={{
                zIndex: cards.length - i,
                background: "#0d1117",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
                willChange: "transform, opacity",
                transformOrigin: "center bottom",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const glow = e.currentTarget.querySelector<HTMLElement>(".card-glow");
                if (glow) {
                  glow.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(160,20,20,0.28), transparent 65%)`;
                  glow.style.opacity = "1";
                }
              }}
              onMouseLeave={(e) => {
                const glow = e.currentTarget.querySelector<HTMLElement>(".card-glow");
                if (glow) glow.style.opacity = "0";
              }}
            >
              {/* Cursor glow overlay */}
              <div
                className="card-glow absolute inset-0 pointer-events-none rounded-2xl z-20 transition-opacity duration-500"
                style={{ opacity: 0 }}
              />

              {/* Left: Rive animation panel */}
              <div
                className="relative flex-shrink-0"
                style={{ width: "60%", background: "#080c14" }}
              >
                <canvas
                  ref={(el) => { canvasRefs.current[i] = el; }}
                  className="w-full h-full"
                />
              </div>

              {/* Right: text panel */}
              <div className="relative flex flex-col justify-between p-10 flex-1"
                style={{ background: "#0d1117" }}
              >
                {/* Top: title + description + CTA */}
                <div>
                  <h3
                    className="text-white font-semibold mb-4 leading-snug"
                    style={{
                      fontFamily: '"Roobert TRIAL", sans-serif',
                      fontSize: "clamp(18px, 1.6vw, 24px)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-5">
                    {card.description}
                  </p>
                  <a
                    href={`/case-studies/${card.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-5 py-2.5 transition-all duration-200"
                  >
                    Read More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Bottom: large muted index number */}
                <div
                  className="text-right select-none"
                  style={{
                    fontFamily: '"Roobert TRIAL", sans-serif',
                    fontSize: "clamp(36px, 4vw, 56px)",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.07)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
