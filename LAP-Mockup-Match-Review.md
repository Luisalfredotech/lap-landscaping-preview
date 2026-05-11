# LAP Mockup Match Review (v2)

**Date:** 2026-05-08
**Scope:** Local visual prototype update under [[01-Claude-Code/Phase-8-LAP-Prototype-Override]] — make the homepage match the approved mockup direction (premium, image-rich, lead-focused, bilingual EN/ES).
**Production touched:** None.

---

## 1. Files Changed / Created

### Updated
- `index.html` — full rewrite of homepage with bilingual `data-i18n` attributes, real Unsplash imagery, language toggle in utility bar, "Hablamos Español" trust messaging, six service cards now linking to dedicated service pages.
- `styles.css` — adapted to host real `<img>` elements (was CSS-gradient placeholders), added `.lang-toggle`, `.util-bilingual`, `.hero-bilingual`, `.ftr-bilingual`, `.img-fallback` recovery class, `.svc-page-hero` + `.svc-cols` for service-page layout.
- `script.js` — added EN/ES dictionary (~150 keys), `applyLang()` runtime swap, `localStorage` persistence + `navigator.language` initial detect, inline `data-en`/`data-es` support for service pages, image `error` → CSS gradient fallback handler, lightweight hero parallax (transform-only, scroll-throttled, respects `prefers-reduced-motion`).

### Created
- `services/paver-patios-retaining-walls.html`
- `services/irrigation-sprinkler-systems.html`
- `services/sod-installation-lawn-care.html`
- `services/landscape-lighting.html`
- `services/drainage-grading-solutions.html`
- `services/mulch-aeration-pruning.html`
- `reference/README.md` — placeholder for approved mockup PNG + LAP logo file drop
- `review-screenshots-v2/desktop-1440-fullpage.png`
- `review-screenshots-v2/tablet-768-fullpage.png`
- `review-screenshots-v2/mobile-390-fullpage.png`
- `review-screenshots-v2/desktop-service-page.png`
- `LAP-Mockup-Match-Review.md` — this file

---

## 2. What Was Updated to Match the Approved Mockup

| Area | Update |
|---|---|
| **Imagery** | Replaced all CSS-gradient placeholder tiles with real Unsplash landscape/hardscape photography (hero, services, about, gallery, service-page heroes). Each `<img>` carries `data-fallback-tile` so a network failure swaps to a themed CSS gradient — layout never breaks. |
| **Header / logo** | Wordmark "LAP Landscaping" paired with a refined SVG mark (gradient-filled leaf shape with tan accent dot) used in both header and footer. Sized 36px desktop / 32px footer. Real client logo file expected in `reference/`. |
| **Hero** | Two-column layout, large Fraunces serif H1 with italicized "last", lede in Plus Jakarta Sans, dual CTA — **"Get a Free Estimate"** (primary) and **"View Our Work →"** (ghost). Bilingual line below CTAs. Right side: real photo card with caption overlay + floating "100%" stat badge + mini "hardscape specialists" badge. |
| **Bilingual trust** | Three places: utility-bar pill ("Hablamos Español · We serve clients in English & Spanish"), hero-line under CTAs, footer pill. All translate properly when ES toggle is pressed. |
| **Language toggle** | Pill control in utility bar — `EN | ES`. Front-end only. JS dictionary applied to every i18n-tagged element. `localStorage` persists across reloads and across pages. Browser language auto-detects ES on first visit if `navigator.language` starts with `es`. |
| **Service grid** | 6 cards, each with real category image, hover lift + image scale, title, description, "Explore →" link. Each card links to its own dedicated service page. |
| **Service pages** | Six dedicated `services/*.html` files with: shared header/footer, service-specific hero (image + H1 + lede + CTA), two-column "What's included" + "Problems we solve" check-bullets, four-step process recap, service-specific final CTA card, footer with full service nav. All bilingual via `data-en`/`data-es` inline attrs + shared dictionary. |
| **Trust strip** | 4 stats — years, projects, 5★, **EN/ES bilingual** (replaces the previous "Licensed & insured" stat to reinforce bilingual positioning). |
| **About / Why LAP** | Real portrait photo + floating "Local crew · No subs, no shortcuts" badge. Three numbered differentiators including a new bilingual+local point. |
| **Process** | 4-step cards with dotted connector. Reused across service pages. |
| **Gallery** | 6 real photos, masonry layout (1 tall + 1 wide). |
| **Reviews** | 3-up cards with placeholder testimonials clearly marked. |
| **FAQ** | 4 items, including a new `¿Hablan español?` Q&A in both languages. Accordion with + / − affordance. |
| **Final CTA card** | Large green card with tan accent gradient, JotForm button (`target="_blank" rel="noopener"`) + tap-to-call, bilingual fineprint with STOP keyword preserved. |
| **Footer** | 4-column with brand block + bilingual pill, full Services list (links to 6 service pages), Company links, Contact block with phone/email/Troutman address + legal note. |
| **Mobile sticky CTA** | Two-button bar (Call + Free Estimate) appears on screens ≤760px. |
| **Animation** | Scroll-reveal via single `IntersectionObserver`. Card hover lift with image scale. CTA hover transforms. Smooth anchor scrolling. Lightweight hero photo parallax (`scrollY * 0.06` + small scale, RAF-throttled). All respect `prefers-reduced-motion: reduce`. |
| **Performance** | No external JS libraries. Single observer. CSS-only motion outside parallax. `loading="lazy"` on non-hero imagery. `preconnect` on fonts.googleapis.com, fonts.gstatic.com, images.unsplash.com. |

---

## 3. What Still Differs From the Mockup

The literal approved mockup PNG was **not delivered to `reference/`** at the time of this pass. Below is best-effort interpretation against the brief description (premium, image-rich, lead-focused, bilingual). When the real mockup is dropped in, expect refinements in:

| # | Likely difference | How to close it |
|---|---|---|
| 1 | Exact hero photo composition and crop | Replace Unsplash hero with the photo from the mockup once provided. |
| 2 | Real LAP logo (current build uses generic SVG mark + wordmark) | Swap inline SVG for `reference/lap-logo.svg` once delivered. |
| 3 | Mockup-specific section spacing / type sizes | Align spacing tokens (`--pad`, section paddings, `clamp()` ranges) once mockup is pixel-checked. |
| 4 | Mockup-specific brand color tokens | Update `:root` variables in `styles.css` if the approved palette uses different greens/tans than the current `#1F3D2B` / `#C9A876` family. |
| 5 | Mockup-specific button radius / shadow strength | Adjust `--r-lg`, `--shadow-md` if needed. |
| 6 | Specific iconography style (line-icons vs filled, custom set) | Currently uses inline SVGs and emoji 🌎 for the bilingual flag. |

**These are alignment refinements, not architectural mismatches.** The structure (section order, CTA hierarchy, bilingual placement, service cards → service pages, footer layout) already follows the directive in the brief and is straightforward to nudge into pixel-match once the mockup file lands.

---

## 4. Bilingual Toggle Status

✅ **Working.** Tested via the EN | ES button group in the utility bar.

- Storage: `localStorage['lap.lang']` persists choice across pages and reloads.
- Auto-detect: `navigator.language.startsWith('es')` selects ES on first visit if no saved preference.
- Coverage: utility bar, primary nav, mobile nav, hero (eyebrow, H1, lede, CTAs, bilingual line, trust badges, image caption, mini-badge), trust strip, services section heading + all 6 cards, about section, process section, gallery section + tile labels, reviews heading + each placeholder testimonial, FAQ heading + 4 Q&As, final CTA card, footer (about, headings, services, company, contact, address, legal note, copyright, prototype flag), mobile sticky CTA. Service pages: nav, footer, hero copy, "What's included" / "Problems we solve" bullets, process recap, final CTA.
- HTML attribute set: `<html lang>` and `<html data-lang>` updated on toggle for proper accessibility / CSS hooks.
- HTML-permissive content (with `<em>`, `<strong>`, `<a>`) handled via `data-i18n-html` and `data-en-html` / `data-es-html` attrs.
- Spanish translations are professional but **machine-assisted** — recommend a native review pass before anything goes live.

---

## 5. Service Page / Link Status

✅ **All 6 services have dedicated stub pages with real content** (not empty placeholders):
- `services/paver-patios-retaining-walls.html`
- `services/irrigation-sprinkler-systems.html`
- `services/sod-installation-lawn-care.html`
- `services/landscape-lighting.html`
- `services/drainage-grading-solutions.html`
- `services/mulch-aeration-pruning.html`

Each page includes: shared bilingual header + footer, service-specific hero with image and CTA, "What's included" (5–6 bullets), "Problems we solve" (3–4 bullets), the shared 4-step process, a service-specific final CTA card with JotForm + tap-to-call. Cross-links between service pages and home are wired in the footer Services column.

---

## 6. Image Asset Status

⚠ **Temporary high-quality stock imagery in use** (Unsplash). All marked clearly in `LAP-Content-Map.md` as needing replacement.

Photo URLs currently in the prototype:

| Slot | URL | Replace with |
|---|---|---|
| Hero / patio | `images.unsplash.com/photo-1558904541-efa843a96f01` | LAP project paver-patio photo |
| Irrigation | `images.unsplash.com/photo-1592595896616-c37162298647` | LAP irrigation install photo |
| Sod | `images.unsplash.com/photo-1416879595882-3373a0480b5b` | LAP sod-restoration photo |
| Lighting | `images.unsplash.com/photo-1605114637513-0dad7d2d2cef` | LAP landscape-lighting photo |
| Drainage | `images.unsplash.com/photo-1534083264897-aeabfd544fd6` | LAP drainage / grading photo |
| Mulch / lawn | `images.unsplash.com/photo-1599629954294-14df9ec8bdf5` | LAP mulch / pruning photo |
| About | `images.unsplash.com/photo-1558293842-c0fd3db86157` | LAP team / crew on-site photo |
| Retaining wall | `images.unsplash.com/photo-1570222094114-d054a817e56b` | LAP retaining-wall photo |

Image fallback: every `<img>` carries `data-fallback-tile`. If a remote photo errors (offline / 404), JS swaps it for a themed CSS gradient tile so layout never collapses.

---

## 7. Animation Status

✅ All in spec, performance-conscious:

- **Scroll reveal** — single `IntersectionObserver`, `rootMargin: '0px 0px -8% 0px'`, `threshold: 0.08`, opacity + translateY transition. One observer for the whole page.
- **Card hover** — `translateY(-6px)` + box-shadow ramp on `.card.svc`; image inside scales `1.06` over 0.8s. Compositor-friendly (transform/opacity only).
- **CTA hover** — `translateY(-2px)` + shadow ramp + color shift. Border-color changes for ghost variant.
- **Smooth anchor scroll** — native `html { scroll-behavior: smooth; }`.
- **Hero parallax** — `transform: translate3d(0, scrollY * 0.06, 0) scale(1 + scrollY * 0.00012)` clamped at 800px scroll. RAF-throttled, single listener, passive.
- **Reduced motion** — full `@media (prefers-reduced-motion: reduce)` override disables all transforms and instantly shows reveal-targeted elements; parallax also short-circuits in JS.
- **No libraries** — no GSAP, no AOS, no Framer. Native APIs only.

---

## 8. Production Status — Confirmed Untouched

- ❌ No WordPress edits.
- ❌ No GoDaddy account changes.
- ❌ No DNS or hosting changes.
- ❌ No JotForm form structure changes (linked outbound only with `target="_blank" rel="noopener"`).
- ❌ No plugin, theme, or security changes.
- ❌ No deploys.
- ❌ No new tools installed (Chrome already present locally; no npm/pip/brew installs).
- ❌ No agents/subagents spawned.
- ❌ No broad repo exploration outside `03-Clients/LAP-Landscaping/design-prototype/`.
- ❌ No commits made.

---

## 9. Open Items

Same client-input list as `LAP-Prototype-QA-Review.md` plus:
1. Drop the approved mockup PNG into `reference/approved-homepage-mockup.png`.
2. Drop the real LAP logo into `reference/lap-logo.svg` (and `lap-logo-light.svg` for dark backgrounds if available).
3. Native Spanish review pass on all `es` strings in `script.js` and inline `data-es` attributes across service pages.
4. Confirm temporary Unsplash imagery is acceptable for review purposes only (Unsplash license permits free use; photos still need to be replaced with real LAP project photography before any future production migration).

When the mockup PNG and logo are dropped, run another visual diff pass for pixel-level alignment.
