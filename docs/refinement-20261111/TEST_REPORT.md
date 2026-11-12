# Test report, refinement pass, 11 November 2026

What was tested on the refined site, the results, and what could not be
tested. The first redesign's report (`docs/redesign-20261110/TEST_REPORT.md`)
describes each check in more detail; this report gives the results for this
pass and compares them with that one.

## What was tested

| | |
| --- | --- |
| Code tested | Commit `633d890` on `refine/atlas-pass-2`. Later commits add only the documents in this folder. |
| How | Exported from Git into an empty folder, installed, built, served locally, and tested in that copy. |
| Machine | Linux, 2 processors, **no graphics chip**. Node.js 22.23 (the site asks for 24). |
| Browser | Headless Chrome for Testing 153. No other browser. |
| 3D graphics | Software rendering only (SwiftShader), about 1 to 2 frames a second. |

## Results

| Check | Result | First redesign |
| --- | --- | --- |
| Production build | 989 HTML routes | 989 |
| CI gate: Zenodo proposal check, metadata check, security-header tests (22), built security headers (989 routes), TypeScript | Pass | Pass |
| Atlas suite, including the live engine forced on | **86 of 86** | 78 of 78 |
| Keyboard, focus and no-JavaScript checks | 29 of 29 | 29 of 29 |
| Accessibility scan (axe-core, WCAG A and AA), 25 page views | 23 clean; the same two findings | the same |
| Larger text (200% and narrow screens), 108 page views | 108 with nothing cut off or sticking out | 108 |
| Smoke test, 505 routes at phone and desktop size (1,010 page views) | No failed pages, script errors or failed equations; the same known items | the same |
| Pixel comparison with the first redesign, 23 pages at two sizes | 36 of 46 identical; the 10 that differ are the Atlas, the homepage and the Framework page | n/a |
| Repository verification scripts (16) | The same passes and the same failures, line for line | n/a |

### The Atlas suite

The eight new checks cover the second probe: the switch is present and off by
default; turning it on updates the page address and the prepared picture; the
picture loads; the `P` key and the button in the reading panel operate the
same switch; `/atlas?stage=readout&probe=1` opens with the probe in; no script
errors. One older check was updated because the "About this picture" note has
new headings; it now confirms the five named parts are listed.

Everything the first report lists still passes: stages, tours, tracing,
search, deep links, the index of all 108 entries, the automatic choice of the
prepared picture when 3D is unavailable, and the page without JavaScript.

### The two accessibility findings

Both were present before this pass and before the redesign, and both are in
existing content, which this pass does not edit:

- `/articles/full-shadow-model` on a phone: a wide display equation scrolls
  sideways, and the scrolling box is not a keyboard stop. Current Chrome and
  Firefox make such boxes reachable by themselves; older browsers do not.
- `/consciousness`: the "Pause motion" button is labelled "Pause network
  animation" for assistive technology. The repository's own browser test
  looks the button up by that label, so it was left as it is.

### Known items in the smoke test

Unchanged from the first report: 17 pages under `/problems/` have two `<h1>`
headings; one page
(`/consciousness/block-universe/06-from-delivery-to-directed-use`) scrolls
sideways by 60px on a phone because of one long formula; two formula pictures
in the technical companions do not load, as on the original site.

### Repository scripts with failures

The same as on the first redesign and, as that report records, the same as on
the original site: `verify-continuity-note`, `verify-relational-awareness`,
`verify-website-update`, `verify-paper-integration`, `verify-quantum-site`
(1 item), `verify-consciousness-site` (3 items; 6,148 of 6,151 pass, four more
checks than before because of new links) and `verify-consciousness-browser`.
The scripts that read the Atlas, the Framework page and the homepage pass.

### Page weight

Transferred size on first load, measured locally.

| Page | First redesign | Refined |
| --- | --- | --- |
| `/` desktop | 829 KB | 877 KB |
| `/` phone | 628 KB | 662 KB |
| `/atlas` desktop | 793 KB | 836 KB |
| `/atlas` phone | 572 KB | 607 KB |
| `/atlas` with the 3D engine loaded | 965 KB | 1,014 KB |

The increase is the pictures: the galaxy has more detail than the plain dark
background it replaced, so the prepared pictures compress less (about 97 KB
for the desktop Atlas picture, 60 KB on a phone). The engine's code grew by
7 KB. Other pages are within 5 KB of their earlier weight. Layout shift is
zero on every page measured.

The folder of prepared pictures grew from 1.6 MB to 3.5 MB because there are
now 37 of them (the second-probe versions are new). A visitor downloads only
the one being shown.

## What could not be tested

- **Live 3D on real graphics hardware.** This matters more than last time,
  because the scene now draws a galaxy and several thousand stars behind the
  instrument. The galaxy is a single shader pass on a sky sphere, and the
  three quality tiers reduce the star count (9,000, 5,200, 2,600) and the
  galaxy's detail, but the frame rate on a real laptop or phone is unknown.
  The engine still lowers its own quality when frames are slow and falls back
  to the prepared picture when that is not enough; here that logic was
  exercised only by forcing each tier. **Please look at `/atlas` on your own
  computer and phone before publishing.** If it is slow, `/atlas?view=2d`
  shows what a visitor would get instead, and the tiers can be lowered in
  `src/atlas/engine/config.ts`.
- **The second probe's swing in motion.** Its two end positions were checked
  in prepared pictures and the switch was checked with the live engine forced
  on, but at 1 to 2 frames a second the movement itself could not be judged.
- **The prepared pictures were rendered in software.** They are the same
  scene the live engine draws, at fixed settings. A graphics chip may render
  fine detail (the knurling, the engraved scale) slightly differently.
- **Real phones and tablets.** Touch was emulated.
- **Other browsers.** Only Chromium. Safari and Firefox were not run.
- **Screen readers.** The structure they rely on was checked (the switch has
  a role, a name and a state; the worked example is ordinary text and
  buttons). What it sounds like in NVDA, JAWS or VoiceOver was not.
- **Node.js 24 and the Vercel build variant**, as before.

## The reference images

The four reference photographs in the `Current Website` folder were opened
again for this pass: the thermostat dial in brushed steel, the glass light
bulb, the "Pale" glass bottle and the embroidery hoop. They set the target for
materials and lighting. The Atlas is closer to them than it was: turned and
knurled brass, smoked glass that shows what lies behind it, one consistent
light. It is real-time rendering in a browser, and it does not match
path-traced renders like the light bulb, which took 1,444 samples per pixel.
Soft shadows, reflections between parts and light bending through the glass
are approximated.

## The added papers

The PDFs added to the folder were read as background. No file, Atlas entry,
download or link was added for them. The changes in this pass, compared line
by line with the first redesign, contain none of their titles or authors'
names, and the Einstein reconstruction's DOI appears nowhere in the site's
source or in the built pages.
