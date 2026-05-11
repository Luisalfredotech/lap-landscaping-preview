# Reference Assets — Status

**Date:** 2026-05-08
**Step:** STEP 1 — populate reference folder before STEP 2 (mockup pixel alignment).

---

## ✅ Found and saved

### `lap-logo.png` — present
- **Source:** `/Users/luisalfredomartinez/Desktop/LAP Logo Website .png`
- **Saved to:** `03-Clients/LAP-Landscaping/design-prototype/reference/lap-logo.png`
- **Match basis:** Large green "LAP" lettering, trees/landscape mark between the letters, "LANDSCAPING" wordmark below. Matches the official-logo description in the brief.

**Other logo candidates seen (not used):**
- `/Users/luisalfredomartinez/Downloads/LAP_logo_3.png` — visually identical to the chosen file. Backup option.
- `/Users/luisalfredomartinez/Downloads/LAP_logo_2.png` — different horizontal layout ("LAP" left, "LANDSCAPING" inline right with a green wave). Probably an alternate variant. Not used as the primary because the brief asks for the stacked version with "LANDSCAPING" below.

If the wrong logo variant was copied, point at the correct file and it will be replaced.

---

## ❌ Missing — needs your action

### `approved-homepage-mockup.png` — NOT FOUND

The brief describes the mockup as: full-page green/cream LAP Landscaping homepage with bilingual EN | ES, "Hablamos Español", service cards, gallery, testimonials, FAQ, and footer.

**Candidates inspected and rejected:**

| Path | Why not |
|---|---|
| `~/Desktop/Screenshot 2026-05-08 at 11.09.56 AM.png` | Visually inspected — this is a screenshot of the local prototype (browser chrome shows `file:///...design-prototype/...`), not the approved external mockup. |
| `~/Desktop/Screenshot 2026-05-08 at 11.10.04 AM.png` | Same — screenshot of the local prototype services grid section. |
| `~/Desktop/Screenshot 2026-05-08 at 11.10.08 AM.png` | Same source pattern; not inspected one-by-one but matches the same Desktop batch from 11:10 AM today, all of the local prototype. |
| `~/Desktop/Screenshot 2026-05-08 at 11.10.11 AM.png` | Same. |
| `~/Desktop/Screenshot 2026-05-08 at 11.10.17 AM.png` | Same. |
| `~/Desktop/Screenshot 2026-05-08 at 11.10.23 AM.png` | Same. |
| `~/Desktop/Screenshot 2026-05-07 at 5.38.39 PM.png` | QRC Group preview, different client. |
| `~/Downloads/ChatGPT Image Apr 24, 2026 at 12_07_31 PM.png` | LAP JotForm contact form image, not the homepage mockup. |
| `~/Desktop/qt=q-95.webp` | 4 KB — too small to be a full-page mockup. |

No external approved-homepage mockup PNG was located in:
- `~/Downloads`
- `~/Desktop`
- `03-Clients/LAP-Landscaping/`
- `03-Clients/LAP-Landscaping/design-prototype/`

---

## How to provide the missing mockup

Drop the approved homepage mockup PNG (or JPG/WEBP) here:

```
03-Clients/LAP-Landscaping/design-prototype/reference/approved-homepage-mockup.png
```

Accepted alternatives if you only have a different format:
- `approved-homepage-mockup.jpg`
- `approved-homepage-mockup.webp`

Once dropped, STEP 2 (mockup pixel alignment pass) can begin. Until then, the prototype will continue to use brief-description-based interpretation.

---

## Confirmations

- ✅ Reference folder created/verified at the expected path.
- ✅ Logo copied and saved.
- ❌ Approved homepage mockup is missing — STEP 1 cannot fully complete.
- ✅ No prototype design edits made in STEP 1.
- ✅ No production / live systems touched. No WordPress, GoDaddy, DNS, hosting, JotForm, plugin/theme/security, deploys, installs, agents, or commits.

Stopped per the brief — awaiting the mockup file.

---

## 2026-05-11 — Preview corrections pass (still missing)

> **Critical**: a deeper audit of `reference/photos/` during this pass surfaced that almost every "landscaping" JPG is in fact a misnamed stock placeholder — `wall-stone.jpg` is the Eiffel Tower, `lighting-dusk.jpg` is a coastal cliff at sunset, `drainage-rocks.jpg` is a workshop-tools flat-lay, `mulch-beds.jpg` is a laptop on a desk, `sod-grass.jpg` is a potting scoop with soil, `irrigation-sprinkler.jpg` is a brick house, `patio-pavers.jpg` is grass-foreground with apartments. **Do not wire these files into service-page heroes, projects mosaic primary slots, or About-LAP collage primary slots until LAP provides real photography.**

### Temporary Unsplash exception (2026-05-11, user-approved)

The 6 service-page heroes, the homepage projects-mosaic pm-2 and pm-3 slots, and the About-LAP ac-2 collage slot have been wired to subject-accurate Unsplash URLs as a temporary measure so that each service page shows what it claims to show. Specifically:

| Slot | Unsplash photo ID | Subject |
|---|---|---|
| Paver service hero / About ac-2 | `1761637823407-ef47925c2714` | Curved paver patio with stone seating wall and planted beds |
| Mosaic pm-2 | `1761637823941-0ffae96ec487` | Stacked-stone retaining wall in residential garden |
| Irrigation service hero | `1770664945615-52203ab54c88` | Active lawn sprinklers spraying water at sunset |
| Sod service hero | `1753401269108-5eaed2b46325` | Lush green sod lawn with stone pathway |
| Lighting service hero / mosaic pm-3 | `1777750050088-c6052531a1e0` | Warm landscape lighting glowing through a planted garden at night |
| Drainage service hero | `1758244016375-a669be263c06` | Stone-lined drainage channel with water flow |
| Mulch/Aeration/Pruning service hero | `1759577085348-7b7d9fb537a4` | Mulched planted beds with colorful seasonal flowers |

**v7.3 update:** The homepage "Complete Outdoor Solutions" service-card images on `index.html` now use the same six Unsplash IDs as the matching service-page heroes. When LAP supplies real project photography for a given service, swap the homepage card and the service-page hero together so the brand stays consistent.

**Note:** Earlier in this pass the previously-shipped Unsplash IDs (`1558904541-efa843a96f01`, `1592595896616-c37162298647`, `1416879595882-3373a0480b5b`, `1605114637513-0dad7d2d2cef`, `1534083264897-aeabfd544fd6`, `1599629954294-14df9ec8bdf5`) were briefly reused. Each was then verified against `images.unsplash.com` — three returned 404 (deprecated), and the three that loaded did not show the subjects their alt text claimed (e.g. the "paver" ID rendered grass; the "irrigation" ID rendered a brick house; the "sod" ID rendered a potting scoop). They have been replaced with the subject-verified IDs above. Do not roll back to the deprecated set.

`images.unsplash.com` preconnect is back in `index.html` and all 6 service pages. Alt text describes the image generically — no claim that these are LAP job-site photos. **Replace with real LAP project / team photography when delivered.**

Asset audit of `reference/photos/` during the v7.2 corrections pass surfaced gaps. The folder contains many unrelated placeholders that read as junk for a landscaping brand and cannot be used on service pages.

### Local landscape assets actually used after the v7.2 corrections pass

| File | Confirmed subject | Used by |
|---|---|---|
| `mockup-hero.png` | Paver patio with firepit at dusk | homepage hero, About ac-3, mosaic pm-1 |
| `modern-home.jpg` | Wisteria garden archway over a path | About ac-1, mosaic pm-4 |
| `svc-patio.png` / `svc-irrigation.png` / `svc-sod.png` / `svc-lighting.png` / `svc-drainage.png` / `svc-mulch.png` | Correct subjects but only 285×100 — too soft for crisp display | retained on disk for asset history; **no longer referenced from HTML as of v7.3** (homepage service cards now use the same Unsplash IDs as the service-page heroes) |
| `lap-logo.png` | LAP wordmark + mark | all pages |

### Local files NOT used (misnamed / unrelated — kept on disk for reference)

- `wall-stone.jpg` — Eiffel Tower (B&W)
- `lighting-dusk.jpg` — coastal cliff at sunset
- `drainage-rocks.jpg` — workshop tools flat-lay
- `mulch-beds.jpg` — laptop on a desk
- `sod-grass.jpg` — potting scoop with soil
- `irrigation-sprinkler.jpg` — brick house with manicured lawn
- `patio-pavers.jpg` — grass close-up with apartments behind
- `about-1.jpg` (northern lights), `about-2.jpg` (cliffs), `about-3.jpg` (US flag), `about-crew.png` (UI screenshot)
- `hero-firepit.jpg` — flying fish over ocean
- `project-1.jpg` (sneakers in field), `project-2.jpg` (Massey Hall), `project-3.jpg` (cliffs), `project-4.jpg`
- `proj-1.png`, `proj-2.png`, `proj-tile-1/2/3/4.png` — UI screenshots from earlier mockup iterations

Filename ≠ subject. Verify visually before wiring any of these into HTML.

### TODOs — dedicated assets still needed

- **Irrigation service hero** — `irrigation-sprinkler.jpg` is high resolution but the actual content is a brick house with a manicured lawn, not a sprinkler/irrigation system. `svc-irrigation.png` is the correct subject (real sprinkler spray on grass) but is only 285×100 — too small to use as a 4:3 hero without visible pixelation. The page currently uses the house image because the lawn at least signals irrigation results. A real high-res sprinkler-in-action photo is still needed for accurate service representation.
- **Aeration service image** — dedicated `reference/photos/aeration-service.jpg` (plug-aerator close-up on residential lawn, no recognizable people, no LAP uniform/logo). image-poster skill is not currently configured in this environment (no `$OD_NODE_BIN` / `$OD_BIN` / `$OD_PROJECT_ID`) so the image was not generated this pass. Hero of `mulch-aeration-pruning.html` continues to use `mulch-beds.jpg` as the combined-service stand-in.
- **Pruning service image** — dedicated `reference/photos/pruning-service.jpg` (hand-pruning shrub/hedge close-up, no faces, no LAP uniform/logo). Same status as aeration.
- **About-LAP crew lead image** — `modern-home.jpg` (wisteria archway) is in use as ac-1 because none of `about-1/2/3.jpg` or `about-crew.png` are usable. Real LAP crew/site photography is needed long-term.
- **Projects mosaic pm-4** — currently reuses `modern-home.jpg` (same image as About ac-1, different scroll section). Replace with a distinct real LAP project photo when delivered.

### Hard rules until real photography arrives

- Do not pull from `images.unsplash.com` or any external CDN. All service pages now load local assets only.
- Do not fabricate fake LAP crew photos, fake uniforms, fake company logos, or anything that misrepresents LAP staff.
- New AI-generated landscaping photos may be added once the image-poster dispatcher is configured (or LAP supplies real photography).

---

## 2026-05-11 — v7.4 Luxury 2026 polish pass

Three new content blocks on `index.html`. All Unsplash IDs reused from the 2026-05-11 verified set — **no new unverified IDs introduced**.

### Hero plan/built split card (replaces `.hero-card-mini`)

| Half | Source | Subject |
|---|---|---|
| Plan (left)  | inline SVG (brand palette) | Top-down backyard blueprint: patio rect + fire-pit circle + planted clusters + dashed walkway + north arrow |
| Built (right) | `reference/photos/mockup-hero.png` (local, verified) | Finished paver patio with fire pit at dusk |

SVG is brand-controlled — no subject-verification risk, infinite scaling, zero external requests.

### Process gallery (new `.process-gallery` section between Trust row and Services)

Reuses 4 already-verified Unsplash IDs. Alt text describes generically — no claim of LAP crew on a job site.

| Step | Unsplash photo ID | Verified subject (2026-05-11) | Alt text |
|---|---|---|---|
| 01 Site walk | `1758244016375-a669be263c06` | Stone-lined drainage channel | "Site features evaluated during a consultation walk" |
| 02 Plan      | `1761637823941-0ffae96ec487` | Stacked-stone retaining wall  | "Stone selection and layout planned during the design phase" |
| 03 Install   | `1753401269108-5eaed2b46325` | Fresh sod with stone pathway   | "Fresh sod and stone pathway during a build" |
| 04 Hand-off  | `1759577085348-7b7d9fb537a4` | Mulched planted beds with flowers | "Mulched planted beds at seasonal maintenance" |

Each `<img>` carries `data-fallback-tile` so the existing JS fallback in `script.js` renders a brand-gradient tile if the photo 404s.

### Footer sign-off (oversized LAP logo)

| Slot | Source | Notes |
|---|---|---|
| `.ftr-signoff-logo` | `reference/lap-logo.png` (existing official logo, verified) | Rendered at clamp(220px, 28vw, 360px) with cream tint filter for dark-green background; bilingual tagline "Built to last. Built local." / "Hecho para durar. Hecho localmente." in Fraunces italic below |
| `.ftr-brand` | text-only "LAP Landscaping" in Fraunces (Polish 3) | Replaces the old cream `.ftr-logo-pill` block so the sign-off above is the single dominant brand statement |

### Hard rules (still in force after v7.4)

- Reused IDs only — no new unverified Unsplash photos in this pass.
- All four process-gallery alt strings match what the verified photo actually shows.
- Inline SVG hero blueprint is illustrative, not a real LAP project plan.
- Hero "Built" thumb reuses `mockup-hero.png` until LAP delivers real project photography.
- Footer sign-off uses the same `lap-logo.png` already shipped — no new logo file required.

---

## 2026-05-11 — v7.5 Process-showing imagery pass

User feedback after v7.4: every image still shows finished results, not work in progress. v7.5 swaps 8 image slots to process-showing photos. All 8 new Unsplash IDs were pulled **live** from Unsplash search results during this session (not from training data), each one **HTTP 200-verified** via direct CDN fetch before wiring. `mockup-hero.png` use count goes from 4 slots → 2 slots (hero main + projects-mosaic pm-1 only).

### Newly wired (live-verified, HTTP 200, non-premium)

| Slot | New Unsplash ID | Verified subject (Unsplash canonical alt) | Honest HTML alt | `data-fallback-tile` |
|---|---|---|---|---|
| Hero "Built" thumb | `1761637823407-ef47925c2714` | Curved paver patio with stone seating wall and planted beds | "Finished curved paver patio with stone seating wall" | patio |
| Process 01 Site walk | `1758574697284-8e84046a45ae` | Worker measures a surface with a tape measure and pencil | "Worker measuring a site with tape and pencil during a consultation walk" | patio |
| Process 02 Plan | `1724786594289-41ebbf53a35b` | Architectural plan of a formal garden with geometric layouts | "Architectural plan of a formal garden with geometric layouts" | patio |
| Process 03 Install | `1761415451360-3847fc21bc79` | Gardener laying stones in a flower bed | "Gardener laying stones in a flower bed during a landscape install" | walls |
| Services patio | `1725586660046-0c2bea151543` | Man laying bricks on the ground in front of a wheelbarrow | "Hand-laying paver bricks during a patio install" | patio |
| Services irrigation | `1616168558572-69aed7a96677` | Water splash on black metal pipe | "Water flowing through an irrigation pipe during installation" | irrigation |
| Services sod | `1734079692079-aae7e24a7035` | Close up of a person's feet on the grass | "Walking on freshly installed sod lawn" | sod |
| Services drainage | `1585483266669-f9ff856159ad` | Yellow metal pipe on brown soil | "Drainage pipe laid in a freshly dug soil trench" | drainage |
| Services mulch | `1764173040050-b7a87824bc22` | Man trimming bushes with pruning shears outdoors | "Hand-pruning shrubs with shears during seasonal upkeep" | lawn |
| About `ac-3` | `1680699231780-ed1966cb70bd` | A man in green pants and black shoes working on a brick wall | "Hands-on stonework detail — illustrative of crew install craftsmanship" | patio |

### Slots retained from v7.4 (no change)

| Slot | Source | Why kept |
|---|---|---|
| Hero main `.hero-photo` | `reference/photos/mockup-hero.png` (local) | Still the strongest finished hardscape asset in the local set |
| Process 04 Hand-off | `1759577085348-7b7d9fb537a4` (verified mulch beds) | Finished maintenance scene = legitimate hand-off visual |
| Services lighting | `1777750050088-c6052531a1e0` (verified night lighting) | Landscape lighting service is best illustrated at night; no better non-premium "install" alternative found this pass |
| Projects mosaic `pm-1` | `reference/photos/mockup-hero.png` | Featured-projects mosaic needs the strongest finished photo; reused intentionally |
| About `ac-1` | `reference/photos/modern-home.jpg` (local) | Wisteria archway — distinct subject, no churn needed |
| About `ac-2` | `1761637823407-ef47925c2714` (curved patio) | Still verified-correct subject |
| Projects mosaic `pm-2/3/4` | `1761637823941-0ffae96ec487` / `1777750050088-c6052531a1e0` / `reference/photos/modern-home.jpg` | All verified or local |
| Hero "Plan" half SVG | inline SVG blueprint | Brand-controlled, no churn |

### Rejected candidates (logged for future passes)

Several attractive candidates from the search results were `plus.unsplash.com/premium_photo-` URLs that require an Unsplash+ subscription / API auth — they would 401 from anonymous CDN embed. Examples rejected for this reason:

- `1682142040426-fa6f2856e57f` ("Young man working in uniform at construction") — premium, would 401.
- `1678677942854-7627fea4f327` ("a man in a green shirt is using a shovel") — premium.
- `1714251842994-f32dbd50df66` ("a very nice looking garden with some plants") — premium.
- `1681140560805-2d81ba3118bd` ("a man digging in the ground with a shovel") — premium.

If LAP later subscribes to Unsplash+ or supplies API credentials, these premium photos become available and are stronger "crew at work" matches than the non-premium set.

### Hard rules (still in force after v7.5)

- Every new ID was pulled from a live Unsplash search this session — no training-data IDs were trusted.
- Each ID was HTTP-200 confirmed via direct CDN fetch before wiring (see Bash log in the v7.5 commit).
- All HTML alt text describes the photo generically. No claim that any of these photos are LAP staff, LAP job sites, or LAP-owned imagery.
- `data-fallback-tile` is present on every external `<img>` so the existing `script.js` gradient fallback renders if any photo 404s in production.
- `mockup-hero.png` remains the canonical local asset — preserved in 2 slots (hero main + mosaic pm-1).
- Real LAP project / crew photography is still the long-term goal; this pass remains a temporary exception per the 2026-05-11 corrections-pass approval.

---

## 2026-05-11 — v7.6 Hero declutter · Lighting card · Footer logo fix

Three targeted corrections after the user previewed v7.5 at `http://localhost:8000/` and provided three screenshots.

### Hero declutter

Removed from `.hero-art` (kept the single `<img class="hero-photo">` only):
- `.hero-ba` floating plan/built split card (inline SVG blueprint + Built thumb) — competed with the main photo.
- `.hero-badge` floating 5★ + "100% Satisfaction Guaranteed" panel — read as overlay clutter.

Added to `.hero-copy` (between `.hero-cta` and `.hero-bilingual`):
- `.hero-trust` — small sage-tinted pill with 5★ + "100% Satisfaction Guaranteed · Free, no-pressure estimate" inline. Same color register as the existing `.hero-bilingual` chip below it.

Bilingual: new `hero.trust` key in `script.js` (EN + ES). Removed unused `hero.ba.plan` / `hero.ba.built` keys.

CSS: deleted `.hero-ba`, `.hero-ba-half`, `.hero-ba-label`, `.hero-ba-built`, and the v7.4 `.hero-badge { right: auto; left: 0; bottom: 0; }` override.

### Landscape Lighting service card swap

Previous (v7.5 retained from v7.4): `1777750050088-c6052531a1e0` — pure-black night frame dominated by a single warm light.

New (v7.6): `1777830801639-30d7b7cadc20` — "A building entrance with illuminated trees and pathway at dusk" (Unsplash canonical alt). Pulled live from the `garden-path-light-evening` search this session, HTTP-200 verified via direct CDN fetch. Reads as a warmer, more inviting garden-with-lighting scene — matches user request for "garden vibe with soft path lights glowing".

HTML alt: "Garden pathway with illuminated trees glowing warmly at dusk". `data-fallback-tile="lighting"` retained.

### Footer signoff logo fix

Previous (v7.4): `<img>` rendered with a heavy CSS filter (`brightness(0) saturate(100%) invert(99%) sepia(8%) saturate(296%) hue-rotate(323deg) brightness(105%) contrast(94%)`) intended to tint the green logo cream against the dark green band. In practice the filter over-applied — the logo rendered as a near-solid white silhouette, reading to the user as an "empty white box" rather than a logo.

v7.6 fix: wrapped the `<img>` in a `.ftr-signoff-card` cream rounded pill and removed the filter entirely. The original green LAP logo (`reference/lap-logo.png`) now renders at natural color on a cream backdrop, with the dark green ftr band framing the cream card like a print-book title block.

CSS: replaced the `.ftr-signoff-logo` filter rule with `.ftr-signoff-card { background: var(--cream); padding: 28px 56px; border-radius: var(--r-xl); box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 18px 36px -14px rgba(0,0,0,.35); }` and `.ftr-signoff-logo { filter: none; }`. Mobile responsive updated to scale the pill down at <760px.

### Verification

- Lighting ID `1777830801639-30d7b7cadc20` — HTTP-200 verified via `curl` against `images.unsplash.com` CDN at `w=900&q=80`.
- `mockup-hero.png` count unchanged (still 2 slots — hero main + mosaic pm-1).
- All other v7.5 IDs untouched.
- No new external image preconnects required (`images.unsplash.com` already preconnected at `index.html:11`).

### Hard rules (still in force after v7.6)

- Same as v7.5 — every external image is live-search-sourced and HTTP-200 verified; all alt text is honest; `data-fallback-tile` is mandatory on every external `<img>`; real LAP photography remains the long-term goal.

---

## 2026-05-11 — v7.7 Card↔subpage image sync + new lighting hero

User feedback: clicking a service card on the homepage opened a subpage whose hero photo was a completely different scene than the card. All 6 services were mismatched (different photo on card vs subpage hero). User also provided a premium landscape-lighting photo to use on both the homepage card and the Landscape Lighting subpage hero.

### New local asset (Landscape Lighting)

| File | Source | Subject |
|---|---|---|
| `reference/photos/lap-lighting-hero.png` | User-provided (originally `/Users/luisalfredomartinez/Desktop/ddc37053-176d-4c16-b0ae-e8d66a1da536.png`) | Premium landscape lighting at dusk — stone walkway, uplit trees, lit stone planters, soft path lights, house in background |

Copied verbatim with `cp` (no re-encode). 2.7 MB PNG. First real "premium project" reference asset on disk for the prototype.

### Card↔subpage sync table

Both the homepage service card AND its corresponding subpage hero now use the same `src` + `alt`. After v7.7, clicking any "Learn More →" gives the user the same photo they clicked.

| Service | `src` used on both card + subpage hero | Alt used on both |
|---|---|---|
| Paver Patios & Retaining Walls | `https://images.unsplash.com/photo-1725586660046-0c2bea151543?…` | "Hand-laying paver bricks during a patio install" |
| Irrigation & Sprinkler Systems | `https://images.unsplash.com/photo-1616168558572-69aed7a96677?…` | "Water flowing through an irrigation pipe during installation" |
| Sod Installation & Lawn Care | `https://images.unsplash.com/photo-1734079692079-aae7e24a7035?…` | "Walking on freshly installed sod lawn" |
| Landscape Lighting | `reference/photos/lap-lighting-hero.png` (homepage) / `../reference/photos/lap-lighting-hero.png` (subpage) | "Premium landscape lighting on a stone walkway with uplit trees and warm path lights at dusk" |
| Drainage & Grading Solutions | `https://images.unsplash.com/photo-1585483266669-f9ff856159ad?…` | "Drainage pipe laid in a freshly dug soil trench" |
| Mulch, Aeration & Pruning | `https://images.unsplash.com/photo-1764173040050-b7a87824bc22?…` | "Hand-pruning shrubs with shears during seasonal upkeep" |

Subpages use `w=1200&q=80` (eager-loaded hero), homepage cards use `w=900&q=80` (lazy-loaded grid tile). Same photo, two render widths.

### Hard rules (v7.7 + carried forward)

- Card image = subpage hero image for every service. If a future pass changes one side, change the other in the same commit.
- New local LAP-owned imagery should follow the `reference/photos/lap-<service>-hero.png` naming convention (`lap-patio-hero.png`, `lap-sod-hero.png`, etc. once LAP delivers more real photography).
- `data-fallback-tile` retained on every external `<img>` so the JS gradient fallback still renders if Unsplash 404s.
- All previously-verified Unsplash IDs from the 2026-05-11 + 2026-05-11 v7.5 / v7.6 sessions remain canonical.

---

## 2026-05-11 — v7.8 Add Mulch hero image (homepage card + subpage)

User-provided premium photo for Mulch, Aeration & Pruning. Same workflow as v7.7 lighting: drop in `reference/photos/`, wire on both the homepage service card and the matching subpage hero. Second local "real project" asset following `lap-<service>-hero.<ext>` convention.

### New local asset

| File | Source | Subject | Size |
|---|---|---|---|
| `reference/photos/lap-mulch-hero.png` | User-provided (originally `/Users/luisalfredomartinez/Desktop/19a27167-9be9-45a4-a00e-6777dbbbd474.png`) | Landscaper kneeling in gloves spreading dark mulch around boxwood and hydrangea beds, with a residential home visible in background | ~2.7 MB PNG (no re-encode) |

### Swap

| Slot | Previous | New | Alt (identical on card + subpage) |
|---|---|---|---|
| Homepage Mulch service card (`index.html`) | Unsplash `1764173040050-b7a87824bc22` (hand-pruning shrubs) | `reference/photos/lap-mulch-hero.png` | "Landscaper kneeling to spread fresh mulch around boxwood and hydrangea beds at a residential home" |
| Mulch subpage hero (`services/mulch-aeration-pruning.html:57`) | Same Unsplash ID | `../reference/photos/lap-mulch-hero.png` | Same as above |

`data-fallback-tile="lawn"` retained on both — JS gradient fallback still renders if the local file 404s.

### Local LAP-owned assets after v7.8

| Service | Local file |
|---|---|
| Landscape Lighting | `reference/photos/lap-lighting-hero.png` (v7.7) |
| Mulch, Aeration & Pruning | `reference/photos/lap-mulch-hero.png` (v7.8) |

Other 4 services (Paver, Irrigation, Sod, Drainage) still on Unsplash placeholders until LAP delivers more real photography.

### Hard rules (v7.8 + carried forward)

- Card image = subpage hero image for every service (v7.7 rule still in force).
- New LAP-owned imagery follows `reference/photos/lap-<service>-hero.<ext>`.
- `data-fallback-tile` retained on every external + local `<img>`.
- File-size optimization (re-encode to optimized JPEG / WebP) deferred to a future pass.

---

## 2026-05-11 — v7.9 Add Drainage hero image (homepage card + subpage)

User-provided premium photo for Drainage & Grading Solutions. Third local "real project" asset following the same `lap-<service>-hero.<ext>` pattern.

### New local asset

| File | Source | Subject | Size |
|---|---|---|---|
| `reference/photos/lap-drainage-hero.png` | User-provided (originally `/Users/luisalfredomartinez/Desktop/e3cb1311-c682-49eb-bfff-6b4774c8ed89-1.png`) | Stone-built dry-creek drainage with river rocks and iron drain grate, alongside flagstone walkway and planted beds, residential stone house in background, golden-hour light | ~2.9 MB PNG (no re-encode) |

### Swap

| Slot | Previous | New | Alt (identical on card + subpage) |
|---|---|---|---|
| Homepage Drainage service card (`index.html`) | Unsplash `1585483266669-f9ff856159ad` (drainage pipe in trench) | `reference/photos/lap-drainage-hero.png` | "Stone dry-creek drainage with river rocks and iron drain grate alongside a flagstone walkway and planted beds" |
| Drainage subpage hero (`services/drainage-grading-solutions.html:57`) | Same Unsplash ID | `../reference/photos/lap-drainage-hero.png` | Same as above |

`data-fallback-tile="drainage"` retained on both.

### Local LAP-owned assets after v7.9

| Service | Local file |
|---|---|
| Landscape Lighting | `reference/photos/lap-lighting-hero.png` (v7.7) |
| Mulch, Aeration & Pruning | `reference/photos/lap-mulch-hero.png` (v7.8) |
| Drainage & Grading Solutions | `reference/photos/lap-drainage-hero.png` (v7.9) |

Remaining services (Paver, Irrigation, Sod) still on Unsplash placeholders.

---

## 2026-05-11 — v7.10 Add Paver Patios hero image (homepage card + subpage)

User-provided premium photo for Paver Patios & Retaining Walls. Shows both elements (paver patio AND stone retaining walls) at golden hour with fire pit, outdoor dining, planted beds, and house behind. Fourth local "real project" asset.

### New local asset

| File | Source | Subject | Size |
|---|---|---|---|
| `reference/photos/lap-patio-hero.png` | User-provided (originally `/Users/luisalfredomartinez/Desktop/e4891d7b-9084-467f-aa34-76d27f01c020.png`) | Curved paver patio with stone retaining walls, fire pit, outdoor dining set, perennial beds, stone steps to residential home, golden-hour sunset | ~2.7 MB PNG (no re-encode) |

### Swap

| Slot | Previous | New | Alt (identical on card + subpage) |
|---|---|---|---|
| Homepage Paver Patios service card (`index.html`) | Unsplash `1725586660046-0c2bea151543` (hand-laying paver bricks) | `reference/photos/lap-patio-hero.png` | "Curved paver patio with stone retaining walls, fire pit and outdoor dining at golden hour" |
| Paver subpage hero (`services/paver-patios-retaining-walls.html:72`) | Same Unsplash ID | `../reference/photos/lap-patio-hero.png` | Same as above |

`data-fallback-tile="patio"` retained on both.

### Local LAP-owned assets after v7.10

| Service | Local file |
|---|---|
| Paver Patios & Retaining Walls | `reference/photos/lap-patio-hero.png` (v7.10) |
| Landscape Lighting | `reference/photos/lap-lighting-hero.png` (v7.7) |
| Drainage & Grading Solutions | `reference/photos/lap-drainage-hero.png` (v7.9) |
| Mulch, Aeration & Pruning | `reference/photos/lap-mulch-hero.png` (v7.8) |

Remaining services on Unsplash placeholders: Irrigation, Sod.

