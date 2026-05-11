# LAP Prototype QA Review

**Date:** 2026-05-08
**Scope:** Local visual prototype QA pass under user-approved [[01-Claude-Code/Phase-8-LAP-Prototype-Override]].
**Production touched:** None.

---

## 1. Screenshot Files Created

All under `03-Clients/LAP-Landscaping/design-prototype/review-screenshots/`:

| File | Width | Render height | File size |
|---|---|---|---|
| `desktop-1440-fullpage.png` | 1440 px | 7000 px window (full page) | 2.6 MB |
| `tablet-768-fullpage.png` | 768 px | 8500 px window (full page) | 2.0 MB |
| `mobile-390-fullpage.png` | 390 px | 11000 px window (full page) | 2.0 MB |

Captured headless via Chrome (already installed locally). No new tools installed. No external upload.

---

## 2. What Was Fixed in This Pass

1. **Removed Inter font** (violated Frontend Architect System Prompt). Replaced everywhere — `index.html` `<link>` tag and `styles.css` font-family stacks.
2. **New body font: Plus Jakarta Sans.** Modern humanist geometric sans. Distinct from Inter. Pairs warm-with-warm against Fraunces' soft serif terminals — better fit for a homeowner-facing local-service brand than the clinical Inter/Helvetica feel.
3. **Mobile hero polish:** reduced crowding by tightening hero card layout — main image card insets balanced (`8px` left/right), photo `min-height` reduced to 280px, mini-card font/padding shrunk, stat card narrower, hero CTAs allowed to flex `1 1 auto` so both buttons stay full-width and stack cleanly without overflow.
4. **Hero gap on mobile** increased to 32px between copy and image to avoid hero copy crashing into the image card on small screens.
5. **`LAP-Visual-Concept.md` § 3 updated** with new font pairing rationale and alternatives considered (Manrope/Outfit/Sora/DM Sans).

CTA buttons confirmed clear and lead-focused:
- Hero primary: **"Get a Free Estimate"** (deep-green pill, large)
- Hero secondary: **"View Our Work →"** (ghost outline)
- Repeated 3× per page (hero, mid, final CTA band).
- Final CTA: **"Open the estimate form →"** (tan, full-width) routes to JotForm with `target="_blank" rel="noopener"`. Form itself untouched.

Service cards confirmed visually strong:
- 3-col desktop, 2-col tablet, 1-col mobile.
- Per-service color theming (patio = tan/brown, irrigation = blue, sod = green, lighting = dark with warm glow, drainage = forest, lawn = sage).
- Hover lift `translateY(-6px)` + shadow ramp + image scale `1.06` — subtle, GPU-friendly transform/opacity only.

Animation budget confirmed light:
- Scroll-reveal via single `IntersectionObserver` (not GSAP, no library).
- Hover transitions: `transform` and `box-shadow` only (compositor-friendly).
- Respects `prefers-reduced-motion: reduce` — disables all reveal + hover transforms.
- No autoplay video, no parallax, no scroll-jacking.

---

## 3. Visual Review by Breakpoint

### Desktop 1440 — clean, premium, on-brand
- Hero: dual-column with layered image card, floating "100%" stat badge, mini hardscape badge. Headline reads strong with the Fraunces serif. Plus Jakarta Sans subhead pairs cleanly.
- Trust strip stats render across 4 columns with `[X]+` placeholders clearly labeled (intentional — pending client numbers).
- Services grid 3 × 2 reads scannable; tile colors differentiate categories without photo assets.
- About section: portrait-orientation green photo block + floating badge + numbered list — premium feel.
- Process: 4-step horizontal with dotted connector line — feels intentional and minimal.
- Service landings (Hardscaping, Irrigation, Sod) alternate left/right with check-bullets and CTA — visually strong.
- Gallery masonry (1 tall + 1 wide) breaks grid monotony.
- Reviews 3-up cards, FAQ accordion with open state, final green CTA card with form button.
- Footer: 4-col, dark green base, brand mark + columns + meta line. No collisions.

### Tablet 768 — stacks predictably
- Hero collapses to single column at this width (effective viewport with scrollbar slips under 760 px breakpoint). Stacked hero gives the photo card more breathing room — acceptable.
- Services drop to 2-col, process to 2 × 2, reviews to 1-col stack.
- Final CTA card: still 2-col (form right of copy). Reads well.
- No overlapping elements, no horizontal overflow.

### Mobile 390 — clean single column, sticky CTA visible
- All sections single-column.
- Sticky bottom CTA bar shows "Call" + "Free Estimate" — keeps lead capture one tap away.
- Hero image card no longer crowds; mini badge and stat card sized down.
- Service cards full-width, tile labels readable.
- Gallery becomes 2-col with `gtile-wide` spanning both cols — works.
- FAQ accordion expands inline with no horizontal jump.

No broken layouts, overflows, or text clipping spotted at any of the three sizes.

---

## 4. Remaining Visual Issues (non-blocking)

| # | Issue | Status |
|---|---|---|
| 1 | Hero, gallery, about, service-landing imagery is **CSS-styled placeholder gradients**, not real photos. Visually intentional but missing brand authenticity. | Awaits photo asset drop. |
| 2 | Trust strip stats show `[X]+` placeholders. Look like placeholders by design — but unbranded numbers will reduce trust at launch. | Awaits client numbers. |
| 3 | Reviews are clearly labeled placeholder cards. Real testimonials needed. | Awaits client. |
| 4 | No logo file — using wordmark + small SVG mark. Acceptable for prototype. | Awaits logo. |
| 5 | Hero "family-run since [year TBC]" eyebrow shows literal placeholder. | Awaits client. |
| 6 | Footer privacy/SMS-terms link to `#legal` anchor only (single-page prototype). When migrated, must point at real WP routes preserving current legal text verbatim. | Migration task. |

None of these are bugs in the prototype — all are content gaps already flagged in `LAP-Content-Map.md`.

---

## 5. Missing Client Inputs (decision-blocking before launch)

1. ⚠ Email typo confirmation — `service@laplandscapiing.com` (extra "i") on privacy page vs correct `service@laplandscaping.com` elsewhere.
2. ⚠ Real customer reviews with consent (currently zero on `/reviews`).
3. ⚠ Project photos by category (≥ 3 each: patio, sod, irrigation, lighting, drainage, walls).
4. ⚠ Trust stat numbers — years in business, projects completed, review count.
5. ⚠ Service-area cities and radius (Troutman + Mooresville + Lake Norman assumed; needs confirmation).
6. ⚠ Hours of operation.
7. ⚠ License number(s) — optional but powerful trust signal.
8. ⚠ Logo file (vector preferred — SVG/EPS/AI).
9. ⚠ Owner / team photo + short bio for About.
10. ⚠ Confirmed canonical "Free Estimate" destination (currently routed to JotForm `261096626914059` per project brief).

---

## 6. Ready for Visual Approval?

**Yes, ready for visual approval as a prototype.**

The design is:
- Original (not a 1:1 Dribbble copy)
- Lead-focused (CTAs repeated 3× with clear primary action)
- SEO-structured (geo-keyworded H1/H2, per-service landing blocks, semantic HTML, alt-text-ready imagery, FAQ block)
- Image-heavy in structure (placeholder tiles ready for real photos)
- Responsive across desktop / tablet / mobile
- Accessible: semantic HTML, single H1, button affordances, reduced-motion respect, sufficient color contrast on body/CTA pairings
- Performance-conscious: no JS framework, single observer, CSS-only motion, preconnect to Google Fonts, no third-party tracking, no heavy images

Visual look-and-feel decision (font pairing, palette, layout strategy, section flow) is ready for your sign-off. Content authenticity (photos + real reviews + stats) is the next gate.

---

## 7. Production Status — Confirmed Untouched

- ❌ No WordPress edits.
- ❌ No GoDaddy account changes.
- ❌ No DNS or hosting changes.
- ❌ No JotForm form structure changes (linked outbound only with `target="_blank" rel="noopener"`).
- ❌ No plugin, theme, or security changes.
- ❌ No deploys.
- ❌ No new tools installed (Chrome already present locally).
- ❌ No agents/subagents spawned.
- ❌ No broad repo exploration outside `03-Clients/LAP-Landscaping/design-prototype/`.

Only files inside the prototype folder were created/modified, plus the override note at `01-Claude-Code/Phase-8-LAP-Prototype-Override.md` and a minimal additive update to `INDEX.md` so the override + QA review are discoverable.

---

## 8. Files Changed This Pass

```
01-Claude-Code/Phase-8-LAP-Prototype-Override.md                  (new)
INDEX.md                                                          (additive, 4 lines)
03-Clients/LAP-Landscaping/design-prototype/index.html            (font link swap)
03-Clients/LAP-Landscaping/design-prototype/styles.css            (font swap + mobile hero polish)
03-Clients/LAP-Landscaping/design-prototype/LAP-Visual-Concept.md (font rationale updated)
03-Clients/LAP-Landscaping/design-prototype/LAP-Prototype-QA-Review.md (new — this file)
03-Clients/LAP-Landscaping/design-prototype/review-screenshots/desktop-1440-fullpage.png (new)
03-Clients/LAP-Landscaping/design-prototype/review-screenshots/tablet-768-fullpage.png  (new)
03-Clients/LAP-Landscaping/design-prototype/review-screenshots/mobile-390-fullpage.png  (new)
```

No commits made. Awaiting explicit user approval before any commit.
