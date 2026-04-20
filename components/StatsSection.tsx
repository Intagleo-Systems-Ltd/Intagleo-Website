"use client";

const stats = [
  { value: "200+", label: "Projects Delivered", description: "Across startups and enterprises" },
  { value: "04", label: "Years in Business", description: "Consistent excellence since 2021" },
  { value: "99%", label: "Client Retention", description: "Long-term partnerships built on trust" },
  { value: "20+", label: "Tech Experts", description: "Senior engineers and designers" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#0a0a0a] section-padding py-16 border-t border-white/5">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d0d0d] px-8 py-10 text-center hover:bg-[#111] transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-white/70 mb-1">{stat.label}</div>
              <div className="text-xs text-white/30">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
