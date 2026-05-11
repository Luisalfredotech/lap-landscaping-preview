# LAP Image Quality + Dimensional Polish Review (v6)

**Date:** 2026-05-08
**Scope:** Focused polish pass under [[01-Claude-Code/Phase-8-LAP-Prototype-Override]]. No structural rebuild. Local prototype only.
**Production touched:** None.

---

## 1. Files Changed

| File | Change |
|---|---|
| `index.html` | Updated `<img src>` paths for hero, all 6 service cards, about cluster, and projects mosaic to use re-cropped mockup tiles. |
| `styles.css` | Appended a v6 polish block: `image-rendering` directive, `object-position` helpers, per-service focal points, layered shadows on hero photo wrap / hero badge / service cards / trust cards / process / review cards / projects mosaic, ambient radial glow behind hero photo, frame-on-frame depth for about cluster, hover lift refinements. |
| `reference/photos/` | Re-cropped service tiles with correct row offsets (`svc-patio.png`, `svc-irrigation.png`, `svc-sod.png`, `svc-lighting.png`, `svc-drainage.png`, `svc-mulch.png`). New `about-crew.png` containing the actual LAP team-with-truck crop from the mockup. New `proj-tile-1..4.png` for the projects mosaic. |
| `LAP-Image-Depth-Polish-Review.md` | New (this file). |

No HTML structural changes. No new sections. No removed sections. Bilingual toggle, six service-page links, and JotForm outbound preserved.

---

## 2. Images Improved / Replaced

| Slot | v5 | v6 |
|---|---|---|
| Hero | `mockup-hero.png` (correct fire-pit dusk shot) | Same — kept as-is, added depth via shadow + ambient glow ring |
| Service · Paver Patios | wrong-row mockup crop | Correct mockup row 1 col 1 (paver patio with chair + planter) |
| Service · Irrigation | wrong-row mockup crop | Correct sprinkler image |
| Service · Sod | wrong-row mockup crop | Correct lush lawn |
| Service · Lighting | already correct | Re-cropped tighter, removes title bleed |
| Service · Drainage | already correct | Re-cropped tighter |
| Service · Mulch | wrong-row mockup crop | Correct mulched beds with shrubs |
| About cluster lead | mis-cropped strip | **Actual LAP team-with-truck photo** cropped from the mockup |
| About cluster secondary 1 & 2 | random Picsum | Mockup-cropped tiles for visual consistency |
| Projects mosaic | thin strip crops | Re-cropped 4 tiles from the projects section, larger/sharper |

---

## 3. Image Source / Status

All imagery now served from `reference/photos/` (no remote network required). Sources:

- **Mockup-derived (canonical):** hero, all 6 service tiles, about-crew lead, projects mosaic. Cropped from `reference/approved-homepage-mockup.png` with `sips --cropOffset`.
- **Picsum-derived (real photography, deterministic by seed):** about secondary fillers, plus inventory of stock fallbacks in `reference/photos/`.
- **Unsplash inventory:** earlier downloads kept for fallback availability.

⚠ **Still temporary placeholders.** Real LAP project photography is required to fully replace the mockup-derived tiles before any production migration. The mockup-derived tiles come from the approved design doc image so they are visually identical to the approved direction.

---

## 4. Service-to-Image Matching Status

✅ **All 6 service cards now show the correct category image.** Verified by inspecting each crop:

| Card | Image content |
|---|---|
| Paver Patios & Retaining Walls | Paver patio with seating + planter |
| Irrigation & Sprinkler Systems | Sprinkler watering green lawn |
| Sod Installation & Lawn Care | Lush green lawn |
| Landscape Lighting | Path lighting at dusk |
| Drainage & Grading Solutions | Drainage downspout + rocks |
| Mulch, Aeration & Pruning | Mulched beds with shrubs |

---

## 5. Crop / Centering Fixes

- `object-position` helpers added: `.obj-center`, `.obj-top`, `.obj-bottom`, `.obj-left`, `.obj-right`.
- Per-service focal points wired in CSS via `.svc-card[data-tile="X"] .svc-img img`. Default crop bias tuned per service so important subject stays in frame:
  - Patio: `center 60%` (drops focus toward foreground stones)
  - Irrigation: `center 40%` (lifts focus toward sprinkler arc)
  - Sod / Drainage: `center 55%`
  - Lighting / Mulch: `center 50%`
- Hero photo: `object-position: center 55%` — keeps fire pit and patio centered.
- About cluster lead (`.ac-1`): `center 35%` — keeps the LAP crew faces in frame.
- About secondary frames (`.ac-2`, `.ac-3`): `center` — neutral default.

---

## 6. 3D / Dimensional Effects Added

All compositor-friendly (transform, opacity, box-shadow). No new libraries. No heavy 3D.

- **Hero photo wrap** — three-stack box-shadow (inset highlight + 30/60 mid + 60/120 deep) for floating-card depth; faint inset border via `::after`.
- **Ambient warm glow** — radial gradient circle behind hero photo with blur, suggesting evening light bleed. `z-index: -1` so it sits behind the card.
- **Hero trust badge** — multi-layer shadow + 1 px brand-tone hairline outline.
- **Service cards** — inset highlight + soft mid + deep shadow stack. Hover deepens shadow without scale-rotation, keeping it premium not gimmicky.
- **Service image background** — soft cream gradient floor under each photo.
- **Trust cards** — same shadow stack pattern, lighter intensity.
- **About image cluster** — `.ac-2` and `.ac-3` get a 4-px cream "frame" via box-shadow ring around them, so the secondary images read as floating frames over the lead crew shot.
- **Projects mosaic** — deeper double shadow appropriate for dark green section background; subtle `translateY(-3px) scale(1.01)` on hover.
- **Process and review cards** — matching surface shadow stack.
- **Final CTA band** — slight `text-shadow` for legibility on radial gradient backdrop.
- **Hero ambient ring** — radial-gradient pseudo behind `.hero-art`.

Result: each surface reads layered against the page rather than flat, but the page still feels like a clean local-service site, not a tech/gaming product page.

---

## 7. Mobile Check Result

✅ Mobile layout reviewed (390 px screenshot captured). Findings:
- Sticky bottom CTA bar present and not overlapping content (page has 80 px bottom padding).
- Hero stacks single column. Image card insets balanced (8 px each side). Mini "hardscape specialists" badge and stat badge sized down — no crowding.
- Trust row stacks 1-col. Each card readable.
- Service grid 1-col with images at clean 16:11 ratio. Card body padding consistent.
- About cluster height set to 460 px on mobile — the layered images shrink proportionally and the floating "Local Crew" badge remains visible.
- Projects mosaic 2-col on mobile with `pm-1` taking 2 rows.
- FAQ accordion expands inline without horizontal jump.
- Final CTA band collapses to 1-col stack.
- Footer 1-col stack.
- Bilingual `util-bilingual` pill hidden ≤1024 px so utility bar doesn't crowd.

No horizontal overflow, no clipped text, no oversized images.

---

## 8. Bilingual Toggle Status

✅ Working. Both EN | ES toggles (utility bar + footer) functional. Dictionary covers utility bar, header nav, hero, trust row, services, about, projects, process, reviews, FAQ, CTA band, footer, mobile sticky CTA, plus inline `data-en` / `data-es` on service pages. localStorage persistence + `navigator.language` autodetect intact.

---

## 9. Service Page Link Status

✅ All 6 service pages reachable from home services grid + footer Services column. Pages already updated in v3/v5 with real LAP logo image, refreshed nav (Services · Our Work · About LAP · Reviews · FAQ · Contact), unified "Get a Free Estimate" CTA copy, and JotForm outbound `target="_blank" rel="noopener"`.

---

## 10. What Still Needs Real LAP Assets

1. Real LAP project photography to replace mockup-cropped tiles for: hero, all 6 services, about cluster (lead + secondary frames), projects mosaic (4 tiles). High-res JPG/PNG, ≥1200 px wide, with horizontal aspect ratios for service tiles and mosaic.
2. Real LAP team photo (the mockup's crew-with-truck shot is canonical visual direction; final must be an actual LAP team photo).
3. Real customer testimonials with consent.
4. Trust stat numbers (years, projects, reviews count).
5. License number(s) for trust signal.
6. Hours of operation.
7. Decision on canonical contact email (typo fix on privacy page).
8. Native Spanish review pass on `script.js` ES dictionary and inline `data-es` strings.
9. Optional: brand color tokens if the approved palette differs from current `#1F3D2B` / `#C9A876`.

---

## 11. Screenshot Paths

`03-Clients/LAP-Landscaping/design-prototype/review-screenshots-v6/`:
- `desktop-1440-fullpage.png`
- `tablet-768-fullpage.png`
- `mobile-390-fullpage.png`
- `desktop-service-page.png` (Paver Patios)

---

## 12. Production Status — Confirmed Untouched

- ❌ No WordPress edits.
- ❌ No GoDaddy account changes.
- ❌ No DNS or hosting changes.
- ❌ No JotForm form structure changes (linked outbound only).
- ❌ No plugin, theme, or security changes.
- ❌ No deploys.
- ❌ No installs.
- ❌ No agents/subagents.
- ❌ No commits made.

All work isolated to `03-Clients/LAP-Landscaping/design-prototype/`.
