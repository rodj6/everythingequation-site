# Fourth pass: the site as a place, 12 November 2026

This pass starts from the third pass (commit `d5df8fa`, branch
`refine/atlas-pass-3`, folder `everythingequation-site-atlas-3`) and lives on
the branch `refine/site-pass-4`. Nothing has been pushed, deployed or
published. The original site and all three earlier passes are untouched.

Companion files: `TEST_REPORT.md` (what was tested and what was not) and
`CHANGED_FILES.txt`.

## The earlier finishing pass

The brief for this pass mentions formula-image repairs, a mobile equation fix
and wording corrections "requested in the preceding finishing pass". No such
request reached this session, and no finishing work was found in the
`Current Website` folder: `everythingequation-site-atlas-3` was exactly as
delivered. So those items were treated as unfinished:

- **Formula images: done.** 23 formula pictures in three technical
  companions contained stray control characters in their hidden text
  description, which made browsers refuse to draw them. The characters were
  removed; the drawings and the mathematics are untouched. Every formula
  picture on the site now loads.
- **Mobile equation: done.** One long formula inside a sentence made
  `/consciousness/block-universe/06-from-delivery-to-directed-use` scroll
  sideways on a phone. On narrow screens such a formula now scrolls within
  its own paragraph. No page scrolls sideways.
- **Wording corrections: not known.** Without the text of that request the
  intended corrections cannot be identified. If you send them, they are a
  small job.

## What changed

### The homepage is an entrance

- The two paragraphs after the opening were rewritten from your draft, and
  end on the question the programme keeps returning to, set large: *What can
  a readout tell us about its source?*
- **Four ways in**, directly under it: see it (the Atlas), understand it (the
  framework), check it (Source–Readout Theory), cite it (the papers).
- **Start from a question**: seven questions, each with something to see, an
  explanation in prose, and the place where it is worked out in full. For
  example: "What does a boundary know about the interior?" leads to the
  Boundary view, then the gravity and holography page, then the same-ball
  detection theorem.

### A way to keep exploring, on every page

- **Keep exploring**: at the foot of every page, the two or three question
  threads that belong with that part of the site.
- **Your trail**: under it, the last few pages you read on this device, so an
  interesting place is easy to return to. It is stored in the browser only.

### One atmosphere

- Every page now shares the Atlas's setting: a dark room with a cool light
  high on the left, the lamp's warmth low on the right, and a few fixed
  stars. Long text and equations sit on the same dark ground as before.
- The header carries a fine engraved scale, like the plate's brass ring.
- The cool light glows a little, and only where something marks a place or
  answers you: the dash before a label, a link or card under the pointer, the
  focus ring, and the central question. Text and equations never glow.
- When a page opens it eases in over a quarter of a second and a line of
  light passes once under the header. Nothing loops and nothing waits.

### The Atlas and transitions

- Prepared Atlas pictures now dissolve into one another when you change
  stage, iris, probe or view, where before they cut.
- In the Boundary view the region glides to where you send it, passing over
  features on the way, and a new diagram fades onto the plate.
- Panels and controls ease in when they change. Buttons respond to a press.
- Two speeds are used everywhere (`--dur-quick`, `--dur`), and all of it is
  off under reduced motion.
- The 3D scene itself, its lighting and materials, is as delivered in the
  third pass. This pass spent its Atlas effort on motion, transitions and the
  phone layout, which could be checked here; further changes to the scene
  need a real graphics chip to judge.

### For future papers

- `src/data/threads.ts` holds the question threads; the homepage statement
  and central question are in `src/config/site.ts`.
- `ATLAS-UPDATING.md` ("A new paper, end to end") now includes the step for
  threads; `DESIGN.md` describes the atmosphere and its rules.
- One repository check was updated: `scripts/verify-consciousness-site.mjs`
  looked for the phrase "Sealed or Leaky" in the homepage statement, which
  your new wording no longer contains. It now looks for "consciousness, time
  and agency". Sealed or Leaky is still linked from the homepage.

No paper, article, proof, equation, DOI, download or URL was changed. The
unpublished papers in the folder were not added to the site.

## How to look at it

Double-click **`Preview Site 4.cmd`** in the `Current Website` folder, then
open <http://localhost:3214/>. The first run copies the site outside
OneDrive, installs its packages and builds it, which takes several minutes;
later runs start in seconds. It needs Node.js (the site asks for version 24).

Or by hand, in PowerShell:

```
cd "everythingequation-site-4"
npm install
$env:SKIP_ZENODO=1; npm run build
npm run start
```

Things to try: the homepage from the top; a question card; any article, then
scroll to "Keep exploring" and your trail; `/atlas`, changing stage and view
to see the dissolves.

## How to apply it

None of these publishes anything.

1. **Bundle** (all four passes on top of your original commit `1c3c48e`):

   ```
   git fetch /path/to/site-4.bundle refine/site-pass-4:refine/site-pass-4
   git checkout refine/site-pass-4
   ```

2. **Patch**: `site-4-on-atlas-3.patch` on top of the third pass, or
   `site-4-on-original.patch` on top of the original:

   ```
   git checkout refine/atlas-pass-3
   git checkout -b refine/site-pass-4
   git apply --index site-4-on-atlas-3.patch
   ```

3. **Copy** the folder `everythingequation-site-4` over a working copy.

To go back, check out any earlier branch: `refine/atlas-pass-3`,
`refine/atlas-pass-2`, `redesign/atlas-instrument` or `main`.
