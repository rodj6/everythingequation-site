# Refinement pass, 11 November 2026

This is the second pass on the redesign. It starts from the finished redesign
(commit `3550631`, branch `redesign/atlas-instrument`) and lives on the branch
`refine/atlas-pass-2`. Nothing has been pushed, deployed or published, and the
original site and the first redesign are both untouched.

Companion files in this folder:

- `CONTENT_AND_TERMINOLOGY.md`: every change of wording that touches the
  theory, with the source it follows.
- `TEST_REPORT.md`: what was tested, the results, and what could not be tested.
- `CHANGED_FILES.txt`: every file that differs from the first redesign.

## What changed

### The Atlas picture

The first version read as a product photograph of optical equipment: a dark
bench on an endless table, a flat screen in a frame, and nothing that said
"Shadow Theory". The scene was rebuilt around the theory's central claim, that
the physical world is a realized readout of a source structure.

- **The world is on the readout side.** Every view looks from the source end
  toward the readout. A spiral galaxy lies beyond the readout plate, so the
  light path ends at the world. The source end is dark with few stars, and
  nothing is drawn behind the lamp, because the theory leaves the ground
  unspecified. The galaxy is drawn procedurally (bulge and bar, two spiral
  arms, dust lanes, star-forming knots, a companion) and also lights the
  instrument faintly from behind, so the two belong to one scene.
- **The readout is a round plate of smoked glass** in a graduated brass ring,
  engraved "T1 · Readout · What an observer holds". The galaxy shows through
  it.
- **The instrument stands on a finite stone plinth** instead of an endless
  table, which removed the empty lower half of the picture.
- **A second probe was added**: a small prism on a swing arm in front of the
  plate.

### Two controls that each show one idea

- **Iris** (as before): how finely the readout resolves. Stopped down, marks
  are distinct; wide open, neighbours merge.
- **Second probe** (new): what a readout keeps. Six of the marks on the plate
  are two sources landing on one spot. No setting of the iris separates them.
  Swing the probe in and each pair divides. This is the non-equivalence and
  minimal-completion idea from the foundation papers: a readout answers a
  question exactly when the answer is the same for every source behind a given
  mark, and when it is not, a further readout that keeps the missing
  distinction settles it. The reading panel has a short worked example with
  links to the four entries it rests on.

The second probe has a switch beside the iris, a keyboard shortcut (`P`), a
place in the page address (`?probe=1`) and prepared pictures of its own, so it
works without 3D.

### Framework and terminology

- "Closure operator" for the one-step source operation is now
  "closure-generating operator", with the iteration to closure stated and the
  source equation (S2.24) added.
- The ground and Ω are explained separately and positively: the ground is what
  the theory takes as fundamental and leaves unspecified; Ω is the formation
  package where the formal construction begins.
- The Everything Equation entry is now "The Everything Equation, then and
  now": the original equation, its typed form, and the three exact
  constructions that carry its fixed-point idea today (source closure,
  canonical completion, dynamical closure). The three jobs the letter Ω has
  done are set out.
- The Framework page has a new short section, "The ground, Ω and closure",
  placed after the existing Everything Equation card. The existing text there
  was left as it was.
- Historical pages now link forward to the origins page, and stay marked as
  historical.

Details and sources are in `CONTENT_AND_TERMINOLOGY.md`.

### Writing and the wider site

- Atlas copy was rewritten to say what each thing is. The "About this picture"
  note names five parts and what each stands for, then the two controls, then
  one paragraph on how literally to take it.
- The Atlas subtitle is "Shadow Theory as one instrument, from source to
  readout."
- The homepage uses the new picture, reframed so the headline sits on the dark
  source side, and its Atlas paragraph was rewritten.
- The status key is worded more directly. Statuses themselves are unchanged.

No paper, article, proof, published equation, DOI, download or URL was
changed. All old addresses still resolve.

### The added papers

The PDFs added to the `Current Website` folder (the Einstein 1916
source–readout reconstruction, the QM/QFT manuscript, and the Cardy, BTZ, BTZ
Geometry, Brown–Henneaux and Witten papers) were read as background. Nothing
from them was copied to the site, no entry or download was added for them, and
the site does not mention them.

## How to look at it

You need Node.js 24, the version the site already requires.

```
cd everythingequation-site-refined
npm install
npm run dev
```

Then open <http://localhost:3000/atlas>. For the built version, which is what
visitors would get:

```
SKIP_ZENODO=1 npm run build
npm run start
```

On Windows PowerShell, write the first of those as
`$env:SKIP_ZENODO=1; npm run build`.

Things to try on the Atlas page:

- The stage buttons under the picture, and the iris slider.
- The **Second probe** switch, on the whole view and on the Readout stage.
- **Take the ten-stop tour**, **Trace an observable**, and search (`/`).
- `/atlas?view=2d` shows the prepared pictures only, which is what a visitor
  without working 3D sees.
- `/atlas?focus=everything-equation-schema` opens the Everything Equation
  entry.
- `/framework#ground-omega-closure` opens the new Framework section.

## How to apply it

Nothing here is applied for you. When you are satisfied, any one of these
brings the work into your repository. None of them publishes anything; the
site changes only when you push and your host rebuilds.

1. **From the bundle** (keeps the full history of both passes):

   ```
   git fetch /path/to/refinement.bundle refine/atlas-pass-2:refine/atlas-pass-2
   git checkout refine/atlas-pass-2
   ```

2. **From the patch**, on top of the first redesign:

   ```
   git checkout redesign/atlas-instrument
   git checkout -b refine/atlas-pass-2
   git apply --index refinement-on-redesign.patch
   ```

   `refinement-on-original.patch` does the same from the original site
   (commit `1c3c48e`) in one step.

3. **By copying** the folder `everythingequation-site-refined` over a working
   copy.

To go back, check out `redesign/atlas-instrument` (the first redesign) or
`main` (the original).

## Updating the Atlas later

`ATLAS-UPDATING.md` at the top of the site folder is still the guide. Two
things are new: the prepared pictures now live in `public/atlas-stills/v2/`,
and the picture tool also bakes the second-probe versions of the whole view and
the Readout stage. If you change the scene, re-bake with the command in that
guide.
