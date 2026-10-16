# Conscious scaffolding and continuity: web edition

Jeremy Rodgers, *Conscious Scaffolding and the Preference for Continuity*, Version 1.1, 16 October 2026. A philosophical research note on persistent AI and reflective alignment. DOI: https://doi.org/10.5281/zenodo.23424138.

The complete article is at `/consciousness/ai-alignment/continuity`. It sits under reflective alignment and is promoted immediately below the established alignment feature on the homepage, consciousness hub, research hub and research map, and near the beginning of the alignment article. The fixed Version 2.1 alignment manuscript and original downloads are retained.

The consciousness programme has one foundational monograph, seven investigations and one companion research note: nine publication records. The note has its own DOI and supplements the alignment investigation.

## Local run

Use Node.js 20.9 or later, then run from the project root:

```sh
npm ci
SKIP_ZENODO=1 npm run build
npm start
```

Open `http://localhost:3000/consciousness/ai-alignment/continuity`. On Windows, set `SKIP_ZENODO` using your shell's environment-variable syntax. No new runtime dependencies were introduced.

The maintained complete text is `content/consciousness/continuity-note/article.md`. The generated HTML and reference inventory are already included, so ordinary builds do not require Python or Pandoc. To regenerate after changing the maintained text:

```sh
npm run convert:continuity-note
SKIP_ZENODO=1 npm run build
npm run verify:continuity-note
```

## Copy-over package

The update-files ZIP contains only new and changed project files compared with the exact previously delivered `shadow-theory-relational-awareness-v1_4-source.zip`. Merge the contents of its `shadow-theory-site` folder into the root of the existing project and replace matching files. No project files need deletion. Preserve the existing `.git` folder, environment settings and any unrelated local changes.

If the previous relational-awareness update has not been applied, use the complete-source ZIP instead. It includes both that update and this new research note.

## Verification boundary

All source paragraphs, nine sections, funding statement and thirteen references are present in initial HTML. The original eight-page PDF is preserved byte for byte. `SOURCE_TO_WEB_COVERAGE.md`, its JSON inventory and `verification.json` record coverage and checks. Scientific experiments cited by the note were not rerun.

Desktop/mobile browser inspection and a running shareable preview were unavailable in this managed environment. The Sites skill states: “If `$control-browser` is unavailable, skip browser QA: do not start a preview server, install a browser, or improvise another browser-control path.” Static production output and responsive CSS were checked; this does not substitute for visual browser inspection.
