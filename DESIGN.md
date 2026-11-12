# Design guide

The visual system of everythingequation.com after the November 2026 redesign:
what the rules are, where they are set, and how to change them without
breaking the whole.

To add or edit Atlas content, see [`ATLAS-UPDATING.md`](ATLAS-UPDATING.md).

## 1. The idea

The site is a research library with one showpiece: the Reality Atlas, a
diagram of Shadow Theory built as an instrument. Light leaves a source lamp,
passes a fixed lens, an iris and a glass cell, and lands on a round glass
plate; a spiral galaxy lies beyond the plate, because in the theory the
physical world belongs to the readout. The rest of the site takes its
materials from that instrument, so the two never look like different websites.

| Material on the bench | Where it appears on the site |
| --- | --- |
| Black anodised metal, dark stone plinth | Page background and surfaces: neutral graphite, no blue tint |
| Lamp light on paper | Text: warm off-white |
| Brass scales and knobs | Structure: small labels, rules, numerals, the current tab, list markers |
| Light inside the glass cell | The one cool colour: anything you can act on (links, focus, active state) |
| Engraved marks | Monospace small capitals for labels and data |

Three rules follow from it:

1. **Light comes from content.** No coloured fog, glows or gradients behind
   text. A page is dark and quiet; what is lit is what matters.
2. **Brass marks structure, the cool colour marks action.** If it is brass you
   read it; if it is cool you can click it. Do not swap them.
3. **Status is said in words and shape before colour.** See section 6.

## 2. Tokens

Everything is driven by CSS variables at the top of `src/app/globals.css`.
Tailwind reads the same variables (`tailwind.config.js`), so a class such as
`text-mute` and a hand-written `hsl(var(--muted-foreground))` are the same
colour.

| Variable | Tailwind name | Use |
| --- | --- | --- |
| `--background` | `ink` | Page. Matches the Atlas backdrop exactly (`#08090b`). |
| `--surface` | `surface` | Cards, panels |
| `--surface-raised` | `raised` | Hover, raised card |
| `--border`, `--border-strong` | `edge`, `edge-strong` | Hairlines; stronger rule between sections |
| `--foreground` | `fg` | Text |
| `--muted-foreground` | `mute` | Secondary text (contrast 8.4:1 on the page, 7.4:1 on a raised card) |
| `--faint-foreground` | `faint` | Small labels only (5.3:1 on the page, 4.7:1 on a raised card; do not use for body text) |
| `--accent`, `--accent-strong` | `glow`, `glow-strong` | Links, focus, active controls |
| `--brass` | `brass` | Labels, rules, numerals, markers |
| `--lamp` | `lamp` | Warm highlight: the current stage, primary-button hover |
| `--violet` | `vio` | "Proved" |
| `--amber` | `amberc` | "Conditional", "Open", research status |
| `--green` | `greenc` | "Measured", recovered, verified |

To retune the site, change the numbers there. Do not introduce new hex colours
in a component: if a colour is missing, add a variable.

The section stylesheets written before the redesign (`consciousness.css`,
`programme.css`, `alignment.css` and others) still contain literal colours.
They were converted into this palette once, by rule (navy and blue-grey to
graphite, teal to the cool accent hue, violets calmed, lightness unchanged).
New work in those files should use the variables.

## 3. Type

Three families, self-hosted in `public/fonts/v1/` (SIL Open Font Licence, see
`LICENSES.md` there). They are declared once, in `globals.css`.

| Family | Variable | Use |
| --- | --- | --- |
| Source Serif 4 | `--font-serif` (`font-serif`) | Headings; all long-form reading |
| IBM Plex Sans | `--font-sans` (`font-sans`) | Interface, navigation, short text, tables |
| IBM Plex Mono | `--font-mono` (`font-mono`) | Labels, data, code |

- Headings (`h1` to `h4`) are serif everywhere, weight about 560, slightly
  tightened. Section stylesheets set sizes only.
- Long-form text uses one reading voice: serif, `--reading-size`
  (17 to 19px with the window), line height 1.72, and a column of about
  43rem (75 characters). It is applied by the MDX components
  (`src/components/mdx-components.tsx`) and to the reader containers
  (`.pi-prose`, `.quantum-publication-text`, `.c-editorial-body`, `.sr-technical`).
  Change `--reading-size` or `--reading-leading` in `:root` to adjust all of
  them at once.
- Small labels use `.section-label`: mono, 11px, wide tracking, brass. Nothing
  on the site is set below 11px.
- Mathematics is KaTeX and keeps its own fonts.

Source Serif 4 is served as the weight-only variable font (about 50 KB a
style) rather than the version that also carries an optical-size axis (about
125 KB a style): the saving on every page was judged worth more than the finer
display cut.

Fonts are cached for a year. To change a font file, put the new files in a new
folder (`public/fonts/v2/`) and update the `@font-face` rules and the two
`<link rel="preload">` lines in `src/app/layout.tsx`.

## 4. Layout and shared parts

- **Page column.** `src/app/layout.tsx` wraps every page in a centred column
  (72rem). A page that needs the whole window puts `className="page-bleed"` on
  its outermost element (the homepage and the Atlas do).
- **Header and footer.** Both read `src/config/navigation.ts`. Each tab has a
  `group`; the header separates groups with a hairline, the mobile menu and the
  footer show them under headings with a one-line `description`. Add a tab by
  adding one line there.
- **Cards.** `.card-surface` is a flat plate with a hairline border. Use
  `.card-surface-hover` for cards that are links. No drop shadows, no blur.
- **Buttons.** One primary button per view; secondary buttons have a hairline
  border. On the homepage and in the Atlas the primary fill is paper-white
  (`.home-button.is-primary`, `.atlas-button.is-primary`). Older section pages
  keep their accent-filled primary buttons.
- **Links in running text** are cool-coloured and underlined.
- **Focus** is always visible: a 2px cool outline (`:focus-visible` in
  `globals.css`). Do not remove it.
- **Breakpoints are in em** for the header, the homepage and the Atlas, so a
  reader who has raised the browser's default text size gets the roomier
  (narrow-screen) layout sooner. Older section stylesheets keep their pixel
  breakpoints.
- **Very large text on a small screen.** A window narrower than 20em (a phone
  with text at 125% or more, or a phone zoomed in) switches on two safety
  rules in `globals.css`: a word longer than its line breaks, and a DOI may
  break anywhere. Nothing changes at ordinary sizes. In the same spirit,
  single-column card grids are written `minmax(0, 1fr)`, not `1fr`, so a long
  word cannot widen the page; the site name folds to two lines; and the six
  stops of the Atlas rail cap their type against the window width
  (`min(…rem, …vw)`) so all six always fit.

## 5. Motion

- Motion explains a change of state (the camera travelling to a stage, a panel
  appearing) and then stops. Nothing loops for decoration.
- Content never waits for scroll position. The scroll-linked reveal used before
  the redesign was removed.
- `prefers-reduced-motion` is honoured everywhere: CSS transitions are
  disabled globally, and the Atlas camera moves at once, the dust stops and
  frames are drawn only when something changes.
- There is no sound anywhere on the site.

## 6. The Atlas

### What the visitor sees

- **The instrument** (left): lamp Ω, fixed lens T0, iris T0.5, field cell F and
  the readout plate T1, on a rail on a stone plinth, with the galaxy beyond the
  plate. Click a part, or a stop on the rail under it, to go to that stage.
  Drag to look around.
- **Two controls on the instrument.** The Iris slider (or the brass ring)
  opens and closes the aperture: marks on the plate merge or separate. The
  Second probe switch (`P`) swings a prism into the light: a few marks that
  stay single at every iris setting separate into pairs. Together they show
  the difference between resolution and what a readout keeps at all. The
  reading panel explains this under "What a readout keeps", with two drawings
  that do not depend on the 3D picture.
- **Three views** (the switch at the foot of the picture). *Instrument* is
  the whole bench. *Boundary* and *History* turn the camera to the readout
  plate, clear its marks and draw a diagram on the glass, with the galaxy
  showing through. Each has its own labelled controls in place of the stage
  rail, its own reading panel, and its own address.
  - **Boundary**: the rim is boundary data, the interior is what the readings
    reach. Choose how much of the rim is read and where; choose the readings
    (one frame at first order, more frames, second order). Bright marks are
    settled, faint shifting outlines are left open, spreading rings are
    detected and not mapped. A sentence under "What these readings settle"
    always says the same thing in words.
  - **History**: a source sounds three notes and a listener receives each a
    little later; later is upward. The whole history is always drawn. A marker
    on the listener's line chooses an occasion and shows what is received,
    retained and live there. Retention can be switched off.
- **The reading panel** (right, below on small screens): the entries of the
  stage in headed lists, one entry with three tabs (Overview, Equations,
  Connections), or the explanation of a plate view. The overview opens with
  "Start from an idea": seven ways in, each a view, a tour or an entry.
- **Modes**: Explore; Guided (a tour with a stepper); Trace (one observable
  followed back toward the source, with a ray bundle and a pulse on the bench).
- **Search** (`/`), **Copy link**, **Full screen**, **About this picture**.
- **Below the instrument**: what each part stands for, the Boundary and
  History views written out as sections (`#boundary`, `#history`), the whole
  Atlas as a plain index with a status filter, the key to the statuses, and
  the full model.

### Atmosphere, and the one place things glow

Every page shares the Atlas's setting: a dark room, a cool light high on
the left, the lamp's warmth low on the right, and a few fixed stars
(`.site-atmosphere` in `globals.css`). The header carries a fine engraved
scale, as the plate's brass ring does.

The cool light is allowed to glow, sparingly, and only on things that mark a
place or answer the visitor: the short dash before a label, a link or card
under the pointer, the focus ring, the line that passes under the header when
a page opens, and the central question on the homepage. Running text and
equations never glow. Two variables, `--glow` and `--glow-warm`, retune all
of it; `--dur-quick` and `--dur` set the two speeds every transition uses.

Motion is brief and happens once: a page eases in over a quarter of a second
(`src/app/template.tsx`), prepared Atlas pictures dissolve into one another,
the Boundary region glides to where it is sent. Nothing loops outside the
Atlas, nothing delays reading, and all of it is off under reduced motion.

### Ways of finding things

- **The homepage** states the idea, sets the central question large, offers
  four doors (see it, understand it, check it, cite it) and then the question
  threads.
- **Question threads** (`src/data/threads.ts`): each is a question with
  something to see, an explanation, and the place it is proved. All of them
  are on the homepage; the two or three nearest to a page appear at its foot
  under "Keep exploring".
- **Your trail**: the last few pages read on this device, listed under "Keep
  exploring" so an interesting place is easy to return to. It is kept in the
  browser only.

### Order of dependence, not of time

The bench runs from source to readout in order of explanation. The copy says
so wherever the bench is introduced, and avoids describing light as setting
out, travelling or arriving. Time belongs to the readout: it is a Tier 1
sector in the formal architecture and it is what the History view draws on
the plate. Keep that separation in any new copy.

### Why it looks the way it does

- **Every view looks from the source toward the readout.** The lamp is near
  and in the dark; the plate is far and the galaxy is behind it. The sky is
  almost empty of stars at the source end and fills toward the readout.
- **Nothing is drawn behind the lamp.** The unconditioned ground is left
  unspecified in the theory, so the picture gives the lamp no cable and no
  supply. Ω is where the mathematics starts.
- **The readout is a round plate in a graduated ring**, like a transit
  instrument, so the picture reads as an instrument for the sky and not as
  camera equipment.
- **The galaxy is procedural** (`engine/cosmos.ts`): a shader draws its light,
  arms, dust and star-forming knots per pixel, and a few thousand stars are
  drawn as points. It is also part of the reflection environment, so brass and
  glass reflect it. No image files.

### Status marks

| Status | Mark | Colour |
| --- | --- | --- |
| Proved | filled square | violet |
| Conditional | half-filled square | amber |
| Construction | open square | cool |
| Measured | filled disc | green |
| Interpretation | open disc | grey |
| Open | dashed diamond | amber |
| Historical | dash | faint |

The label is always printed beside the mark. Explanations live in `statusMeta`
(`src/data/atlas/schema.ts`) and are shown in the key and as tooltips.

### The metaphor and its limits

The bench is an illustration. "About this picture"
(`src/components/atlas/atlas-picture-note.tsx`) states what it shows and what
it does not claim, and it is shown in three places: the panel, a dialog, and
the page itself. If the instrument changes, update that text in the same
commit. In particular:

- the order is one of explanation, not of travel in time or space;
- Ω is the formation package, not the unconditioned ground;
- the points of light carry no physical meaning;
- a trace does not reconstruct a unique source.

### Live picture and still picture

The page always shows a prepared still first. The live 3D engine starts after
the first paint if the device can run it (`src/atlas/quality.ts`):

| Situation | Picture |
| --- | --- |
| No WebGL 2, or graphics drawn by the processor, or data saving on | Still |
| Low memory or two cores | Live, light (no refraction, no bloom) |
| Phones and small tablets | Live, medium (refraction at half resolution, no reflection in the plinth, fewer stars) |
| Everything else | Live, full |

While running, the engine watches its own frame pace. Below about 30 frames a
second it lowers the drawing resolution, then the tier; if it is still
unusable it falls back to the still and says why. The visitor can choose
explicitly in "About this picture", and `?view=2d` or `?quality=` in the
address does the same.

Everything except the 3D picture itself (rail, iris, panel, tours, traces,
search, index) works identically with the still. The stills are made by
`tools/atlas-stills/bake.mjs`.

### Accessibility notes for the Atlas

- The canvas is hidden from assistive technology; a live text description says
  which stage is showing and how far the iris is open.
- The rail, the iris slider, the mode switch and the panel are ordinary
  controls and lists, reachable and operable by keyboard. The labels floating
  over the instrument duplicate the rail and are skipped by the keyboard.
- Keys: `/` search, `←` `→` previous and next stage (or stop, or trace step),
  `Esc` back out, `[` `]` close and open the iris. They act only while the
  instrument is on screen and never while typing.
- Opening an entry moves focus to its heading so the text is announced.
- The index below the instrument is plain HTML rendered on the server: the
  whole Atlas is readable without WebGL and without JavaScript.

## 7. How the Atlas is built (for maintainers)

```
content/atlas/research.yaml      entries from papers                (content)
src/data/reality-atlas.ts        typed architecture, tours, traces  (content)
src/data/atlas/schema.ts         vocabulary and types
src/data/atlas/views.ts          the Boundary and History views: text, kinds, reading sets, occasions (content)
src/atlas/model.ts               content → instrument mapping, address state
src/atlas/lenses/                the two plate views (plain 2D canvas, no React, no three.js)
  plate.ts                       where the plate lies in the picture; drawing helpers
  plate-frames.json              the plate's position in the prepared pictures (written by the bake tool)
  boundary.ts  history.ts        what a choice settles (evaluate…) and the drawing (draw…)
src/atlas/quality.ts             which picture a device gets
src/atlas/engine/                the 3D instrument (plain three.js, no React)
  config.ts                      dimensions, quality tiers, backdrop colour
  engine.ts                      builds, lights, draws; the only file the interface talks to
  rig.ts                         camera stations per stage, solved for any window shape
  parts/                         bench and plinth, lamp, law optic, iris, cell, probe, screen (the readout plate)
  cosmos.ts                      the galaxy and stars beyond the readout
  materials.ts textures.ts       procedural materials (no image files)
  beam.ts readout.ts trace.ts    light, the marks on the plate (and the paired marks), trace rays
  post.ts reflection.ts environment.ts
src/components/atlas/            the interface (React)
  atlas-experience.tsx           page state and address
  atlas-stage.tsx                engine lifetime, pointer, labels, still picture
  atlas-dock.tsx                 rail, iris, second probe, tour and trace steppers
  atlas-panel.tsx                stage lists, entry view, trace chooser
  atlas-plate-layer.tsx          the canvas laid over the plate, and pressing on it
  atlas-views.tsx                view switch, controls and panels of the plate views
  atlas-view-sections.tsx        the two views as sections of the page
  atlas-search.tsx  atlas-status.tsx  atlas-index.tsx  atlas-picture-note.tsx
src/app/atlas/atlas.css          all Atlas styles
tools/atlas-stills/              bakes the still pictures
tools/atlas-checks/              interaction checks to run after a change
```

**How a plate view is drawn.** The engine turns the camera to the plate
(`setPlateView`) and reports, every frame, where the glass lies on screen
(`getPlateFrame`: a centre and two half-axes). The page lays one flat canvas
over the picture and draws the diagram through that transform, so it sits on
the glass at any window shape and follows the camera. With a prepared picture
the same numbers come from `plate-frames.json`. One drawing therefore serves
live 3D, the still picture and reduced motion, and a new diagram needs no
shader, no texture and no re-bake.

Content never refers to graphics and graphics never refer to content. The only
bridge is `src/atlas/model.ts`.

The engine has no assets: every texture is drawn in code, so there are no
models or images to license or load. Its three.js chunk is loaded only on
`/atlas`, after first paint, and only when the live picture will be used.

## 8. Do and do not

Do

- use the tokens and the three families;
- give every Atlas entry a status and a one-sentence status note;
- keep full texts full: summaries link to them, they do not replace them;
- test a new page at 390px, 820px and 1440px, with the keyboard, and with
  reduced motion.

Do not

- add glows, gradient text, glass blur or scroll-triggered animation;
- set text below 11px, or body text in `--faint-foreground`. The one
  exception is the Atlas's uppercase mono micro-labels (rail stops, status
  words, small captions), which are 10px so that they fit beside the text
  they label;
- use colour alone to carry meaning;
- let the instrument imply a physical claim: if a new visual effect could be
  read as one, say what it is in "About this picture";
- call the Atlas photorealistic or the result of a physical simulation. It is
  a hand-built illustration.
