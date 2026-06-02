"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const SECTORS = [
  "State government",
  "City / County",
  "Higher education",
  "K–12 district",
  "Municipal utility",
  "Prime integrator / teaming",
  "Other",
];

const EMPTY = { name: "", email: "", org: "", role: "", sector: "", vehicle: "", message: "" };
type FormState = typeof EMPTY;
type Errors = Partial<Record<keyof FormState, string>>;

export default function SledBriefingForm() {
  const [f, setF] = useState<FormState>(EMPTY);
  const [err, setErr] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const v = e.target.value;
      setF((s) => ({ ...s, [k]: v }));
      if (err[k]) setErr((s) => ({ ...s, [k]: undefined }));
      if (submitError) setSubmitError("");
    };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!f.name.trim()) e.name = "Required";
    if (!f.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email";
    if (!f.org.trim()) e.org = "Required";
    if (!f.sector) e.sector = "Select one";
    if (!f.message.trim()) e.message = "Add a sentence on the pursuit";
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    if (Object.keys(e).length > 0) return;
    if (SITE_KEY && !captchaToken) {
      setSubmitError("Please complete the CAPTCHA.");
      return;
    }

    setLoading(true);
    setSubmitError("");

    // Fold the SLED-specific fields into the existing contact payload shape.
    const messageLines = [
      f.role.trim() && `Role / Title: ${f.role.trim()}`,
      f.vehicle.trim() && `Vehicle / RFP #: ${f.vehicle.trim()}`,
      "",
      f.message.trim(),
    ].filter((l) => l !== false && l !== undefined);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          company: f.org,
          context: f.sector,
          message: messageLines.join("\n"),
          type: "us-sled",
          captchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        setCaptchaToken(null);
        setCaptchaKey((k) => k + 1);
      } else {
        setSent(true);
      }
    } catch {
      setSubmitError("Network error. Please try again.");
      setCaptchaToken(null);
      setCaptchaKey((k) => k + 1);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <aside className="form-card form-card-done">
        <span className="form-bracket form-bracket-tl" aria-hidden="true" />
        <span className="form-bracket form-bracket-br" aria-hidden="true" />
        <div className="done-mark" aria-hidden="true">
          <span className="star-bullet done-star" />
        </div>
        <span className="mono-label">Request received</span>
        <h3 className="done-h">Briefing request logged.</h3>
        <p className="done-p">
          Thanks, {f.name.split(" ")[0] || "there"}. A U.S.-based account director will reach out to
          <strong> {f.org}</strong> to confirm a 30-minute slot, within <strong>one business day</strong>, U.S.
          Pacific time.
        </p>
        <dl className="done-recap">
          <div>
            <dt>Contact</dt>
            <dd>{f.email}</dd>
          </div>
          <div>
            <dt>Sector</dt>
            <dd>{f.sector}</dd>
          </div>
          {f.vehicle.trim() && (
            <div>
              <dt>Vehicle / RFP</dt>
              <dd>{f.vehicle}</dd>
            </div>
          )}
        </dl>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setF(EMPTY);
            setErr({});
            setSent(false);
          }}
        >
          Submit another request
        </button>
      </aside>
    );
  }

  const field = (
    k: keyof FormState,
    label: string,
    opts: {
      req?: boolean;
      ph?: string;
      full?: boolean;
      type?: "select" | "textarea";
      inputType?: string;
      autoComplete?: string;
    } = {}
  ) => {
    const id = "bf-" + k;
    const errId = id + "-err";
    const invalid = !!err[k];
    // Shared a11y wiring so screen readers announce required + error state.
    const aria = {
      "aria-required": opts.req || undefined,
      "aria-invalid": invalid || undefined,
      "aria-describedby": invalid ? errId : undefined,
    } as const;
    return (
      <div className={"field" + (opts.full ? " field-full" : "")}>
        <label htmlFor={id} className="mono-label">
          {label}
          {opts.req && <span className="req">*</span>}
        </label>
        {opts.type === "select" ? (
          <select
            id={id}
            className={"ipt ipt-select" + (invalid ? " ipt-invalid" : "")}
            value={f[k]}
            onChange={set(k)}
            autoComplete={opts.autoComplete}
            {...aria}
          >
            <option value="" disabled>
              Select…
            </option>
            {SECTORS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : opts.type === "textarea" ? (
          <textarea
            id={id}
            className={"ipt ipt-area" + (invalid ? " ipt-invalid" : "")}
            rows={4}
            placeholder={opts.ph}
            value={f[k]}
            onChange={set(k)}
            autoComplete={opts.autoComplete}
            {...aria}
          />
        ) : (
          <input
            id={id}
            type={opts.inputType || "text"}
            className={"ipt" + (invalid ? " ipt-invalid" : "")}
            placeholder={opts.ph}
            value={f[k]}
            onChange={set(k)}
            autoComplete={opts.autoComplete}
            {...aria}
          />
        )}
        {invalid && (
          <span className="field-err" id={errId} role="alert">
            {err[k]}
          </span>
        )}
      </div>
    );
  };

  return (
    <aside className="form-card">
      <span className="form-bracket form-bracket-tl" aria-hidden="true" />
      <span className="form-bracket form-bracket-br" aria-hidden="true" />
      <div className="form-head">
        <div>
          <span className="mono-label">Request a Briefing</span>
          <h3>Send the brief. We&apos;ll staff the read.</h3>
        </div>
        <span className="form-sla">
          <span className="star-bullet" />1 business day
        </span>
      </div>
      <form className="form-grid" onSubmit={submit} noValidate>
        {field("name", "Full name", { req: true, ph: "Jane Carter", autoComplete: "name" })}
        {field("email", "Work email", {
          req: true,
          inputType: "email",
          ph: "jcarter@state.gov",
          autoComplete: "email",
        })}
        {field("org", "Agency / Organization", {
          req: true,
          ph: "Dept. of Health & Human Services",
          autoComplete: "organization",
        })}
        {field("role", "Role / Title", {
          ph: "Procurement Officer (optional)",
          autoComplete: "organization-title",
        })}
        {field("sector", "Buyer type", { req: true, type: "select" })}
        {field("vehicle", "Vehicle / RFP #", { ph: "RFP 26-022 (optional)" })}
        {field("message", "What's the pursuit?", {
          req: true,
          full: true,
          type: "textarea",
          ph: "Scope, incumbent system, timeline, and where you'd want us to fit…",
        })}

        {SITE_KEY && (
          <div className="field-full">
            <ReCAPTCHA
              key={captchaKey}
              sitekey={SITE_KEY}
              theme="dark"
              onChange={(token: string | null) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          </div>
        )}

        {submitError && (
          <div className="field-full">
            <span className="field-err" role="alert">
              {submitError}
            </span>
          </div>
        )}

        <div className="field-full form-foot">
          <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
            {loading ? "Sending…" : "Schedule a Briefing →"}
          </button>
          <p className="form-note">
            Briefings are run by a delivery lead, not sales. We never share your information.
          </p>
        </div>
      </form>
    </aside>
  );
}
