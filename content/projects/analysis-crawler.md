---
title: "Analysis Crawler"
eyebrow: "Verifiable text analysis in the browser"
summary: "Seeing what a set of documents claims, how well each claim is backed, and where sources agree."
category: "build"
tags: ["dataviz", "ai prototype"]
org: "Personal project"
year: 2026
order: 0.2
description: "Analysis Crawler: a browser tool that reads many documents and web pages and shows their claims, tone, trends and references, with every AI finding traced to a verbatim quote."
thumbnail: "/images/analysis-crawler/thumb.webp"
links:
  - { label: "Live app", url: "https://tangdru.github.io/crawler/" }
  - { label: "GitHub", url: "https://github.com/tangdru/crawler" }
grid: {"text": "5/21", "mtext": "1/9"}
---

## The problem

When you have several long documents or web pages, it is hard to see what they actually claim, how well each claim is backed, and where sources agree. AI summaries are fast but hard to trust unless you can check them against the text.

<figure><img src="/images/analysis-crawler/trends-crawl.webp" alt="The crawler moving through a sample news article, highlighting keywords and threading repeat mentions across paragraphs" width="1440" height="900" loading="lazy" decoding="async"></figure>

## What I did

- **Read a whole project of sources:** web addresses, PDF, Word, Excel, PowerPoint, EPUB, Markdown, CSV and pasted text. Projects save in the browser.
- **Designed five lenses** in reading order. Insights and UXR use Claude to sort claims into fact, opinion or prediction, rate how well each is backed, and synthesize research themes and pain points. Tone, Trends and References run locally on word lists, TF-IDF, k-means topics and citation patterns.
- **Made every AI finding verifiable:** each cites sentences with verbatim quotes, and the page drops any quote it cannot find word for word in the source. Clicking a quote opens it in context.
- **Gave the analysis a visible form:** an animated crawler moves through each source in turn, then a summary grows with each lens, with a scope picker and chart links back to the passage.
- **Exported the results** as CSV and zip: entities, sentences, terms, insights and research findings.
- **Kept costs and requests safe:** the Claude call shows its cost before each run and is rate-limited, and the page fetcher refuses internal addresses.

<figure><img src="/images/analysis-crawler/summary.webp" alt="Summary view: overview stats for three sources and a table of words, references and top keywords per source" width="1440" height="900" loading="lazy" decoding="async"></figure>

## Next

Letting readers add linked pages one level deep as new sources, with a picker and batch limits, and no endless crawling.
