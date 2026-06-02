# Maintaining the site

This is a [Next.js](https://nextjs.org) site hosted on [Vercel](https://vercel.com).
Most day-to-day content can be edited **without touching code**, through a visual
editor at `/admin`. This guide covers both the visual editor and the few things
that still need a code edit.

---

## 1. How the site updates

The site **auto-deploys**: any change saved to the `master` branch on GitHub
triggers Vercel to rebuild and publish within ~1–2 minutes. You never deploy by
hand. If a change ever breaks the build, Vercel emails you and the **live site
keeps showing the last working version** — nothing goes down.

---

## 2. The visual editor (`/admin`) — easiest

Go to **https://www.shubs.me/admin** and log in with GitHub. **Every page is
editable here** — there's one entry per page in the sidebar:

| Collection | What you can change |
|---|---|
| **Home page** | Every section: hero, "the gap", stats, focus areas, who I work with, engagements, "lived not lifted", quote, testimonials, outcomes, the notes/podcast teaser, and the closing call-to-action |
| **About page** | Hero, "why I exist", the experience grid, the person bio + links, manifesto, and the closing CTA |
| **Services page** | Hero, audiences, the two practice areas, the quote, process steps, and the closing CTA |
| **Contact page** | Hero, all form labels/placeholders/options, and the side-panel rows (incl. the "Book a call" link) |
| **Thinking page** | Hero, section headings, the podcast block, and the closing CTA (the article list is automatic — see §5) |
| **Legal pages** | Legal Notice, Privacy Policy, Cookie Policy — each section is a rich-text box (bold, links, lists). Fill in the company registration details here. |

For most headings you'll see the words split into a plain part and a
**"Highlighted part (pink italic)"** — that second box is the pink emphasised
text. Edit either.

Edit a field, click **Publish** → it commits to GitHub → the site rebuilds
automatically. Images can be uploaded right in the editor (they're stored in
`public/images`).

### One-time setup (the developer does this once)

The OAuth bridge is already built into this site (`/api/auth` and
`/api/callback`). To switch it on, you only need to create a GitHub OAuth app
and add two secrets:

1. **Create a GitHub OAuth app** at
   https://github.com/settings/developers → "New OAuth App". Use the URL the
   site is currently served from:
   - **While on the Vercel URL:**
     - Homepage URL: `https://shubs-new-site.vercel.app`
     - Authorization callback URL: `https://shubs-new-site.vercel.app/api/callback`
   - **After `www.shubs.me` is connected:** use `https://www.shubs.me` and
     `https://www.shubs.me/api/callback` instead (and update `base_url` in
     `public/admin/config.yml` to match).
   - Click *Register*, then *Generate a new client secret*.
2. **Add two environment variables in Vercel**
   (Project → Settings → Environment Variables):
   - `OAUTH_GITHUB_CLIENT_ID` = the app's Client ID
   - `OAUTH_GITHUB_CLIENT_SECRET` = the generated secret
3. **Redeploy** (Vercel does this automatically on the next push, or trigger it
   manually). `/admin` login now works.

The `base_url` in `public/admin/config.yml` must always equal the origin the
site is served from. After the repo/domain is transferred, update the `repo:`
and `base_url` lines to the new owner/domain.

Until those two secrets are set, use the GitHub method in section 3 below — it
edits exactly the same files.

---

## 3. Editing content via GitHub directly (no editor needed)

All editable content lives in plain files in the **`content/`** folder. You can
edit them in GitHub's web interface (pencil icon → edit → "Commit changes"):

- `content/home.json` `about.json` `services.json` `contact.json`
  `thinking.json` — the copy and images for each main page
- `content/legal.json` `privacy.json` `cookies.json` — the legal pages
- `content/stats.json` `testimonials.json` `ticker.json` `process.json` —
  the stats band, client quotes, scrolling keywords, and process steps

Keep the `"quotes"`, brackets and commas exactly as they are; only change the
text inside the quotes. After committing, the site rebuilds automatically.
(The visual editor in §2 is the easier way to do all of this.)

---

## 4. Images

- **Add an image:** upload to `public/images/` (GitHub → that folder → "Add file
  → Upload files"), or use the visual editor.
- **Use it on the site:** reference it as `/images/your-file.jpg`.
- Prefer `.webp`/`.jpg`, keep files reasonably small (< ~400 KB) for speed.

---

## 5. Insights / writing

The **Thinking** page pulls the latest posts **automatically** from the Substack
feed. Just publish on Substack and they appear (within an hour). Nothing to edit
here.

> If the live feed can't be reached, the page falls back to a short static list
> in `src/lib/substack.ts`.

---

## 6. Things that still need a code edit

**All page copy and images are now editable in the visual editor** (§2) — page
headlines, the About story, Services pillars, the contact page, and the legal
pages included. You shouldn't need to touch code for wording changes.

Still to be wired (developer tasks — see `HANDOFF.md` for detail):

- **Contact form** — currently shows a success message but does not yet send.
  Needs an email handler (e.g. Resend, Formspree).
- **"Book a call"** — the link is editable in the CMS (Contact page) but still
  points at a placeholder `#`; set it to the real booking link.
- **Legal details** — `content/legal.json` and `content/cookies.json` contain
  `[INSERT …]` placeholders (company registration number, VAT, address,
  analytics provider). Fill these in via the editor (Legal pages).

---

## 7. Running locally (developers)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Config: site URL is `NEXT_PUBLIC_SITE_URL` (defaults to https://www.shubs.me).
