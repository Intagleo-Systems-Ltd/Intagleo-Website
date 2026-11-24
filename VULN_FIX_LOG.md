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
