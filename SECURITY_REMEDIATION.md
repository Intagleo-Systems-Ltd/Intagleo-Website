# Dependency Vulnerability Remediation Plan

Prioritised by **real exploitability on this app** (a public marketing site with a
file-based CMS and <10 admin users), not raw CVE count. Fixes go in the **repo**
(version-controlled) → build → verify → redeploy. **Never** use Hostinger's
"Auto-fix all" — it applies breaking majors and edits server files out-of-band
from git (they'd be wiped on the next deploy).

**Verification gate for every change below:**
```
npm run build
node .claude/skills/run-intagleo/driver.mjs      # 14 route checks + screenshot, exit 0
```

---

## ✅ Already done (committed to origin)
- `nodemailer` 8.0.5 → **9.0.3** — the one genuinely reachable High (contact/apply email): raw-option file read/SSRF, CRLF injection, TLS validation.
- `postcss` → **8.5.16**; non-breaking `npm audit fix` for transitive deps (ws, brace-expansion, js-yaml, …).
- **Image Optimizer CVEs neutralised** by `images.unoptimized` (CVE-2025-59471, CVE-2026-44577, CVE-2026-27980 — the optimizer is off).
- robots.txt bot-block + `deploy/block-bad-bots.htaccess`; migrating off Vercel.

Local count: 25 → 18 remaining. Those 18 are triaged below.

---

## ✅ Tier 1 — Low-risk cleanup (DONE)
Cleared ~10 transitive advisories without touching next/react/sanity majors.

- [x] `overrides` in `package.json`: `prismjs` → 1.30.0, `glob` → 10.5.0.
- [x] `npm audit fix` (non-`--force`).
- [x] Verified: `npm run build` (123 pages) + driver (14/14).

**Result: 18 → 9 remaining.** Dropped off: prismjs, refractor, glob,
`@architect/*`, `@sanity/insert-menu`, `@sanity/ui`, `react-refractor`,
`eslint-config-next`/`@next/eslint-plugin-next`. The 9 left are all Tier 2
(`next`) or Tier 3 (dormant/dev/not-exploitable).

---

## ✅ Tier 2 — Next.js 15 migration (DONE on branch `next15-upgrade`)
**Outcome:** `next` 14.2.35 → **15.5.20**, `eslint-config-next` → 15. **React stayed
on 18** — Next 15.5 accepts React 18 as a peer, so no React 19 churn and no
`react-google-recaptcha` peer conflict. `params`/`searchParams` made async in the
6 dynamic surfaces. Verified: build (123 pages, no warnings), driver 14/14, all
dynamic routes (`/blog/[slug]`, `/testimonials/[slug]`, `/join-us/[slug]`,
`/case-studies/[slug]`) + `/contact?type=` wired, screenshot visually identical.
The `next` advisory dropped **high → moderate**. **Not yet merged to `main`** —
deploy/merge is a deliberate step (test on Hostinger staging first).

<details><summary>Original plan (for reference)</summary>

## Tier 2 — Next.js 15 migration (the main event, ~half day on a branch)
**Why:** Next **14.2 is end-of-life** — 14.2.35 is the final 14.x release; security
fixes now land only on 15.x+ (`backport` tag = 15.5.x). The *current* Next CVEs are
mostly low-applicability here (App Router = no Pages-Router i18n bypass; no CSP
nonces; no WebSocket upgrades; image optimizer already off), so this is about
**staying on a supported branch to receive future patches**, not an emergency.

Migration is small because of the findings above (no `cookies()`/`headers()` use;
no embedded Studio). Plan:

- [ ] Branch: `git checkout -b next15-upgrade` (off `main`/origin).
- [ ] Run the official codemods:
  ```
  npx @next/codemod@latest upgrade latest
  npx @next/codemod@latest next-async-request-api .
  ```
- [ ] Manually confirm async `params`/`searchParams` in the 6 dynamic surfaces the
      codemod touches: `app/{blog,case-studies,us-sled,join-us,testimonials}/[slug]/page.tsx`
      and `app/contact/page.tsx` (`searchParams.type`).
- [ ] React 18 → 19 (`react`, `react-dom`, `@types/react*`). **Verify peer compat**
      of the animation/UI stack — most are fine on 19, watch these:
      - `react-google-recaptcha` (peer `react ^16–18`) — likely needs
        `--legacy-peer-deps` or swapping to `react-google-recaptcha-v3` alone.
      - `framer-motion` v12, `next-themes`, `styled-components` v6, `lenis`,
        `@portabletext/react` — confirm current versions declare React 19.
- [ ] Sanity stays **v3** — it's a server-side data client only (no in-app Studio),
      so React 19 doesn't affect it. Keep `CONTENT_PROVIDER=files`.
- [ ] `eslint-config-next` → 15.x to match (clears the dev-only eslint/glob chain).
- [ ] Run the **verification gate**; eyeball the screenshot. Then deploy to a
      staging path before cutting `main`.

**If the React 19 peer-dep friction proves costly**, fallback: Next 15 with React
18.3 is workable for many App Router apps — spike it on the branch and decide.

---

</details>

## Tier 3 — Accept & document (no action, revisit later)
- **`sanity` v6 (moderate: prismjs/refractor/dompurify/@sanity/uuid).** Do **not**
  upgrade — pinned to v3 for React 18 compatibility, and it's **dormant** (files
  provider; not in the request path; Studio not embedded). Tier 1 overrides address
  what's reachable. Revisit only if Sanity becomes the live CMS.
- **`uuid` v14 (moderate).** CVE affects v3/v5/v6 when a `buf` arg is passed; this
  app uses only `uuid.v4()` with no buffer → **not exploitable**. Optional cosmetic bump.
- ✅ **`@sanity/cli` / `decompress` (critical — Zip Slip) — ADDRESSED.**
  Confirmed nothing in `app/`/`lib/`/`components/` imports the full `sanity`
  package (runtime uses only `@sanity/client`), so `sanity` was moved from
  `dependencies` → `devDependencies` (branch `next15-upgrade`). It's still there
  for `npm run cms:studio` locally, but the **production deploy runs
  `npm prune --omit=dev` after the build** (see HOSTINGER_DEPLOY.md), which
  removes `sanity` → `@sanity/cli` → `decompress` from the server entirely.
  **Verified:** driver 14/14 against the pruned tree; runtime audit
  (`npm audit --omit=dev`) = **0 critical / 0 high**, 3 non-exploitable moderates
  (`next` latest patch, `postcss` build-time, `uuid` v4).
- **Dev-only tooling** (`esbuild`, `@architect/*`, `eslint`) — never runs in
  production. Bump opportunistically alongside Tier 2.

---

## Sequencing
1. Tier 1 now (fast, safe) → commit → redeploy.
2. Tier 2 on a branch when there's a half-day → verify with the driver → merge → redeploy.
3. Tier 3: leave; re-scan after Tier 2 and note the accepted items so the Hostinger
   scanner count is expected, not alarming.
