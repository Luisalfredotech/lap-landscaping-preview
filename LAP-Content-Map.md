# LAP Landscaping — Content Map

Source-of-truth audit for the redesign. Maps existing content from the live site to its place in the new prototype, and flags what still needs the client.

---

## 1. Captured From Live URLs

### `https://laplandscaping.com` (Home)
- Tagline: *"We design and build high-quality outdoor spaces, specializing in hardscape."*
- Trust statement: *"Customer Satisfaction Guaranteed — Your satisfaction is our priority and we strive to provide a service you are proud of."*
- Services listed (verbatim):
  - Pavers and paver patios / walkways
  - Retaining walls
  - Irrigation systems and sprinkler systems
  - Sod installation
  - Light installations
  - Mulch
  - Lawn aeration
  - Tree and shrub pruning
  - Landscape design and complete landscape transformations
- Value statements: *"increase the value and beauty of their homes"*, *"enhance the exterior of your home, raise your property value"*, *"attention to detail on every project"*.
- Nav: Home · FAQ · Reviews · Gallery · Privacy Policy · SMS Terms · Contact Us.
- CTA: "Free Estimate" button → linked to Yardbook.

### `https://laplandscaping.com/faq`
Three Q&As captured verbatim:
1. **Who will work on my landscape?** — *"The only people who will work on your landscape are LAP Landscaping employees. Our team members have experience and we will all be informed with your landscaping needs."*
2. **Are you insured and licensed?** — *"We have all necessary licenses for our area, and we carry insurance for all of our projects."*
3. **What kind of landscaping do you do?** — *"We can do all kinds of landscaping, such as tree and shrubs pruning & installations, mulch, top soil, retaining walls, paver patios and walkways, sprinkler systems, sod installation, landscape lighting installation, lawn aeration, final grading, drainage systems, & much more."*

### `https://laplandscaping.com/reviews`
- Page exists but **no reviews are currently rendered**. Empty content body.
- Action: prototype shows placeholder testimonials clearly labeled "[Placeholder — pending real reviews]".

### `https://laplandscaping.com/gallery`
- ~20 image slots present, but rendered as base64 placeholder GIFs. No usable filenames or captions captured.
- Page header: *"Outdoor Oasis: Our Landscaping Ideas"*.
- Action: prototype uses CSS-styled placeholder tiles with category labels (Patio, Sod, Walls, Irrigation, Lighting, Drainage). Real image drop required.

### `https://laplandscaping.com/privacy-policy`
- Phone: `704-327-5663`
- Email: `service@laplandscapiing.com` ⚠️ **TYPO** (extra "i")
- Address: Troutman, NC 28166
- Sections: Who We Are · Information We Collect · How We Use Your Information · Text Messaging (SMS) · How We Share Information · Your Choices

### `https://laplandscaping.com/sms-terms`
- Phone: `704-327-5663`
- Email: `service@laplandscaping.com` ✅ correct
- Sections: How You Opt In · Message Frequency · Fees · Opt Out · Help & Support · Privacy · Changes
- Keywords: STOP, HELP
- Frequency clause: *"Message frequency varies based on your requests and service activity (appointment confirmations, updates, questions, etc.)."*

### `https://form.jotform.com/261096626914059` (current contact form)
- Fields in order: Name (First/Last), Email, Address (Street/City/State/Zip), Question, Phone Number, SMS Consent checkbox.
- Submit button: "Submit".
- No service-type dropdown today.

---

## 2. Reused As-Is in Prototype

- Phone number: `704-327-5663`
- Correct email: `service@laplandscaping.com`
- Address / city: Troutman, NC 28166
- FAQ content (3 Q&As) — used verbatim in FAQ section.
- SMS opt-in language — referenced in form section disclaimer (legally meaningful, do not rewrite).
- JotForm URL — used as the "Free Estimate" destination.

---

## 3. Rewritten for SEO / Conversion (new copy)

| Where | Old / weak | New (prototype) |
|---|---|---|
| Hero headline | "We design and build high-quality outdoor spaces…" (descriptive, no keyword/geo) | **"Outdoor spaces built to last in Troutman, Mooresville & Lake Norman."** |
| Hero subhead | n/a | *"Custom hardscaping, irrigation, sod, and full landscape design — built by a local crew that handles every step in-house."* |
| Services intro | (none) | *"From paver patios to sprinkler systems, we handle every layer of your yard — design, build, and maintain."* |
| About / Why LAP | "attention to detail on every project" | *"Every yard we build is handled by LAP employees — no subs, no shortcuts. Licensed, insured, and local to Iredell County."* |
| Final CTA | "Free Estimate" button only | *"Get a free landscaping estimate. We'll visit your property, listen to your goals, and give you a clear plan and price — no pressure."* |
| Service card: Hardscaping | "Pavers and paver patios" | *"Paver Patios & Hardscaping — Patios, walkways, retaining walls, and outdoor living spaces engineered to handle North Carolina weather."* |
| Service card: Irrigation | "Irrigation systems and sprinkler systems" | *"Irrigation & Sprinkler Systems — Smart, zoned watering that keeps your lawn green and your water bill low."* |
| Service card: Sod | "Sod installation" | *"Sod Installation & Lawn Care — Final grading, fresh sod, aeration, and seasonal care for a lawn that looks new from day one."* |
| Service card: Lighting | "Light installations" | *"Landscape Lighting — Path, deck, and accent lighting that extends your evenings outside and adds curb appeal at night."* |
| Service card: Drainage | (mentioned in FAQ only) | *"Drainage Systems & Final Grading — Stop pooling, erosion, and basement seepage with proper grading and drainage solutions."* |
| Service card: Lawn maintenance | "Mulch · aeration · pruning" | *"Mulch, Aeration & Pruning — Seasonal upkeep that protects beds, feeds lawns, and keeps trees and shrubs healthy."* |

All copy avoids stuffing; keywords placed naturally in H1/H2/alt and once per paragraph max.

---

## 4. Missing Information (needs client input)

1. ⚠ Years in business / project count / review count (for trust strip).
2. ⚠ Real customer reviews (with consent) — currently zero on site.
3. ⚠ High-resolution project photos by category (patio, sod, irrigation, lighting, drainage, walls). Suggest min 3 per category.
4. ⚠ Logo file (vector preferred — SVG, EPS, or AI).
5. ⚠ Confirmed service-area cities and radius.
6. ⚠ Hours of operation.
7. ⚠ License number(s) — optional, strong trust signal if displayed.
8. ⚠ Headshot or team photo for About section.
9. ⚠ Owner / company story — short bio for About.
10. ⚠ Decision on canonical contact email (see flag below).

---

## 5. Legal / SMS / Privacy — Preserved As Reference

These items are **not rewritten** in the prototype. Their meaning is legally sensitive and any change must be approved by the client (and ideally reviewed by counsel).

- Privacy Policy section structure and full text — kept verbatim if migrated.
- SMS Terms — opt-in, message frequency, fees, STOP/HELP keywords, opt-out language.
- SMS consent checkbox copy on contact form — preserved verbatim.

---

## 6. Inconsistencies Flagged

| # | Issue | Source | Recommendation |
|---|---|---|---|
| 1 | **Email typo:** `service@laplandscapiing.com` (extra "i") | Privacy Policy page | Confirm with client. Almost certainly should be `service@laplandscaping.com`. Update privacy page when approved. |
| 2 | Reviews page is empty | `/reviews` | Collect testimonials. Add Google Business Profile review widget or static cards. |
| 3 | Gallery shows placeholder GIFs only | `/gallery` | Photo asset drop required before launch. |
| 4 | Service area never stated explicitly | Home + privacy | Add geo-section: "Proudly serving Troutman, Mooresville, Statesville, Davidson, Cornelius, Huntersville, and the Lake Norman area." (placeholder pending client confirm) |
| 5 | No quantified trust stats | Home | Capture "X years · X projects · X★ reviews" from client records. |
| 6 | Tagline does not include a location | Home | New prototype hero adds "Troutman, Mooresville & Lake Norman" for local SEO. |
| 7 | "Free Estimate" today links to Yardbook | Home | Prototype routes both inline form and CTA to JotForm `261096626914059` per project brief. Confirm correct destination. |
