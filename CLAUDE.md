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
