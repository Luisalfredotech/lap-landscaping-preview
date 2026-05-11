# LAP Landscaping — Visual Concept

Local prototype only. No production edits. No deployment. Reference for review and approval.

---

## 1. Design Archetype

**Polished local-service conversion website.** Sits between Corporate/Enterprise structure and warm consumer landscaping brand. Inspired by the Dribbble landscaping reference (rounded cards, image-heavy, generous spacing) but redrawn as an original LAP identity — not a clone of that shot.

**Job-to-be-done:** Convert Troutman / Mooresville / Lake Norman homeowners into free-estimate leads.

---

## 2. Color Palette

| Role | Hex | Use |
|---|---|---|
| Background warm off-white | `#FAF7F2` | Page base |
| Cream card | `#F5EFE3` | Card surfaces |
| Deep green (primary) | `#1F3D2B` | Headlines, primary buttons, footer |
| Accent green | `#4A7C59` | Hover, secondary fills, accents |
| Sage tint | `#A8C0A4` | Subtle dividers, badge fills |
| Earth tan (secondary) | `#C9A876` | Section accents, stat highlights |
| Warm tan deep | `#8C6E45` | Hover on tan, decorative |
| Charcoal text | `#2A2A2A` | Body copy |
| Muted text | `#6A6A6A` | Captions, meta |

**Rationale:** Greens evoke lawn/landscape authority; tans/cream evoke hardscape (pavers, stone, mulch); off-white prevents the harsh "AI tech" white look.

---

## 3. Font Direction

- **Display:** `Fraunces` — warm modern serif, soft optical curves, conveys craftsmanship and a local-craft feel.
- **Body / UI:** `Plus Jakarta Sans` — modern geometric humanist sans. Distinctive over-rounded characters give a friendly, premium tone — avoids the generic Inter/system-sans look.
- Fallback stack: `'Fraunces', 'Georgia', serif` and `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`.
- Loaded from Google Fonts in prototype. For production, self-host for performance.

**Why Plus Jakarta Sans:** Plus Jakarta has open apertures and slightly humanist curves that pair with Fraunces' soft serif terminals. Pairs warm-with-warm rather than the clinical Inter/Helvetica feel — better for a homeowner-facing local-service brand. Alternatives considered: Manrope (too geometric), Outfit (too display-y), Sora (too tech), DM Sans (acceptable backup).

---

## 4. Layout Strategy

- 12-column grid, max width `1200px`, generous gutters.
- Mobile-first; breakpoints at `640px`, `900px`, `1200px`.
- Card radii: `20px` (cards), `999px` (pills/buttons).
- Image-forward: every section above the fold uses real photo or strong placeholder.
- Subtle motion: scroll-reveal fade-up on cards, hover lift `translateY(-4px)` + shadow ramp on service tiles, micro-scale on CTA hover. No parallax, no autoplay video, no heavy libraries.
- Sticky utility bar (phone/CTA) on mobile to keep "Call" and "Free Estimate" one tap away.

---

## 5. Section-by-Section Page Plan (Home)

1. **Utility bar** — phone `704-327-5663`, email `service@laplandscaping.com`, service area badge.
2. **Header / Nav** — Logo wordmark, links: Home · Services · Gallery · Reviews · FAQ · Contact. Right-side "Free Estimate" pill button.
3. **Hero** — Two-column on desktop: left = headline + subhead + dual CTA + trust micro-row; right = layered image card with floating stat badge ("100% Satisfaction"). Mobile: stacked.
4. **Trust strip** — 4 stat cards (Years experience, Projects completed, 5★ reviews, Service area).
5. **Services grid** — 6 rounded image cards (Hardscaping, Irrigation, Sod, Lighting, Drainage, Lawn Care). Hover lift + arrow reveal.
6. **About / Why LAP** — Image left, copy right. 3 differentiator bullets with icon chips.
7. **Process** — 4-step horizontal: Consult → Design → Build → Maintain. Numbered chips, connecting line.
8. **Featured projects / Gallery preview** — Masonry of 6 thumbs + "View full gallery" CTA.
9. **Testimonials** — Carousel-style 3-up cards with star row, name, project type. Placeholder content flagged.
10. **FAQ preview** — Accordion of 4 questions (real LAP FAQ content) + "See all FAQs" link.
11. **Final lead CTA** — Full-bleed deep-green section, large headline, JotForm link button + phone CTA.
12. **Footer** — Two-column: contact info + quick links + legal (Privacy, SMS Terms). Copyright.

---

## 6. Service Landing Template (reused for Hardscaping, Irrigation, Sod pages)

1. Service-specific hero with H1 containing primary keyword + location modifier
2. "Problems we solve" — 3 pain-point cards
3. "What's included" — bullet checklist
4. Photo gallery row (4–6 thumbs)
5. Process recap (4 steps)
6. FAQ block (3–5 service-specific Qs)
7. CTA band — "Get a free [service] estimate in Troutman / Mooresville / Lake Norman"

Three landing pages drafted for: **Hardscaping & Paver Patios**, **Irrigation & Sprinkler Systems**, **Sod Installation & Lawn Care** (see Content Map for keyword mapping).

---

## 7. SEO / Lead-Generation Strategy

**Primary geo cluster:** Troutman NC, Mooresville NC, Lake Norman area.

**Page-keyword map:**
| Page | Primary keyword | Secondary keywords |
|---|---|---|
| Home | landscaping services Troutman NC | residential landscaping, free landscaping estimate |
| Hardscaping | paver patios Mooresville NC | hardscaping, retaining walls, outdoor living spaces |
| Irrigation | sprinkler systems Lake Norman | irrigation systems, drainage systems |
| Sod / Lawn | sod installation Troutman NC | lawn aeration, final grading, lawn care |
| Lighting (future) | landscape lighting Mooresville | outdoor lighting installation |

**On-page tactics:**
- One H1 per page, keyword + location.
- Schema.org `LocalBusiness` + `Service` + `FAQPage` markup planned (not in prototype HTML — to be added when WP template is built).
- Image `alt` text describes service + location.
- Internal links from Home → service pages → Contact.
- CTA repeated 3× per page (hero, mid, final).
- Trust signals near every CTA: "Licensed & insured · Troutman NC".

**Lead capture:**
- Primary: JotForm (`https://form.jotform.com/261096626914059`).
- Secondary: tap-to-call phone link `tel:+17043275663`.
- Mobile sticky bar: "Call" + "Estimate".

---

## 8. Landing Page List (prototype scope)

✅ Built in this prototype (single `index.html`, all sections inlined as anchor scrolls):
1. Home (full)
2. Services overview (grid section)
3. Hardscaping & Paver Patios (section block + planned standalone)
4. Irrigation & Sprinkler Systems (section block + planned standalone)
5. Sod Installation & Lawn Care (section block + planned standalone)
6. Gallery / Before-After preview
7. Reviews / Testimonials
8. FAQ
9. Contact / Free Estimate

**Note:** Per scope (visual prototype only), all sections live in one HTML file as a continuous scroll demo. Standalone routes for service pages will be split when moving to WordPress build.

---

## 9. Questions / Risks to Confirm Before Implementation

1. **Email typo on privacy page** — `service@laplandscapiing.com` (extra "i") vs correct `service@laplandscaping.com` elsewhere. Needs client decision on which is canonical.
2. **No reviews currently visible** on `/reviews` — the page is empty. Need real customer testimonials (with consent) before launch. Prototype uses clearly labeled placeholders.
3. **Gallery photos** — current site renders placeholder GIFs; we have no high-resolution project photos yet. Need a photo asset drop or a paid stock gap-fill.
4. **Trust stats** — no quantified numbers on current site (years, project count, review count). Need client to confirm: "X years in business", "X projects completed".
5. **Service area** — site does not list cities. Confirmed Troutman from privacy page; assuming Mooresville + Lake Norman from regional context. Need client to confirm full service radius.
6. **Hours of operation** — not on current site. Needed for footer + LocalBusiness schema.
7. **Licenses & insurance details** — FAQ says "all necessary licenses"; for trust, can we publish license number?
8. **JotForm vs native form** — current form is general; recommend adding service-type dropdown for better lead qualification. Confirm before edits to JotForm.
9. **Photography rights** — confirm any project photos are LAP-owned and homeowners consented to public use.
10. **Logo** — no logo file captured; prototype uses wordmark "LAP Landscaping". Need vector logo from client.

---

## 10. Out of Scope (per instructions)

- No production edits to laplandscaping.com (WordPress / GoDaddy).
- No JotForm modifications.
- No DNS / hosting changes.
- No deployment.
- No paid services purchased.

All output is local files in this folder, for review only.
