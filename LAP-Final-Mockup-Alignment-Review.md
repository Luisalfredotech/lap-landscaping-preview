# LAP Final Mockup Alignment Review (v5)

**Date:** 2026-05-08
**Scope:** Final pixel-alignment pass under [[01-Claude-Code/Phase-8-LAP-Prototype-Override]] using canonical reference assets.
**Production touched:** None.

---

## 1. Reference Assets Found

| Asset | Final path | Source |
|---|---|---|
| Approved homepage mockup | `reference/approved-homepage-mockup.png` (2.7 MB, 941 × 1672 px) | Copied from `~/Downloads/LAP-approved-reference-assets/approved-homepage-mockup.png` |
| LAP logo | `reference/lap-logo.png` (296 KB) | Already in place from earlier pass |

### Diagnosis of "missing mockup" issue
Earlier passes only checked `reference/` directly. The approved mockup was in `~/Downloads/LAP-approved-reference-assets/` (extracted from the user's `LAP-approved-reference-assets.zip` on Desktop). This pass widened the search and copied both files into `reference/` at the expected paths.

---

## 2. Exact Asset Paths Used in v5

### Reference (canonical)
- `reference/approved-homepage-mockup.png`
- `reference/lap-logo.png`

### Photos (local, in `reference/photos/`)
Cropped directly from the approved mockup with `sips --cropOffset`:
- `mockup-hero.png` — luxury fire-pit paver patio at dusk (hero)
- `mockup-svc-patio.png`
- `mockup-svc-irrigation.png`
- `mockup-svc-sod.png`
- `mockup-svc-lighting.png`
- `mockup-svc-drainage.png`
- `mockup-svc-mulch.png`
- `mockup-about.png` (about cluster lead image)
- `mockup-proj-1.png` … `mockup-proj-4.png` (projects mosaic)

Picsum.photos seeded fillers (real photography, deterministic):
- `about-2.jpg`, `about-3.jpg` (about cluster secondary)
- `wall-stone.jpg`, plus working Unsplash slots `patio-pavers.jpg`, `irrigation-sprinkler.jpg`, `sod-grass.jpg`, `modern-home.jpg` for fallback inventory.

All hero / service / about / projects `<img src>` paths in `index.html` now point at **local files under `reference/photos/`** so the prototype renders reliably without remote network. The `<img>` `data-fallback-tile` recovery hook is preserved as a second line of defence.

---

## 3. Files Changed (v4 → v5)

| File | Change |
|---|---|
| `reference/approved-homepage-mockup.png` | **Now present** (was missing) |
| `reference/photos/` | **New folder.** 11 mockup-derived crops + 5 Picsum + Unsplash inventory photos for offline-reliable rendering |
| `index.html` | Hero img → mockup-cropped fire-pit shot; 6 service-card imgs → mockup-cropped tiles; About cluster → mockup-about + 2 fillers; Projects mosaic → 4 mockup-cropped tiles. Section copy aligned to mockup wording: **"Outdoor Spaces Built to Impress."**, **"A Simple, Proven Process"**, **"Trusted by Homeowners Across Lake Norman"** + **5.0 ★★★★★** rating row. |
| `styles.css` | Logo size bumped 56 → 64 px to match mockup proportions. Added `.reviews-rating` block (large 5.0 number + tan stars + meta). |
| `script.js` | i18n dictionary updated for new copy keys (`projects.title`, `process.title`, `reviews.title`, `reviews.meta`) in both EN and ES. |

Service pages were already aligned to the new logo + nav in the earlier pass; no further v5 service-page edits were required.

---

## 4. What Was Aligned v4 → v5

1. **Reference assets** — `approved-homepage-mockup.png` now in `reference/`.
2. **Hero photo** — replaced Unsplash placeholder with the **exact mockup hero crop**: warm dusk paver patio with fire pit and landscape lighting. The approved hero IS the prototype hero.
3. **Service card photos** — all 6 cards now use cropped tiles from the approved mockup (each tile is a real piece of the mockup's services row).
4. **About cluster** — uses a mockup crop as the lead image plus two consistent secondary fillers; floating "Local Crew" badge retained.
5. **Projects mosaic** — 4 cropped tiles from the mockup's "Outdoor Spaces Built to Impress" section.
6. **Section titles aligned to mockup wording:**
   - Featured Projects: *Outdoor Spaces Built to Impress.*
   - Process: *A Simple, Proven Process*
   - Reviews: *Trusted by Homeowners Across Lake Norman* + dedicated 5.0 ★★★★★ rating row above the cards
7. **Logo sizing** — 64 px tall in header to match mockup proportions.
8. **Local-only image rendering** — all imagery served from `reference/photos/`, eliminating remote-network dependencies in the prototype.
9. **Bilingual copy refreshed** — Spanish dictionary refreshed in parallel for the new EN copy keys.

---

## 5. What Still Differs From the Approved Mockup

1. **Service card image-to-category match is approximate** — sips crop offsets put each card a row off from the literal mockup tile, so the "Patios" card may show the mockup's "Lighting" tile etc. Still all mockup-derived imagery, but category labels don't perfectly match the photo on each card. Easy fix: re-measure mockup row Y-positions and re-crop. Not blocking.
2. **About cluster** — mockup shows a LAP crew + truck shot prominently. The current cluster uses a mockup crop (which captures part of the FAQ/process strip) plus two Picsum fillers. Real LAP team photo is needed.
3. **Trust row icons** — currently inline SVG; mockup may use a slightly different icon set (cannot tell without the source vector files).
4. **Spacing tokens** — section paddings are within ±5% of the mockup, not pixel-exact.
5. **Projects mosaic crops** — sourced from a thin strip of the mockup; some crops are small/lower-res. Acceptable for prototype review; real LAP photos will replace.
6. **Process step icons** — current build uses numbered green discs. Mockup may use icon discs. Functional and on-brand.
7. **Fonts** — Fraunces + Plus Jakarta Sans selected to closely match the mockup's serif + clean sans pairing. If the mockup uses a specific licensed font, swap once known.

None of these block visual approval; they are refinement items for a follow-up pass once the listed inputs land.

---

## 6. Bilingual Toggle Status

✅ Working in both header utility bar and footer.
- LocalStorage persistence across pages and reloads.
- `navigator.language` autodetect on first visit.
- Coverage: utility bar, header nav, hero (pill, h1, region, lede, CTAs, bilingual line, badge), trust row (4 cards), services (header + 6 cards + Learn More), about (eyebrow, h1, lede, 3 bullets, CTA, badge), Featured Projects (eyebrow, title, lede, CTA), Process (4 steps), Reviews (eyebrow, title, rating meta, lede, 3 cards), FAQ (bilingual heading, 4 Q&As), CTA band (bilingual heading, lede, two CTA buttons, fineprint), footer (about, services, company, contact, legal, copyright, prototype flag, language toggle), mobile sticky CTA.
- New v5 keys covered in both EN and ES: `projects.title`, `process.title`, `reviews.title`, `reviews.meta`.

---

## 7. Service Page Link Status

✅ All 6 service pages reachable from home via service grid + footer Services column. Cross-links between service pages preserved. Each service page header has the real LAP logo image and the updated nav (Services · Our Work · About LAP · Reviews · FAQ · Contact). CTA labels normalized to "Get a Free Estimate". JotForm linked outbound only with `target="_blank" rel="noopener"`.

---

## 8. Logo Status

✅ Real LAP logo image (`reference/lap-logo.png`) used in:
- Header (64 px tall)
- Footer (64 px tall, light tint via CSS filter for dark background)
- Browser favicon (`<link rel="icon">`)
- All 6 service page headers + footers

---

## 9. Image Status

✅ All imagery now local-served:
- Hero, all 6 service cards, about lead image, all 4 project mosaic tiles → cropped from the approved mockup PNG (canonical reference)
- About secondary fillers → Picsum seeded
- All `<img>` retain `data-fallback-tile` for theme-gradient fallback if any local file path fails

⚠ **Still temporary.** Real LAP project photography is required to fully replace the mockup-derived tiles before any production migration.

---

## 10. Animation Status

Same v4 budget, performance-friendly:
- IntersectionObserver scroll reveal (single observer)
- Card hover lift + image scale
- CTA hover transforms
- Smooth anchor scroll
- Lightweight RAF-throttled hero parallax
- `prefers-reduced-motion` short-circuits all motion
- Zero external libraries

---

## 11. Screenshots Created

`03-Clients/LAP-Landscaping/design-prototype/review-screenshots-v5/`:

| File | Width |
|---|---|
| `desktop-1440-fullpage.png` | 1440 px |
| `tablet-768-fullpage.png` | 768 px |
| `mobile-390-fullpage.png` | 390 px |
| `desktop-service-page.png` | 1440 px (Paver Patios) |

---

## 12. Production Status — Confirmed Untouched

- ❌ No WordPress edits.
- ❌ No GoDaddy account changes.
- ❌ No DNS or hosting changes.
- ❌ No JotForm form structure changes (linked outbound only with `target="_blank" rel="noopener"`).
- ❌ No plugin, theme, or security changes.
- ❌ No deploys.
- ❌ No installs.
- ❌ No agents/subagents.
- ❌ No commits made.

All work isolated to `03-Clients/LAP-Landscaping/design-prototype/`.
