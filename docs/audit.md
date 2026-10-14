# Phase 0 audit: andrewdesigns.info (Squarespace)

Audited 2026-10-14 from the live site (HTML, sitemap, site CSS, screenshots).
Fonts and lazy-loaded images did not render in the headless screenshots, so
visual notes below come from the CSS tokens, not pixels.

## Page inventory

Pages from the nav and `sitemap.xml`:

| Slug | Title | Type | Images | Notes |
|---|---|---|---|---|
| `/` | Andrew designs | Home | 7 | Hero sentence + two lists of case studies |
| `/depmap` | DepMap | Case study (UX) | 15 | Cancer target discovery, Broad |
| `/gutsee` | Gutsee | Case study (UX) | 33 | IBD clinical trial mobile app, CMIT/MGH |
| `/missioncontrol` | Mission Control | Case study (UX) | 52 | Ginkgo; richest case study (metrics, research, UAT) |
| `/webster` | Webster | Case study (dataviz) | 16 | Directed 3D UMAP; Cell Systems |
| `/metmap` | Metmap | Case study (dataviz) | 14 | Metastatic potential; Nature cover |
| `/timecube` | Timecube | Case study (dataviz) | 9 | Cartographic time-series, Zika |
| `/visual-design` | Visual design | Gallery | 46 | Dataviz links + graphic design + book design |
| `/about` | About | About/resume | 2 | Bio, roles, skills, tools, education, contact |
| `/new-page` | Publications | List | 1 | 8 publications with abstracts + DOIs |
| `/foldersux` | n/a | Nav folder | 0 | 302 redirect, not a real page |

Hidden pages found only in the sitemap:

| Slug | What it is | Recommendation |
|---|---|---|
| `/new-page-1` | Duplicate of the home page | Drop, redirect to `/` |
| `/ux-design` | Near-empty (one banner image) | Drop, redirect to `/` (or `/work`) |
| `/missioncontrol-1` | Unfinished **mXtract** case study: new title/intro ("retrieves and aligns documents for human verified approval", QC/QA end users) over Mission Control body copy | Likely Moderna work. Decide: finish as a new case study or drop |

## Case study structure

Most case studies follow: intro line, **challenge / background**, **problem**,
**concept / process**, **solution**, **results**. Mission Control adds
**metrics, learnings, next steps, team, research, design, testing** and an
in-page section nav. This maps cleanly to markdown with frontmatter.

External links worth keeping (live demos and press):

- Webster: https://depmap.org/webster/#/ , https://broadinstitute.github.io/webster-umap-minisite/#/ , Cell Systems paper, Medium post
- MetMap: https://depmap.org/metmap/vis-app/index.html , Nature paper, Nature Visuals Medium post (cover story)

Both demos are hosted on Broad infrastructure. Record screen captures now.

## Visual system (current)

- **Typeface:** Halyard Display, weight 300 (light), for headings, body and
  nav. Served by Adobe Fonts through Squarespace's license; check whether your
  own Adobe CC plan covers web use before reusing it.
  - Body: letter-spacing .05em, line-height 1.4
  - Headings: letter-spacing .02em, line-height 1.4
  - Scale: h1 3.4rem, h2 2rem, h3 1.6rem, h4 1.2rem
- **Color:**
  - Accent gold `hsl(43 83% 47%)` ≈ `#DCA014` (hero highlight, logo dot)
  - Dark accent blue `hsl(218 43% 52%)` ≈ `#4F75BA`
  - Light gray `hsl(210 6% 93%)` ≈ `#EDEEEF` (footer band)
  - Black `hsl(0 0% 7%)` ≈ `#121212`, white background
- **Layout:** logo top left, text nav right (UX design, Visual design,
  Publications, About, LinkedIn icon), thin rule under header, centered
  content column, gray rules between sections, case study thumbnails as large
  stacked images (UX) or a 3-up row (dataviz).

## Issues to fix in the rebuild

- Empty meta descriptions on every page; About has the template default
  ("Use this space to add a brief description of your project.").
- Share image is the small logo (372×54).
- Images have empty `alt` text throughout (accessibility).
- Publications lives at `/new-page`.
- Typos: "metatstatic" (home, visual-design), "relationshiops", "eachother",
  "alway" (webster), "Project Lead's", "ontop", "nots", "interactive" for
  "interact with" (missioncontrol), stray backtick in "Analysis of User needs`".
- Copyright year 2025.
- Two different LinkedIn URLs: header uses `/in/andrew-tang-6b20a24/`, About
  uses `/in/andrew-designs/`. Pick one.
- Unused cart icon in the header.

## Images

Squarespace CDN images are reachable directly. `?format=original` returned
the same file as the default URL (WebP, ~790 KB for the Webster poster), so
the CDN copies are processed. Use them as a fallback; prefer your source
files (Figma exports, originals) for the rebuild.

## Content not on the site yet

From recent work (see the "Portfolio entries" doc):
Conference Capture, Reference Crawler, Family Tree, Sheets-it. These are
AI-assisted builds with live demos and change the story from
"design + data" toward "design + data + building".
