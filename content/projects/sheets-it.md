---
title: "Sheets-it"
eyebrow: "Practice companion for chord charts"
summary: "One screen for the chart, the tuner, the metronome and honest feedback on timing."
category: "build"
tags: ["product design", "prototype"]
org: "Personal project"
year: 2026
order: 0.3
description: "Sheets-it: a browser practice companion that imports chord charts in many formats, computes fingerings for ukulele, piano and saxophone, and scores your strumming against the beat."
thumbnail: "/images/sheets-it/thumb.webp"
links:
  - { label: "Live app", url: "https://tangdru.github.io/ukulele-coach/" }
  - { label: "GitHub", url: "https://github.com/tangdru/ukulele-coach" }
grid: {"text": "5/21", "mtext": "1/9"}
---

## The problem

Practicing a song from a chord chart means juggling a paper or PDF chart, a separate tuner and metronome, and no honest feedback on whether you are in time. Most charts also arrive in formats a practice tool cannot read.

<figure><img src="/images/sheets-it/chart.webp" alt="Chord chart for “You Are My Sunshine” filling the screen, with Learn, Practice and Perform controls and a thin icon rail" width="820" height="640" loading="lazy" decoding="async"></figure>

## What I did

- **Made the chart the interface:** it fills the screen, and a thin icon rail holds songs, play, tuner and history. No build step and no account.
- **Brought songs in from anywhere:** ChordPro text, PDF and Word lead sheets (rebuilt from text positions, then shown for review), iReal Pro links, and MusicXML rendered as staff notation.
- **Computed chord fingerings** instead of hand-typing them, for ukulele, piano and saxophone.
- **Designed a Learn, Practice, Perform progression:** a metronome with a backing strum, microphone scoring of each strum against the beat, and a mode that follows your own pace.
- **Graded each session** from A to F and flagged the lines missed most often, alongside a tuner, key detection and zoom.
- **Shared a song library** across devices, with a local fallback, backed by about 22 automated browser tests, several using synthesized audio.

<figure><img src="/images/sheets-it/chord-diagram.webp" alt="Tapping a chord opens its ukulele fingering diagram over the chart" width="820" height="640" loading="lazy" decoding="async"></figure>

## Deliberate limits

It gives timing feedback only, not pitch accuracy, and it does not look up songs by name.
