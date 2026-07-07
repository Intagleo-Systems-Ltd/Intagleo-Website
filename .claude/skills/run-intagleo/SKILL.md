---
name: run-intagleo
description: Build, launch, smoke-test, and screenshot the Intagleo Next.js marketing site locally. Use when asked to run, start, serve, build, test, smoke-test, or screenshot the Intagleo website/app, or to verify its routes, pages, API, the admin auth redirect, robots.txt, or sitemap work.
---

# Run Intagleo (Next.js site)

Intagleo is a **Next.js 14 App Router** marketing site served in production by a
custom Node server ([server.js](../../../server.js), for Phusion Passenger).
There is no test suite. The way to drive it is the committed smoke driver
[.claude/skills/run-intagleo/driver.mjs](driver.mjs): it launches the production
server, hits a representative set of routes over HTTP asserting status + body
content, captures a screenshot with headless Edge/Chromium, tears the server
down, and exits non-zero on any failure.

All paths below are relative to the repo root. On Windows, run `npm`/`node` from
**PowerShell** (per [CLAUDE.md](../../../CLAUDE.md); npm isn't on the bundled bash).

## Prerequisites

- **Node 18+** (verified on Node 24). Node's built-in `fetch` is used by the driver.
- A **production build** must exist (`.next/`). See Build.
- Screenshots need a Chromium-family browser. On Windows this is the built-in
  **Microsoft Edge** (auto-detected). The driver also finds Chrome or Linux
  `chromium`/`google-chrome`; override with the `CHROME_BIN` env var.

## Build

```powershell
npm run build
```

Produces `.next/` (123 static/SSR pages). "Compiled with warnings" is normal —
`next.config.mjs` sets `ignoreBuildErrors`/`ignoreDuringBuilds`, so the build
never fails on TS/ESLint issues.

## Run (agent path — this is the one to use)

One command: build the app first (above), then launch + smoke-test + screenshot:

```powershell
node .claude/skills/run-intagleo/driver.mjs
```

Expected tail of output — **14 passed, 0 failed** and a screenshot path:

```
  14 passed, 0 failed

  screenshot: C:\Users\...\Temp\intagleo-smoke.png
```

The driver launches `node server.js` on port **3123**, checks the routes below,
writes the screenshot to your temp dir, kills the server, and exits `0` (all
pass) or `1` (any fail). Look at the PNG it prints to confirm a real render.

Routes asserted: `/`, `/fintech`, `/blog`, `/case-studies`,
`/case-studies/digital-signage-airport`, `/testimonials`, `/join-us`,
`/robots.txt` (contains the `Bytespider` bot-block + `Disallow: /admin/`),
`/sitemap.xml`, `/api/case-studies` (file-CMS JSON), `/admin` (→ **307**
`/admin/login`, the middleware auth redirect), `/admin/login`, and a bad URL (→ **404**).

Flags:

```powershell
# Test a server you already have running (skips launch); skip the screenshot
node .claude/skills/run-intagleo/driver.mjs --url http://localhost:3200 --no-screenshot
```

- `--url <base>` — test an already-running server instead of launching one.
- `--port <n>` — launch port (default 3123).
- `--screenshot <path>` — where to write the PNG (default: OS temp).
- `--no-screenshot` — skip the browser step.

## Run (human path)

Serve the production build like the real deploy and browse it yourself:

```powershell
node server.js
```

Serves on `http://localhost:3000` (or `$env:PORT`). `npm start` maps to this
exact command. Ctrl-C to stop. Useless for automated checks — use the driver.

## Gotchas

- **Production server is `node server.js`, not `next start`.** It's the custom
  Passenger entry; `npm start` was pointed at it for the Hostinger deploy.
- **A build must exist first.** With no `.next/BUILD_ID` the driver prints
  `No production build found` and exits `2`.
- **`/admin` returns a 307 redirect** to `/admin/login` (JWT middleware). The
  driver uses `fetch(..., {redirect:"manual"})` to observe the 307 — default
  fetch would follow it and report 200.
- **The 404 page returns full HTML with the site's default `<title>`.** Assert
  on **status**, not title, for not-found routes.
- **Image optimizer is off** (`images.unoptimized` in `next.config.mjs`, for
  self-hosting). Images load straight from Unsplash/Sanity CDNs — the screenshot
  shows real cover images, not the Next optimizer.
- **Port collisions are silent.** `server.js` inherits `stdio:"ignore"` from the
  driver, so if the port is already taken it fails quietly and the driver ends up
  testing whatever is already on that port. Use `--port` or `--url`.
- **No DB/CMS needed to run.** Content is read from `content/**/*.md`
  (`CONTENT_PROVIDER=files`, the default). Email/reCAPTCHA/admin-login *actions*
  need env vars, but every page renders without them.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `No production build found (.next/BUILD_ID missing)` | Run `npm run build` first. |
| `server never became ready at http://localhost:3123` | Build missing/broken, or port in use — retry with `--port 3200`. |
| `screenshot: no Chromium/Edge found — skipped` | Set `CHROME_BIN` to a browser exe (Linux: install one, e.g. `apt-get install -y chromium`). |
| Route checks fail after content edits | A slug in the checks (e.g. `digital-signage-airport`) may have been renamed — update `CHECKS` in `driver.mjs`. |
