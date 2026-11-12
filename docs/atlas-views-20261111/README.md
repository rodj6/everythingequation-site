# Third pass: views on the plate, 11 November 2026

This pass starts from the refined site (commit `44fbb98`, branch
`refine/atlas-pass-2`) and lives on the branch `refine/atlas-pass-3`. Nothing
has been pushed, deployed or published. The original site, the first redesign
and the refined site are untouched.

Companion files in this folder:

- `REPRESENTATION_AND_SOURCES.md`: the review of how the Atlas represents the
  theory, and the source of every statement the two new views make.
- `TEST_REPORT.md`: what was tested, the results, and what could not be tested.
- `CHANGED_FILES.txt`: every file that differs from the refined site.

## What changed

### Three views of one instrument

A switch at the foot of the picture chooses between them.

- **Instrument**: the whole bench, as before.
- **Boundary**: the camera turns to the readout plate, its marks clear, and
  the galaxy shows through the glass. The rim becomes boundary data and the
  interior becomes what those readings reach.
- **History**: the same plate carries a small physical history with a
  listener inside it.

Each view has its own labelled controls in place of the stage rail, its own
reading panel, and its own address (`/atlas?lens=boundary`,
`/atlas?lens=history`). Both work with the prepared picture, so they do not
need 3D.

### The Boundary view

- **Choose the region.** A slider sets how much of the rim is read; a second
  slider, or pressing anywhere on the plate, turns the region. The part of the
  interior it reaches lights up, closed off by the curve that meets the rim at
  right angles, with the smaller balls inside it drawn faintly.
- **Choose the readings.** Three buttons: *One frame, first order*; *More
  frames*; *Second order*. They are three different changes and the panel
  says so: where the balls sit, which readings are added, and the order of
  the response.
- **Read the result.** Bright marks are settled. Faint, shifting outlines are
  left open: the readings are the same whichever version is there. Spreading
  rings mark something detected and not mapped. A sentence under "What these
  readings settle" always says the same thing in words.
- **The second-order result** is the third button: the same balls, the same
  region, and the on-shell mode that gave zero at first order is registered.
- The view is grounded in the two boundary-ball editions already on the site
  and links to them. It is data-driven, so a further set of readings can be
  added without touching drawing code.

### The History view

- A source sounds C, E and G; each reaches the listener a little later; later
  is upward. The whole history is drawn at every setting.
- A slider chooses an occasion on the listener's path (five of them, from the
  temporal-passage paper's own illustration). The drawing shows what is
  received, retained and live there, and the step that is heard.
- Retention can be switched off: the notes still arrive in order, and no step
  is held.
- There is no clock that runs by itself.

### The bench is an order of dependence

The overview used to describe light leaving the source and landing on the
plate. It now reads the bench as an order of explanation, "About this
picture" says the source is not an earlier moment, and the History view says
where time belongs.

### Ways in

- **Start from an idea**: seven items at the top of the Atlas (ground and Ω,
  fixed points and closure, CSCF, gravity and the boundary, quantum
  measurement, consciousness, time). Each opens a view, a tour or an entry.
- **Six new guided tours**: From the ground to Ω; CSCF and the spectral
  carriers; Gravity: reading the boundary; Quantum measurement; Consciousness
  and perspective; Time and the observer. The gravity and time tours switch
  to the Boundary and History views at the relevant stops.
- **"See it on the plate"** on the boundary-ball, second-order,
  temporal-passage and block-universe entries.
- **On phones** the first screen now has a subtitle, the view switch and a
  "Take the tour" button.
- **Below the instrument** the two views are also written out as ordinary
  sections (`/atlas#boundary`, `/atlas#history`).

### The picture

- A rim light from behind the source end gives the lamp, the lens ring and
  the carriers an edge against the dark.
- The marks on the plate carry a little more warm and cool colour.
- The brighter stars scintillate slowly in the live picture (still when
  motion is reduced).
- All 39 prepared pictures were re-baked (`public/atlas-stills/v3`).

### For future papers

- `ATLAS-UPDATING.md` now opens with "A new paper, end to end", has a section
  on the three views with a worked example of adding a set of readings, and
  lists the files to leave alone.
- `src/data/atlas/views.ts` holds everything the two views say and show.
- `tools/atlas-checks/` is new: one command checks the Atlas's interactions
  after a change.

No paper, article, proof, published equation, DOI, download or URL was
changed. All earlier addresses still resolve.

## How to look at it

You need Node.js 24, the version the site already requires. In PowerShell:

```
cd "everythingequation-site-atlas-3"
npm install
npm run dev
```

Then open <http://localhost:3000/atlas>. For the built version:

```
$env:SKIP_ZENODO=1; npm run build
npm run start
```

Things to try:

- The **Instrument / Boundary / History** switch under the picture.
- In Boundary: drag the "Region read" slider; press on the plate; try the
  three reading buttons; "The whole rim" in the panel.
- In History: step through the five occasions; switch retention off.
- "Start from an idea" in the panel, and the tour "Gravity: reading the
  boundary".
- `/atlas?focus=gravity-second-order`, then "See it on the plate".
- `/atlas?lens=boundary&view=2d` shows the view without 3D.

## How to apply it

Nothing is applied for you, and none of these publishes anything.

1. **From the bundle** (history of all three passes on top of your original
   commit `1c3c48e`):

   ```
   git fetch /path/to/atlas-3.bundle refine/atlas-pass-3:refine/atlas-pass-3
   git checkout refine/atlas-pass-3
   ```

2. **From a patch**: `atlas-3-on-refined.patch` applies on top of the refined
   site (`refine/atlas-pass-2`), and `atlas-3-on-original.patch` applies all
   three passes on top of the original:

   ```
   git checkout refine/atlas-pass-2
   git checkout -b refine/atlas-pass-3
   git apply --index atlas-3-on-refined.patch
   ```

3. **By copying** the folder `everythingequation-site-atlas-3` over a working
   copy.

To go back: `refine/atlas-pass-2` (the refined site),
`redesign/atlas-instrument` (the first redesign) or `main` (the original).
