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

Go to **https://www.shubs.me/admin** and log in with GitHub. You can edit:

| Section | What you can change |
|---|---|
| **Home → Stats band** | The intro line and the four figures + captions |
| **Home → Testimonials** | Add / edit / reorder client quotes (and the optional rating line) |
| **Home → Scrolling keywords** | The marquee words under the hero |
| **Services → Process steps** | The four "How I work" steps |

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

- `content/stats.json` — the stats band
- `content/testimonials.json` — client quotes
- `content/ticker.json` — scrolling keywords
- `content/process.json` — the Services process steps

Keep the `"quotes"` and commas exactly as they are; only change the text inside
the quotes. After committing, the site rebuilds automatically.

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

Longer narrative copy (page headlines, the About story, Services pillar
descriptions, the contact page) lives in the page files under `src/app/…`. These
are safe to edit but require care with the surrounding code — ask the developer,
or edit the text between the tags only.

Still to be wired before/after launch (developer tasks):

- **Contact form** — currently shows a success message but does not yet send.
  Needs an email handler (e.g. Resend, Formspree).
- **"Book a call"** — currently a placeholder; needs the Google Calendar
  appointment-scheduling link.
- **Legal details** — `src/app/legal/page.tsx` and `cookies/page.tsx` contain
  `[INSERT …]` placeholders (company registration number, VAT, address,
  analytics provider) to be filled in.

---

## 7. Running locally (developers)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Config: site URL is `NEXT_PUBLIC_SITE_URL` (defaults to https://www.shubs.me).
