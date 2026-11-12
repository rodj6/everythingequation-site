# Atlas interaction checks

`atlas-test.mjs` opens the built site in a headless browser and uses the
Reality Atlas the way a visitor would. It is the quickest way to know that a
change to the Atlas, its content or its views has not broken anything.

```bash
npm install --no-save puppeteer-core     # once; nothing is added to package.json
npm run build
npm run start                            # leave running
node tools/atlas-checks/atlas-test.mjs http://localhost:3000
```

Add `--live` to also start the 3D engine and check that it runs and that the
plate views draw over it. That takes a few minutes on a machine without a
graphics chip.

## What it checks

- **Structure**: one main heading, no duplicate ids, every entry in the index.
- **Stages, tours and traces**: the rail, the arrow keys, each tour steps
  through its stops, a trace steps back toward the source, addresses update.
- **Entries**: tabs, equations, connections, the back button, copy link.
- **Search**: opens with `/`, finds entries, opens the chosen one.
- **Deep links**: `focus`, `stage`, `mode`, `tour`, `trace`, `tab`,
  `aperture`, `probe`, `lens` and their settings, and the older addresses that
  must keep working.
- **The iris and the second probe**: control, keyboard shortcut, prepared
  picture, address.
- **The three views**: the switch; the Boundary summary for the default
  readings, for more frames and for second order; widening the region by
  keyboard; turning it by pressing on the plate; the History occasions and
  retention; "See it on the plate" from an entry; the gravity tour showing the
  Boundary view at its two boundary-ball stops; the two views written out as
  sections of the page.
- **Phone**: the first screen names the Atlas and offers the views and the
  tour; touch targets are large enough; nothing is wider than the screen.
- **Without 3D**: the prepared picture is chosen and everything else works.

Several checks compare exact sentences from `src/data/atlas/views.ts` (the
Boundary summary, the History occasions). If you change the features, the
reading sets or the occasions there, update the expected text in the section
of the script headed "The three views".

The script only reads the site. It changes no files.
