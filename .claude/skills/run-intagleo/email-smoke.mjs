#!/usr/bin/env node
// Email smoke test for the contact + careers APIs (nodemailer path).
//
// Starts an in-process SMTP sink on 127.0.0.1 (advertises AUTH so nodemailer's
// auth path is exercised; accepts everything; delivers nothing), launches the
// production server with every SMTP_* / CONTACT_* / CAREERS_* env var pointed at
// the sink, then POSTs to /api/contact and /api/apply and asserts on the
// captured messages. No mail ever leaves this machine.
//
// Usage (from repo root, after `npm run build`):
//   node .claude/skills/run-intagleo/email-smoke.mjs [--port 3124] [--out result.json] [--compare baseline.json]
//
// Next's env loader never overrides a key already present in process.env (even
// ""), so the explicit env below wins over .env.local.

import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i !== -1 && args[i + 1] ? args[i + 1] : d; };
const PORT = opt("--port", "3124");
const BASE = `http://localhost:${PORT}`;
const OUT = opt("--out", null);
const COMPARE = opt("--compare", null);
const REPO = process.cwd();
const SINK_RCPT = "smoke-notify@example.test";

// ── Minimal SMTP sink ───────────────────────────────────────────────────────
const messages = [];
function startSink() {
  return new Promise((res) => {
    const srv = createServer((sock) => {
      let buf = "", inData = false, authLogin = 0, env = { from: null, rcpt: [] };
      const say = (s) => sock.write(s + "\r\n");
      say("220 smoke-sink ESMTP");
      sock.on("data", (chunk) => {
        buf += chunk.toString("latin1");
        while (true) {
          if (inData) {
            const end = buf.indexOf("\r\n.\r\n");
            if (end === -1) return;
            messages.push({ ...env, raw: buf.slice(0, end) });
            buf = buf.slice(end + 5); inData = false; env = { from: null, rcpt: [] };
            say("250 2.0.0 queued"); continue;
          }
          const nl = buf.indexOf("\r\n"); if (nl === -1) return;
          const line = buf.slice(0, nl); buf = buf.slice(nl + 2);
          const cmd = line.toUpperCase();
          if (authLogin) { authLogin = authLogin === 1 ? (say("334 UGFzc3dvcmQ6"), 2) : (say("235 2.7.0 ok"), 0); continue; }
          if (cmd.startsWith("EHLO")) { sock.write("250-smoke-sink\r\n250-AUTH PLAIN LOGIN\r\n250 8BITMIME\r\n"); }
          else if (cmd.startsWith("HELO")) say("250 smoke-sink");
          else if (cmd.startsWith("AUTH PLAIN")) say("235 2.7.0 ok");
          else if (cmd.startsWith("AUTH LOGIN")) { authLogin = 1; say("334 VXNlcm5hbWU6"); }
          else if (cmd.startsWith("MAIL FROM")) { env.from = line.slice(10).trim(); say("250 ok"); }
          else if (cmd.startsWith("RCPT TO")) { env.rcpt.push(line.slice(8).trim().replace(/[<>]/g, "")); say("250 ok"); }
          else if (cmd === "DATA") { inData = true; say("354 go"); }
          else if (cmd === "RSET") { env = { from: null, rcpt: [] }; say("250 ok"); }
          else if (cmd === "QUIT") { say("221 bye"); sock.end(); }
          else say("250 ok");
        }
      });
      sock.on("error", () => {});
    });
    srv.listen(0, "127.0.0.1", () => res(srv));
  });
}

// ── Message parsing ─────────────────────────────────────────────────────────
function decodeWords(s) {
  // RFC 2047 §6.2: whitespace between adjacent encoded-words is not displayed.
  return s.replace(/(\?=)\s+(?==\?)/g, "$1").replace(/=\?([^?]+)\?([QBqb])\?([^?]*)\?=/g, (_, cs, enc, txt) => {
    const bytes = enc.toUpperCase() === "B"
      ? Buffer.from(txt, "base64")
      : Buffer.from(txt.replace(/_/g, " ").replace(/=([0-9A-F]{2})/gi, (_, h) => String.fromCharCode(parseInt(h, 16))), "latin1");
    return bytes.toString(/utf-?8/i.test(cs) ? "utf8" : "latin1");
  });
}
function header(raw, name) {
  const head = raw.split(/\r\n\r\n/)[0].replace(/\r\n[ \t]+/g, " ");
  const m = head.match(new RegExp(`^${name}:\\s*(.*)$`, "im"));
  return m ? decodeWords(m[1]).trim() : null;
}
const summarize = (m) => ({
  subject: header(m.raw, "Subject"),
  rcpt: [...m.rcpt].sort(),
  replyTo: header(m.raw, "Reply-To"),
  html: /content-type:\s*text\/html/i.test(m.raw),
  attachment: (m.raw.match(/content-disposition:\s*attachment;[^\r\n]*filename="?([^";\r\n]+)/i) || [])[1] ?? null,
  attachmentType: /content-type:\s*application\/pdf/i.test(m.raw) ? "application/pdf" : null,
});

// ── Server lifecycle ────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function launch(env) {
  const srv = spawn("node", ["server.js"], { cwd: REPO, env: { ...process.env, ...env, PORT }, stdio: ["ignore", "ignore", "pipe"] });
  let stderr = ""; srv.stderr.on("data", (d) => { stderr += d; });
  srv.getStderr = () => stderr;
  for (let i = 0; i < 120; i++) {
    try { const r = await fetch(BASE + "/robots.txt"); if (r.status > 0) return srv; } catch { /* not up */ }
    await sleep(500);
  }
  srv.kill(); throw new Error(`server never became ready on ${BASE}`);
}
const stop = (srv) => new Promise((r) => { srv.on("exit", r); srv.kill(); setTimeout(r, 3000); });

// ── Tests ───────────────────────────────────────────────────────────────────
let pass = 0, fail = 0;
const check = (ok, label, detail = "") => { console.log(`  ${ok ? "PASS" : "FAIL"}  ${label}${ok || !detail ? "" : "  — " + detail}`); ok ? pass++ : fail++; };
const postJson = (path, body) => fetch(BASE + path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
const pdf = () => new Blob([`%PDF-1.4\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF\n`], { type: "application/pdf" });

async function main() {
  if (!existsSync(join(REPO, ".next", "BUILD_ID"))) { console.error("No production build (.next/BUILD_ID). Run: npm run build"); process.exit(2); }
  const sink = await startSink();
  const sinkPort = sink.address().port;
  const mailEnv = {
    SMTP_HOST: "127.0.0.1", SMTP_PORT: String(sinkPort), SMTP_SECURE: "false",
    SMTP_USER: "smoke-user", SMTP_PASS: "smoke-pass", SMTP_FROM: "noreply@example.test",
    CONTACT_NOTIFY_EMAILS: SINK_RCPT, CAREERS_NOTIFY_EMAILS: SINK_RCPT,
    ...Object.fromEntries(["START_PROJECT", "TECHNICAL_CALL", "AI_STRATEGY", "STAFF_AUG", "LEGACY_MOD", "MOBILE_DEV",
      "CLOUD_DEVOPS", "AI_ML", "CUSTOM_SOFTWARE", "US_SLED"].map((k) => [`CONTACT_${k}_EMAILS`, SINK_RCPT])),
    RECAPTCHA_SECRET_KEY: "",
  };
  console.log(`\n  EMAIL SMOKE  (server ${BASE}, smtp sink 127.0.0.1:${sinkPort})\n  ${"-".repeat(58)}`);

  // Phase A: captcha disabled → mail flows through nodemailer to the sink.
  let srv = await launch(mailEnv);
  const results = {};
  try {
    for (const type of ["general", "ai-strategy", "us-sled"]) {
      const before = messages.length;
      const r = await postJson("/api/contact", { name: "Smoke Tester", email: "submitter@example.test", company: "Smoke Co", message: "Dependency-upgrade smoke test.", type });
      const got = messages.slice(before).map(summarize);
      results[`contact:${type}`] = { status: r.status, messages: got };
      check(r.status === 200, `contact type=${type} → 200`, `got ${r.status}: ${await r.text().catch(() => "")}`);
      check(got.length === 2, `contact type=${type} → 2 emails`, `got ${got.length}`);
      const conf = got.find((m) => m.rcpt.includes("submitter@example.test"));
      const note = got.find((m) => m.rcpt.includes(SINK_RCPT));
      check(!!conf && /received your request/i.test(conf.subject ?? "") && conf.html, `  confirmation → submitter (html)`, JSON.stringify(conf));
      check(!!note && /^New contact:/.test(note.subject ?? "") && /submitter@example\.test/.test(note.replyTo ?? ""), `  notification → team, Reply-To submitter`, JSON.stringify(note));
    }

    {
      const before = messages.length;
      const fd = new FormData();
      for (const [k, v] of Object.entries({ name: "Smoke Applicant", email: "applicant@example.test", phone: "+1 555 0100", role: "Senior Engineer", experience: "5+", source: "Smoke", coverLetter: "Test" })) fd.append(k, v);
      fd.append("resume", pdf(), "resume.pdf");
      const r = await fetch(BASE + "/api/apply", { method: "POST", body: fd });
      const got = messages.slice(before).map(summarize);
      results["apply"] = { status: r.status, messages: got };
      check(r.status === 200, "apply (multipart + PDF) → 200", `got ${r.status}: ${await r.text().catch(() => "")}`);
      check(got.length === 2, "apply → 2 emails", `got ${got.length}`);
      const note = got.find((m) => m.rcpt.includes(SINK_RCPT));
      const conf = got.find((m) => m.rcpt.includes("applicant@example.test"));
      check(!!conf && /Application received — Senior Engineer/.test(conf.subject ?? ""), "  confirmation → applicant (UTF-8 subject)", JSON.stringify(conf));
      check(!!note && note.attachment === "resume.pdf" && note.attachmentType === "application/pdf" && /applicant@example\.test/.test(note.replyTo ?? ""), "  notification → team with resume.pdf attached", JSON.stringify(note));
    }

    // Validation negatives (no mail must be sent).
    {
      const before = messages.length;
      const r1 = await postJson("/api/contact", { name: "", email: "x@example.test", message: "" });
      check(r1.status === 400, "contact missing fields → 400", `got ${r1.status}`);
      const fd = new FormData(); fd.append("name", "X"); fd.append("email", "x@example.test"); fd.append("role", "R");
      fd.append("resume", new Blob(["MZ"], { type: "application/x-msdownload" }), "evil.exe");
      const r2 = await fetch(BASE + "/api/apply", { method: "POST", body: fd });
      check(r2.status === 400, "apply non-PDF/Word resume → 400", `got ${r2.status}`);
      check(messages.length === before, "  rejected requests sent no mail", `${messages.length - before} sent`);
      results["negatives"] = { contactMissing: r1.status, applyBadMime: r2.status };
    }
  } finally {
    await stop(srv);
  }

  // Phase B: captcha enabled, no token → rejected before any network call or mail.
  srv = await launch({ ...mailEnv, RECAPTCHA_SECRET_KEY: "smoke-dummy-secret" });
  try {
    const before = messages.length;
    const r = await postJson("/api/contact", { name: "Bot", email: "bot@example.test", message: "spam", type: "general" });
    check(r.status === 400, "captcha on + missing token → 400", `got ${r.status}`);
    check(messages.length === before, "  captcha rejection sent no mail");
    results["captcha"] = { status: r.status };
  } finally {
    await stop(srv);
    sink.close();
  }

  console.log(`  ${"-".repeat(58)}\n  ${pass} passed, ${fail} failed`);
  if (OUT) { writeFileSync(resolve(OUT), JSON.stringify(results, null, 2)); console.log(`  results written: ${resolve(OUT)}`); }
  if (COMPARE) {
    const a = JSON.stringify(JSON.parse(readFileSync(resolve(COMPARE), "utf8")));
    const same = a === JSON.stringify(results);
    console.log(`  compare vs ${COMPARE}: ${same ? "IDENTICAL" : "DIFFERENT"}`);
    if (!same) fail++;
  }
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(2); });
