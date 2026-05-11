# LAP v7 Visual + SEO Polish Review

**Date:** 2026-05-08
**Scope:** Targeted polish pass under [[01-Claude-Code/Phase-8-LAP-Prototype-Override]]. Local prototype only.
**Production touched:** None.

---

## What Was Fixed

### Featured Projects section
- Replaced mosaic tiles. v6 used tiny mockup-cropped strips with visible card-title bleed. v7 uses clean local landscape photos (`modern-home.jpg` garden walkway, `patio-pavers.jpg`, `irrigation-sprinkler.jpg`, `sod-grass.jpg`). No more bleed. Mosaic now reads as a finished premium projects showcase.

### Footer logo
- Removed the broken CSS color-filter on the dark footer logo (was rendering garbled).
- Wrapped footer logo in a cream-bg rounded pill (`.ftr-logo-pill`) so the original green-on-white LAP logo reads cleanly against the dark footer. Layered shadow for depth.

### Service cards
- Re-cropped all 6 service tiles from the approved mockup at 285×115 px (vs v5's 95 px).
- Tuned `object-position` per service so each tile shows the relevant subject without title-text bleed at the bottom of the crop.
- Service-to-image category matching verified: Patios→paver patio, Irrigation→sprinkler, Sod→lawn, Lighting→dusk path lights, Drainage→downspout & rocks, Mulch→mulched beds.

### About cluster
- Lead image (`.ac-1`) is the **actual LAP team-with-truck crop** from the mockup.
- Secondary frames (`.ac-2`, `.ac-3`) swapped to clean local photos (paver/lawn + sod) — no more title-text bleed.

### Image quality / consistency
- All hero, service, about, and project imagery now serves locally from `reference/photos/` — no remote network failures during render.
- `image-rendering: -webkit-optimize-contrast` on `<img>` for sharper downscaling.
- `object-position` helpers added (`.obj-center`, `.obj-top`, `.obj-bottom`, `.obj-left`, `.obj-right`) for explicit focal points.

---

## SEO + Content Improvements

### Image alt-text rewritten with local + service keywords
| Element | New alt text |
|---|---|
| Hero | "Premium custom paver patio with fire pit and warm landscape lighting at dusk · LAP Landscaping, Lake Norman NC" |
| Service · Patio | "Custom paver patio and retaining wall installation · Mooresville & Troutman NC" |
| Service · Irrigation | "Smart sprinkler and irrigation system over green lawn · Lake Norman, NC" |
| Service · Sod | "Fresh sod installation and lawn care · Troutman, Iredell County NC" |
| Service · Lighting | "Landscape lighting along stone walkway at dusk · Lake Norman NC" |
| Service · Drainage | "Drainage and final grading solution with rock bed · Iredell County NC" |
| Service · Mulch | "Mulched garden beds with shrubs and seasonal pruning · Mooresville NC" |
| About lead | "LAP Landscaping crew on-site with company truck · Troutman, NC" |
| About frame 1 / 2 | "Recent paver patio build by LAP Landscaping" / "Recent landscape lighting install by LAP Landscaping" |
| Projects mosaic | Per-tile alt with locale (Lake Norman / Mooresville / Iredell County / Troutman) |

### Heading hierarchy verified
- One H1 on home: *Custom Landscaping & Hardscape Solutions for Beautiful Outdoor Living*
- H2 per section: Complete Outdoor Solutions, Built on Integrity / Focused on Quality / Proudly Local, Outdoor Spaces Built to Impress, A Simple Proven Process, Trusted by Homeowners Across Lake Norman, Frequently Asked Questions, Ready to Elevate Your Outdoor Space
- Service cards use H3 for service title.
- Order is logical: hero → trust → services → about → projects → process → reviews → faq → cta → footer.

### Local SEO signals
- Service area cities (Troutman, Mooresville, Lake Norman, Iredell County) appear naturally in: utility bar, hero pill, hero h1 region line, service card alt text, project mosaic alt text, FAQ answers, footer address.
- No keyword stuffing. Each city/region appears in semantically relevant context.

### Image filenames are descriptive
- `mockup-hero.png`, `svc-patio.png`, `svc-irrigation.png`, `svc-sod.png`, `svc-lighting.png`, `svc-drainage.png`, `svc-mulch.png`, `about-crew.png`. Descriptive of subject for indexing when migrated to production.

---

## Visual Issues Improved

| v6 Issue | v7 Fix |
|---|---|
| Featured Projects mosaic looked broken/cropped | Replaced with clean local photos |
| Footer logo blank / distorted | Cream-bg rounded pill with original logo |
| Some service cards had subtle mockup-card title bleed at bottom | Re-cropped + biased `object-position` upward |
| About cluster secondary frames showed title bleed | Swapped to clean local photos |
| Service-image-to-category mismatch on some cards | Cropped from correct mockup row, all 6 verified |

---

## Remaining Issues (non-blocking)

1. About secondary frames + projects mosaic use stock landscape photos, not authentic LAP project shots. Real client photos still needed before launch.
2. Trust-stat numbers (`[X]+`) still placeholders pending client confirmation.
3. Reviews are clearly-labeled placeholder testimonials.
4. Wisteria archway photo (used for projects pm-1) is gorgeous garden but more horticultural than hardscape-focused. Replace with a real LAP outdoor-living shot when delivered.

---

## Files Changed

| File | Notes |
|---|---|
| `index.html` | Updated img src + alt text for all service cards, about cluster, projects mosaic, hero. Wrapped footer logo in `.ftr-logo-pill`. |
| `styles.css` | Added `.ftr-logo-pill` styling. Adjusted service-card `object-position` to bias upward. Removed conflicting `.ac-2 / .ac-3 object-position`. |
| `reference/photos/svc-*.png` | All 6 service tiles re-cropped at 285×115 px from corrected mockup row offsets. |
| `LAP-v7-Visual-and-SEO-Polish-Review.md` | New (this file). |

No structural HTML changes, no removed sections, bilingual EN/ES toggle preserved, all 6 service-page links preserved, JotForm outbound preserved.

---

## Screenshot Paths

`03-Clients/LAP-Landscaping/design-prototype/review-screenshots-v7/`:
- `desktop-1440-fullpage.png`
- `mobile-390-fullpage.png`

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
