# Deploying Intagleo to Hostinger (Node.js / Passenger)

This app is a **Next.js 14** site running as a long-lived Node process via
[server.js](server.js) under **Phusion Passenger** (Hostinger hPanel
"Setup Node.js App"). This guide moves it off Vercel.

> **Why move:** Vercel meters *Edge Requests* (every page + every asset hit),
> so bot/crawler traffic blew past the free 1M limit. On Hostinger requests
> aren't metered that way. Bonus: the admin editor writes to `content/*.md` and
> `data/users.json` — those writes are **lost on Vercel** (read-only/ephemeral
> filesystem) but **persist on Hostinger**.

---

## 0. Prerequisites

- Hostinger **Business** or **Cloud** plan (these include "Setup Node.js App").
- SSH access enabled (hPanel → Advanced → SSH Access).
- Your env values from the current Vercel project (Settings → Environment Variables).
  Use [.env.example](.env.example) as the checklist.

---

## 1. Get the code onto the server

**Option A — Git (recommended).** hPanel → Advanced → **Git** → create a
deployment from your repo into the app folder (e.g. `domains/intagleo.com/app`).

**Option B — Upload.** Zip the project **without** `node_modules` and `.next`,
upload via File Manager / SFTP, and extract into the app folder.

The app folder (the "Application root") should contain `package.json` and
`server.js` at its top level.

---

## 2. Create the Node.js app in hPanel

hPanel → Advanced → **Node.js** → **Create application**:

| Field | Value |
|---|---|
| Node.js version | **20.x** (18.18+ minimum) |
| Application mode | **Production** |
| Application root | path you uploaded to, e.g. `domains/intagleo.com/app` |
| Application URL | `intagleo.com` |
| Application startup file | **`server.js`** |

Create it. This generates the Passenger `.htaccess` automatically — don't add your own.

---

## 3. Set environment variables

In the Node.js app panel there's an **Environment variables** section. Add every
key from [.env.example](.env.example) using the **real values from Vercel**:

- Runtime keys (🔒): `JWT_SECRET`, `SANITY_API_TOKEN`, all `SMTP_*`, all
  `CONTACT_*` / `CAREERS_*` lists, `RECAPTCHA_SECRET_KEY`, `CONTENT_PROVIDER`.
- Build-time keys (🏗️ — must be present **before** step 5's build):
  `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
  `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.

> `NEXT_PUBLIC_*` values are **inlined into the bundle at build time**. If you
> change one later you must re-run the build (step 5), not just restart.

Alternatively create a `chmod 600 .env.local` in the app root with the same keys
(it's gitignored).

---

## 4. Install dependencies

Open the app's terminal (the Node.js panel shows the exact `source ...activate`
command to enter the right environment), then in the app root:

```bash
npm install
```

`sharp` (native image optimizer, used by `next/image`) compiles here — this is
why it's now an explicit dependency.

---

## 5. Build (required — Passenger serves the built output)

```bash
npm run build
```

Notes:
- `.next/` is gitignored, so the build **must** run on the server (or be built
  locally on matching Node and uploaded).
- If the build is killed for memory on a shared plan, raise the heap:
  ```bash
  NODE_OPTIONS=--max-old-space-size=2048 npm run build
  ```

---

## 6. Seed admin/editor users (first deploy only)

`/data/` is gitignored, so `data/users.json` is **not** in the repo. Create it on
the server:

```bash
node scripts/init-users.js
```

This writes the default admin + editor accounts (see [AUTH_SETUP.md](AUTH_SETUP.md)).
Change the default passwords after first login. Make sure `data/` and `content/`
are writable by the app user so the admin editor can save.

---

## 7. Start & verify

In the Node.js panel click **Restart** (Passenger runs `server.js`). Then:

- Visit `https://intagleo.com` — homepage loads.
- `https://intagleo.com/admin/login` — log in, edit a post, confirm it saves.
- `https://intagleo.com/robots.txt` — serves the updated bot rules.

To test from the shell before pointing DNS: `npm start` runs the same
`node server.js` on `PORT`.

---

## 8. Cut over DNS

In your domain registrar / Hostinger DNS:

1. Point the domain to Hostinger — either change **nameservers** to Hostinger's,
   or set the **A record** to your Hostinger server IP (shown in hPanel).
2. Remove the Vercel DNS records / domain assignment.
3. hPanel → **SSL** → issue a free Let's Encrypt cert and force HTTPS.

DNS can take up to a few hours to propagate. Keep Vercel live until the new host
serves correctly, then decommission the Vercel project.

---

## Post-migration checklist

- [ ] Contact + careers forms send mail (SMTP env vars correct).
- [ ] reCAPTCHA passes (site key built in, secret key set).
- [ ] Admin login works and content edits persist after a restart.
- [ ] `next/image` thumbnails render (sharp installed OK).
- [ ] `robots.txt` and `sitemap.xml` resolve.
- [ ] Set up a cron or hPanel job to **back up `data/`** (holds users + any
      file-CMS edits — not in git).

## Optional hardening (stops bots that *ignore* robots.txt)

robots.txt only deters polite crawlers. For abusive bots, add server-level
blocking once running on Hostinger — e.g. an `.htaccess` user-agent deny list,
or front the site with Cloudflare (free) and enable Bot Fight Mode. Ask and I'll
generate either.
