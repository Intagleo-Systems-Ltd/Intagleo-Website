"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const clients = [
  { name: "IBM",          src: "/logos/ibm.png",          invert: true  },
  { name: "McDonald's",   src: "/logos/mcdonalds.png",    invert: true  },
  { name: "Samsung",      src: "/logos/samsung.png",      invert: true  },
  { name: "Red Bull",     src: "/logos/red-bull.png",     invert: true  },
  { name: "KIA",          src: "/logos/kia.png",          invert: true  },
  { name: "TCL",          src: "/logos/tcl.png",          invert: true  },
  { name: "Emaar",        src: "/logos/emaar.png",        invert: false },
  { name: "Arby's",       src: "/logos/arbys.png",        invert: true  },
  { name: "dnata",        src: "/logos/dnata.png",        invert: true  },
  { name: "Krispy Kreme", src: "/logos/krispy-kreme.png", invert: true  },
  { name: "Alpha Tauri",  src: "/logos/alpha-tauri.png",  invert: true  },
];

const doubled = [...Array(3)].flatMap(() => clients);

export default function ClientsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isLight = mounted && resolvedTheme === "light";

  const bgColor = isLight ? "#F8FAFC" : "#0a0a0a";

  return (
    <section className={`relative pt-20 pb-28 overflow-hidden ${isLight ? "bg-slate-50" : "bg-[#0a0a0a]"}`}>
      <div className="relative z-10 text-center mb-16 pt-4">
        <p className={`text-xl uppercase tracking-widest mb-3 ${isLight ? "text-slate-400" : "text-white/30"}`}>
          Our Solutions Power the World
        </p>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
        />

        <div className="flex items-center marquee-scroll">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 mx-10 opacity-50 hover:opacity-100 transition-opacity duration-300"
              title={client.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.src}
                alt={client.name}
                className="h-10 w-auto object-contain"
                style={{
                  filter: client.invert
                    ? isLight ? "brightness(0)" : "brightness(0) invert(1)"
                    : "none",
                  maxWidth: "140px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: `linear-gradient(180deg, transparent 0%, ${bgColor} 100%)` }}
      />
    </section>
  );
}
