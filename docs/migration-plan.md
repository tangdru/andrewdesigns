# Migration plan

Keep Squarespace live until the new site is verified on its preview URL.

## Open decisions

1. **Primary reader.** Hiring manager, scientific collaborator, or consulting
   client? Pick one; the others get a decent experience as a side effect.
2. **One-sentence claim.** Stay with "design + data", extend it, or reframe
   around building with AI (Conference Capture, Reference Crawler, Family Tree,
   Sheets-it)?
3. **Which projects lead.** 3–4 featured case studies that each show a different
   kind of judgment; the rest go in an archive or the timeline.
4. **Craft vs. leadership balance.** Current site is almost all craft.
5. **mXtract** (`/missioncontrol-1`): finish or drop.
6. **Typeface.** Keep Halyard Display (needs Adobe Fonts web license) or choose
   a new face as part of the redesign.

## Phases

0. **Audit** (done, `docs/audit.md`).
1. **Content extraction.** Move every page's copy into `content/` using the
   templates; fix typos; write meta descriptions and alt text; gather source
   images. Fill `content/sources/` per project.
2. **Design direction.** Recreate, evolve, or redesign. Explore in Figma or as
   HTML mockups; agree tokens (type, color, spacing, motion).
3. **Build.** Astro scaffold, layout, home, case study template, about/resume,
   publications, visual design gallery.
4. **Motion.** Motion tokens; page transitions; a few scroll moments.
5. **Live data viz.** One rebuilt demo first (e.g. a small directed 3D UMAP in
   Three.js, or the MetMap plot in D3) with a data subset safe to publish.
6. **Timeline.** `content/timeline/` plus roles, publications, covers, talks;
   filterable by theme (design, data, code, AI); accessible list fallback.
   Secondary view, not the front door.
7. **QA.** Lighthouse, axe, reduced motion, Safari + real phone, link check.
8. **Cutover.** GitHub Pages + custom domain. Domain is registered at
   Squarespace (ex-Google Domains): screenshot DNS (incl. any MX/SPF/DKIM),
   lower TTL a day ahead, point `www` CNAME to `tangdru.github.io`, apex A
   records to GitHub's IPs, keep `www` canonical. Confirm cancelling the
   Squarespace site plan does not cancel the domain; keep auto-renew on.
