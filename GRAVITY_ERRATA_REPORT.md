# Gravity errata website update

Merged the overlay into `everythingequation-site-gravity-holography-update.zip`
(SHA-256 `f9cbb2b86ee7ad711eacea5939b4429f8ae7117aeaa58bf52c0a3c1a039cdd9c`).
The full replacement keeps the five-paper reading path, Atlas navigation,
existing chapter routes and anchors, and the unrelated site source.

| Reading edition | Earlier DOI | Corrected DOI |
| --- | --- | --- |
| Local Horizon Thermodynamics and Einstein Gravity | [24016009](https://doi.org/10.5281/zenodo.24016009) | [24029166](https://doi.org/10.5281/zenodo.24029166) |
| Boundary Ball Readouts and Linearized Einstein Gravity | [24019669](https://doi.org/10.5281/zenodo.24019669) | [24029188](https://doi.org/10.5281/zenodo.24029188) |

- **Local horizons, §7 (PDF p. 6).** For the screen shift
  `e_i → e_i + c_i k`, the Codazzi variation is
  `ΔC = Φ(−c₃, c₂)ᵀ`. The chapter includes the slot expansion
  `ΔC_j = c₂Φ_j3 − c₃Φ_j2`, the terms that vanish, and the unchanged
  range condition. Page 7's verification note and expanded
  Bisognano–Wichmann references are included.
- **Fixed-slice boundary balls, §5 (PDF p. 6).** The Fefferman–Graham
  field is `γ₁₂ = z³H₁₂/L²`. Its radial operator uses `−2/z`; conjugating
  by `z³` gives `+4/z` in the operator on `H₁₂`. The off-shell profile
  gives residual `−4/7`, and `t² + z²/5 + 1/3` is the corrected on-shell
  profile. The first-order blind spot, frame assumptions and limits of
  boundary state admissibility remain explicit.
- **Related references.** The first-order paper's web reference [5] cites
  the corrected horizon paper. The second-order paper's web reference [3]
  points to the corrected first-order edition. Its own original PDF and
  DOI are unchanged.
- **Publication metadata and archives.** Both corrected Zenodo records
  report publication date 2026-11-07. Both corrected DOI links are current;
  their previous versions remain linked as such. The website now serves
  the full, dedicated verification suites with their targeted checks.
  The gravity hub separately links the smaller shared errata archive and
  describes its limited scope.
- **Assets and discovery.** The overlay PDFs have different bytes from the
  two final attachments. The site serves the attachments byte for byte,
  at the existing URLs. Both attachments and both dedicated ZIPs matched
  the official downloads. The publication checksum record distinguishes the
  attachment filenames, the Zenodo filenames and the local paths. Coverage,
  complete Markdown, manifests, search, feed, sitemap, graph and `llms.txt`
  were regenerated from current source.

See `GRAVITY_VERIFICATION.md` and `docs/gravity/` for actual test evidence,
and `GRAVITY_FILE_CHANGES.json` for the exact file inventory against the
previous gravity release. The package has not been pushed or deployed.
