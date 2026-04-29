"use client";

import { useEffect, useState } from "react";

type LineType = "cmd" | "blank" | "plain" | "prop" | "log";

interface Line {
  delay: number;
  type: LineType;
  text?: string;
  val?: string;
  hash?: string;
  msg?: string;
}

const LINES: Line[] = [
  { delay: 400,  type: "cmd",   text: "cat team.config.ts" },
  { delay: 900,  type: "blank" },
  { delay: 1050, type: "plain", text: "export const team = {" },
  { delay: 1200, type: "prop",  text: "engineers", val: '"200+"' },
  { delay: 1380, type: "prop",  text: "countries",  val: "18" },
  { delay: 1560, type: "prop",  text: "remote",     val: "true" },
  { delay: 1740, type: "prop",  text: "deploys",    val: '"3× per week"' },
  { delay: 1920, type: "prop",  text: "politics",   val: "false" },
  { delay: 2100, type: "plain", text: "};" },
  { delay: 2600, type: "blank" },
  { delay: 2800, type: "cmd",   text: "git log --oneline -3" },
  { delay: 3300, type: "log",   hash: "a4f2b91", msg: "feat: real-time analytics dashboard" },
  { delay: 3550, type: "log",   hash: "3c8e12d", msg: "fix: auth token edge case" },
  { delay: 3800, type: "log",   hash: "9d1f04a", msg: "chore: migrate infra to k8s" },
  { delay: 4300, type: "blank" },
];

function renderLine(line: Line) {
  switch (line.type) {
    case "blank":
      return <div className="h-2" />;

    case "cmd":
      return (
        <div className="flex items-center gap-2">
          <span className="text-[#3B82F6] select-none">$</span>
          <span className="text-white/80">{line.text}</span>
        </div>
      );

    case "plain":
      return <span className="text-white/55">{line.text}</span>;

    case "prop": {
      const isStr = line.val?.startsWith('"');
      return (
        <div className="pl-4">
          <span className="text-[#93c5fd]">{line.text}</span>
          <span className="text-white/25"> : </span>
          <span className={isStr ? "text-[#86efac]" : "text-[#f9a8d4]"}>{line.val}</span>
          <span className="text-white/25">,</span>
        </div>
      );
    }

    case "log":
      return (
        <div>
          <span className="text-[#fcd34d]">{line.hash}</span>
          <span className="text-white/40"> {line.msg}</span>
        </div>
      );

    default:
      return null;
  }
}

export default function HeroTerminal() {
  const [visible, setVisible] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const timers = LINES.map((line, i) =>
      setTimeout(() => setVisible(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  const done = visible >= LINES.length;

  return (
    <div className="relative">
      {/* Glow behind terminal */}
      <div
        className="absolute -inset-4 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative bg-[#080810] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0c0c16]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-white/20 text-xs font-mono">~/intagleo</span>
          <div className="w-16" />
        </div>

        {/* Terminal body */}
        <div className="px-5 py-5 font-mono text-[13px] leading-relaxed min-h-[320px]">
          {LINES.slice(0, visible).map((line, i) => (
            <div key={i}>{renderLine(line)}</div>
          ))}

          {/* Blinking cursor */}
          <div className="flex items-center gap-2 mt-0.5">
            {done && <span className="text-[#3B82F6] select-none">$</span>}
            <span
              className="text-white/70 transition-opacity duration-75"
              style={{ opacity: cursorOn ? 1 : 0 }}
            >
              █
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
