"use client";

import { useEffect, useRef } from "react";

export interface TimelineStep {
  num: string;
  title: string;
  desc: string;
  align?: string;
}

interface Props {
  steps: TimelineStep[];
  /** Solid CSS color for dots (also used as fallback). Default: indigo. */
  numColor?: string;
  /** Gradient for the large step numbers. Defaults to indigo→violet. */
  numGradient?: string;
  /** CSS color/gradient for the vertical line. */
  lineColor?: string;
}

export default function ScrollTimeline({
  steps,
  numColor = "#6366f1",
  numGradient = "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
  lineColor = "linear-gradient(to bottom, rgba(99,102,241,0.8), rgba(167,139,250,0.4), rgba(99,102,241,0.05))",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const line = container.querySelector<HTMLElement>(".stl-line");
    const stepEls = container.querySelectorAll<HTMLElement>(".stl-step");
    const dotEls = container.querySelectorAll<HTMLElement>(".stl-dot");

    // Draw the vertical line when the section enters view
    const lineObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && line) {
          line.style.transform = "scaleY(1)";
          lineObs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    lineObs.observe(container);

    // Slide each step in from its side
    const stepObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
            stepObs.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );
    stepEls.forEach((el) => stepObs.observe(el));

    // Pop the dots in
    const dotObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transform =
              "translate(-50%, 0) scale(1)";
            dotObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    dotEls.forEach((el) => dotObs.observe(el));

    return () => {
      lineObs.disconnect();
      stepObs.disconnect();
      dotObs.disconnect();
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Animated vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden">
        <div
          className="stl-line w-full h-full origin-top"
          style={{
            background: lineColor,
            transform: "scaleY(0)",
            transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>

      {steps.map((step, i) => {
        const isRight =
          step.align === "right" || (!step.align && i % 2 !== 0);
        const delay = i * 90;

        const numStyle: React.CSSProperties = {
          backgroundImage: numGradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        };

        return (
          <div
            key={step.num}
            className={`stl-step relative flex items-start mb-20 last:mb-0 ${
              isRight ? "flex-row-reverse" : ""
            }`}
            style={{
              opacity: 0,
              transform: isRight ? "translateX(36px)" : "translateX(-36px)",
              transition: `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`,
            }}
          >
            {/* Content */}
            <div
              className={`flex-1 ${
                isRight ? "text-left pl-10" : "text-right pr-10"
              }`}
            >
              <div
                className="text-7xl font-bold leading-none mb-3"
                style={numStyle}
              >
                {step.num}
              </div>
              <h3 className="text-white font-bold text-xl mt-3 mb-3">
                {step.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Animated center dot */}
            <div
              className="stl-dot absolute z-10 mt-3 w-3 h-3 rounded-full"
              style={{
                left: "50%",
                transform: "translate(-50%, 0) scale(0)",
                background: numColor,
                opacity: 0.7,
                boxShadow: `0 0 8px ${numColor}60`,
                transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 200}ms`,
              }}
            />

            {/* Spacer for the other half */}
            <div className="flex-1" />
          </div>
        );
      })}
    </div>
  );
}
