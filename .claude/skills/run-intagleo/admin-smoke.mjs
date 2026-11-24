#!/usr/bin/env node
// Admin smoke test: auth middleware, JWT cookie verification, the content CRUD
// API (/api/content/[type], /api/content/[type]/[slug]) and the user-admin API.
//
// It does NOT need a password. It mints a 10-minute admin JWT in-process from
// JWT_SECRET (env, else .env.local; never printed) for an existing admin in
// data/users.json. The login route itself only gets negative tests (wrong
// password → 401, missing fields → 400).
//
// Content writes go to a throwaway blog slug (zz-admin-smoke-<ts>) that is
// always removed in `finally`. User-admin writes are exercised only against a
// non-existent id (→ 404), so real accounts are never modified.
//
// Usage (from repo root, after `npm run build`):
//   node .claude/skills/run-intagleo/admin-smoke.mjs [--port 3126] [--url http://localhost:3000]

import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, readFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const jwt = require(join(process.cwd(), "node_modules", "jsonwebtoken"));

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf(n); return i !== -1 && args[i + 1] ? args[i + 1] : d; };
const external = opt("--url", null);
const PORT = opt("--port", "3126");
const BASE = external || `http://localhost:${PORT}`;
const REPO = process.cwd();

function jwtSecret() {
  if (process.env.JWT_SECRET) return process.env.JWT_SECRET;
  const f = join(REPO, ".env.local");
  if (!existsSync(f)) return null;
  const line = readFileSync(f, "utf8").split(/\r?\n/).find((l) => /^\s*JWT_SECRET\s*=/.test(l));
  return line ? line.split("=").slice(1).join("=").trim().replace(/^["']|["']$/g, "") : null;
}

let pass = 0, fail = 0;
const check = (ok, label, detail = "") => { console.log(`  ${ok ? "PASS" : "FAIL"}  ${label}${ok || !detail ? "" : "  — " + detail}`); ok ? pass++ : fail++; };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const secret = jwtSecret();
  if (!secret) { console.error("JWT_SECRET not found in env or .env.local"); process.exit(2); }
  const users = JSON.parse(readFileSync(join(REPO, "data", "users.json"), "utf8"));
  const admin = users.find((u) => u.role === "admin");
  if (!admin) { console.error("no admin user in data/users.json"); process.exit(2); }
  const token = jwt.sign({ id: admin.id, email: admin.email, role: admin.role }, secret, { expiresIn: "10m" });
  const forged = jwt.sign({ id: admin.id, email: admin.email, role: "admin" }, "not-the-secret", { expiresIn: "10m" });
  const auth = { cookie: `admin_token=${token}` };

  let server = null;
  if (!external) {
    if (!existsSync(join(REPO, ".next", "BUILD_ID"))) { console.error("No production build. Run: npm run build"); process.exit(2); }
    server = spawn("node", ["server.js"], { cwd: REPO, env: { ...process.env, PORT }, stdio: "ignore" });
    for (let i = 0; i < 120; i++) { try { if ((await fetch(BASE + "/robots.txt")).status > 0) break; } catch { /* not up */ } await sleep(500); }
  }

  const slug = `zz-admin-smoke-${Date.now()}`;
  const file = join(REPO, "content", "blog", `${slug}.md`);
  const req = (path, init = {}) => fetch(BASE + path, { redirect: "manual", ...init, headers: { ...(init.headers || {}), ...(init.noAuth ? {} : auth) } });
  const json = (method, body) => ({ method, headers: { "content-type": "application/json" }, body: JSON.stringify(body) });

  console.log(`\n  ADMIN SMOKE  (${BASE}, as ${admin.role})\n  ${"-".repeat(58)}`);
  try {
    // Login route (negative only; no password needed).
    let r = await fetch(BASE + "/api/auth/login", json("POST", { email: admin.email, password: "definitely-wrong-password" }));
    check(r.status === 401, "login wrong password → 401", `got ${r.status}`);
    r = await fetch(BASE + "/api/auth/login", json("POST", {}));
    check(r.status === 400, "login missing fields → 400", `got ${r.status}`);

    // Middleware (jose) + API cookie verification (jsonwebtoken).
    r = await req("/admin");
    check(r.status === 200, "GET /admin with valid token → 200 (middleware passes)", `got ${r.status} → ${r.headers.get("location")}`);
    r = await fetch(BASE + "/admin", { redirect: "manual", headers: { cookie: `admin_token=${forged}` } });
    check(r.status === 307 && r.headers.get("location")?.includes("/admin/login"), "GET /admin with forged token → 307 login", `got ${r.status}`);
    r = await fetch(BASE + "/api/content/blog", { headers: { cookie: `admin_token=${forged}` } });
    check(r.status === 401, "API with forged token → 401", `got ${r.status}`);
    r = await req("/api/auth/me");
    const me = await r.json().catch(() => ({}));
    check(r.status === 200 && JSON.stringify(me).includes(admin.email), "GET /api/auth/me → 200, current user", `got ${r.status}`);
    r = await req("/api/auth/users");
    const ul = await r.text();
    check(r.status === 200 && ul.includes(admin.email), "GET /api/auth/users → 200, lists users", `got ${r.status}`);
    check(!/\$2[aby]\$\d\d\$/.test(ul), "  user list does not leak bcrypt hashes", "hash found in response");

    // User admin with dynamic [id] (Next 15 async params). Non-existent ids only — no writes.
    // A non-admin may only PUT its own id: 404 (not 403) proves params.id resolved to the URL value.
    const editor = jwt.sign({ id: "smoke-editor-id", email: "smoke@example.test", role: "editor" }, secret, { expiresIn: "10m" });
    r = await fetch(BASE + "/api/auth/users/smoke-editor-id", { method: "PUT", headers: { "content-type": "application/json", cookie: `admin_token=${editor}` }, body: JSON.stringify({ name: "x" }) });
    check(r.status === 404, "PUT /api/auth/users/[id] own id as editor → 404 (params.id resolved)", `got ${r.status}`);
    r = await fetch(BASE + "/api/auth/users/someone-else", { method: "PUT", headers: { "content-type": "application/json", cookie: `admin_token=${editor}` }, body: JSON.stringify({ name: "x" }) });
    check(r.status === 403, "PUT /api/auth/users/[id] other id as editor → 403", `got ${r.status}`);
    r = await req("/api/auth/users/does-not-exist-smoke", json("PUT", { name: "x" }));
    check(r.status === 404, "PUT /api/auth/users/[id] unknown id as admin → 404", `got ${r.status}`);
    r = await req("/api/auth/users/does-not-exist-smoke", { method: "DELETE" });
    check(r.status === 404, "DELETE /api/auth/users/[id] unknown id → 404 (params resolved)", `got ${r.status}`);

    // Content CRUD (Next 15 async params on [type] and [type]/[slug]).
    r = await req("/api/content/blog");
    const list = await r.json().catch(() => ({}));
    check(r.status === 200 && Array.isArray(list.items) && list.items.length > 0, "GET /api/content/blog → items", `got ${r.status} ${JSON.stringify(list).slice(0, 80)}`);
    r = await req("/api/content/not-a-type");
    check(r.status === 400, "GET /api/content/<invalid type> → 400", `got ${r.status}`);
    r = await req("/api/content/blog", json("POST", { slug, title: "Admin smoke", show_on_homepage: false, content: "Original body." }));
    check(r.status === 200 && existsSync(file), "POST /api/content/blog creates file", `got ${r.status}`);
    r = await req(`/api/content/blog/${slug}`);
    let item = await r.json().catch(() => ({}));
    check(r.status === 200 && JSON.stringify(item).includes("Original body."), "GET /api/content/blog/[slug] reads it", `got ${r.status} ${JSON.stringify(item).slice(0, 80)}`);
    r = await req(`/api/content/blog/${slug}`, json("PUT", { title: "Admin smoke", show_on_homepage: false, content: "Edited body." }));
    check(r.status === 200, "PUT /api/content/blog/[slug] → 200", `got ${r.status}`);
    item = await (await req(`/api/content/blog/${slug}`)).json().catch(() => ({}));
    check(JSON.stringify(item).includes("Edited body.") && readFileSync(file, "utf8").includes("Edited body."), "  edit persisted (API + file on disk)");
    r = await req(`/api/content/blog/${slug}`, { method: "DELETE" });
    check(r.status === 200 && !existsSync(file), "DELETE /api/content/blog/[slug] removes file", `got ${r.status}`);
    r = await req(`/api/content/blog/${slug}`);
    check(r.status === 404, "GET deleted slug → 404", `got ${r.status}`);
  } catch (e) {
    check(false, "unexpected error", e.message);
  } finally {
    if (existsSync(file)) { unlinkSync(file); console.log(`  cleanup: removed leftover ${file}`); }
    if (server) server.kill();
  }
  console.log(`  ${"-".repeat(58)}\n  ${pass} passed, ${fail} failed\n`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(2); });
