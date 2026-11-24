#!/usr/bin/env node
// Smoke driver for the Intagleo Next.js site.
// Launches the production server (node server.js), waits until it answers,
// hits a representative set of routes asserting status + content, captures a
// screenshot with a headless Chromium/Edge, tears the server down, and exits
// non-zero if anything failed.
//
// Usage (from repo root):
//   node .claude/skills/run-intagleo/driver.mjs                 # launch + test + screenshot
//   node .claude/skills/run-intagleo/driver.mjs --url http://localhost:3000   # test an already-running server
//   node .claude/skills/run-intagleo/driver.mjs --port 3200     # launch on a specific port
//   node .claude/skills/run-intagleo/driver.mjs --no-screenshot
//   node .claude/skills/run-intagleo/driver.mjs --screenshot ./shot.png
//
// Regression mode (dependency upgrades, deploy verification):
//   --all-routes          also GET every URL in the target's /sitemap.xml (asserting
//                         200 + a <title> + no error page), the public API routes,
//                         the admin API auth guards, and static-asset cache headers.
//   --snapshot <file>     write {route: {status, title, location}} for every check.
//   --compare <file>      diff this run against a snapshot; any status/title/location
//                         change is a failure (body size drift >40% is a warning).
//
// Requires a production build first: `npm run build` (creates .next/).

import { spawn } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : def;
};

const REPO = process.cwd();
const externalUrl = opt("--url", null);
const PORT = opt("--port", "3123");
const BASE = externalUrl || `http://localhost:${PORT}`;
const doShot = !flag("--no-screenshot");
const shotPath = resolve(opt("--screenshot", join(tmpdir(), "intagleo-smoke.png")));
const allRoutes = flag("--all-routes");
const snapshotOut = opt("--snapshot", null);
const compareIn = opt("--compare", null);

// path, expected status, body substring that must be present (case-insensitive), redirect location
const CHECKS = [
  ["/",                                     200, "intagleo"],
  ["/fintech",                              200, "intagleo"],
  ["/blog",                                 200, "blog"],
  ["/case-studies",                         200, "case studies"],
  ["/case-studies/digital-signage-airport", 200, "passenger"],
  ["/testimonials",                         200, "testimonials"],
  ["/join-us",                              200, "join us"],
  ["/robots.txt",                           200, "bytespider"],       // our bot-block lives here
  ["/robots.txt",                           200, "disallow: /admin/"],
  ["/sitemap.xml",                          200, "<urlset"],
  ["/api/case-studies",                     200, "title"],            // file-CMS API returns JSON
  ["/admin",                                307, null, "/admin/login"], // middleware auth redirect
  ["/admin/login",                          200, "intagleo"],
  ["/this-route-does-not-exist",            404, null],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitReady(base, timeoutMs = 60000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const r = await fetch(base + "/", { redirect: "manual" });
      if (r.status > 0) return true;
    } catch { /* not up yet */ }
    await sleep(500);
  }
  return false;
}

async function runChecks() {
  let pass = 0, fail = 0;
  console.log(`\n  ROUTE CHECKS  (${BASE})\n  ${"-".repeat(58)}`);
  for (const [path, wantStatus, marker, wantLoc] of CHECKS) {
    let ok = true, detail = "";
    try {
      const r = await fetch(BASE + path, { redirect: "manual" });
      const body = await r.text();
      if (r.status !== wantStatus) { ok = false; detail = `status ${r.status}≠${wantStatus}`; }
      else if (marker && !body.toLowerCase().includes(marker)) { ok = false; detail = `missing "${marker}"`; }
      else if (wantLoc && r.headers.get("location") !== wantLoc) { ok = false; detail = `loc ${r.headers.get("location")}≠${wantLoc}`; }
    } catch (e) { ok = false; detail = e.message; }
    console.log(`  ${ok ? "PASS" : "FAIL"}  ${String(wantStatus).padEnd(3)} ${path.padEnd(40)} ${detail}`);
    ok ? pass++ : fail++;
  }
  console.log(`  ${"-".repeat(58)}\n  ${pass} passed, ${fail} failed\n`);
  return fail === 0;
}

// ── Regression mode ─────────────────────────────────────────────────────────
const titleOf = (html) => (html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ?? "").trim();
const ERROR_MARKERS = ["application error: a server-side exception", "application error: a client-side exception", "internal server error"];

async function probe(path, init = {}) {
  const r = await fetch(BASE + path, { redirect: "manual", ...init });
  const body = await r.text();
  return { r, body, rec: { status: r.status, title: titleOf(body), location: r.headers.get("location"), bytes: body.length } };
}

async function sitemapPaths() {
  const r = await fetch(BASE + "/sitemap.xml");
  const xml = await r.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  // Sitemap URLs carry the production host; test the same paths against BASE.
  return [...new Set(locs.map((u) => { try { const p = new URL(u); return p.pathname + p.search; } catch { return null; } }).filter(Boolean))];
}

async function runRegression(snapshot) {
  let pass = 0, fail = 0;
  const report = (ok, label, detail = "") => {
    if (!ok) console.log(`  FAIL  ${label.padEnd(52)} ${detail}`);
    ok ? pass++ : fail++;
  };

  // 1. Every sitemap page renders.
  const paths = await sitemapPaths();
  console.log(`  REGRESSION  ${paths.length} sitemap routes + API/auth/header checks\n  ${"-".repeat(58)}`);
  if (paths.length < 10) report(false, "/sitemap.xml", `only ${paths.length} <loc> entries`);
  const queue = [...paths];
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const path = queue.shift();
      try {
        const { body, rec } = await probe(path);
        snapshot[path] = rec;
        const low = body.toLowerCase();
        const marker = ERROR_MARKERS.find((m) => low.includes(m));
        if (rec.status !== 200) report(false, path, `status ${rec.status}`);
        else if (!rec.title) report(false, path, "empty <title>");
        else if (marker) report(false, path, `error page: "${marker}"`);
        else report(true, path);
      } catch (e) { snapshot[path] = { status: 0, title: "", location: null, bytes: 0 }; report(false, path, e.message); }
    }
  }));

  // 2. Public API routes (these call Sanity; status is compared against the baseline).
  for (const path of ["/api/case-studies", "/api/blog/featured", "/api/case-studies/featured", "/api/testimonials/featured"]) {
    try {
      const { r, body, rec } = await probe(path);
      snapshot["API " + path] = { ...rec, title: "" };
      let json = null; try { json = JSON.parse(body); } catch { /* not json */ }
      report(json !== null && r.headers.get("content-type")?.includes("json"), "API " + path, `status ${r.status}, not JSON`);
    } catch (e) { report(false, "API " + path, e.message); }
  }

  // 3. Admin API auth guards: unauthenticated requests must be rejected (401) and never write.
  const guards = [
    ["GET", "/api/content/blog"],
    ["POST", "/api/content/blog", JSON.stringify({ slug: "driver-should-never-write" })],
    ["GET", "/api/auth/me"],
    ["GET", "/api/auth/users"],
  ];
  for (const [method, path, body] of guards) {
    try {
      const { rec } = await probe(path, { method, body, headers: body ? { "content-type": "application/json" } : {} });
      snapshot[`AUTH ${method} ${path}`] = { ...rec, title: "", bytes: 0 };
      report(rec.status === 401, `AUTH ${method} ${path}`, `status ${rec.status}≠401`);
    } catch (e) { report(false, `AUTH ${method} ${path}`, e.message); }
  }
  if (existsSync(join(REPO, "content", "blog", "driver-should-never-write.md"))) report(false, "AUTH write guard", "unauthenticated POST created a file!");

  // 4. Hashed static assets keep the immutable cache header.
  try {
    const home = await (await fetch(BASE + "/")).text();
    const asset = home.match(/\/_next\/static\/[^"'\s)]+\.(?:js|css)/)?.[0];
    if (!asset) report(false, "HEADER /_next/static", "no static asset found on /");
    else {
      const r = await fetch(BASE + asset);
      const cc = r.headers.get("cache-control") || "";
      report(r.status === 200 && cc.includes("immutable"), "HEADER /_next/static cache-control", `status ${r.status}, "${cc}"`);
    }
  } catch (e) { report(false, "HEADER /_next/static", e.message); }

  console.log(`  ${"-".repeat(58)}\n  regression: ${pass} passed, ${fail} failed\n`);
  return fail === 0;
}

function compareSnapshots(base, cur) {
  let diffs = 0, warns = 0;
  console.log(`  COMPARE vs ${compareIn}\n  ${"-".repeat(58)}`);
  for (const key of new Set([...Object.keys(base), ...Object.keys(cur)])) {
    const a = base[key], b = cur[key];
    if (!a) { console.log(`  NEW   ${key}  (${b.status})`); continue; }      // new route: informational
    if (!b) { console.log(`  DIFF  ${key}  missing from this run`); diffs++; continue; }
    for (const f of ["status", "title", "location"]) {
      if ((a[f] ?? null) !== (b[f] ?? null)) { console.log(`  DIFF  ${key}  ${f}: ${JSON.stringify(a[f])} → ${JSON.stringify(b[f])}`); diffs++; }
    }
    if (a.bytes > 2000 && Math.abs(b.bytes - a.bytes) / a.bytes > 0.4) { console.log(`  WARN  ${key}  body ${a.bytes} → ${b.bytes} bytes`); warns++; }
  }
  console.log(`  ${"-".repeat(58)}\n  compare: ${diffs} diffs, ${warns} warnings\n`);
  return diffs === 0;
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_BIN,
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
  ].filter(Boolean);
  return candidates.find((p) => existsSync(p)) || null;
}

async function screenshot(url, out) {
  const bin = findBrowser();
  if (!bin) { console.log("  screenshot: no Chromium/Edge found — skipped"); return false; }
  const cliArgs = [
    "--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
    "--window-size=1440,1600", `--screenshot=${out}`, url,
  ];
  await new Promise((res) => {
    const p = spawn(bin, cliArgs, { stdio: "ignore" });
    p.on("exit", res);
    p.on("error", res);
  });
  if (existsSync(out)) { console.log(`  screenshot: ${out}`); return true; }
  console.log("  screenshot: browser ran but no file produced — skipped");
  return false;
}

let server = null;
async function main() {
  if (!externalUrl) {
    if (!existsSync(join(REPO, ".next", "BUILD_ID"))) {
      console.error("No production build found (.next/BUILD_ID missing). Run: npm run build");
      process.exit(2);
    }
    console.log(`  launching: node server.js  (PORT=${PORT})`);
    server = spawn("node", ["server.js"], { cwd: REPO, env: { ...process.env, PORT }, stdio: "ignore" });
    server.on("error", (e) => { console.error("failed to spawn server:", e.message); process.exit(2); });
  }
  const ready = await waitReady(BASE);
  if (!ready) { console.error(`server never became ready at ${BASE}`); if (server) server.kill(); process.exit(2); }

  let ok = await runChecks();

  if (allRoutes || snapshotOut || compareIn) {
    const snapshot = {};
    ok = (await runRegression(snapshot)) && ok;
    const sorted = Object.fromEntries(Object.keys(snapshot).sort().map((k) => [k, snapshot[k]]));
    if (snapshotOut) { writeFileSync(resolve(snapshotOut), JSON.stringify(sorted, null, 2)); console.log(`  snapshot written: ${resolve(snapshotOut)}`); }
    if (compareIn) ok = compareSnapshots(JSON.parse(readFileSync(resolve(compareIn), "utf8")), sorted) && ok;
  }

  if (doShot) await screenshot(BASE + "/", shotPath);

  if (server) server.kill();
  process.exit(ok ? 0 : 1);
}

process.on("SIGINT", () => { if (server) server.kill(); process.exit(130); });
main();
