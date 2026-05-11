# LAP v7.1 Final Polish Review

**Date:** 2026-05-08
**Scope:** Tiny v7 → v7.1 polish under [[01-Claude-Code/Phase-8-LAP-Prototype-Override]]. Local prototype only.
**Production touched:** None.

---

## What Changed v7 → v7.1

### 1. About cluster — repetition fixed
- `.ac-3` swapped from `sod-grass.jpg` (grass) to `mockup-hero.png` (fire-pit dusk patio).
- Cluster now reads: **LAP crew + paver scene + outdoor-living/lighting scene** — visual variety restored, no more grass-on-grass repetition.

### 2. Featured Projects — top-left tile re-themed
- `.pm-1` (the tall mosaic tile) swapped from `modern-home.jpg` (wisteria archway / horticultural) to `mockup-hero.png` (luxury fire-pit paver patio at dusk).
- "Outdoor Spaces Built to Impress" section now leads with a hardscape/outdoor-living anchor instead of a garden archway. Section narrative tightened.

### 3. Service-card crops — title bleed removed
- All 6 service tiles re-cropped from 285×115 px to **285×100 px** with the same Y offsets.
- The 15 px reduction trims any residual mockup-card-title text from the bottom edge of each crop. Tile content is purely the photographic image now.

---

## Were the Two Minor Issues Fixed?

| QA-flagged issue | v7.1 status |
|---|---|
| About cluster repetitive grass-on-grass | ✅ Fixed — cluster now mixes crew + paver + outdoor-living |
| Projects top-left wisteria/garden tile | ✅ Fixed — replaced with luxury fire-pit hardscape image |

---

## Service-Card Title Bleed Status

✅ **Removed.** Re-cropped at 100 px height. No title-text band in any of the 6 service-tile images. Verified at standard viewport zoom.

---

## Files Changed

| File | Change |
|---|---|
| `index.html` | `<img class="ac-img ac-3" src=…>` swapped to `mockup-hero.png` with new alt; `<img class="pm pm-1" src=…>` swapped to `mockup-hero.png` with new alt |
| `reference/photos/svc-patio.png` | Re-cropped 285×100 |
| `reference/photos/svc-irrigation.png` | Re-cropped 285×100 |
| `reference/photos/svc-sod.png` | Re-cropped 285×100 |
| `reference/photos/svc-lighting.png` | Re-cropped 285×100 |
| `reference/photos/svc-drainage.png` | Re-cropped 285×100 |
| `reference/photos/svc-mulch.png` | Re-cropped 285×100 |
| `LAP-v7-1-Final-Polish-Review.md` | New (this file) |

No structural HTML changes. No CSS changes. No new sections, no removed sections. Bilingual EN/ES toggle preserved. All 6 service-page links preserved. JotForm outbound only (`target="_blank" rel="noopener"`).

---

## Screenshot Paths

`03-Clients/LAP-Landscaping/design-prototype/review-screenshots-v7-1/`:
- `desktop-1440-fullpage.png` (1440 × 7900 px full page)
- `mobile-390-fullpage.png` (390 × 12200 px full page)

---

## Ready to Commit?

**Yes.** v7.1 resolves the two non-blocking items raised in the v7 QA report and tightens service crops. Visual layout is structurally complete, image-to-category matching is correct, footer logo is readable, mosaic narrative is hardscape-themed, EN/ES toggle works, all 6 service pages are linked, JotForm linked outbound only. Ready for final visual approval and a commit when you give the go-ahead.

---

## Production Status — Confirmed Untouched

- ❌ No WordPress edits.
- ❌ No GoDaddy / DNS / hosting changes.
- ❌ No JotForm form structure changes (linked outbound only).
- ❌ No plugin / theme / security changes.
- ❌ No deploys.
- ❌ No installs.
- ❌ No agents/subagents.
- ❌ No commits made.
