# Vulnerability Fix Log: Hostinger "Unpatched dependencies" scan (2026-11-24)

Branch `fix/security-deps`, cut from `next15-upgrade` (Next 15.5.20 + React 18 + `sanity` in devDependencies, all already verified).
Package manager: **npm** (`package-lock.json`). Local Node 24.16 / npm 11.13. Also verified on **Node 20.20.2**, which is Hostinger's major.

## Step 0: Baseline (before any change on this branch)

| Gate | Result |
|---|---|
| `npm ci` | OK (1423 packages) |
| `npm run lint` | **12 errors, pre-existing** (`react-hooks/rules-of-hooks` and similar). Not caused by this work. |
| `npx tsc --noEmit` | **7 errors, pre-existing**, in `app/admin/page.tsx`, `components/ui/{AnimatedText,Button}.tsx`, `components/UseCasesSection.tsx`, `components/us-sled/SledBriefingForm.tsx`, `lib/providers/files.ts` |
| `npm run build` | OK, 123/123 pages. One pre-existing warning: `jose` Compression/DecompressionStream in the Edge middleware. |
| Smoke driver | 14/14 |
| Route regression (`--all-routes`) | 114/114 (105 sitemap routes, 4 public APIs, 4 auth guards, 1 cache-header check); snapshot saved |
| Email smoke (nodemailer 9.0.3) | 21/21; output saved |
| `npm audit` (full) | **49**: 3 critical / 15 high / 30 moderate / 1 low |
| `npm audit --omit=dev` (what runs in prod) | **10**: 1 critical (next) / 6 high / 3 moderate |
| `studio/` `npm audit` | **37**: 1 critical / 18 high / 16 moderate / 2 low. All have non-major fixes. |

### Who pulls each flagged package (root, at baseline)

| Package @ installed | Direct / transitive (parent) | Runtime or dev-only |
|---|---|---|
| next@15.5.20 (main: 14.2.35) | direct | runtime |
| nodemailer@9.0.3 | direct | runtime |
| sharp@0.33.5 (+0.34.5 via next) | direct + next optional | runtime (image optimizer is off) |
| uuid@9.0.1 | direct (`v4()` only) | runtime |
| uuid@8.3.2 / 11.1.1 | sanity → @sanity/preview-url-secret, @sanity/comlink… | dev |
| dompurify@3.4.11 | sanity → isomorphic-dompurify | dev |
| undici@6.27.0 | sanity → @sanity/cli → @sanity/template-validator → @actions/* | dev |
| vite@6.4.3 | sanity, @sanity/cli → @sanity/runtime-cli | dev |
| tar@7.5.16 | sanity → @sanity/export | dev |
| adm-zip@0.5.17 | sanity → @sanity/cli → @sanity/runtime-cli | dev |
| zod@3.25.76 | sanity → @sanity/cli → @sanity/codegen | dev |
| moment@2.30.1 | sanity → @sanity/export → @sanity/util | dev |
| esbuild@0.25.6 / 0.25.12 / 0.27.7 | sanity, vite / tsx | dev |
| baseline-browser-mapping@2.10.38, browserslist@4.28.4 | sanity → @vitejs/plugin-react → @babel/core | dev |
| nanoid@3.3.15 | @sanity/client, next → postcss, postcss | **runtime** |
| nanoid@5.1.15 | sanity → @sanity/migrate → @sanity/mutate | dev |
| postcss@8.4.31 | next (exact pin) | **runtime** |
| postcss@8.5.16 | direct devDep, tailwind | dev/build |
| postcss-selector-parser@6.0.10 / 6.1.2 | @tailwindcss/typography (dependency) / tailwind | runtime-listed / build |
| source-map-js@1.2.1 | postcss | runtime-listed |
| js-yaml@3.15.0 | **gray-matter** (files CMS) and sanity | **runtime** |
| js-yaml@4.3.0 | eslint@8 | dev |
| brace-expansion@1/2/5, minimatch@3/5/9/10, glob@10.5.0 | eslint@8, sanity, tailwind tooling | dev |
| eslint@8.57.1 | direct devDep | dev |

---

## Phase 1: Runtime and critical packages

| Package | Before → After | Method | Status |
|---|---|---|---|
| next | 15.5.20 → **15.5.29** (main: 14.2.35) | direct | ✅ fixed except one advisory via its pinned postcss (Phase 2) |
| eslint-config-next | 15.5.20 → 15.5.29 | direct | ✅ |
| nodemailer | 9.0.3 → **10.6.1** | direct (major) | ✅ fixed |
| sharp | 0.33.5 → **0.35.5** (next's optional copy dedupes onto it) | direct | ✅ fixed |
| uuid | 9.0.1 → **11.1.1** | direct (major) | ✅ fixed |
| @types/nodemailer, @types/uuid | removed | nodemailer 10 and uuid 11 ship their own types | ✅ (tsc unchanged) |
| **sanity@3.99.0 (root devDep)** | **removed** | duplicate of the standalone `studio/` package | ✅ removes 901 packages, including every copy of dompurify, undici, vite, tar, adm-zip, zod, moment, nanoid@5, uuid@8, esbuild@0.25, baseline-browser-mapping |
| dompurify | 3.4.11 → **absent** | gone with sanity | ✅ |
| undici | 6.27.0 → **absent** | gone with sanity | ✅ |

**Code and config changes:**
- `package.json`: `cms:studio` now runs `npm --prefix studio run dev`. The Studio lives in `studio/` (its own package: sanity v5, React 19, own lockfile).
- Deleted the root `sanity.config.ts`, `sanity.cli.ts` and `sanity/` (duplicate Studio config and schemas). Before deleting, `studio/schemaTypes/sledCaseStudy.ts` gained the `coverImage` field that only existed in the root copy (added in 195825e2), so the Studio schema is now a superset.
- nodemailer 10: the only breaking change is Node ≥ 20. `createTransport({host,port,secure,auth})` and `sendMail({from,to,replyTo,subject,html,attachments})` are unchanged, so no app code changed.
- uuid 11: `import { v4 as uuidv4 } from "uuid"` is unchanged.
- Next 15 checks: no `cookies()`, `headers()` (request API), `draftMode()`, `useFormState`, `serverComponentsExternalPackages` or `@next/font` usage. `next.config.mjs` has no `dangerouslyAllowSVG`; `remotePatterns` stays limited to `images.unsplash.com` and `cdn.sanity.io`; `images.unoptimized: true` stays, so the image-optimizer RCE class is not reachable.
- There is no patched 14.x: **14.2.35 is the final 14.x release**, so 15.5.x is the minimum fixed line.

**Phase 1 gate:**

| Check | Result |
|---|---|
| `npm ci` (clean, from lockfile) | OK, 522 packages (was 1423) |
| lint / tsc | 12 / 7, identical to the baseline |
| build (Node 24) | 123/123, same warnings as the baseline |
| build (**Node 20.20.2**) and sharp 0.35.5 load | OK, 123/123; sharp 0.35.5 / libvips 8.18.7 loads |
| route regression vs baseline (Node 24 / Node 20 / **pruned prod**) | 114/114, **0 diffs**, all three runs |
| email smoke (nodemailer 10) vs baseline (nodemailer 9) | 21/21, output **IDENTICAL**, also on the pruned tree |
| `npm audit --omit=dev` | 10 → **7** (0 critical / 4 high / 3 moderate). All remaining items are Phase 2 same-major patches. |

---

## Phase 2: Same-major patch bumps

Method: a **targeted** `npm update <flagged packages>`, not a blanket `npm update`, so unrelated app dependencies such as framer-motion and gsap don't drift. After that, **same-major** `overrides` cover only what a parent pins.

| Package | Before → After (every copy) | Method | Status |
|---|---|---|---|
| postcss | 8.4.31 (next exact pin) / 8.5.16 → **8.5.33** | direct devDep bump + override `"postcss": "$postcss"` | ✅ |
| postcss-selector-parser | 6.0.10 (@tailwindcss/typography exact pin; still the pin in its latest release) / 6.1.2 → **6.1.6** | npm update + override `"postcss-selector-parser@6": "^6.1.6"` | ✅ |
| brace-expansion | 1.1.14 → **1.1.22**; 2.1.x → 2.1.8 then gone; 5.0.6/5.0.7 → **5.1.0** | npm update + override `"brace-expansion@1": "^1.1.22"` | ✅ |
| js-yaml | 3.15.0 → **3.15.2** (gray-matter, runtime); 4.3.0 → **4.3.2** (eslint) | npm update | ✅ (see Phase 3 for the 4.2-only advisory) |
| nanoid | 3.3.15 → **3.3.20**; 5.1.15 → gone (sanity) | npm update | ✅ |
| source-map-js | 1.2.1 → **1.2.4** | npm update | ✅ |
| esbuild | 0.27.7 → **0.28.2** (tsx); 0.25.x → gone (sanity) | npm update (tsx range allows it) | ✅ |
| @typescript-eslint/* | 8.x → **8.74.0** | npm update (within eslint-config-next's range) | ✅ |
| browserslist, baseline-browser-mapping, vite, tar, moment | gone (sanity) | Phase 1 removal | ✅ |
| **glob** | 10.5.0 (**forced by a Tier 1 cross-major override** onto rimraf@3, which expects glob@^7) → **7.2.3** | **removed** the `"glob": "10.5.0"` override. It broke rule 5, and the forced glob 10 was itself the flagged copy. glob 7 is outside the advisory range (9.0.0–14.0.1). | ✅ |
| minimatch | 9.0.9 (under forced glob 10) → gone; 10.2.5 → **11.0.9** (typescript-estree update) | follows the two changes above | ✅ for 9/10; see Phase 3 for 3.1.5 |
| prismjs override | removed (prismjs no longer in the tree) | cleanup | ✅ |

**`studio/` (separate package, own lockfile, not deployed):**
- Plain `npm audit fix` (never `--force`): sanity 5.21.0 → **5.31.2**, same major, lockfile only.
- Override `"js-yaml@3": "^3.15.2"` (under @vercel/frameworks).
- `sanity build` passes before and after.
- Audit: **37 → 14** (1 critical → **0**). The remaining 14 are only fixed by **sanity 6** (major): adm-zip 0.5.18, uuid 3/10 (typeid-js), minimatch 10.2.6, @oclif/*, @sanity/cli*. See Phase 3.

**Tooling fix:** `tsconfig.json` now excludes `studio/`. It's a separate package with its own toolchain, and without the exclude a clean clone with no `studio/node_modules` would fail root `tsc` on `import "sanity"`. The root sanity v3 used to hide this. The dead `sanity*` excludes are removed.

**Phase 2 gate:**

| Check | Result |
|---|---|
| clean `npm ci` | OK, 497 packages |
| lint / tsc | 12 / 7, identical to the baseline |
| build | 123/123, same warnings as the baseline |
| route regression vs baseline (full tree and **pruned prod**) | 114/114, **0 diffs**. This covers every content page, so gray-matter on js-yaml 3.15.2 parses identically. |
| email smoke vs baseline | 21/21, **IDENTICAL** |
| `npm audit` (full root lockfile) | **49 → 0** |
| `npm audit --omit=dev` | **10 → 0** |

---

## Phase 3: Major-version items (nothing force-overridden)

| Package | Root | Studio | Decision |
|---|---|---|---|
| adm-zip → 0.6.1 | **gone** (was sanity v3) | 0.5.18 via @sanity/cli → @sanity/runtime-cli. It's part of the Sanity CLI dev tool, never part of the website runtime, and never handles the site's uploads (resume uploads go through `/api/apply` as an email attachment and are never unzipped). | Remaining in studio only. Fixed by **sanity 6**. Not runtime. |
| zod → 4.x | **gone** | not flagged | ✅ |
| uuid → 11.1.1 | **11.1.1** (direct, upgraded in Phase 1); 8.x gone | 10.0.0 / 3.0.3 via typeid-js / @sanity/* | Remaining in studio only (sanity 6). The advisory needs `buf` passed to v3/v5/v6, which this code never does. |
| js-yaml 3 → 4.2+ (CVE-2026-53550) | 3.15.2 via **gray-matter 4.0.3** (latest; calls `safeLoad`, removed in v4). **Runtime.** | 3.15.2 | **Accept.** Input is trusted: repo markdown plus authenticated admin edits. A cross-major override would break gray-matter. `npm audit` no longer flags 3.15.2. Long-term option: replace gray-matter. |
| esbuild → 0.28.1 | **0.28.2** ✅ | not flagged | ✅ |
| minimatch → 11 | 3.1.5 via eslint@8 / eslint-plugin-* (dev); 11.0.9 ✅ | 10.2.6 (sanity CLI) | 3.1.5 is outside npm's advisory range (7.0.0–11.0.0), but Hostinger lists it. Clearing it needs **eslint 9** (flat config), which is your decision. |
| glob → 14 | **7.2.3** (rimraf 3 → flat-cache → eslint 8; outside advisory range) | not flagged | ✅ for npm audit; disappears with eslint 9 |
| eslint 8 → 9 | 8.57.1 (advisory **withdrawn**; npm audit does not flag it) | — | **Your decision.** Needs a flat-config migration (`eslint.config.mjs`). Not done. |

---

## Next 15: remaining breaking change fixed (route-handler `params`)

The Tier 2 migration made `params` async in **pages**, but **7 route handlers** still read `params` synchronously:
- `app/api/content/[type]/route.ts`: GET, POST
- `app/api/content/[type]/[slug]/route.ts`: GET, PUT, DELETE
- `app/api/auth/users/[id]/route.ts`: PUT, DELETE

They worked only through Next 15's deprecated compatibility shim, which Next 16 removes. Each is now typed as `params: Promise<{…}>` and calls `await params`. There is no behaviour change.

The new `admin-smoke.mjs` proved this with 20/20 passing both **before** the change (through the shim) and **after** it. It includes a check that would fail if `params.id` didn't resolve: a non-admin updating its own id gets 404 when it resolves, and 403 when it doesn't.

---

## Step 4: Final verification

**Test suite** (committed under `.claude/skills/run-intagleo/`):

| Script | What it proves |
|---|---|
| `driver.mjs` | 14 core checks |
| `driver.mjs --all-routes --compare` | All 105 sitemap routes, 4 public APIs, 4 unauthenticated-admin 401 guards (including a check that no file gets written), and the immutable cache header. Diffed against the pre-change snapshot. |
| `email-smoke.mjs --compare` | nodemailer contact (3 types) and apply (PDF attachment), each producing confirmation and notification messages with Reply-To; validation 400s; captcha rejection. Delivered to a local SMTP sink and diffed against the nodemailer 9 baseline. |
| `admin-smoke.mjs` | Middleware and JWT (valid and forged tokens), login 400/401, me/users (no hash leak), `[id]` params, and content create/read/update/delete. Throwaway slug, real users untouched. |

**Final results on the final tree (`npm ci` from the committed lockfile):**

| Check | Result |
|---|---|
| lint / tsc | 12 / 7, **identical to the baseline** (pre-existing; none in files touched here) |
| build | 123/123 pages, same warnings as the baseline |
| route regression vs baseline (full tree / pruned prod / Node 20.20.2) | 114/114, **0 diffs** |
| email smoke vs baseline | 21/21, **IDENTICAL** |
| admin smoke | 20/20, with `data/users.json` byte-identical afterwards |
| Studio `sanity build` | passes before and after |
| `npm audit` root (full / runtime) | **0 / 0** (was 49 / 10) |
| `npm audit` studio | **14** (was 37), 0 critical, all only fixable by sanity 6 |

**Code review** (`/code-review` on `main...fix/security-deps`) found no runtime issues. It made 6 test-script and hygiene findings, all fixed and re-verified:
- admin-smoke refuses non-local `--url`.
- email-smoke and admin-smoke refuse an already-occupied port (so test mail can never reach a server with real SMTP) and fail if the server exits early.
- The driver's API checks require HTTP 200 with no `error`.
- The driver's unauthenticated-write probe runs only against local targets.
- The cms-toggle skill no longer documents embedding the Studio from the deleted root `sanity.config`.
- `next` and `eslint-config-next` are pinned exactly to `15.5.29`, matching main's exact-pin convention.

## Remaining findings and decisions for you

| Item | Where | Runtime? | Recommendation |
|---|---|---|---|
| **eslint 8 → 9** (clears minimatch@3.1.5 and glob@7, which Hostinger may still list even though npm audit doesn't) | root devDeps | no | Do it as a separate small PR (flat-config migration). The advisory is withdrawn, so it's low priority. |
| **js-yaml@3.15.2 via gray-matter**: CVE-2026-53550 is only fixed in js-yaml 4.2+ | root | **yes** (files CMS) | Accept. Input is trusted (repo plus authenticated admins). If Hostinger keeps listing it, replace gray-matter with a v4-compatible frontmatter parser in its own PR. |
| **sanity 5 → 6** (adm-zip, uuid 3/10, minimatch 10, @oclif/*, @sanity/cli*) | `studio/` only | no (never deployed) | Upgrade the Studio to sanity 6 in its own PR when convenient, then run `npm --prefix studio run dev` to check the Studio. |
| **Hostinger Node version** | server | yes | It must be ≥ 20.9. **Switch to Node 22 LTS**, since Node 20 is EOL. |
| Next 16 | root | yes | Not needed: 15.5.29 is a supported, patched line, and npm audit reports 0. |

Hostinger also lists a few packages by its own advisory database (minimatch@3, glob@7, js-yaml@3). Expect those to remain after the rescan until the eslint 9 and gray-matter decisions above are made.
