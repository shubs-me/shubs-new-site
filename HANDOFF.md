# Project Handoff — shubs.me (Dr Shubs Upadhyay)

> **Audience:** the next engineer or AI assistant (Claude Code / Claude) taking
> over this project. This is the single source of truth for *what this is, how
> it works, who owns what, what's done, and what's still open*. Read it fully
> before making changes.
>
> **Last updated:** 2026-06-02.
>
> ⚠️ **Secrets policy:** this file deliberately contains **no secret values**
> (no tokens, no client secrets). Committing those to the repo would leak them
> publicly and permanently via git history. Where a secret is needed, this file
> tells you its **name** and **where it lives**. See [§4](#4-access--secrets).

---

## 1. TL;DR

- Marketing site for **Dr Shubs Upadhyay**, a digital-health clinical/strategy
  advisor. Single-language (English), ~8 pages, no database.
- **Next.js 16** (App Router) + **React 19** + **Tailwind v4**, TypeScript.
- Hosted on **Vercel**, auto-deploys from the **`master`** branch on GitHub.
- **All page copy and images are editable without code** via a visual CMS
  (**Decap CMS**) at **`/admin`**, backed by JSON files in **`content/`**.
- Three things are **not yet wired**: CMS login (OAuth env vars), the contact
  form (doesn't send), and the "Book a call" link. See [§10](#10-open-tasks--blockers).

---

## 2. Ownership & accounts

| Thing | Who / where | Notes |
|---|---|---|
| **Site owner / client** | Dr Shubs Upadhyay | The person the site is about. |
| **Operator / developer contact** | Sam Woodhouse — `shwoodhouse@gmail.com` | Manages the repo/Vercel during build. |
| **Legal entity** | **SandiQ Global** (SASU, registered in France) | Publisher named in the legal pages. |
| **GitHub repo** | `samwoodhouse1982/shubs-new-site` | Default/deploy branch is **`master`**. |
| **Hosting** | **Vercel** project `shubs-new-site` | Live preview URL: `https://shubs-new-site.vercel.app` |
| **Production domain** | `www.shubs.me` (**target — not yet connected**) | See [§10](#10-open-tasks--blockers). |
| **Writing / blog** | **Substack** at `https://shubstack.substack.com` | Pulled live into the Thinking page. |
| **Podcast** | **GPODH** at `https://gpodh.org` | External links only. |
| **Social** | LinkedIn `https://linkedin.com/in/shubs-upadhyay` | External links only. |

When the repo or domain is transferred to a new owner, see
[§8 "Transfer checklist"](#8-domain--transfer-checklist).

---

## 3. Tech stack & versions

- **next** `16.2.1` — App Router. ⚠️ This is a newer/unusual Next than most
  training data; see [`AGENTS.md`](./AGENTS.md). Read
  `node_modules/next/dist/docs/` before using unfamiliar Next APIs.
- **react** / **react-dom** `19.2.4`
- **tailwindcss** `^4` (+ `@tailwindcss/postcss`) — note Tailwind v4 config style.
- **typescript** `^5`, **@types/node** `^20`
- **rss-parser** `^3.13` — reads the Substack feed.
- **marked** `^14` — renders the legal pages' rich-text (markdown) to HTML.
- **decap-cms** `3.8.4` — loaded from CDN in `public/admin/index.html` (not an npm dep).
- Node 20+ recommended.

Most styling is hand-written CSS in `src/app/globals.css` (Tailwind is present
but the design system is largely bespoke CSS classes like `.wrap`, `.sec-head`,
`.btn-clay`, `.legal-body`).

---

## 4. Access & secrets

**No secret values are stored in this repo.** Here's what exists and where:

| Secret / credential | Where it lives | Used for |
|---|---|---|
| `OAUTH_GITHUB_CLIENT_ID` | **Vercel → Project → Settings → Environment Variables** | Decap CMS GitHub login (step 1). |
| `OAUTH_GITHUB_CLIENT_SECRET` | **Vercel** env vars (same place) | Decap CMS GitHub login (step 2). |
| Web3Forms access key | **Committed in code** (`src/app/contact/page.tsx`); optional override via `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel | Contact-form delivery. This is a *public submit key* by design (it ships in client HTML; Web3Forms handles spam + emailing), so committing it is fine. It belongs to Shubs' Web3Forms form → his inbox. |
| GitHub **OAuth App** (the ID/secret above come from here) | **GitHub → Settings → Developer settings → OAuth Apps** | Defines the callback URL + issues the ID/secret. |
| Git push / automation token | Managed by the CI / Claude Code web environment — **never in the repo** | Pushing commits. Rotate via GitHub if exposed. |

- **Env vars only take effect on a new deployment.** After adding/changing them
  in Vercel you must **redeploy** (push a commit, or Deployments → ⋯ → Redeploy).
- `NEXT_PUBLIC_SITE_URL` (optional) overrides the canonical site URL; defaults to
  `https://www.shubs.me` (see `src/lib/site.ts`).
- To **rotate** the OAuth secret: GitHub OAuth App → *Generate a new client
  secret* → update `OAUTH_GITHUB_CLIENT_SECRET` in Vercel → redeploy.

---

## 5. Repository map

```
shubs-new-site/
├── AGENTS.md            # ⚠️ "This is NOT the Next.js you know" — read the docs
├── CLAUDE.md            # imports AGENTS.md (+ points here)
├── MAINTENANCE.md       # non-technical editing guide (for Shubs/Sam)
├── HANDOFF.md           # ← this file (for the next dev / AI)
├── next.config.ts       # rewrites /admin → /admin/index.html
├── content/             # ★ ALL editable site content (JSON) — see §6
│   ├── home.json  about.json  services.json  contact.json  thinking.json
│   ├── legal.json  privacy.json  cookies.json      # rich-text (markdown bodies)
│   └── stats.json  testimonials.json  ticker.json  process.json   # list data
├── public/
│   ├── admin/
│   │   ├── index.html   # loads Decap CMS from CDN
│   │   └── config.yml   # ★ CMS schema — MUST mirror the shape of content/*.json
│   └── images/          # all site images (CMS uploads land here)
└── src/
    ├── app/
    │   ├── layout.tsx                 # Nav, Footer, ContactFab, SiteMotion
    │   ├── globals.css                # the whole design system
    │   ├── page.tsx                   # Home
    │   ├── about|services|contact|thinking/page.tsx
    │   ├── legal|privacy|cookies/page.tsx     # thin wrappers over <LegalPage>
    │   ├── api/auth/route.ts          # CMS OAuth step 1 (redirect to GitHub)
    │   └── api/callback/route.ts      # CMS OAuth step 2 (token exchange)
    ├── components/
    │   ├── Em.tsx          # renders split headings (plain + pink-italic) — see §6
    │   ├── LegalPage.tsx   # shared layout + markdown→HTML for legal pages
    │   ├── ContactFab.tsx  # floating "Let's talk" button (all pages)
    │   ├── Nav.tsx Footer.tsx InlineCTA.tsx ExtLink.tsx StatNumber.tsx SiteMotion.tsx
    └── lib/
        ├── site.ts         # SITE_URL / SITE_NAME / SITE_DESCRIPTION
        └── substack.ts     # getEssays() — live feed + static fallback
```

---

## 6. How content works (READ THIS before editing copy)

**The golden rule:** the website and the CMS both read from the **same**
`content/*.json` files. So:

- **Editing existing copy** = edit the JSON. The live site *and* the CMS both
  reflect it automatically. (Equivalently, edits made in `/admin` commit back to
  these same JSON files.) They cannot drift apart.
- **Adding new copy / a new section** = TWO steps: (1) add it to the relevant
  `content/*.json`, **and** (2) register the field in `public/admin/config.yml`
  so it's editable in the CMS. If you skip (2), the site still works but the new
  field won't appear in `/admin`.
- **Never re-hardcode copy back into a `page.tsx`** — that breaks CMS editability
  (this was the whole point of the externalisation work).

### The `<Em>` heading pattern

Stylised headings (the pink-italic emphasis) are split into parts so the
highlighted words stay editable without markup:

```jsonc
"title": { "pre": "Building or backing?", "em": "Let's talk.", "post": "" }
```

`src/components/Em.tsx` renders `{pre}<em>{em}</em>{post}` and skips empty parts.
In the CMS these appear as *Heading start / Highlighted part (pink italic) /
Heading end*. The Services closing CTA additionally renders a hard `<br/>`
between `pre` and `em` (a one-off layout choice in `services/page.tsx`).

### Inline links inside a sentence

Where a sentence needs inline links (e.g. About → "person" intro), the copy is
modelled as an array of `{ text, href? }` segments; a segment with `href`
becomes a link (internal `<Link>` if it starts with `/`, else external).

### Bold lead-ins inside paragraphs

Paragraphs that start with a bold phrase use `{ lead, text }` objects rendered as
`<b>{lead}</b> {text}`.

### Legal pages (rich text)

`legal.json` / `privacy.json` / `cookies.json` are `{ hero, updated, sections:
[{heading, body}], more }`. Each `body` is **markdown** (CMS "rich-text"
widget). `src/components/LegalPage.tsx` converts it to HTML with `marked` and
renders inside `.prose.legal-body`, preserving the section-divider styling.
External links open in a new tab. (The previous bespoke "card"/definition-list
styling was intentionally simplified to standard rich-text formatting.)

### Lists / structured data

`stats.json`, `testimonials.json`, `ticker.json`, `process.json` are simple
lists, editable as lists in the CMS.

### The Thinking page feed

`src/lib/substack.ts` fetches the latest posts from
`https://shubstack.substack.com/feed` (revalidated hourly). If the feed can't be
reached, it falls back to a static list in that file. The article list is **not**
in the CMS by design — publishing on Substack updates the site automatically.

---

## 7. The CMS (Decap) — how it's wired

- Editor served at **`/admin`** (`next.config.ts` rewrites `/admin` →
  `/admin/index.html`, which loads Decap from a CDN).
- **Backend:** GitHub, repo `samwoodhouse1982/shubs-new-site`, branch `master`,
  `publish_mode: simple` (direct commits, no PR/editorial workflow).
- **Auth:** Decap has no server of its own, so this app provides the OAuth
  bridge: **`/api/auth`** (redirect to GitHub) and **`/api/callback`** (exchange
  code → token → postMessage back to the Decap window). Both read the two
  `OAUTH_GITHUB_*` env vars.
- **`config.yml` `base_url`** must equal the origin the site is served from.
  It's currently `https://shubs-new-site.vercel.app`. **When `www.shubs.me`
  goes live, update `base_url` AND the GitHub OAuth App's callback URL to match**
  (see [§8](#8-domain--transfer-checklist)).
- **Media:** uploads go to `public/images` and are referenced as `/images/...`.

### How to add a new editable field (recipe)

1. Add the key to the right `content/*.json` with a sensible default.
2. Render it in the matching `src/app/.../page.tsx`.
3. Add a matching field under the right collection in `public/admin/config.yml`
   — **the field tree must mirror the JSON shape exactly** (object → `widget:
   object` with `fields`; array of objects → `widget: list` with `fields`; array
   of strings → `widget: list` with a single `field`).
4. `npm run build` to confirm, then commit. Validate the YAML too (it must parse).

---

## 8. Domain & transfer checklist

### Domain (done — `www.shubs.me` is connected)

`base_url` in `config.yml` and the default `SITE_URL` already use
`https://www.shubs.me`. If the domain ever changes, update both, update the
GitHub OAuth App's Homepage + callback (`/api/callback`) URLs, and redeploy.

### Transferring repo + Vercel project to Shubs — what survives, what to redo

**Key idea:** the three OAuth pieces are *independent* of each other —
(a) the GitHub **OAuth App**, (b) the **Vercel env vars** holding its
ID/secret, and (c) `config.yml` (`repo:` + `base_url`). The OAuth App is **not**
tied to the repo or the Vercel project; it's a standalone GitHub entity keyed
only by its **callback URL** (`https://www.shubs.me/api/callback`). So as long
as the **domain stays `www.shubs.me`**, the callback never changes and login can
keep working through the transfer.

What to check/do after transfer:

1. **`config.yml` `repo:`** — currently `samwoodhouse1982/shubs-new-site`. After
   the repo moves, set this to the new `owner/name`. GitHub redirects the old
   path, but make it explicit. `base_url` stays `https://www.shubs.me`.
2. **Vercel env vars** — confirm `OAUTH_GITHUB_CLIENT_ID` /
   `OAUTH_GITHUB_CLIENT_SECRET` are present on the transferred project (they
   usually move with it, but verify). Re-add if missing, then **redeploy**.
3. **Domain** — confirm `www.shubs.me` is still attached to the project and DNS
   still points at Vercel.
4. **Repo write access** — whoever logs into `/admin` must have push access to
   the repo. Once Shubs owns it, his GitHub login works; add collaborators as
   needed.
5. **Recommended for a clean handoff (optional):** have **Shubs create his own
   GitHub OAuth App** (Homepage `https://www.shubs.me`, callback
   `https://www.shubs.me/api/callback`), generate a fresh Client ID/Secret, and
   replace the two Vercel env vars with his. This removes any dependency on
   Sam's GitHub account (otherwise the existing OAuth App keeps working but
   stays under Sam's ownership — if he deletes it, CMS login breaks).
6. **Contact form** — no action. The Web3Forms key is **committed in code**
   (`src/app/contact/page.tsx`) and Shubs' form already points at his inbox, so
   it travels with the repo and keeps working.
7. **Redeploy and re-test:** `/admin` login + a test publish, and a test
   contact-form submission.

---

## 9. Local dev / build / deploy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run this before committing non-trivial changes)
npm run lint
```

- **Deploy = push to `master`.** Vercel rebuilds and publishes in ~1–2 min. If a
  build fails, Vercel keeps serving the last good version and emails the owner.
- There is no separate staging environment; Vercel preview deployments are
  created for any branch/PR if you open one.
- **Branch note:** during the build engagement, changes were committed directly
  to `master` because that's what deploys and the owner wanted edits live to test
  the CMS. If you adopt a PR workflow, switch Decap's `publish_mode` accordingly.

---

## 10. Open tasks & blockers

Ordered by priority. None of these block the *site* from running; they block the
*CMS login* and two interactive features.

1. **CMS login / OAuth — needs the env vars + a matching OAuth App.**
   - Code is ready: `base_url` in `config.yml` is now `https://www.shubs.me`.
   - Remaining manual steps:
     - **GitHub OAuth App** Homepage `https://www.shubs.me`, callback
       `https://www.shubs.me/api/callback`.
     - Add `OAUTH_GITHUB_CLIENT_ID` + `OAUTH_GITHUB_CLIENT_SECRET` in Vercel
       (scope **Production**), then **redeploy**.
   - Then verify `/admin` login end-to-end and a test publish.
   - "Enable Device Flow" on the OAuth App is **not** needed (standard web
     Authorization Code flow via the callback URL).

2. **Contact form — DONE (live once deployed).**
   - `src/app/contact/page.tsx` POSTs to `https://api.web3forms.com/submit`
     with all fields + a hidden `access_key`, a subject/from-name, and a
     honeypot. On success it shows the confirmation; on failure, a retry message.
   - Shubs' Web3Forms key is committed as the default (public submit key), so it
     works without any env var and survives the transfer. Worth one live test
     submission after deploy to confirm it lands in his inbox.
   - Labels/placeholders/options are CMS-editable in `content/contact.json`.

3. **"Book a call" link is a placeholder.**
   - In `content/contact.json` the "Prefer to book directly?" row has
     `"linkHref": "#"`. Point it at the real booking URL (e.g. Google Calendar
     appointment scheduling / Calendly). Editable in the CMS now.

4. **Legal placeholders.** `content/legal.json` and `content/cookies.json`
   contain `[INSERT ADDRESS]`, `[INSERT SIRET NUMBER]`, `[INSERT RCS NUMBER]`,
   `[INSERT SHARE CAPITAL]`, `[INSERT VAT NUMBER]`, `[INSERT ANALYTICS PROVIDER]`.
   Shubs/SandiQ to supply; editable in the CMS (Legal pages).

5. **Production domain** `www.shubs.me` — **connected.** Confirm Vercel is
   serving it and that `base_url`/OAuth callback both use it (see [§8](#8-domain--transfer-checklist)).

---

## 11. Change history (this engagement)

Most recent first (see `git log` for the full list, including the earlier
design/build commits `47acdb5`…`a67ba77`):

- **Services CTA line break** — final CTA renders "Let's talk." on its own line.
- **`6116ab2` Legal pages → CMS** — externalised Legal/Privacy/Cookies into
  `content/*.json` as rich-text sections; added shared `LegalPage` + `marked`;
  added a "Legal pages" CMS collection. (Privacy "cards"/Legal definition-list
  styling simplified to standard rich text.)
- **`0c612a8` About intro links** — restored the inline "GPODH podcast" /
  "Shubstack" links as editable text/link segments.
- **`354c3c7` All copy → CMS** — externalised every heading/paragraph/quote/image
  on Home, About, Services, Contact, Thinking into per-page JSON; added the
  `<Em>` split-heading pattern; one CMS collection per page in `config.yml`.
- **`1e67f0e` ContactFab** — persistent floating "Let's talk" button (all pages
  except `/contact`), fades in on scroll, collapses to an icon on mobile.
- **`b05af5b` / `5d7e176` / `408cc75` / `6ba2ee4`** — Decap CMS + GitHub OAuth
  bridge introduced; `base_url` pointed at the Vercel URL; config-load fix.

### Prior history (before this engagement, summarised)
Design and content build of all pages: hero/sections, the "I've lived the
challenges" experience grid, services pillars, animated stats, ticker, contact
hero, brand favicon, legal pages rewrite, Substack integration. See `git log`.

---

## 12. Conventions & gotchas

- ⚠️ **Next 16 is unusual** — heed `AGENTS.md`; check `node_modules/next/dist/docs/`
  before reaching for a Next API you're unsure about.
- **Pushing to `master` deploys to production.** Build locally first.
- **`config.yml` must mirror `content/*.json` shape** or fields silently won't
  save correctly. Validate the YAML parses after editing.
- **Don't commit secrets.** See [§4](#4-access--secrets).
- **Images:** keep them small (≲400 KB), prefer `.webp`/`.jpg`, reference as
  `/images/...`.
- **`MAINTENANCE.md`** is the *non-technical* guide for Shubs/Sam; keep it in sync
  when you change what's editable.
- The contact page is a **client component** (`'use client'`); JSON imports there
  are bundled at build — fine, but it means contact copy changes need a rebuild
  (every change does, since deploy = build).

---

## 13. Quick reference

| I want to… | Do this |
|---|---|
| Change wording/images on a page | Edit the matching `content/*.json` (or use `/admin`). |
| Add a new editable field | Edit JSON + render in `page.tsx` + add to `config.yml` ([§7](#7-the-cms-decap--how-its-wired)). |
| Make CMS login work | Set `OAUTH_GITHUB_*` in Vercel + redeploy ([§10](#10-open-tasks--blockers)). |
| Wire the contact form | `src/app/contact/page.tsx` `handleSubmit` → email service. |
| Set the booking link | `content/contact.json` → info row `linkHref`. |
| Fill legal details | `content/legal.json` / `content/cookies.json` (or `/admin`). |
| Connect the domain | [§8](#8-domain--transfer-checklist). |
| Update Thinking posts | Just publish on Substack — it's automatic. |
| Deploy | Commit & push to `master`. |
