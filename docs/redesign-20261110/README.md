# Site redesign and new Reality Atlas, 10 November 2026

This folder records the November 2026 update: what changed, how to look at it,
how to apply it, how it was tested and what remains open.

Nothing in this update has been published, deployed or pushed. It is a local
copy for review.

| Document | What it is |
| --- | --- |
| `README.md` (this file) | What changed, how to preview, how to apply |
| [`ATLAS_CONTENT_CHANGES.md`](ATLAS_CONTENT_CHANGES.md) | Every change to what the Atlas says, with its source |
| [`TEST_REPORT.md`](TEST_REPORT.md) | What was tested, results, what could not be tested, known limitations |
| [`CHANGED_FILES.txt`](CHANGED_FILES.txt) | Every file added, changed or removed, relative to the baseline |
| [`../../DESIGN.md`](../../DESIGN.md) | Design guide for the site and the Atlas |
| [`../../ATLAS-UPDATING.md`](../../ATLAS-UPDATING.md) | How to add or update Atlas entries |
| `screenshots/` | Before and after pictures of key pages and the Atlas |

## Baseline

The work starts from the site as it stood in the local folder
`Current Website/everythingequation-site`, which was checked to be identical
to `rodj6/everythingequation-site` on GitHub at commit `1c3c48e` ("Update").
The live site was looked at for context only; nothing was taken from it in
place of the local source.

## What changed

**The Reality Atlas** (`/atlas`) was rebuilt.

- The architecture is drawn as one optical instrument on a bench: a lamp (Ω),
  fixed optics (Tier 0), an iris (Tier 0.5), a glass cell (the canonical
  field) and a screen (Tier 1). Each part is a stage you can go to; the iris
  can be worked by hand.
- A reading panel lists what belongs to each stage and opens any entry, with
  its equations and its connections.
- Three modes: explore; guided tours (four of them); traces that follow one
  observable back toward the source.
- Every entry now states what kind of claim it makes: proved, conditional,
  construction, measured, interpretation, open or historical.
- The content grew from 59 to 108 entries by adding what the site had
  published but the Atlas did not show: the full model, the seven foundation
  papers, the spectral-carrier and CSCF papers, the five gravity papers, the
  constructive papers, Sealed or Leaky and the consciousness programme. The
  description of the canonical field was brought in line with the CSCF paper.
- The whole Atlas is also on the page as a plain index, readable without 3D
  and without JavaScript, with a filter by status.
- The picture is a prepared still at first paint and on devices that cannot
  run 3D; the live engine starts only where it can run well.
- All old addresses still work (`/atlas?focus=…`, `mode=guided`, `trace=…`,
  `tab=…`, `view=2d`).

**The rest of the site** was brought to the same standard.

- One visual system: graphite surfaces, warm text, brass for structure, one
  cool colour for anything you can act on. The blue-violet haze and glow
  effects are gone.
- Three self-hosted typefaces: Source Serif 4 for headings and all long
  reading, IBM Plex Sans for the interface, IBM Plex Mono for labels. Long
  texts are set at a comfortable size and line length.
- Header: the eleven tabs are grouped (theory, programmes, library, status)
  and the mobile menu shows them under headings with one-line descriptions.
  The footer follows the same groups.
- Homepage: a new opening with the instrument, the statement of the theory,
  a short "where to start" list, and labelled bands that give the long page
  an order. All existing sections and wording are kept.
- Section pages (Quantum Measurement, Consciousness, Source & Readout, and the
  others) keep their layouts and text; their colours, type and small labels
  were brought into the common system.
- Accessibility fixes found while testing: links in running text are now
  underlined, small labels were raised to a readable size, scrolling tables
  and code blocks can be reached from the keyboard, heading levels were
  corrected in a few places.

**Not changed:** the text of any article, paper edition, monograph chapter or
proof; any PDF, LaTeX or Markdown download; any title, DOI or citation; any
URL or redirect; the security headers policy; the build and deployment setup.

## How to preview

You need Node.js 24 (the version the site already requires).

```bash
cd everythingequation-site-redesign
npm install
npm run dev
```

Open <http://localhost:3000>. The Atlas is at <http://localhost:3000/atlas>.

For the exact production result:

```bash
npm run build
npm start
```

Things worth trying on the Atlas:

- click a part of the instrument, or a stop on the rail under it;
- drag the brass ring on the iris, or the Iris slider, and watch the screen;
- press `/` and search for "horizon" or a DOI;
- choose **Guided** and step through "The instrument in ten stops";
- choose **Trace**, pick "Gravity", and step toward the source;
- open "About this picture" (bottom left) and switch between the live and the
  still picture;
- scroll below the instrument to the index and filter it to "Proved".

## How to apply it

The redesign touches many files, so apply it with Git rather than by copying
over your working folder. That way anything you have changed since the
baseline is merged, not overwritten.

### If nothing has changed in your repository since commit `1c3c48e`

The delivered folder is a complete copy of the site. From your existing clone:

```bash
git checkout -b redesign/atlas-instrument
# copy the contents of everythingequation-site-redesign over the clone,
# except its .git folder, node_modules and .next
git status              # review what changed
git add -A
git commit -m "Site redesign and new Reality Atlas"
```

Then open a pull request, or merge into `main` when you are satisfied. The
repository's CI (build, type-check, security headers) will run on the pull
request as usual.

### If you have made newer commits

Use the patch series in `Current Website/redesign-review/redesign.patch`. It
contains the same changes as a sequence of commits and lets Git merge them
with your newer work:

```bash
git checkout -b redesign/atlas-instrument
git am --3way path/to/redesign.patch
```

If Git reports a conflict, it will name the file. `CHANGED_FILES.txt` lists
every file the redesign touches, so you can see in advance whether any of your
newer work overlaps: only overlapping files can conflict.

A Git bundle with the same commits (`redesign.bundle`) is also provided:

```bash
git fetch path/to/redesign.bundle redesign/atlas-instrument:redesign/atlas-instrument
```

### Files to watch

- `package.json` and `package-lock.json`: two unused packages were removed
  (`@react-three/fiber`, `@react-three/drei`) and `@types/three` is now listed
  explicitly. Run `npm install` after applying.
- `src/app/globals.css`, `tailwind.config.js`, `src/config/navigation.ts`,
  `src/app/layout.tsx`: the design system and navigation.
- `src/data/reality-atlas.ts`: 3D coordinates removed, statuses and tours
  added; four entries revised.
- `src/app/atlas.css` and the two old scene components were deleted.

### Before publishing

1. `npm run build` and `npx tsc --noEmit` (both pass on the delivered copy).
2. Look at `/atlas` on your own computer and on your phone. The live 3D
   picture could not be tested on a graphics chip in the environment this was
   built in (see `TEST_REPORT.md`), so your eyes are the first real test of
   its speed.
3. Publishing is your decision and your action: nothing here deploys anything.
