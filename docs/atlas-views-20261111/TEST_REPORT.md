# Test report, third pass, 11 November 2026

What was tested on this pass, the results, and what could not be tested. The
first redesign's report (`docs/redesign-20261110/TEST_REPORT.md`) describes
each kind of check in detail.

## What was tested

| | |
| --- | --- |
| Code tested | Commit `2c65edd` on `refine/atlas-pass-3`. The two commits after it add only documents. |
| How | Exported from Git into an empty folder, built, served locally, and tested in that copy. |
| Machine | Linux, 2 processors, **no graphics chip**. Node.js 22.23 (the site asks for 24). |
| Browser | Headless Chrome for Testing 153. No other browser. |
| 3D graphics | Software rendering only (SwiftShader), about 1 to 2 frames a second. |

## Results

| Check | Result | Refined site (second pass) |
| --- | --- | --- |
| Production build | 989 HTML routes | 989 |
| CI gate: Zenodo proposal check, metadata check, security-header tests (22), built security headers (989 routes), TypeScript | Pass | Pass |
| Atlas checks, including the live engine forced on | **126 of 126** | 86 of 86 |
| Keyboard, focus and no-JavaScript checks | 29 of 29 | 29 of 29 |
| Accessibility scan (axe-core, WCAG A and AA), 29 page views | 27 clean; the same two findings in existing content | 23 of 25, the same two |
| Larger text (150% and 200%, narrow screens), 116 page views | 116 with nothing cut off, sticking out or shortened | 108 of 108 |
| Smoke test, 505 routes at phone and desktop size (1,010 page views) ¹ | No failed pages, script errors or failed equations; the same known items | the same |
| Pixel comparison with the refined site, 23 pages at two sizes ¹ | 38 of 46 identical; the 8 that differ are the Atlas pages and the homepage picture | n/a |
| Repository verification scripts (16) ² | The same passes and the same failures as before; three scripts count a few more passing links | n/a |

¹ Run on commit `8ef4683`, one commit before the code tested. The difference
is one sentence fragment in the Boundary summary.
² Run on commit `fa26cca`, two commits before. The further difference is one
stylesheet rule for the view switch and two labels in the History view. None
of these scripts reads those.

### The 40 new Atlas checks

- **Views**: the switch; nothing drawn on the plate in the Instrument view;
  seven items under "Start from an idea".
- **Boundary**: opening the view updates the address, the picture and the
  panel, and moves focus to the heading; the diagram is drawn; the summary
  sentence is exact for the default readings, for more frames and for second
  order; the keyboard widens the region to the whole rim and narrows it;
  pressing on the plate turns the region toward that point; arrow keys turn
  it; a paper link opens its entry beside the view; Escape steps back out.
- **History**: the deep link opens at the published occasion; stepping later
  reaches G; switching retention off gives "no experience of succession";
  arrow keys step; five occasions are listed.
- **Entries and tours**: "See it on the plate" opens the Boundary view at
  second order with the entry still open; the gravity tour shows the Boundary
  view at its two boundary-ball stops and returns to the instrument after;
  the six subject tours are offered.
- **Page**: the two views exist as sections; a section link opens its view.
- **Phone** (390 by 844, touch emulated): the first screen has the subtitle,
  the view switch, the tour button and the stage rail; the switch and the
  tour button are at least 40px tall; the Boundary controls are on the first
  screen and nothing is wider than the screen; tapping the top of the plate
  turns the region to the top.
- **Live 3D** (software): the Boundary diagram is drawn over the live plate;
  switching to History redraws it; back on the instrument the plate is clear;
  no console errors.

These checks are now in the repository (`tools/atlas-checks/`), so they can
be run after any later change.

### One thing the tests caught

At 150% and 200% text size on a phone, the labels of the new view switch were
cut short. The switch now wraps its buttons at large text sizes, and the
larger-text check reports nothing shortened.

### Known items, unchanged

The two accessibility findings (a wide equation on
`/articles/full-shadow-model` that the keyboard cannot focus in older
browsers; the "Pause motion" label on `/consciousness`), the 17 `/problems/`
pages with two `<h1>` headings, the one page that scrolls sideways by 60px on
a phone, the two formula pictures that do not load, and the repository
scripts that already failed on the original site
(`verify-continuity-note`, `verify-relational-awareness`,
`verify-website-update`, `verify-paper-integration`, `verify-quantum-site`,
`verify-consciousness-site`, `verify-consciousness-browser`). None is in
anything this pass edits.

### Page weight

Transferred size on first load, measured locally.

| Page | Refined site | This pass |
| --- | --- | --- |
| `/` desktop | 877 KB | 903 KB |
| `/` phone | 662 KB | 681 KB |
| `/atlas` desktop | 836 KB | 865 KB |
| `/atlas` phone | 607 KB | 630 KB |
| `/atlas` with the 3D engine loaded | 1,014 KB | 1,042 KB |

The Atlas page's own code grew by about 14 KB for the two views, their
panels and controls, and its HTML by 6 KB for the two written sections. Other
pages show the same 14 KB only because the navigation link pre-loads the
Atlas page; nothing was added to them. The plate views add one picture
(165 KB on a wide screen, 99 KB on a phone, loaded only when a plate view is opened). Layout shift is zero
on every page measured. The folder of prepared pictures is 3.9 MB for 39
pictures; a visitor downloads only the one being shown.

## What could not be tested

- **Live 3D on real graphics hardware.** Still the main unknown, as in the
  last two reports. This pass adds one more light to the scene and, in the
  plate views, a flat canvas redrawn over the picture up to 30 times a second.
  Both are cheap, but neither was measured on a real laptop or phone.
  **Please look at `/atlas` on your own computer and phone before
  publishing.** `/atlas?view=2d` shows what a visitor gets if 3D is too slow.
- **Motion.** At 1 to 2 frames a second the camera's turn to the plate, the
  fading of the marks and the slow breathing of the open features could not
  be judged as motion. Their end states were checked. The star scintillation
  cannot be seen in a still picture at all; it is a slow change of up to 22%
  in the brightness of the brighter stars, and it is off when motion is
  reduced. If you do not like it, it is one line in
  `src/atlas/engine/cosmos.ts` (search for "scintillate").
- **The registration of the diagram on the live plate** was checked at one
  window size with software graphics, where it sits on the glass. It follows
  the engine's own projection every frame, so it should hold at any size and
  while looking around, but that was not seen on real hardware.
- **Real phones and tablets.** Touch was emulated. On a phone, dragging on
  the plate works sideways; an up-and-down drag scrolls the page, by design,
  so the sliders are the dependable control there. Not tried on a device.
- **Other browsers.** Only Chromium. The plate views use ordinary 2D canvas
  drawing, which Safari and Firefox support, but they were not run.
- **Screen readers.** The structure was checked: the switch and the reading
  buttons are labelled groups of pressed buttons, the sliders are native and
  carry spoken values, and the summary sentence is in a live region. What it
  sounds like in NVDA, JAWS or VoiceOver was not.
- **Node.js 24 and the Vercel build variant**, as before.

## The reference images

The four reference photographs in the `Current Website` folder were available
and were opened again for this pass: the thermostat dial, the glass light
bulb, the "Pale" bottle and the embroidery hoop. Two of them are round framed
faces with a scene inside the rim, and the plate views now work the same way:
a brass ring, glass, and a drawing that belongs to the face. In finish the
Atlas remains real-time rendering. The brass, the smoked glass and the
lighting are closer to the references than at the start of this session; the
soft shadowing, the light bending through glass and the fine surface wear of
the path-traced references are approximated, and the diagrams on the plate
are drawn flat, without the glass's own reflections passing over them.
