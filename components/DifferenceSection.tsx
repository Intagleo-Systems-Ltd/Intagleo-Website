"use client";

const dotGrid =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E\")";

export default function DifferenceSection() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "#050914", marginTop: "-120px", zIndex: 1 }}>

      {/* ── Wave - pulled up behind IndustriesSection (z-index lower) ── */}
      <div
        className="relative w-full pointer-events-none"
        style={{ height: "503px" }}
      >
        <img
          src="/wave-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 55%" }}
        />
        {/* Figma gradient: dark at bottom, transparent at top */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, #050914 34.8%, rgba(5,9,20,0.00) 82.83%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="section-padding pb-24">
        <div className="mx-auto max-w-[1400px]">

          {/* Two-column intro */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Engineering tomorrow.<br />Delivering today.
              </h2>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/50 hover:text-white transition-all"
              >
                More About Intagleo
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                We&apos;ve spent two decades perfecting the art of the &ldquo;how.&rdquo;
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                Since 2004, Intagleo has partnered with enterprises and product teams to
                design and run the technology foundations behind modern business. From
                cloud to AI, we fuse elite engineering expertise with relentless execution to
                turn complex challenges into lasting advantage.
              </p>
            </div>
          </div>

          {/* Stat cards */}
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto" }}
          >
            {/* 200+ */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-end min-h-[280px]"
              style={{ background: "#161618", backgroundImage: dotGrid, gridColumn: "1", gridRow: "1 / 3" }}
            >
              <div className="text-6xl md:text-7xl font-light text-white mb-2">200+</div>
              <div className="text-white/50 text-sm">Engineers &amp; Specialists</div>
            </div>

            {/* 04 */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-center items-center text-center min-h-[130px]"
              style={{ background: "#161618", backgroundImage: dotGrid }}
            >
              <div className="text-5xl md:text-6xl font-light text-white mb-2">04</div>
              <div className="text-white/50 text-sm">Global Offices</div>
            </div>

            {/* 20+ */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-end min-h-[280px]"
              style={{ background: "#161618", backgroundImage: dotGrid, gridColumn: "3", gridRow: "1 / 3" }}
            >
              <div className="text-6xl md:text-7xl font-light text-white mb-2">20+</div>
              <div className="text-white/50 text-sm">Years of service</div>
            </div>

            {/* 99% */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-center items-center text-center min-h-[130px]"
              style={{ background: "#161618", backgroundImage: dotGrid, gridColumn: "2", gridRow: "2" }}
            >
              <div className="text-5xl md:text-6xl font-light text-white mb-2">99%</div>
              <div className="text-white/50 text-sm">Client Satisfaction</div>
            </div>
          </div>

        </div>
      </div>

      {/* Gradient fade into the next section (#0a0a0a) */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
      />
    </section>
  );
}
