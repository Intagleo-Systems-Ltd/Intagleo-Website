import Link from "next/link";
import type { SledCaseStudy } from "@/lib/content";

function pad(n: number) {
  return String(n + 1).padStart(3, "0");
}

export default function SledCaseStudies({ cases }: { cases: SledCaseStudy[] }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="case-headrow">
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
          <a href="#contact" className="btn btn-ghost case-fullrecord">
            Request the full record →
          </a>
        </div>

        <div className="case-grid">
          {cases.map((c, i) => {
            const metrics = [
              c.value && { v: c.value, k: "Engagement Value" },
              c.contractType && { v: c.contractType, k: "Contract Type" },
            ].filter(Boolean) as { v: string; k: string }[];

            return (
              <article key={c.slug} className="case-card">
                <div className="case-meta">
                  <span className="case-no">Case Study · {pad(i)}</span>
                  {c.contractType && <span className="case-ref">{c.contractType}</span>}
                </div>

                <div className="case-cover">
                  {c.cover_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.cover_image} alt={c.cover_alt || c.title} loading="lazy" />
                  ) : (
                    <span className="case-cover-ph" aria-hidden="true">
                      US-SLED · PRE-BID DOSSIER
                    </span>
                  )}
                </div>

                <h3>{c.title}</h3>
                {c.customer && (
                  <div className="case-client">
                    <span>{c.customer}</span>
                  </div>
                )}
                {metrics.length > 0 && (
                  <dl className="case-metrics">
                    {metrics.map((m) => (
                      <div key={m.k}>
                        <strong>{m.v}</strong>
                        <span>{m.k}</span>
                      </div>
                    ))}
                  </dl>
                )}
                <Link href={`/us-sled/${c.slug}`} className="case-toggle">
                  Read case study →
                </Link>
              </article>
            );
          })}
        </div>

        <div className="case-allwrap">
          <Link href="/case-studies" className="btn btn-primary">
            See All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
