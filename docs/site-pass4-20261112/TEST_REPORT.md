# Test report, fourth pass, 12 November 2026

## What was tested

| | |
| --- | --- |
| Code tested | Commit `d214d4e` on `refine/site-pass-4`. The commit after it adds only documents. |
| How | Exported from Git into an empty folder, built, served locally, and tested in that copy. |
| Node.js | **24.22.3**, the version line your Vercel project uses, for the build and every test. |
| Machine | Linux, 2 processors, **no graphics chip**. |
| Browser | Headless Chrome for Testing 153. No other browser. |
| 3D graphics | Software rendering only (SwiftShader), about 1 to 2 frames a second. |

## Results

| Check | Result | Third pass |
| --- | --- | --- |
| Production build (Node 24) | 989 HTML routes | 989 |
| CI gate: Zenodo proposal check, metadata check, security-header tests (22), built security headers (989 routes), TypeScript | Pass | Pass |
| Atlas checks, including the live engine forced on | 126 of 126 | 126 of 126 |
| Keyboard, focus and no-JavaScript checks | 29 of 29 | 29 of 29 |
| Accessibility scan (axe-core, WCAG A and AA, includes colour contrast), 29 page views | 27 clean; the same two findings in existing content | the same |
| Larger text (150% and 200%, narrow screens), 116 page views | 116 with nothing cut off, sticking out or shortened | 116 |
| Smoke test, 505 routes at phone and desktop size (1,010 page views) | No failed pages or script errors. **Sideways scrolling: 0 pages (was 1). Formula pictures that fail to load: 0 (was 3 found; 23 files repaired).** | 1 and 3 |
| Repository verification scripts (16) ¹ | The same passes and failures as before; link counts rise with the new homepage and footer links | n/a |

¹ Run on commit `297c183`, the first commit of this pass. Later commits
changed stylesheet rules and the Atlas's picture dissolve; none of those
scripts reads either.

### What the tests caught during this pass

- **The page-entrance wrapper broke full-width pages.** The homepage and the
  Atlas lost their edge-to-edge layout, because an existing rule looked for
  them as direct children of the page. The phone layout check failed, the
  rule was corrected, and the check passes.
- **The reading trail and the question cards cut text at 200% size** on a
  phone. Both now wrap.
- **The new dissolve made phones download a second Atlas picture** (99 KB) at
  page load. The dissolve was reworked; a phone downloads one.

### Known items, unchanged

The two accessibility findings in existing content (a wide equation on
`/articles/full-shadow-model` that older browsers cannot focus by keyboard;
the "Pause motion" label on `/consciousness`), the 17 `/problems/` pages with
two `<h1>` headings, and the repository scripts that already failed on the
original site.

### Page weight

Transferred on first load, measured locally.

| Page | Third pass | This pass |
| --- | --- | --- |
| `/` desktop | 903 KB | 914 KB |
| `/` phone | 681 KB | 693 KB |
| `/atlas` desktop | 865 KB | 872 KB |
| `/atlas` phone | 630 KB | 638 KB |
| `/atlas` with the 3D engine | 1,042 KB | 1,050 KB |

The atmosphere is CSS only: no images, no scripts, no fonts were added for
it. The question threads and the trail add about 5 KB of script to every
page. Layout shift is zero on every page measured.

## What still needs a real device, browser or graphics chip

- **Live 3D speed and motion**, as in every earlier report. Unchanged scene,
  but still unmeasured on real hardware.
- **How the atmosphere looks on real screens.** The glows are faint by
  design. On a dim or low-contrast phone screen they may disappear, and on a
  very bright OLED the stars may look sharper than intended. Colour contrast
  of all text was checked and passes; the look was judged from screenshots.
- **The feel of the transitions.** Their end states and timings were checked
  (the dissolve completes in under half a second and leaves no extra
  element; the page entrance does not delay content). Whether a quarter of a
  second reads as smooth on your machine could not be judged at 1 to 2
  frames a second.
- **The reading trail** uses the browser's local storage. It was checked in
  Chrome. In a private window it stays empty and the rest of the band still
  shows.
- **Safari, Firefox, real phones and tablets, screen readers**: not run.
  One rule uses the CSS `:has()` selector, which current Safari, Firefox and
  Chrome all support; in a browser from before 2023 a long inline formula
  would scroll the page instead of its paragraph.
- **The launcher** `Preview Site 4.cmd` could not be run here (it is a
  Windows file).

## Inspiration and references

No survey of other sites was made for this pass: the design decisions came
from the site's own material and the direction in the brief. The four
reference images are still in the `Current Website` folder and were opened
in the previous pass of this session; they were not opened again for this
one, since the 3D scene they bear on did not change.
