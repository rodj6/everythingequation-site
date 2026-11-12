# Still pictures of the Atlas instrument

The Atlas shows a prepared picture the moment the page opens, and keeps
showing it on devices that cannot run the live 3D engine (no WebGL 2, no
graphics acceleration, data-saving mode, or a visitor who chooses the still
picture). The pictures live in `public/atlas-stills/<version>/`.

They are made by `bake.mjs`, which opens the real engine in a headless Chrome
and saves what it draws: one picture per stage, in a wide and a tall shape,
with three iris openings for the stages where the iris matters, and a second
set with the probe swung in for the overview and the readout.

You only need to run it when

- the look of the instrument changes (anything in `src/atlas/engine/`), or
- the sectors drawn on the readout plate change (the `sectors` group of the Atlas data).

```bash
npm install --no-save puppeteer-core esbuild
node tools/atlas-stills/bake.mjs
```

On a machine with a graphics chip the whole set takes a minute or two. Without
one, add `ATLAS_BAKE_SOFTWARE=1` and allow about half an hour.

Browsers cache these files for a year. After a change of look, bake into a new
folder and point the site at it:

```bash
ATLAS_STILLS_VERSION=v3 node tools/atlas-stills/bake.mjs
# then set STILLS_PATH = "/atlas-stills/v3" in src/atlas/model.ts,
# update the two picture addresses in src/app/page.tsx, and delete the old folder
```

The current set is `v3`: 39 pictures. Two of them, `plate-wide` and `plate-tall`,
show the readout plate faced and clear of marks; the Boundary and History views
draw their diagrams over these. When they are baked the tool also writes
`src/atlas/lenses/plate-frames.json`, which records where the plate lies in
each picture so the diagram can be laid exactly over it. Commit that file
with the pictures.

To try one view while adjusting the look:

```bash
ATLAS_BAKE_ONE='{"name":"test","stage":"readout","aperture":0.38,"width":1280,"height":800,"probe":true}' \
  ATLAS_STILLS_VERSION=_look node tools/atlas-stills/bake.mjs
```

This tool is not part of the site build and its two extra packages are not
site dependencies.
