# andrewdesigns: portfolio site

Andrew's design + data portfolio, replacing the Squarespace site at
https://www.andrewdesigns.info. Andrew is a product UX and data-visualization
designer; the site is itself a portfolio piece, so craft matters.

## Read first

- `docs/audit.md`: what the current site contains, its visual system and issues
- `docs/migration-plan.md`: phases and open decisions
- `docs/redirects.md`: slug changes

## Stack

- Astro (static output) with React islands only where interactivity needs it
- Motion and GSAP for animation; D3 / Three.js for live data viz demos
- Hosting: GitHub Pages from this public repo via GitHub Actions (custom domain
  www.andrewdesigns.info). Moving to Cloudflare Pages or Netlify later is just a
  deploy-settings change; don't depend on host-specific features.

## Layout of the code

- `content/projects/*.md`: case studies (body is markdown with small HTML
  blocks: `<figure>`, and `<div class="row ...">` for rows). Layout reproduces
  the Squarespace fluid grid (`.page-grid`: 24 cols desktop / 8 mobile): a
  `placed` figure or row cell carries its original columns (`--gc`/`--mgc`,
  rows `--gr`/`--mgr`) and the share of its cell the image filled
  (`--fw`/`--mfw`); frontmatter `grid.text` sets the page's text column.
  Visual design galleries use `<div class="masonry">` of
  `<figure class="masonry-item" data-category="…">`, laid out by Muuri (script
  in `src/pages/visual-design.astro`; wraps in rows without JS). The
  `.filters` buttons (`data-filter`) above the gallery filter it by category
  (URL hash keeps the filter).
- `content/pages/*.md`, `content/resume.md`, `content/publications.json`,
  `content/site.json` (nav, home intro); `content/drafts/` is not rendered
- `src/content.config.ts`: collection schemas
- `src/styles/tokens.css`: all design tokens; `global.css`: base + prose
- Images live in `public/images/<slug>/` (optimized WebP, ≤2000px wide).
  Content always uses root paths (`/images/...`, `/webster`);
  `src/plugins/rehype-base.mjs` and `url()` add the base path.
- `npm run build` must pass before pushing. `BASE_PATH=/andrewdesigns npm run
  build` reproduces the GitHub Pages preview build.
- Deploy: `.github/workflows/deploy.yml` (base path comes from the Pages
  settings via configure-pages); cutover steps in `docs/cutover.md`.

## Rules

- **All copy lives in `content/`** (markdown/JSON with frontmatter). Components
  never hardcode resume, project or timeline text. Resume, project pages and
  the timeline read from the same collections, so one edit updates all three.
- **Tokens, not literals.** Colors, type, spacing, radii, and motion (durations,
  easings, staggers) are defined once as CSS custom properties / a tokens file.
- **Motion:** animate transform and opacity only; respect
  `prefers-reduced-motion` with a non-animated equivalent; a few well-tuned
  interactions beat many.
- **Accessibility:** WCAG 2.1 AA. Every image has meaningful alt text (or empty
  alt if decorative). Interactive viz has a keyboard-navigable, text fallback.
- **SEO:** every page has a unique meta description and a 1200×630 share image.
- **Sources:** before porting a project's code or data, check its entry in
  `content/sources/`. Anything not cleared for public release stays out of this
  repo (this repo is public). No secrets in the repo.
- **Large files:** commit optimized images only; originals live outside the repo.
- Plan before larger changes (new sections, layout systems, dependencies).
