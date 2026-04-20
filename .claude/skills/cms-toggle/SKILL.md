# CMS Toggle Skill

Toggle the content provider between **Sanity** and **local markdown files**.

## Architecture

```
CONTENT_PROVIDER=files   → reads from content/**/*.md (default)
CONTENT_PROVIDER=sanity  → reads from Sanity dataset via GROQ
```

The switch is a single env var. Everything else (API routes, components, pages)
is identical — the abstraction in lib/providers/ handles the difference.

---

## When invoked, detect current state and ask where to go

### Step 1 — Detect current provider

Read `.env.local` and find the `CONTENT_PROVIDER` line.
- If missing or `files` → currently on **files**
- If `sanity` → currently on **Sanity**

Tell the user which provider is active and ask:
> "You're currently using [files/Sanity]. Switch to [Sanity/files]?"

---

## Switching: files → Sanity

### Prerequisites check (do all before proceeding)

1. Read `.env.local` and verify these vars exist and are non-empty:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

   If any are missing, tell the user exactly what to add and where to get them:
   - Project ID: sanity.io/manage → your project → Settings → API
   - Dataset: usually `production`
   - Token: sanity.io/manage → your project → API → Tokens → Add API token (Editor role)

2. Verify `@sanity/client` is installed:
   ```bash
   node -e "require('@sanity/client')" 2>&1
   ```
   If missing: `npm install @sanity/client --legacy-peer-deps`

### Migration (ask user first — this is destructive to Sanity)

Tell the user:
> "This will upload all local markdown files to your Sanity dataset. Existing documents with the same slugs will be overwritten. Proceed?"

If confirmed:
```bash
npx tsx scripts/migrate-to-sanity.ts
```

Watch for errors. If the migration succeeds, proceed. If it fails, show the error
and stop — do NOT change the provider.

### Toggle the env var

In `.env.local`, find the line `CONTENT_PROVIDER=files` and replace with
`CONTENT_PROVIDER=sanity`. If the line doesn't exist, append it.

### Update API routes to use async Sanity functions

The sync `lib/content.ts` functions cannot work with Sanity (async). Check these
routes and update them to use the async equivalents from `lib/providers/sanity.ts`:

Files to check:
- `app/api/blog/featured/route.ts` → use `getFeaturedPostsAsync()`
- `app/api/blog/by-page/route.ts` → use `getPostsByPageAsync()`
- `app/api/case-studies/route.ts` → use `getAllCaseStudiesAsync()`
- `app/api/case-studies/featured/route.ts` → use `getFeaturedCaseStudiesAsync()`
- `app/api/case-studies/by-page/route.ts` → use `getCaseStudiesByPageAsync()`
- `app/api/testimonials/featured/route.ts` → use `getFeaturedTestimonialsAsync()`

Pattern for each route (example — blog/featured):
```ts
import { getFeaturedPostsAsync } from "@/lib/providers/sanity";

export const revalidate = 60; // cache for 60s

export async function GET() {
  const posts = await getFeaturedPostsAsync();
  return Response.json({ posts });
}
```

Also update these server-side pages that call sync content functions:
- `app/blog/page.tsx` → `getAllPostsAsync()`
- `app/blog/[slug]/page.tsx` → `getPostBySlugAsync()`, `getBlogSlugsAsync()`
- `app/case-studies/page.tsx` → `getAllCaseStudiesAsync()`
- `app/case-studies/[slug]/page.tsx` → `getCaseStudyBySlugAsync()`, `getCaseStudySlugsAsync()`

Add `export const revalidate = 60` to all updated pages and routes.

### Confirm

Tell the user:
> "Done. Provider is now Sanity. Restart your dev server: `npm run dev`"
> "Sanity Studio is embedded at /studio once you add the Studio route."

---

## Switching: Sanity → files (revert)

### Step 1 — Optional: pull latest content from Sanity first

Ask the user:
> "Do you want to pull the latest content from Sanity before reverting?
> This overwrites your local markdown files with whatever is in Sanity."

If yes:
```bash
npx tsx scripts/revert-to-files.ts
```

If no, skip (local files are untouched).

### Step 2 — Revert API routes

Undo all the async changes made during the files→Sanity switch.
For each route, replace the Sanity async import with the original sync call:

```ts
import { getFeaturedPosts } from "@/lib/content";

export async function GET() {
  const posts = getFeaturedPosts();
  return Response.json({ posts });
}
```

Remove `export const revalidate` lines (or keep them — they're harmless).

Revert pages (`app/blog/page.tsx` etc.) back to sync imports from `@/lib/content`.

### Step 3 — Toggle the env var

In `.env.local`, replace `CONTENT_PROVIDER=sanity` with `CONTENT_PROVIDER=files`.

### Confirm

Tell the user:
> "Done. Provider is now local files. Restart your dev server: `npm run dev`"

---

## Quick reference

| Command | What it does |
|---------|-------------|
| `npx tsx scripts/migrate-to-sanity.ts` | Push all .md files → Sanity |
| `npx tsx scripts/revert-to-files.ts` | Pull Sanity → .md files |
| `CONTENT_PROVIDER=files` | Use local markdown |
| `CONTENT_PROVIDER=sanity` | Use Sanity dataset |

## Sanity Studio

To embed Sanity Studio at `/studio`, create `app/studio/[[...tool]]/page.tsx`:
```tsx
"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
export default function StudioPage() {
  return <NextStudio config={config} />;
}
```
Add `/studio` to middleware matcher exclusions in `middleware.ts`.
