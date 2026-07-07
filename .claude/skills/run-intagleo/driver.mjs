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
// Requires a production build first: `npm run build` (creates .next/).

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
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

  const routesOk = await runChecks();
  if (doShot) await screenshot(BASE + "/", shotPath);

  if (server) server.kill();
  process.exit(routesOk ? 0 : 1);
}

process.on("SIGINT", () => { if (server) server.kill(); process.exit(130); });
main();
