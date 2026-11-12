# Test report, 11 November 2026

What was tested on the redesigned site, what the results were, what could not
be tested, and what limitations remain.

## Where the tests ran

| | |
| --- | --- |
| Machine | Linux container, 2 processor cores, 8 GB memory. **No graphics chip.** |
| Browser | Headless Chromium 153, driven by Puppeteer and Playwright |
| 3D graphics | Software rendering only (SwiftShader). See "What could not be tested". |
| Node.js | 22.23 (the site asks for 24; npm prints a warning and proceeds) |
| Build | `npm ci`, then `npm run build` with `SKIP_ZENODO=1`, as the repository's CI does |
| Screen sizes | Phone 390×844 and 360×740, tablet 820×1180, laptop 1280×800, desktop 1440×900 |
| Text sizes | The browser default, and the default raised to 150% and 200% |

The automated results below are from the final build of the delivered
source: the last code commit (`38c1014`) exported from Git into an empty
folder and built there. Its packages are the ones `npm ci` installed from the
lockfile in a clean folder two commits earlier; `package.json` and the
lockfile have not changed since. After these checks only files in this folder
(`docs/redesign-20261110`: this report, the file list, the pictures) were
added or edited.

The pictures in the review folder, and the checks made by looking (quality
tiers, reduced motion, the before-and-after pages), were made two commits
earlier. The later commits only add rules for very large text; section 8
shows that pages look the same at the ordinary text size.

Where a comparison with "before" is given, the baseline (commit `1c3c48e`)
was built and served the same way on the same machine.

## Summary

| Check | Result |
| --- | --- |
| Clean install from the lockfile (`npm ci`) | Pass |
| Production build | Pass: 989 pages, the same number as before |
| Type-check (`tsc --noEmit`) | Pass, no errors |
| Repository CI gate (4 commands) | Pass |
| Atlas interaction suite (78 checks) | 78 pass |
| Old Atlas addresses and deep links | All work |
| Keyboard, focus and no-JavaScript checks (11) | 11 pass |
| Larger text, 150% and 200% (27 pages, phone and desktop width) | Nothing wider than the window or cut off in 108 of 108 page views |
| Automated accessibility scan (25 page views) | 23 clean, 2 with one finding each, both present before |
| Smoke test (505 routes × 2 sizes) | No errors; the findings listed below are in the content and were present before |
| Side-by-side with the previous tested build (23 pages × 2 sizes) | Identical, apart from one pixel in the header on phones |
| Repository verification scripts | Same results as the baseline, plus three expected change flags |
| Live 3D on a graphics chip | **Not tested** |

## 1. Build and CI gate

The commands of `.github/workflows/ci.yml`, run locally:

| Command | Result |
| --- | --- |
| `node scripts/verify-zenodo-proposal.mjs` | Pass |
| `npm run verify:metadata` | Pass |
| `npm run test:security-headers` | 22 pass, 0 fail |
| `npm run build` | 989 HTML routes, security policy installed |
| `npm run verify:security` | Verified for 989 routes |
| `npx tsc --noEmit` | No errors |

The Content-Security-Policy is unchanged. The new fonts and pictures are
served from the site itself, which the policy already allows. The live Atlas
uses no `eval`, no WebAssembly and no external request.

## 2. The Atlas

An automated script drives the page as a visitor would (`atlas-test.mjs`, kept
with the test artefacts). 78 of 78 checks pass.

**Structure**
- exactly one `<h1>`; no duplicate ids; the index lists all 108 entries.

**Explore**
- the rail changes stage and the address; the panel shows the stage; focus
  moves to the new heading;
- an entry opens with its status and status note; the three tabs work by mouse
  and by keyboard (arrow keys, Home, End); equations render (the renderer is
  fetched when the tab is first opened); connections are listed;
- `Esc` closes an entry; arrow keys move between stages.

**Search**
- `/` opens it; typing finds entries; arrow keys and Enter open one.

**Guided**
- "The instrument in ten stops" starts at stop 1 of 10; the buttons and the
  arrow keys step it; the tour picker switches tours.

**Trace**
- twelve traces listed; a trace opens at its readout end; stepping toward the
  source changes the entry; leaving the mode clears it from the address.

**Iris**
- the slider changes the setting and the address; with the still picture it
  moves between the three prepared settings and the picture follows.

**About this picture**
- opens, states the limits of the illustration, gives the reason when a still
  is shown, and lets the visitor choose the live or still picture.

**Index below the instrument**
- a link in the index opens its entry in the instrument and scrolls back up;
  the status filter shows exactly the 15 proved entries.

**Addresses** (all checked by loading them directly)

| Address | Opens |
| --- | --- |
| `/atlas?focus=measurement-programme` | the entry, at the Readout stage |
| `/atlas?focus=canonical-field` | the entry |
| `/atlas?focus=observable-horizon-entropy` | the entry |
| `/atlas?focus=gravity&tab=interfaces` | the entry on its Connections tab (old tab name) |
| `/atlas?mode=guided` | the original 26-stop tour at stop 1 |
| `/atlas?mode=trace&trace=alpha` | the fine-structure trace |
| `/atlas?focus=omega&lod=3&mode=explore` | the entry (`lod` ignored) |
| `/atlas?focus=not-a-real-id` | the overview, without an error |

**Small screens** (390, 360 and 820 wide; overview, an entry with equations, a
trace, a tour): nothing is wider than the window, the heading is visible, no
control is smaller than a comfortable touch target.

**Live picture** (forced on, in software rendering): the engine starts; the
five labels sit over their parts; clicking a part goes to its stage; dragging
the brass ring changes the iris; no errors.

**Quality tiers**: full, medium and light were each rendered at desktop,
tablet and phone sizes and looked at. Screenshots are in the review folder.

**Reduced motion**: with the browser set to reduce motion, the camera moves at
once and frames are drawn only when something changes.

**Without WebGL or a graphics chip**: the page chooses the still picture by
itself (this is what happened in every unforced test here) and everything else
works.

**Without JavaScript**: the page shows the still picture, the limits of the
illustration, the full index with statuses, summaries and links to the full
texts, and the key to the statuses. The controls do nothing, as expected.

## 3. Accessibility

**Automated scan.** axe-core, WCAG 2.0, 2.1 and 2.2 levels A and AA plus best
practices, on 25 page views (home, six Atlas states, the field guide, papers,
a paper, articles, an article, Source & Readout, a CSCF chapter, Quantum
Measurement, Consciousness, monograph, framework, problems, research map,
about, Sealed or Leaky; phone and desktop where it matters).

| | Page views with findings | Findings |
| --- | --- | --- |
| Before | 8 of 25 | 9 |
| After | 2 of 25 | 2 |

Fixed along the way: links in running text relied on colour alone (now
underlined); heading levels skipped in a few places; small link targets in the
monograph contents; scrolling code blocks and tables that the keyboard could
not reach; a card whose label hid its own text.

The two that remain were both present before:

1. Wide display equations scroll sideways on a phone, and the scrolling box is
   not a keyboard stop. Current Chrome and Firefox make such boxes reachable
   by themselves; older browsers do not.
2. On `/consciousness`, the "Pause motion" button is labelled "Pause network
   animation" for assistive technology. The repository's own browser test
   looks the button up by that label, so it was left as it is.

**Contrast**, computed from the colour tokens against the page background:
text 16.7:1, secondary text 8.4:1, faint labels 5.3:1 (4.7:1 on a raised
card), links 10.3:1, brass labels 8.5:1. All meet AA.

**Keyboard and focus.** Driven by script in the test browser, not by a person
at a keyboard: the first Tab stop is "Skip to content"; focus is always shown
by an outline at least 2px wide; Tab moves through the header, then the Atlas
mode switch, search, tools, rail and iris in that order; a dialog takes focus
when it opens and gives it back when it closes; a rail stop works with Enter;
the iris slider works with the arrow keys; the mobile menu opens from the
keyboard, shows its four groups, and Escape closes it and returns focus.
7 of 7 pass. (The Atlas suite in section 2 covers tabs, search and stepping by
keyboard as well.)

**Larger text.** The browser's default text size was raised to 150% and to
200%. This scales everything the site sizes in rem and moves its em-based
breakpoints. 27 pages (home, four Atlas states, the field guide, papers, a
paper, articles, an article, Source & Readout, a CSCF chapter, five
Consciousness pages, the monograph, four Quantum Measurement pages, research
map, framework, problems, about, Sealed or Leaky) were loaded at 390px and
1440px wide: 108 page views. In all 108 nothing is wider than the window and
no text is cut off by a box that clips it.

The first run of this check did find faults at 200% on a phone-width window:
the homepage scrolled sideways by 84px, the guided Atlas by about 200px, and
eight section pages by 30 to 280px. They were fixed (see section 8) and the
check was run again.

What this does not show: how the text-size features of phone browsers behave
on real devices (Android font scaling, zoom in iOS Safari); zooming a page on
a phone narrows the window further than was tested here; sizes above 200%;
and pages outside the 27, which rely on the same shared rules.

**Not done**: no test with a real screen reader (NVDA, JAWS, VoiceOver,
TalkBack). The structure a screen reader relies on was checked (headings,
landmarks, names, live regions); what it actually sounds like was not.

## 4. Other pages

**Looked at, before and after, at desktop and phone size**: home, papers, a
paper, articles, an article, Source & Readout, the CSCF opening and a chapter,
Quantum Measurement, Consciousness, monograph, framework, problems, research
map, about, Sealed or Leaky, the Atlas field guide. Screenshots of all of
them are in the review folder.

**Smoke test**: 505 routes sampled from the sitemap (at least one from every
section; about half of all pages), each at phone and desktop size: 1,010 page
views.

- all returned the page; no script errors; no failed equations; a heading on
  every page; the new typefaces applied everywhere.
- 17 pages under `/problems/` contain two `<h1>` headings (the page title and
  the title inside the note). This was so before.
- One page is wider than a phone screen:
  `/consciousness/block-universe/06-from-delivery-to-directed-use`, because of
  one long formula set inside a sentence. It scrolls sideways by 60px. Before
  the redesign it was 33px; the larger reading type makes the formula wider.
- Two formula pictures do not load, one on each of
  `/source-readout/detector-interfaces-companion/complete-retained-output-comparisons-and-microscopic-detector-closure`
  (`math/p004-00032.svg`) and
  `/source-readout/quantum-source-technical-companion/a-robust-dimension-witness-for-arbitrary-four-record-approximations`
  (`math/p010-00181.svg`). The files are the same on the baseline, where they
  also fail; this update does not touch publication files.
- Two things noted in an earlier run are now gone: five problem pages with
  wide tables, and `/papers/zenodo-18356771`, were wider than a phone screen
  before the redesign. A rule lets such tables scroll inside the page, and
  both now fit.

Not every one of the 989 pages was looked at by eye. The sample covers every
section and every page template.

## 5. The repository's own verification scripts

Each was run against the redesign and, where it reported anything, against the
baseline as well.

| Script | Baseline | Redesign |
| --- | --- | --- |
| `verify-gravity-editions` | Pass | Pass |
| `verify-spectral-editions` | Pass | Pass |
| `verify-sealed-leaky-http` | Pass | Pass |
| `verify-sealed-leaky-browser` (Playwright; includes home and Atlas layout) | not run | Pass |
| `verify-quantum-research-http` | not run | Pass, 370 addresses |
| `verify-consciousness-research-http` | not run | Pass |
| `verify-consciousness-research` | not run | Pass |
| `verify-alignment-discovery` | not run | Pass |
| `verify-alignment-output` | not run | Pass |
| `verify-quantum-site` | 1 failure | the same 1 |
| `verify-consciousness-site` | 3 failures | the same 3 |
| `verify-continuity-note` | 2 failures | the same 2 |
| `verify-relational-awareness` | 2 failures | the same 2 |
| `verify-website-update` | 7 failures | the same 7 |
| `verify-consciousness-browser` | stops at its first step | stops at the same step |
| `verify-paper-integration` | 186 failures | the same 186, plus 3 |

All sixteen were run again on the final build. The outcomes are the same, and
for the seven scripts that report failures the lists match the earlier run
item by item.

The failures shared with the baseline are not caused by this update. In brief:

- `verify-quantum-site`: the served `monograph.tex` does not match the recorded
  hash. The recorded hash is that of the file with Windows line endings; the
  repository holds it with Unix line endings.
- `verify-consciousness-site`: the script expects the DOI of the previous
  edition as the current one.
- `verify-continuity-note`, `verify-relational-awareness`,
  `verify-website-update`: publication counts and wording expected by older
  scripts no longer match later revisions of the site.
- `verify-consciousness-browser`: waits for the network animation to report
  that it is running, which it does not do in this headless browser.
- `verify-paper-integration`: 40 of the 186 are the same kind of hash
  comparison on publication files.

**The three new flags** in `verify-paper-integration` are change guards. That
script records the hash of `package.json`, `package-lock.json` and
`next.config.mjs` as they were when the October paper integration was
reviewed, and reports any later edit. This update edits all three on purpose:

- `package.json` and `package-lock.json`: `@react-three/fiber` and
  `@react-three/drei` removed (the new Atlas does not use them);
  `@types/three` listed explicitly.
- `next.config.mjs`: a one-year cache header for the versioned font and
  still-picture folders.

They will keep reporting until that script's baseline is refreshed, which is
your decision.

No publication file, article text or download was changed by this update:
`git diff` against the baseline is empty for `public/publications` and for
every content folder except the new `content/atlas/research.yaml`.

## 6. Page weight and loading

Measured in the test browser against a local server, first visit with an empty
cache, no network throttling. Transfer sizes are reliable; timings on a local
server only show that nothing is slow to start.

| Page | Before | After | What changed |
| --- | --- | --- | --- |
| Home, desktop | 609 KB | 830 KB | web fonts +199 KB, hero picture +51 KB, scripts 49 KB less |
| Home, phone | 430 KB | 628 KB | |
| Atlas, still picture, desktop | 775 KB | 793 KB | scripts 250 KB (were 550 KB) |
| Atlas, still picture, phone | 640 KB | 572 KB | |
| Atlas, live 3D, desktop | 775 KB | 965 KB | the 3D engine (173 KB) loads after first paint, only when used |
| Article | 583 KB | 731 KB | web fonts |
| Paper index | 592 KB | 723 KB | web fonts |
| CSCF chapter | 611 KB | 743 KB | web fonts |

- The added weight is almost entirely the three typefaces (about 220 KB on a
  typical page, including the mathematics fonts that were already there).
  They are cached for a year and do not block the first paint: text appears
  at once in a metrically matched system font and swaps.
- Layout shift measured 0.000 to 0.001 on every page.
- On the Atlas, time spent blocking the page while starting fell from about
  2.9 seconds to under 0.1 seconds in still-picture mode, because the 3D
  libraries no longer load with the page.
- First paint on the local server: 0.2 to 0.4 seconds on every page measured.

**Live 3D speed.** In software rendering the engine builds the instrument in
about 0.8 seconds and then draws one or two frames a second at desktop size.
That is unusable, and it is exactly the case in which the page shows the still
picture instead. It says nothing about speed on a graphics chip.

## 7. What could not be tested

- **Live 3D on real graphics hardware.** Frame rate, smoothness of the camera,
  heat and battery use on a laptop or phone are unknown. The engine lowers its
  own resolution and quality when frames are slow and falls back to the still
  picture if that is not enough; that logic was exercised only by forcing each
  tier, not by a slow graphics chip. **Please look at `/atlas` on your own
  computer and phone before publishing.**
- **Real phones and tablets.** Touch was emulated. Dragging the brass ring and
  looking around with a finger were not tried on a device.
- **Other browsers.** Only Chromium 153. Safari and Firefox were not run.
- **Screen readers.** See section 3.
- **The Vercel build variant.** CI builds twice, once with the Vercel adapter;
  only the standard build was run here.
- **Node.js 24.** Built on 22.23.
- **Zenodo metadata sync.** Skipped, as in CI.
- **The repository's remaining converter and audit scripts** (`convert:*`,
  `audit:*`), which rebuild content from sources. No content they produce was
  touched.

## 8. Final checks on the delivered copy

These were run last, on the final build described at the top of this report.

| Check | Result |
| --- | --- |
| Export from Git into an empty folder, then build | 989 HTML routes |
| CI gate (section 1) | Pass |
| Atlas suite, including the live engine forced on (section 2) | 78 of 78 |
| Keyboard, focus and no-JavaScript checks (sections 2 and 3) | 11 of 11 |
| Larger text (section 3) | 108 of 108 page views |
| Accessibility scan (section 3) | 23 of 25 clean, the same two findings |
| Smoke test (section 4) | 1,010 page views |
| Repository verification scripts (section 5) | Unchanged |
| Page weight (section 6) | Within 4 KB of the earlier measurement on every page |

**What changed during final testing.** The larger-text check led to one last
round of changes, all in stylesheets and class names:

- single-column card grids across the section pages may no longer grow wider
  than the page (`minmax(0, 1fr)` in place of `1fr`, 33 places);
- on the Atlas, the side padding and the type of the six rail stops follow the
  window width on narrow screens, the tour selector can shrink, and the stop
  title folds to two lines under very large text;
- the site name folds to two lines when it has no room;
- in windows narrower than 20em (a phone with text at 125% or more), a word
  longer than its line breaks, and a DOI may break anywhere.

**Side-by-side with the previous tested build.** Because those changes touch
shared rules, the final build was compared with the build before them at the
ordinary text size: 23 pages, at phone and desktop width, scrolled screen by
screen (up to 24 screens a page) and compared pixel by pixel. All 23 desktop
captures are identical. The 23 phone captures differ only in one pixel of the
header, at the end of the site name.

The comparison was needed. A first version of the long-word rule
applied at every size, and the comparison showed it breaking short labels at
ordinary sizes in three places ("FRONTMATTER" in the quantum monograph
contents, a numeral on the Quantum Measurement page, "DEVELOPMENT" in a list
on the Consciousness research page). The rule was confined to very large text
on small screens and the comparison repeated, with the result above.

One side effect is an improvement at the ordinary size: on phones 360px and
320px wide the label "Aperture" under the Atlas rail used to be cut short
with an ellipsis; all six labels now fit (checked at 320, 360 and 390px).

**The copy on your computer.** The finished folder was written from the same
Git commit that the bundle and patch carry, and then compared with it file by
file (SHA-256). The result of that comparison is in
`redesign-review/VERIFICATION.txt`, next to the delivered folder.

## 9. Known limitations

1. **Speed of the live picture is unproven** on real devices (section 7).
2. **The still picture is simpler than the live one.** No labels over the
   parts, no ray bundle or pulse in Trace mode, and three iris settings
   instead of a continuous range. Stage changes swap the picture instead of
   moving the camera.
3. **On touch screens** the instrument can be turned with a horizontal drag
   and the ring can be dragged, but there is no pinch-zoom on the instrument
   (stages are the zoom). A vertical drag scrolls the page.
4. **Fonts add about 200 KB** to a first visit (section 6).
5. **Older browsers.** The full-window Atlas layout, the full-width homepage
   opening and the index status filter use the CSS `:has()` selector (Chrome
   105, Safari 15.4, Firefox 121 or later). In older browsers those pages fall
   back to the site's normal centred column and the filter does nothing.
6. **Section pages were restyled by rule, not redesigned.** Quantum
   Measurement, Consciousness and the other programme pages keep their
   layouts. Their literal colours were converted to the new palette
   automatically and their type and small labels were normalised; a few
   headlines break onto lines differently than before. Seventeen key pages
   were compared by eye; the rest were covered by the smoke test only.
7. **Content issues that existed before** (section 4): two `<h1>` headings
   on 17 problem pages; one page with a formula wider than a phone screen,
   which the larger reading type makes 27px worse; two formula pictures that
   do not load.
8. **Atlas content not re-derived.** Four architecture entries were revised
   against the CSCF paper. The other 55 were checked for consistency of terms
   but not re-read against the twelve chapters of the reality model. Statuses
   of architecture entries were assigned by rule (see the content change
   record).
9. **The consciousness programme's place on the instrument** (the Readout
   stage) follows the site's statement that perspectives belong within the
   readout; no source assigns it a tier.
10. **Re-baking pictures.** If the look of the instrument or the list of
    sectors changes, the still pictures and the homepage picture must be baked
    again (`tools/atlas-stills/`), which needs Chrome and two extra packages.
11. **Three change flags** in `verify-paper-integration` (section 5).
12. **No site-wide search** was added. Each section keeps its own search; the
    Atlas has its own.
13. **The picture is an illustration.** It was built by hand in code, not
    produced by a physical simulation, and it is not photographic. The page
    says what it does and does not claim.
14. **Larger text was checked on 27 pages**, at 150% and 200%, in one desktop
    browser (section 3). Other pages rely on the same shared rules. Zooming a
    page on a phone was not tested and narrows the window further.
15. **Small labels in the Atlas.** The uppercase labels beside statuses, rail
    stops and captions are 10px, smaller than the 11px minimum used elsewhere
    on the site. Under the rail they shrink further on the narrowest phones
    (about 9px at 360px wide, 8px at 320px) so that all six fit. Each rail
    stop also shows its symbol, and its full name is given as a tooltip.
