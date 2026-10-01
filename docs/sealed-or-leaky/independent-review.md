# Independent conversion and scientific-scope review

Status: PASS. No actionable scientific omission or article overclaim found in the reviewed revision.

## Actual HTML checks

The independent standard-library verifier parses the authoritative source without importing or running the JavaScript converter. It compares all mathematical expressions with the actual HTML MathML annotations and checks the prose of each formal statement and proof against actual rendered HTML in source order, excluding duplicated KaTeX visual text.

- All 1,223 inline and 136 display mathematical expressions match after removing presentation wrappers, labels, equation tags and whitespace. No missing or extra expressions. This includes mathematics nested in status text, citations and formatting arguments.
- The 45 proofs, 45 formal results, 4 remarks and 1 definition have matching source bodies in the coverage manifest and matching counts and ordered prose in actual HTML.
- All 135 label anchors exist. Their numbers match the compiled LaTeX auxiliary file.
- Actual HTML display numbering matches all numbered equations through equation 69, including individual rows in all eight numbered align environments.
- All five prose tables are present: levels of conclusion 6×2; CHSH illustrations 4×5; escape routes 5×3; assumptions 13×3; result register 17×3. Counts include each header row. All mathematical arrays are included in the expression comparison.
- The original PDF, TeX and verification script match the author-supplied polished package hashes.
- The original verification script passed its executed exact checks and 300 supplementary checks. Its optional earlier-v3 comparison is unavailable, as documented in the publication.

The display count is 136: 73 bracket displays, 53 equation environments, eight align environments and two align-star environments. An earlier raw inventory counted the two title-page line spacings as displays; that inventory has been corrected. No manuscript appendices exist.

## Article and scope review

The explanatory article preserves the main exact formulas and their essential scopes: conditional no-signalling for a nominated classical readout; determinism implying single outcomes; classical isolated side information and passing-probability assumptions; Shannon versus deletion-smoothed and ordinary min-entropy; ontic preparation distributions versus pure individual states; accessible versus complete distinguishability; finite pilot predictions versus observed signals; separate pilot and massive constitutions; and the unrestricted operational-surrogate ceiling.

The quantitative article claims were checked against the original source, including the sharp Bell entropy bounds, >1304.97-bit and >39.93-bit certificate consequences, the nearly1024-bit and >39.86-bit extractor consequences, threshold rejection bound, trine constants, POVM distance identity, finite-resource errors, Gaussian-writer CHSH expression and exact reweighting budget. The new ground/unsplit account is explicitly placed at the framework level rather than attributed to these theorems.

## Reproduce

From the site directory:

```sh
python scripts/verify-sealed-leaky-independent.py --report docs/sealed-or-leaky/independent-conversion-verification.json
python public/publications/sealed-or-leaky/Sealed_or_Leaky_v3.1_Verification.py --output docs/sealed-or-leaky/independent-numerical-verification.json
```

The independent verifier's pinned hashes identify the polished source package. Its report is `independent-conversion-verification.json`. This review establishes conversion fidelity and checks the article against the supplied manuscript. It is not an independent mathematical peer review or empirical validation of the physical premises.
