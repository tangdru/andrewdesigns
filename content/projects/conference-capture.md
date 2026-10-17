---
title: "Conference Capture"
eyebrow: "Mobile capture app with AI enhancement"
summary: "Turning a talk’s scattered notes, slide photos and audio into a shareable outline."
category: "build"
tags: ["product design", "ai prototype"]
org: "Personal project, in progress"
year: 2026
order: 0.1
description: "Conference Capture: a mobile-first app, designed with a team of AI design agents, that turns conference notes, slide photos and audio into a presentation outline."
thumbnail: "/images/conference-capture/thumb.webp"
links:
  - { label: "Live prototype", url: "https://tangdru.github.io/conference-capture/" }
  - { label: "GitHub", url: "https://github.com/tangdru/conference-capture" }
grid: {"text": "5/21", "mtext": "1/9"}
---

## The problem

After a talk I leave with three half-finished things: scattered notes, slide photos I never sort, and a voice memo I never replay. The value fades within 48 hours, and sharing it with my team means rebuilding a deck from memory.

<figure><img src="/images/conference-capture/capture-screens.webp" alt="Three capture screens: an empty session, an active timeline of notes and slide photos, and note input with the keyboard open" width="1227" height="904" loading="lazy" decoding="async"></figure>

## What I did

- **Directed the design phase** as executive design director, working with a team of AI design agents: a four-version brief, taste profile, competitive analysis, five principles and a 16-task plan.
- **Wrote five inclusive personas**, including a deaf product manager and a one-handed stress case, because one-handed use in a dark room is the default conference condition.
- **Built the foundation:** a dark-first token system with one teal accent, Atkinson Hyperlegible type, a navigation model and the capture screen. Specs were pushed to Figma and edits synced back.
- **Shipped a React prototype:** session list, a timeline of notes and photos, a multi-shot camera viewfinder, and record, pause and resume.

<div class="row cols-2">

<div>

<figure><img src="/images/conference-capture/capture-screen-active.webp" alt="Capture timeline for a talk, alternating typed notes and slide photos with timestamps" width="393" height="852" loading="lazy" decoding="async"></figure>

</div>

<div>

<figure><img src="/images/conference-capture/camera-viewfinder-multishot.webp" alt="Multi-shot camera viewfinder with three captured slide thumbnails and a shutter button" width="393" height="852" loading="lazy" decoding="async"></figure>

</div>

</div>

## The AI layer

- **Transcription on the device:** Whisper transcribes audio in 30-second chunks, stored with Supabase.
- **Enhancement:** a Claude pass reorders the timeline into a presentation outline.
- **Safe to trust:** every split transcript segment is checked on the server as an exact substring of the original, so nothing is reworded. A lock stops double runs, and a first real-device test drove several interface fixes.

<figure><img src="/images/conference-capture/camera-landscape-full-info.webp" alt="Landscape camera layout with the slide frame centered, thumbnails on the left and the shutter on the right" width="852" height="393" loading="lazy" decoding="async"></figure>

## Status

Six of 16 design tasks are complete. Review and export screens are still being designed, and a native iOS build is planned.
