# Reference Assets

Drop the approved homepage mockup PNG/JPG and the LAP logo files in this folder.

Expected files (when delivered):

- `approved-homepage-mockup.png` — canonical visual reference for the homepage
- `lap-logo.svg` (preferred) or `lap-logo.png` — vector or transparent PNG of the LAP Landscaping logo
- `lap-logo-light.svg` — optional white/cream version for dark backgrounds (footer, dark hero overlays)

## Current state

No mockup or logo file has been dropped here yet. The local prototype currently uses:

- An inline SVG mark + wordmark ("LAP Landscaping") as a temporary logo
- Real Unsplash landscape/hardscape photos as temporary imagery (documented in `LAP-Mockup-Match-Review.md`)

Once the mockup PNG and logo files are dropped here, update the prototype to:

1. Replace the inline SVG mark with the real logo file in `index.html` header and footer.
2. Use the mockup PNG side-by-side with `index.html` for visual diff during QA.
3. Replace temporary Unsplash imagery with client-supplied photography per the Content Map.

## Notes

- Local prototype scope only. Do not reference external/cloud asset URLs in production code.
- Logo file should be sized appropriately: header mark ~ 40px tall on desktop, footer mark ~ 32px tall.
- If brand color tokens come with the logo file, update `:root` color variables in `styles.css`.
