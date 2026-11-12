# Updating the Reality Atlas

How to add a paper, change an entry, add a tour or a trace, change what the
Boundary and History views say and show, and what to check afterwards. No
graphics code is involved in any of this: the Atlas places an entry by its
**stage** and **group**, never by coordinates, and the two plate views are
described by one data file.

If you are an AI model or a person integrating a new paper, start at
["A new paper, end to end"](#a-new-paper-end-to-end). It lists every step in
order and says which files to leave alone.

For the design rules of the Atlas and the rest of the site, see
[`DESIGN.md`](DESIGN.md).

## Where things live

| What | File | Format |
| --- | --- | --- |
| Entries that come from papers and articles | `content/atlas/research.yaml` | YAML, one block per entry |
| The typed architecture (Ω, Tier 0, aperture, field, sectors, observables, limits) | `src/data/reality-atlas.ts` | TypeScript objects |
| Vocabulary: tiers, stages, groups, statuses and their explanations | `src/data/atlas/schema.ts` | TypeScript |
| Paper titles, DOIs, dates, summaries | `content/papers.yaml` | YAML (already maintained) |
| Tours and observable traces | `src/data/reality-atlas.ts` (`atlasTours`, `observableRoutes`) | TypeScript |
| The Boundary and History views: text, links, feature kinds, reading sets, notes and occasions; the "Start from an idea" list; which entries offer a plate view | `src/data/atlas/views.ts` | TypeScript objects |
| How the two plate views are drawn | `src/atlas/lenses/` | TypeScript, not needed for content |
| Prepared pictures | `public/atlas-stills/v3/`, made by `tools/atlas-stills/` | not needed for content |
| Atlas interaction checks | `tools/atlas-checks/` | run after a change |
| Question threads (homepage "Start from a question", "Keep exploring" on every page) | `src/data/threads.ts` | TypeScript objects |
| The homepage statement and its central question | `src/config/site.ts` (`heroStatement`, `centralQuestion`) | text |
| How content maps onto the instrument (which entry lights which part) | `src/atlas/model.ts` | TypeScript, rarely touched |
| The 3D instrument itself | `src/atlas/engine/` | TypeScript, not needed for content |

`scripts/generate-content-maps.mjs` reads `research.yaml` and `papers.yaml` and
writes `src/generated/atlas-research.ts`. It runs automatically before
`npm run dev` and `npm run build`. Do not edit the generated file by hand.

## A new paper, end to end

The usual job: a paper has been published, and it needs its full treatment on
the site and its place in the Atlas. Do the steps in this order. Steps 1 to 3
are the site's ordinary paper workflow and are described in
[`SITE_MAINTENANCE_MANUAL.md`](SITE_MAINTENANCE_MANUAL.md) (sections 5, 5c and
20); steps 4 to 8 are the Atlas.

1. **Record the paper** in `content/papers.yaml`: slug, title, date, summary,
   role, and the Zenodo record and DOI. The DOI link, the paper page
   (`/papers/<slug>`) and the "Source" line of any Atlas entry that names the
   paper all come from this one record.
2. **Add the web edition**, if the paper has one, as chapters under
   `content/paper-integrations/<slug>/`, following an existing edition of the
   same series. Keep the paper's own equations and wording.
3. **Link it from its section page** (for example the gravity or consciousness
   landing page) the way its neighbours are linked.
4. **Add the Atlas entry** in `content/atlas/research.yaml`
   ([worked example](#add-a-paper-to-the-atlas-worked-example) below). Choose
   the weakest status that is true and write the status note from the paper's
   own statement of its assumptions.
5. **Relate it** to the entries it bears on (`relations`). Use `mathematical`
   only where the paper proves the dependence.
6. **Put it on a tour** if it belongs to one of the subject tours (`atlasTours`
   in `src/data/reality-atlas.ts`): add its id to `nodeIds` at the right place.
   The "Recent papers" tour updates itself.
7. **If the paper opens a new line of questions**, add or extend a thread in
   `src/data/threads.ts` (a question, a teaser, and three links: something to
   see, an explanation, and where it is proved). Threads appear on the
   homepage and under "Keep exploring" at the foot of every page. Most papers
   only need their link added to an existing thread, or nothing.
8. **Only if the paper changes what a plate view should show**, edit
   `src/data/atlas/views.ts` ([The three views](#the-three-views) below). Most
   papers do not.
9. **Check** ([After a content change](#after-a-content-change)).

Leave these alone: `src/atlas/engine/` (the 3D instrument), `src/atlas/lenses/`
(how the plate views are drawn), `src/generated/` (written by the build),
`public/atlas-stills/` (prepared pictures), and every existing `id`, slug and
URL. Existing papers, proofs, equations, downloads and DOIs are never edited
as part of adding a new one.

## Add a paper to the Atlas (worked example)

Suppose a new paper has been published and already has its entry in
`content/papers.yaml` with the slug `example-new-result`.

1. Open `content/atlas/research.yaml` and add a block in the section it
   belongs to:

   ```yaml
     - id: example-new-result            # the address: /atlas?focus=example-new-result
       tier: tier1                       # where it sits on the instrument (see "Tiers and stages")
       group: gravity                    # which list it appears in (see "Groups")
       paper: example-new-result         # slug in content/papers.yaml
       label: A short title for the Atlas
       eyebrow: Gravity and holography · 12 December 2026
       status: conditional               # see "Choosing a status"
       statusNote: >-
         One sentence saying what the status rests on: which assumptions are
         inputs, and what is proved once they are supplied.
       read:
         - { label: "Complete web edition", href: "/source-readout/example-new-result" }
       relations:
         - { to: gravity, label: a conditional route to, type: conceptual, note: "Why the two are related, in a few words." }
       added: "2026-12-12"
   ```

   `summary` and `description` may be left out: they are then taken from the
   paper's `role` and `summary` in `content/papers.yaml`. The title, DOI and
   date shown under "Source" always come from `papers.yaml`.

2. Run `npm run dev` and open `/atlas?focus=example-new-result`.

That is all. The reading panel, the index below the instrument, search, the
counts, the "Recent papers" tour, `llms.txt` and `graph.json` pick the entry up
by themselves.

If something is wrong, the generator stops with a message that names the entry
and the field, for example:

```
content/atlas/research.yaml · entry "example-new-result": status must be one of: theorem, conditional, construction, measured, interpretation, open, historical.
```

## Fields of an entry

| Field | Required | Meaning |
| --- | --- | --- |
| `id` | yes | Lower-case, hyphenated, unique. It is the public address (`/atlas?focus=<id>`): **never rename or reuse one.** |
| `tier` | yes | `frame`, `foundation`, `source`, `tier0`, `aperture`, `field`, `tier1`, `observable` or `recovery`. Decides the stage. |
| `group` | yes | The list the entry appears in. Must belong to the same stage as the tier. |
| `label` | yes | Title in the Atlas. |
| `shortLabel` | no | Shorter title for tight places. |
| `eyebrow` | yes | Small line above the title (series, date, or position in a sequence). |
| `paper` | no | Slug in `content/papers.yaml`. |
| `status` | yes | The kind of claim. See below. |
| `statusNote` | yes | One sentence: what the status rests on. |
| `summary` | unless `paper` supplies it | One sentence. |
| `description` | unless `paper` supplies it | A short paragraph. Blank lines start new paragraphs. |
| `note` | no | An extra remark shown under the description. |
| `read` | unless `paper` supplies it | Reading links, most important first: `{ label, href }`. Each `href` is a site path starting with `/`. With a `paper`, its web edition and paper page are used by default. |
| `relations` | no | Links to other entries: `{ to, label, type, note }`. |
| `equations` | no | `{ tag, title, tex, interpretation }`. `tex` is KaTeX. Use the paper's own equation; do not paraphrase mathematics. |
| `added` | no | ISO date the entry was added or last revised. |

### Tiers and stages

The instrument has five stages plus the overview. The tier of an entry decides
which stage it belongs to:

| Tier | Stage | Part of the instrument |
| --- | --- | --- |
| `frame`, `foundation` | Whole | (the overview) |
| `source` | Ω · Source | the lamp |
| `tier0` | Tier 0 · Law | the fixed optics |
| `aperture` | Tier 0.5 · Aperture | the iris |
| `field` | Canonical field | the glass cell |
| `tier1`, `observable`, `recovery` | Tier 1 · Readout | the readout plate |

### Groups

Groups are the headed lists inside a stage (`groupMeta` in
`src/data/atlas/schema.ts`). To add a new list, add one line there:

```ts
"my-group": { label: "Heading shown in the panel", stage: "readout", order: 16, blurb: "One line under the heading." },
```

`order` sets its position; nothing else needs to change.

### Choosing a status

The status is shown beside every entry, so a visitor never has to guess
whether something is proved. Choose the weakest one that is true.

| Status | Shown as | Use it when |
| --- | --- | --- |
| `theorem` | Proved | A mathematical result with a published proof, under the paper's hypotheses. |
| `conditional` | Conditional | The result follows once stated premises, constitutive laws or gates are supplied, and those are not derived. |
| `construction` | Construction | An explicit model, witness or typed architecture. It shows how something can be built; it does not claim nature is built that way. |
| `measured` | Measured | A computed or measured result, with its controls and limits. |
| `interpretation` | Interpretation | A philosophical or organizing account. |
| `open` | Open | A stated target or gate that has not been met. |
| `historical` | Historical | An earlier stage, superseded by current work. |

Rules that keep the Atlas honest:

- Describe what the source establishes and under which assumptions. Do not add
  findings and do not present a proposal as a result.
- `relations` of type `mathematical` are for dependences the source proves.
  Everything else is `conceptual` (a reading relationship; no theorem is
  transferred). The panel draws them differently and says so.
- Only link to work that is published on the site.
- If two sources disagree, say so in the `note`; do not pick one silently.

## Change an existing entry

- A research entry: edit its block in `content/atlas/research.yaml`.
- An architecture entry (for example `canonical-field`): edit its object in
  `src/data/reality-atlas.ts`. Add `added: "YYYY-MM-DD"` so the panel shows
  when it was revised, and record the change and its source in the change log
  (`docs/redesign-20261110/ATLAS_CONTENT_CHANGES.md` is the pattern).

To retire an entry, set `status: historical` and explain in `statusNote` what
supersedes it. Do not delete it: its address may be linked from elsewhere.

## Add a tour

In `src/data/reality-atlas.ts`, add to `atlasTours`:

```ts
{
  id: "gravity-papers",
  label: "The gravity papers",
  description: "Five papers on gravitational readouts, in reading order.",
  nodeIds: ["gravity-transport-projective", "gravity-local-horizon", "gravity-modular-transport", "gravity-boundary-balls", "gravity-second-order"],
},
```

Its address is `/atlas?mode=guided&tour=gravity-papers`. The "Recent papers"
tour needs no upkeep: it is computed from paper dates.

A stop whose entry is listed in `entryViews` (`src/data/atlas/views.ts`) shows
its plate view while the tour rests on it, and the tour returns to the whole
instrument at the next stop. To list a tour under "Start from an idea", add a
line to `atlasIdeas` in the same file.

## Add a trace

Add to `observableRoutes` in the same file. `nodeIds` run from the source to
the readout: the list must begin with `omega` and end at an observable entry
(the build checks both). The trace opens at the readout end and steps back.

## The three views

The Atlas shows one instrument in three views. **Instrument** is the whole
bench. **Boundary** and **History** look at the readout plate and draw a
diagram on its glass. Everything those two views say and show is in
`src/data/atlas/views.ts`; the code that draws them reads that file.

### What is in `views.ts`

| Export | What it controls |
| --- | --- |
| `viewMeta` | The names of the three views on the switch. |
| `boundaryView` | Title, lead, paragraphs and links of the Boundary view; the `kinds` of feature on the disc; the `features` and where they sit; the `readingSets` and what each reads. |
| `historyView` | Title, lead, paragraphs and links of the History view; the `notes`, the delays, and the `occasions` with their sentences. |
| `entryViews` | Which Atlas entries carry a "See it on the plate" button, and how the view is set when it is pressed (also used when the entry is a stop on a tour). |
| `atlasIdeas` | The "Start from an idea" list at the top of the Atlas. |

The same text is printed as ordinary sections lower on the `/atlas` page
(`#boundary` and `#history`), so it is edited once.

### Worked example: a new set of readings on the Boundary disc

This example is illustrative. The names in it are placeholders and nothing
like it should be added to the site until the paper it stands for is
published.

Suppose a paper shows that a family of reference readings taken on one
boundary ball recovers part of a kind of feature that the present readings
leave open. Three edits in `boundaryView`, all data:

1. If the paper concerns a kind of feature the disc does not have yet, add it
   to `kinds`, reusing one of the three glyphs:

   ```ts
   {
     id: "localized",
     glyph: "diamond",
     label: "Localized perturbation",
     what: "One sentence, from the paper, saying what this is and which readings reach it.",
   },
   ```

   and place one or two of them in `features`
   (`{ id: "d1", kind: "localized", x: 0.1, y: -0.2 }`; the rim is at distance 1).

2. Add the set of readings to `readingSets`:

   ```ts
   {
     id: "references",
     label: "Reference readings",
     hint: "One ball, read against a family of prepared references",
     reads: { local: "read", localized: "read" },
     says: "One or two sentences, from the paper, on what these readings settle and what they leave open.",
     source: { label: "Title of the chapter", href: "/source-readout/<slug>/<chapter>" },
   },
   ```

   `reads` lists, for each kind, `"read"` (recovered where the region
   reaches), `"detected"` (registered, not mapped) or nothing (left open). A
   third button appears, the disc redraws, the sentence under "What these
   readings settle" is composed from these words, and the address
   `/atlas?lens=boundary&readings=references` works.

3. Add the paper's Atlas entry to `links`, and, if the entry should open the
   view, add a line to `entryViews`:

   ```ts
   "example-reference-family": { view: "boundary", readings: "references", label: "See it on the plate" },
   ```

That is the whole change. No drawing code is touched. Use `"detected"` rather
than `"read"` unless the paper recovers the feature, and say in `says` what
remains open: the picture must not suggest more than the paper proves.

### Changing the History view

`notes`, `receptionDelay`, `integrationDelay` and `occasions` reproduce the
illustration in the temporal-passage paper. Each occasion has a time on the
listener's path and two sentences (with and without retention). Add, remove
or reword occasions freely; the slider, the list in the panel and the
drawing follow. `initialOccasion` is the one shown first.

### When drawing code is needed

Only for something the three glyphs and the three readings cannot express: a
new kind of mark, a new control, a new diagram. The drawing is in
`src/atlas/lenses/boundary.ts` and `history.ts`, in plain 2D canvas code that
does not involve the 3D engine. A third plate view would be a new file there
with an `evaluate…` and a `draw…` function, a branch in
`src/components/atlas/atlas-plate-layer.tsx`, a panel and controls in
`atlas-views.tsx`, and an entry in `viewMeta`. The prepared picture of the
plate is shared by every plate view, so nothing has to be re-baked.

## What is checked for you

Every build runs `certifyAtlasTopology()` (bottom of `src/data/reality-atlas.ts`).
The build fails, with a message naming the entry, if

- two entries share an id, or a relation, tour or trace names an entry that
  does not exist;
- an entry's group belongs to a different stage than its tier;
- a status is missing or not in the vocabulary, or the status note is empty;
- a summary or description is missing;
- an internal reading link is not a site path.

Counts on the page ("108 entries", status totals, equations shown, the number
of chapters and numbered equations in the source text) are computed from the
data. There is no number to update by hand.

## After a content change

```bash
npm run dev                 # look at /atlas?focus=<id>
npx tsc --noEmit            # types
npm run build               # full check, including the topology certificate
npm run start               # then, in another terminal:
node tools/atlas-checks/atlas-test.mjs http://localhost:3000
```

The last command opens the built Atlas in a headless browser and checks its
interactions: stages, tours, traces, search, deep links, the second probe, the
three views, the phone layout and the page without 3D
(`tools/atlas-checks/README.md`). The repository's own `scripts/verify-*.mjs`
checks for the section you touched still apply.

The pictures of the instrument do not depend on the entries, with one
exception: the clusters of marks on the readout plate are the entries of the
`sectors` group. If you add or remove a **sector**, re-bake the still pictures
(see `tools/atlas-stills/README.md`). Adding papers never requires it.

## Addresses that must keep working

| Address | Opens |
| --- | --- |
| `/atlas` | the overview |
| `/atlas?focus=<id>` | an entry, with the camera at its stage |
| `/atlas?stage=source\|law\|aperture\|field\|readout` | a stage |
| `/atlas?mode=guided` | the full descent tour (the original tour) |
| `/atlas?mode=guided&tour=<id>` | a named tour |
| `/atlas?mode=trace&trace=<id>` | a trace |
| `/atlas?focus=<id>&tab=equations` or `tab=connections` (`tab=interfaces` still works) | a tab of an entry |
| `/atlas?aperture=0..1` | an iris setting |
| `/atlas?probe=1` | the second probe swung in |
| `/atlas?lens=boundary` | the Boundary view; with `arc=<degrees>`, `at=<bearing>`, `readings=<set id>` |
| `/atlas?lens=history` | the History view; with `occasion=<index>`, `retain=0` |
| `/atlas#boundary`, `/atlas#history` | the two views written out as sections of the page |
| `/atlas?view=2d` | the still picture instead of live 3D |
| `/atlas?quality=high\|medium\|low` | a specific drawing quality (for testing) |

`lod=` from older links is accepted and ignored.
