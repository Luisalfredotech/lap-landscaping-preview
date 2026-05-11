# LAP Hard Redesign Review (v3 / screenshots-v4)

**Date:** 2026-05-08
**Scope:** Hard redesign pass under [[01-Claude-Code/Phase-8-LAP-Prototype-Override]]. Local prototype only.
**Production touched:** None.

---

## 1. Reference Assets Status

| Asset | Status |
|---|---|
| `reference/lap-logo.png` | ✅ Present (296 KB). Used as real logo image in header + footer of all pages. |
| `reference/approved-homepage-mockup.png` | ❌ **Still not delivered.** Redesign executed against the detailed brief in this turn (canonical text + structure spec). When the mockup PNG is dropped in, expect another pixel-alignment pass. |

---

## 2. Files Changed

| File | Change |
|---|---|
| `index.html` | **Full rebuild.** New section structure: utility bar, header with real logo, hero with pill eyebrow, larger headline, 5★ trust badge, trust-row of 4 cards with icons, "Complete Outdoor Solutions" services grid, about cluster of 3 images + badge, dark green Featured Projects section with image mosaic, 4-step process, reviews, bilingual FAQ heading, dark green final CTA band with bilingual heading, premium dark footer with embedded language toggle. |
| `styles.css` | **Full rebuild.** New tokens (`--green-deep`, `--cream-2`, `--tan-2`), real-logo sizing, hero pill, trust-row 4-card grid, services-grid with icons, about cluster positioning, projects mosaic grid, dark CTA band with twin radial gradients, footer with embedded language toggle, `.cta-bilingual`/`.faq-bilingual` italic accents. |
| `script.js` | i18n dictionary updated for new keys (`hero.pill`, `hero.region`, `hero.badge1/2`, `trust.t1–4`, `trust.p1–4`, `projects.*`, `cta.title.en/es`, `faq.title.en/es`, `cta.btn1/2`, `ftr.lang/privacy/sms`, `nav.work/about`, `cta.work`, `svc.learn`). Old conflicting keys overwritten so new HTML defaults render correctly when JS swaps text. Spanish strings refreshed in parallel. |
| `services/*.html` (6 files) | Logo swapped from inline SVG to real `<img src="../reference/lap-logo.png">` in both header and footer. Nav updated to add "Our Work" + "About LAP" links pointing at homepage anchors. CTA labels normalized to "Get a Free Estimate". Mobile nav aligned. |

---

## 3. What Was Rebuilt

### Top utility bar
Dark green strip (`--green-deep`) with: location pill ("Proudly Serving Lake Norman & Surrounding Areas"), bilingual pill with globe glyph and `Hablamos Español | We proudly serve clients in English & Spanish`, phone with icon, email, and the EN | ES toggle. Spacers push content into a clean 3-zone layout that wraps gracefully on tablet.

### Header
- Real LAP logo (`reference/lap-logo.png`) at 56 px tall on desktop, replacing the previous generic SVG mark.
- Centered nav with 6 items: Services · Our Work · About LAP · Reviews · FAQ · Contact.
- Right-side primary CTA: **Get a Free Estimate** (deep green pill).
- Sticky behaviour with subtle shadow on scroll.

### Hero
- Tan-text-on-deep-green pill: **PREMIUM LANDSCAPING. BUILT TO LAST.**
- Headline (Fraunces 700, italic accent on "Beautiful Outdoor Living"):
  *Custom Landscaping & Hardscape Solutions for Beautiful Outdoor Living*
- Italic supporting line in green-3: *Proudly Serving Lake Norman & Surrounding Communities*
- Lede paragraph in muted ink.
- Dual CTAs: **Get a Free Estimate** (primary) + **View Our Work →** (ghost outline).
- Sage-green bilingual pill below CTAs: 🌎 *Se habla Español | We speak English & Spanish*
- Right side: large rounded hero photo with soft warm overlay, floating cream **trust badge** with 5★ stars + "100% Satisfaction Guaranteed" + "Free, no-pressure estimate", plus a smaller "Quality-first hardscape specialists" mini-card.

### Trust row (4 cards, replaces old `[X]+` strip)
Cream background, four white rounded cards with icon discs:
1. **Licensed & Insured** — fully licensed for NC, every project insured.
2. **Detail-Oriented Craftsmanship** — proper base prep, edge restraint, clean finishing.
3. **Custom Solutions** — designed around your home, lot, lifestyle.
4. **Satisfaction Guaranteed** — won't leave until work meets your standard.

### Services section
Heading: **Complete Outdoor Solutions**.
Subhead: *From patios to gardens, we handle every layer of your landscape — design, build, and maintain.*

Six premium service cards (3-col desktop, 2-col tablet, 1-col mobile). Each card now contains:
- Real Unsplash landscape/hardscape photo
- Cream-disc service icon (custom inline SVG)
- Title (Fraunces serif)
- SEO-friendly description
- **Learn More →** link
- Anchor → matching service page in `services/`

### About LAP — image cluster
Cream-background section. Left side is a 3-image cluster (overlapping rounded photos) plus a "Local Crew · No subs · No shortcuts" floating badge. Right side has the eyebrow, headline **"Built on Integrity. Focused on Quality. Proudly Local."**, lede paragraph, and three numbered bullets covering single accountable crew, hardscape specialists, and bilingual + local positioning. Closes with **Talk to the LAP Crew** primary CTA.

### Featured Projects (`#projects`)
Dark deep-green section with a tan radial-glow accent. Left: eyebrow `FEATURED PROJECTS`, large white headline *Outdoor Spaces We're Proud Of.*, supporting paragraph, **Start Your Project →** tan CTA. Right: 4-image mosaic in a 2-col / 3-row grid (one tall left + two stacked right + one wide bottom).

### Process (4 steps)
Dotted connector line between four cards: Consult · Design · Build · Maintain. Numbered green-circle markers. Hover lift.

### Reviews
Cream-background. 3-up rounded white cards with 5★ tan stars, quote, divider, and author + project type. Placeholder testimonials clearly marked.

### FAQ
Sticky-left layout. Headline displays both English and Spanish inline:
*Frequently Asked Questions* · *| Preguntas Frecuentes*
4 accordion items, including the bilingual `¿Hablan español?` answer in Spanish.

### Final CTA band
Dark deep-green section with twin radial gradients (tan top-right, green-3 bottom-left). Headline reads bilingual:
*Ready to Elevate Your Outdoor Space?* · *| ¿Listo para transformar su espacio exterior?*
Two CTAs: **Get a Free Estimate** (tan, JotForm outbound, `target="_blank" rel="noopener"`) + **Or Call 704-327-5663** (light ghost). Fineprint with STOP keyword preserved.

### Footer
Dark deep-green. Brand block with real LAP logo image (light-tinted), about paragraph, "🌎 Hablamos Español" pill, embedded EN | ES language toggle (light variant). Three columns: Services (6 service-page links), Company (Our Work, About LAP, Reviews, FAQ, Get a Free Estimate), Contact (phone, email, Troutman address, Privacy Policy, SMS Terms). Base row with copyright + "Local prototype build — not for production deployment" tan flag.

---

## 4. What Photos Were Replaced

All hero, service, about, and project imagery now uses Unsplash photo URLs (still temporary placeholders) but with stronger landscape/hardscape relevance and consistent treatment (rounded corners, soft warm overlay, object-fit: cover, lazy loading, eager on hero):

| Slot | Photo URL |
|---|---|
| Hero | `images.unsplash.com/photo-1558293842-c0fd3db86157` (modern home with lawn) |
| Service · Patio | `1558904541-efa843a96f01` |
| Service · Irrigation | `1592595896616-c37162298647` |
| Service · Sod | `1416879595882-3373a0480b5b` |
| Service · Lighting | `1605114637513-0dad7d2d2cef` |
| Service · Drainage | `1534083264897-aeabfd544fd6` |
| Service · Mulch | `1599629954294-14df9ec8bdf5` |
| About cluster | three of the above re-used with different crops + positioning |
| Projects mosaic | four of the above re-used as the temporary mosaic |

Every `<img>` carries `data-fallback-tile` so a 404/offline scenario swaps to a themed CSS gradient — layout never collapses. **All temporary; needs replacement with real LAP project photography before launch.**

---

## 5. Closer to the Approved Mockup?

**Yes, substantially closer.** Side-by-side against the brief:

| Brief requirement | Result |
|---|---|
| Top dark-green utility bar with phone, email, area, bilingual | ✅ |
| `Hablamos Español` / English & Spanish trust messaging | ✅ in utility bar, hero pill, footer pill |
| EN \| ES toggle position and styling | ✅ utility bar (right) and footer (light variant) |
| Logo size and placement in header | ✅ real `lap-logo.png`, 56 px desktop |
| Header spacing and nav layout | ✅ logo left · nav center · CTA right |
| Free Estimate CTA prominent | ✅ green pill in header, hero, FAQ, CTA band, footer, mobile sticky |
| Hero: pill, headline, region, paragraph, dual CTA, bilingual line | ✅ |
| Hero: large premium image, rounded, with floating trust badge | ✅ |
| Trust row with 4 cards | ✅ |
| Services title "Complete Outdoor Solutions" + subhead | ✅ |
| 6 services with image, icon, title, desc, Learn More link | ✅ |
| About: "Built on Integrity. Focused on Quality. Proudly Local." | ✅ |
| About: image cluster + 3 benefit bullets | ✅ |
| Featured Projects dark section with text-left + mosaic-right | ✅ |
| Process 4 steps | ✅ |
| Reviews testimonial cards (placeholder marked) | ✅ |
| FAQ bilingual heading "Frequently Asked Questions \| Preguntas Frecuentes" | ✅ |
| Final CTA dark band with bilingual heading + tan CTA + tap-to-call | ✅ |
| Premium dark footer with logo, services, company, contact, EN \| ES | ✅ |
| Mobile-first responsive | ✅ |
| Subtle premium animations (no heavy libs) | ✅ |

---

## 6. What Still Differs from the Approved Mockup

The literal mockup PNG is still not in `reference/`. So pixel-level alignment (exact spacing tokens, exact hero photo crop, exact button radii, exact icon style) cannot be confirmed. Likely future deltas after the mockup is dropped:

1. Hero image: current Unsplash placeholder vs the exact mockup image.
2. Spacing tokens (`--pad`, section paddings) may need ± adjustments.
3. Brand color tokens may need fine-tuning if the approved palette uses slightly different greens/tans.
4. Specific icon style (line vs filled, rounded vs sharp) may differ.
5. Button radius / shadow strength.
6. Approved photography for hero, services, about, projects.

These are alignment refinements — structure, hierarchy, copy, bilingual UX, animation budget all already match the brief.

---

## 7. Bilingual Toggle Status

✅ Working. Tested via the toggles in utility bar AND footer.

- Storage: `localStorage['lap.lang']` persists choice across pages and reloads.
- Auto-detect: `navigator.language.startsWith('es')` initial selection.
- Coverage: utility bar, header nav, mobile nav, hero (pill, h1, region line, lede, CTAs, bilingual pill, mini-badge), trust row (4 cards × title + body), services section heading + subhead + all 6 cards, about (eyebrow, h1, lede, 3 bullets, CTA, badge), featured projects (eyebrow, h1, lede, CTA), process (eyebrow, h1, 4 steps × title + body), reviews (eyebrow, h1, lede, placeholder cards), FAQ (eyebrow, bilingual heading, lede, 4 Q&As), final CTA band (bilingual heading, lede, two buttons, fineprint), footer (about, bilingual pill, services list, company, contact, address, privacy/sms, copyright, prototype flag, language toggle). Service pages: nav + footer + service-specific copy via `data-en`/`data-es`.
- Both EN ↔ ES round-trips render cleanly with no missing keys after the dictionary refresh.

---

## 8. Service Page Link Status

✅ All 6 service pages updated to match new branding:
- Real LAP logo image in header (`../reference/lap-logo.png`) and footer.
- Updated nav: Services · Our Work · About LAP · Reviews · FAQ · Contact.
- "Get a Free Estimate" CTA label (was "Free Estimate").
- All cross-links between service pages, home anchors (`#projects`, `#about`, `#reviews`, `#faq`, `#contact`, `#services`), and the JotForm endpoint preserved.
- Service-specific bilingual content via inline `data-en` / `data-es` attrs.

---

## 9. Animation Status

All performance-friendly:
- `IntersectionObserver`-based scroll reveal (single observer, opacity + translateY).
- Smooth anchor scrolling via native `scroll-behavior: smooth`.
- Card hover lift (`translateY(-8px)` + shadow ramp + image scale `1.06`).
- CTA hover transforms (`translateY(-2px)` + shadow + color shift).
- Lightweight hero parallax — `translate3d(0, scrollY * 0.06, 0)` + small scale, RAF-throttled, passive listener, capped at 800 px.
- Header acquires soft shadow on scroll via `.hdr-scrolled` class.
- All motion respects `prefers-reduced-motion: reduce` — JS short-circuits parallax, CSS disables transitions and reveal transforms.
- Zero external libraries. Vanilla JS only.

---

## 10. Image Asset Status

⚠ Still **temporary Unsplash placeholders** for all imagery except the LAP logo. Documented in `LAP-Content-Map.md` and reiterated here:

- Real LAP project photography needed for: hero, all 6 services, about cluster (3 photos), projects mosaic (4 photos).
- Drop into existing `<img src>` slots with paths under `reference/photos/` (suggested) once delivered.
- All `<img>` elements have `data-fallback-tile` to prevent layout collapse if remote source fails.

---

## 11. Screenshots Created

All under `03-Clients/LAP-Landscaping/design-prototype/review-screenshots-v4/`:

| File | Width | Notes |
|---|---|---|
| `desktop-1440-fullpage.png` | 1440 px | Full page in default English. |
| `tablet-768-fullpage.png` | 768 px | Full page tablet view. |
| `mobile-390-fullpage.png` | 390 px | Full page mobile view with sticky CTA. |
| `desktop-service-page.png` | 1440 px | Paver Patios service page desktop. |

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
