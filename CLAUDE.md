# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build (also runs next-sitemap via postbuild)
npm run start        # Serve the production build
npm run lint         # next lint

npm run cms:migrate  # Push all content/**/*.md files → Sanity dataset (tsx scripts/migrate-to-sanity.ts)
npm run cms:revert   # Pull Sanity → local .md files (tsx scripts/revert-to-files.ts)
npm run cms:studio   # Run Sanity Studio standalone on :3333

node scripts/init-users.js   # (Re)create default admin + 5 editor accounts in data/users.json
```

There is no test suite. Note `next.config.mjs` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` to `true` — **the build will not fail on type or lint errors**, so run `npm run lint` and check types manually; CI/build won't catch them.

On Windows, `npm` is only available through PowerShell, not the bundled bash shell.

## Architecture

This is a **Next.js 14 App Router** marketing site for Intagleo (a software consultancy), with a file-based CMS that can optionally be backed by Sanity, plus a custom JWT-auth admin area. Dark theme by default (`bg-[#0a0a0a]`), heavy use of `framer-motion`/`gsap` animation and many bespoke section components.

### Content layer — the central abstraction

All blog posts, case studies, and testimonials flow through a **provider abstraction** in [lib/providers/](lib/providers/). This is the most important thing to understand before touching content.

- [lib/providers/interface.ts](lib/providers/interface.ts) — the `ContentProvider` contract.
- [lib/providers/files.ts](lib/providers/files.ts) — default provider. Reads `content/{blog,case-studies,testimonials}/*.md`, parsed with `gray-matter` (frontmatter + markdown body). **Synchronous.**
- [lib/providers/sanity.ts](lib/providers/sanity.ts) — alternate provider, fetches via GROQ. **Asynchronous** (functions are suffixed `...Async`).
- [lib/content.ts](lib/content.ts) — public API + the `BlogPost`/`CaseStudy`/`Testimonial`/`Vacancy` types. It currently delegates to the **files** provider directly (sync). Selected by `CONTENT_PROVIDER` env var (`files` default | `sanity`).

Because the files provider is sync and Sanity is async, **switching providers is not just an env flip** — API routes and pages that import sync functions from `@/lib/content` must be rewritten to use the async `...Async` functions from `@/lib/providers/sanity`. The full switch procedure is documented in [.claude/skills/cms-toggle/SKILL.md](.claude/skills/cms-toggle/SKILL.md) (invoke via `/cms-toggle`).

### Frontmatter-driven content placement

Two frontmatter fields control where content appears (see any file under `content/`):

- `show_on_homepage: false` hides an item from homepage sections. The providers treat **absent as visible** (`!== false`), so default is shown. Used by `getFeatured*()`.
- `pages: [slug, ...]` lists which industry/service pages an item appears on, via `get*ByPage(slug)`. E.g. a post with `pages: [fintech, healthcare]` surfaces on those pages' `InsightsSection`/`CaseStudiesSection`.

When the body is markdown (files) it's a `string`; under Sanity it's `PortableTextBlock[]`. Components render via [components/PortableTextBody.tsx](components/PortableTextBody.tsx) or `markdownToHtml()` accordingly.

### Routing & page structure

- `app/page.tsx` — homepage, composed of section components from `components/` (`HeroSection`, `ServicesSection`, `CaseStudiesSection`, etc.).
- **~20 industry/service landing pages** (`app/fintech`, `app/healthcare`, `app/cloud-devops`, `app/mobile-dev`, …) follow a shared pattern: `"use client"`, a local `CapItem[]` data array, and `<CapabilityCardSection>` + reused sections. To add one, copy an existing page and swap the data array.
- Content routes: `app/blog`, `app/case-studies`, `app/testimonials`, `app/join-us` (careers) with `[slug]` detail pages.
- `app/sitemap.ts` + `next-sitemap.config.js` generate sitemaps; output committed to `public/sitemap*.xml`.

### Contact / lead system

A single contact form feeds multiple intents. [lib/contactConfigs.ts](lib/contactConfigs.ts) maps a `type` (e.g. `start-project`, `ai-strategy`, `mobile-dev`) to form copy, badge, and an optional context field. [app/api/contact/route.ts](app/api/contact/route.ts):
- Verifies reCAPTCHA ([lib/verifyCaptcha.ts](lib/verifyCaptcha.ts)).
- Sends a confirmation email to the submitter + an internal notification (inline HTML templates) via `nodemailer` (SMTP env vars).
- Routes the internal notification to a per-type recipient list via `TYPE_ENV_MAP` env vars (e.g. `CONTACT_AI_STRATEGY_EMAILS`), falling back to `CONTACT_NOTIFY_EMAILS`.

`app/api/apply/route.ts` handles careers applications similarly.

### Auth & admin

Two distinct admin surfaces, both gated by a JWT stored in the `admin_token` cookie:

- [middleware.ts](middleware.ts) protects `/admin/:path*`, verifying the JWT with `jose` and redirecting to `/admin/login`. API routes verify the same cookie via [lib/auth.ts](lib/auth.ts) (`verifyAuthCookie`, using `jsonwebtoken`).
- `app/admin` — content editor (blog/case-studies/testimonials), backed by `app/api/content/[type]` which reads/writes the markdown files directly.
- `app/admin-panel` — user management (admin role only), backed by `app/api/auth/*`.
- Users live in `data/users.json` (bcrypt-hashed). Default accounts and the full auth setup are in [AUTH_SETUP.md](AUTH_SETUP.md). Tokens expire after 7 days.

### Sanity (optional CMS)

`sanity/` holds the embedded CMS config: [sanity/sanity.config.ts](sanity/sanity.config.ts) and schema types in `sanity/schemaTypes/` (`blogPost`, `caseStudy`, `testimonial`, `vacancy`). `app/api/revalidate/route.ts` is a webhook (guarded by `SANITY_REVALIDATE_SECRET`) that calls `revalidatePath("/", "layout")` so Sanity edits propagate.

## Key environment variables

Set in `.env.local`:
- `CONTENT_PROVIDER` — `files` (default) or `sanity`.
- `JWT_SECRET` — required for admin auth (middleware + API). Missing secret = all admin access denied.
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` — contact + apply email.
- `CONTACT_NOTIFY_EMAILS` and per-type `CONTACT_*_EMAILS` — lead routing.
- `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` / `SANITY_API_TOKEN` — only when `CONTENT_PROVIDER=sanity`.
- `SANITY_REVALIDATE_SECRET` — Sanity webhook auth.
- reCAPTCHA keys for `verifyCaptcha`.

## Conventions

- Path alias `@/*` maps to the repo root (`tsconfig.json`).
- Industry/service pages and most interactive sections are Client Components (`"use client"`); content listing/detail pages are Server Components.
- Media is heavily optimised — GIFs are converted to WebM/MP4 (`components/AutoplayVideo.tsx`, `scripts/fix-gifs.mjs`) and images to WebP/AVIF; `next.config.mjs` sets long immutable cache headers for `_next/static` and public media. Prefer video over GIF for new motion assets.
