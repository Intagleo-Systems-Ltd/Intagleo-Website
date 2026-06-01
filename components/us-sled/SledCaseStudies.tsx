import Link from "next/link";
import type { SledCaseStudy } from "@/lib/content";

function pad(n: number) {
  return String(n + 1).padStart(3, "0");
}

export default function SledCaseStudies({ cases }: { cases: SledCaseStudy[] }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">
            <span className="kicker-tick" aria-hidden="true" />
            Past Performance
          </span>
          <h2>Production work, on the record.</h2>
          <p className="section-intro">
            Engagements that illustrate the shape of what we ship. Full case studies, references, and
            past-performance write-ups available to qualified primes and procurement officers under NDA.
          </p>
        </div>

        <div className="case-grid">
          {cases.map((c, i) => {
            const metrics = [
              c.value && { v: c.value, k: "Engagement Value" },
              c.contractType && { v: c.contractType, k: "Contract Type" },
            ].filter(Boolean) as { v: string; k: string }[];

            return (
              <article key={c.slug} className="case-card">
                <div className="case-head">
                  <span className="mono-label">Case Study · {pad(i)}</span>
                  {c.contractType && <span className="case-ref">{c.contractType}</span>}
                </div>
                <h3>{c.title}</h3>
                {c.customer && (
                  <div className="case-client">
                    <span>{c.customer}</span>
                  </div>
                )}
                {metrics.length > 0 && (
                  <div
                    className="case-metrics"
                    style={{ gridTemplateColumns: `repeat(${metrics.length}, 1fr)` }}
                  >
                    {metrics.map((m) => (
                      <div key={m.k}>
                        <strong>{m.v}</strong>
                        <span>{m.k}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Link href={`/us-sled/${c.slug}`} className="case-toggle link-arrow">
                  Read case study →
                </Link>
              </article>
            );
          })}

          {/* Room for more — static slot */}
          <article className="case-card case-slot">
            <span className="slot-plus" aria-hidden="true">
              +
            </span>
            <h3>More past performance</h3>
            <p>
              Additional references: HHS, higher-ed SIS, and municipal utility engagements, released to
              qualified primes and procurement officers under NDA.
            </p>
            <a href="#contact" className="link-arrow">
              Request the full record →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
