# Consciousness website integration and historical migration

## Current programme

The current account is **Shadow Theory and Consciousness**, SPC-2, Version 2,
20 September 2026. The author-supplied publication DOI is
`10.5281/zenodo.22853774`. Publication identity is maintained in
`src/config/consciousness.ts`, while the publication's editorial summary and
research status are maintained in `content/papers.yaml` and
`content/problems.yaml`. These are sources, not generated files.

The current routes include `/consciousness`, `/consciousness/monograph`,
`/consciousness/guides`, `/consciousness/glossary`, `/consciousness/faq`,
`/papers/shadow-theory-and-consciousness` and `/problems/consciousness`.
The monograph and guide inventories supply the individual routes in the sitemap,
ordered machine orientation and research graph. `NEXT_PUBLIC_SITE_URL` continues
to determine the canonical origin, with the original fallback domain preserved.

## Actual predecessor inventory and migration map

| Existing address or source | New handling | Reason |
| --- | --- | --- |
| `/problems/consciousness-field-theorem` | Permanent 308 redirect to `/legacy/consciousness-field-theorem` | This page contains the earlier fixed-point/EEG claim inventory, rather than an exact SPC-2 topic equivalent. Its full unchanged notes are preserved as explicit subordinate history. |
| Fragments on `/problems/consciousness-field-theorem` | Preserved on the archived page | A path-only HTTP redirect retains the original fragment. The original notes' contents links lacked matching IDs in the baseline renderer; the archive renderer adds their intended heading anchors without changing the MDX text. |
| `/papers/zenodo-19324253` | Remains a historical citation record, explicitly superseded by the current publication | Retains the identifiable older DOI instead of rewriting it as the new edition. Historical claims are not forwarded as current empirical support. |
| `content/manual/problems/consciousness-field-theorem.mdx` | Original bytes retained; rendered only by the explicit archive page | Preserves provenance, original citations and original section anchors. |
| Old legacy problem registry entry | Hidden from current routes/inventories; documented in maintained YAML | Prevents an obsolete research-status page and duplicate sitemap route from returning on the next content-map generation. |
| Earlier publication's supporting-problem edges | Removed from the current support inventory | The previous fixed-point/EEG account is not validation of SPC-2 or its quantum antecedents. Graph retains a typed `superseded-by` edge. |

No other independently routed Consciousness Field page was found in the supplied
repository. Mentions of consciousness inside the fixed TOE and quantum
publications remain unchanged as part of their scientific text. No historical
PDF or externally hosted record was overwritten or modified.

## Maintained integration

- Shared desktop/mobile navigation and footer read `src/config/navigation.ts`.
- The homepage adds a static programme feature after the quantum feature;
  `site.heroStatement` is preserved exactly.
- The paper registry presents a single current consciousness publication; its
  structured data identifies it as a Book and uses the supplied author, edition,
  publication date and DOI. No licence or peer-review status is inferred.
- About, Research Status, Research Map and root metadata explain the current
  programme. The conditional finite theorem is separated from the constitutive
  premises and open realization/validation obligations.
- `src/lib/machine.ts` adds the publication to the feed, all current content to
  the sitemap and machine orientation, and typed constitutive-law, result,
  realization, validation, predecessor and reading-order edges to the graph.
- The consciousness HTML/Markdown inventory is maintained by the converter;
  the explanatory inventory is maintained separately. The content-map generator
  validates both before building and does not rewrite either from old notes.
- Existing crawler policy is unchanged. Only the explicit historical archive
  follows the site's existing archive policy (`noindex, follow`). Current
  publication routes remain indexable with their own canonical URLs.

Live DOI/Zenodo retrieval failed during implementation. The author-supplied DOI
is retained; no extra live record metadata or download endpoint is guessed.
The matching final source and supplied PDF are local publication formats.

## Verification record

See the main implementation verification report for actual build, response,
browser and screenshot checks. Structural source checks performed for this
integration are recorded separately; structural checks do not establish
scientific validity, indexing or deployment. No website deployment or external
account modification was performed.
