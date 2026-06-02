@AGENTS.md

# Taking over this project?

Read **[HANDOFF.md](./HANDOFF.md)** first — it's the complete handoff:
architecture, content model, ownership, secrets locations, history, and the
open tasks/blockers. For non-technical editing, see **[MAINTENANCE.md](./MAINTENANCE.md)**.

Key things to internalise before editing:

- **All page copy/images live in `content/*.json`** and are edited via the CMS
  at `/admin`. The site and the CMS read the *same* files, so editing the JSON
  updates both. **Never re-hardcode copy into a `page.tsx`.**
- Adding a *new* editable field is two steps: add it to the JSON **and** register
  it in `public/admin/config.yml` (its shape must mirror the JSON).
- **Pushing to `master` deploys to production** (Vercel). Run `npm run build` first.
- **Never commit secrets.** OAuth secrets live in Vercel env vars (see HANDOFF §4).
