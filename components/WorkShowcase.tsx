"use client";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "Real-time portfolio analytics and trading platform for retail investors.",
    tags: ["React", "Node.js", "PostgreSQL"],
    bg: "from-blue-900/30 to-indigo-900/20",
  },
  {
    title: "HealthCare Portal",
    category: "Healthcare Platform",
    description: "Telemedicine and patient management system serving 50k+ monthly users.",
    tags: ["Next.js", "Python", "AWS"],
    bg: "from-emerald-900/30 to-teal-900/20",
  },
  {
    title: "E-Commerce Engine",
    category: "Commerce Platform",
    description: "Headless commerce platform with AI-powered recommendations.",
    tags: ["TypeScript", "GraphQL", "Redis"],
    bg: "from-orange-900/30 to-amber-900/20",
  },
  {
    title: "SaaS Analytics",
    category: "Data Platform",
    description: "Multi-tenant analytics SaaS with real-time data pipelines.",
    tags: ["Python", "Kafka", "Grafana"],
    bg: "from-purple-900/30 to-violet-900/20",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="bg-[#0a0a0a] section-padding py-24 border-t border-white/5">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Case Studies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              The work speaks<br />for itself.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
          >
            View all projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 transition-all duration-300 cursor-pointer bg-gradient-to-br ${project.bg}`}
            >
              {/* Mock screenshot area */}
              <div className="h-52 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Mock UI */}
                  <div className="w-full px-8">
                    <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/10 rounded w-3/4" />
                        <div className="h-2 bg-white/10 rounded w-1/2" />
                        <div className="h-2 bg-white/10 rounded w-2/3" />
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          <div className="h-8 bg-white/5 rounded border border-white/5" />
                          <div className="h-8 bg-white/5 rounded border border-white/5" />
                          <div className="h-8 bg-white/5 rounded border border-white/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-7 border-t border-white/5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white/40" viewBox="0 0 20 20" fill="none">
                      <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-white/5 border border-white/8 rounded-full text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
