"use client";

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

const doubled = [...clients, ...clients, ...clients];

export default function ClientsSection() {
  return (
    <section className="relative bg-[#0a0a0a] pt-6 pb-14 overflow-hidden">
      {/* Gradient bridge from hero (#050914) to this section (#0a0a0a) */}
      <div
        className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #050914 0%, #0a0a0a 100%)' }}
      />
      <div className="relative z-10 text-center mb-16 pt-4">
        <p className="text-xl text-white/30 uppercase tracking-widest mb-3">Our Solutions Power the World</p>
        {/* <h2 className="text-2xl md:text-2xl font-bold text-white">
          Our Solutions Power the World
        </h2> */}
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

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
                  filter: client.invert ? "brightness(0) invert(1)" : "none",
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
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(15,18,26,0.9) 100%)' }}
      />
    </section>
  );
}
