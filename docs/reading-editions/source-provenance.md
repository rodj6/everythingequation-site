# Source provenance for the AdS₄ and Haar reading editions

Both supplied PDFs match their published Zenodo originals byte for byte. I downloaded the PDF from each record, matched the reported byte count and MD5, and verified SHA-256 equality with the supplied file. Zenodo lists both as CC BY 4.0 preprints with publication date 23 November 2026. Jeremy Rodgers is the recorded author. Both records leave the formal version metadata field empty.

| Work | Version DOI | Concept DOI | Pages | PDF bytes | SHA-256 |
| --- | --- | --- | ---: | ---: | --- |
| AdS₄ boundary-ball reconstruction | [10.5281/zenodo.24451446](https://doi.org/10.5281/zenodo.24451446) | 10.5281/zenodo.24451445 | 84 | 810,247 | `550e43d28dba0e10012dbf446d1e941be9ba2f93dff6cd7c6ada53e91e8e655d` |
| Haar unitary derivative moments | [10.5281/zenodo.24451371](https://doi.org/10.5281/zenodo.24451371) | 10.5281/zenodo.24451370 | 487 | 3,459,798 | `e4955088bd3bb84a7e0aac702120e640a5837ba00f86ef3619d0f6dab82245af` |

[AdS₄ record data](https://zenodo.org/api/records/24451446) · [Haar record data](https://zenodo.org/api/records/24451371)

## AdS₄ boundary-ball reconstruction

The PDF carries the title *Second-Order AdS4 Gravitational Boundary-Ball Readouts: Lorentzian Timelike Extremal Surfaces, Non-Identifiability, Localized Wavepackets, and Quadratic Reconstruction Stability* and gives the manuscript date as November 2026. The Zenodo citation title is *Single-Ball Gravitational Reconstruction in AdS₄ from Second-Order Canonical Energy*. The record supplies only `Second-Order AdS4 Gravitational Boundary-Ball.pdf`, with MD5 `6c8e842849d03215b933f9913a8ace7c`. It has no embedded attachments.

Appendix C describes six verification scripts, a driver at `reproducibility/run_all.py` and logs and receipts under `reproducibility/results/`. The Zenodo files list and workspace and title searches did not locate those accompanying files or editable LaTeX. The older `Localized_Reconstruction_Extension_v14_2026-11-10.zip` has distinct code and results for another reconstruction investigation. The older single-purpose gravity verification downloads serve their original publications. The reading edition follows the exact new PDF and preserves Appendix C’s description of the companion suite.

## Haar unitary derivative moments

The PDF title is *Planar Formulas and Microscopic Asymptotics for Derivative Moments of Haar Unitary Characteristic Polynomials*. Its subtitle identifies the complete cumulative edition and its title page dates the signed depth-one windows edition 22 November 2026. The Zenodo citation title is *Derivative Moments of Haar Unitary Characteristic Polynomials: All-Rank Resonance Cancellation, Microscopic Asymptotics, and Certified Evaluation*. The PDF was typeset when the DOI was reserved. The current public record is published. Its `HaarCritical_Complete.pdf` has MD5 `16ad328b214ca73fc6fd86e81465d769` and no embedded attachments.

The deposit also includes `HaarCritical_Public_Verification.zip`. The site serves the same 653,275 bytes at `/publications/haar-critical/HaarCritical_Public_Verification.zip`. The download matched the public MD5 `106341b0efc617c112928ae212d57be9`. Its SHA-256 is `3cc2c22f22f29c651ed2e2c2aa1ea4f45a5fb9cf7eb6bfa75c99baa16aea0b66`. ZIP integrity passed. The archive has 315 members, with 314 entries in its SHA-256 manifest. Its README documents four exact saved-ledger checks, the standalone Theorem 23.1A checker, and optional numerical regeneration. The archive supplies the verification programs and numerical receipts without manuscript LaTeX.

I extracted the public archive into a temporary directory and ran `python3 -X utf8 smoke_test.py --theorem` using Python 3.12.14 and Node.js 24.22.3. The archive checksums and all five receipt checks passed.

| Check | Outcome |
| --- | --- |
| `final_disks` | Exact JSON equality for the recombined saved dyadics |
| `shared_disks` | Exact JSON equality for the recombined saved dyadics |
| `audit_final_integers` | Exact JSON equality after normalizing relative path separators |
| `positive_controls` | Exact JSON equality after normalizing relative path separators |
| `theorem_23_1A` | Two-prime and exact-rational consistency checker reproduced the mathematical receipt |

These checks replay saved arithmetic and run the finite consistency tests. The cold source quadrature was outside this run. The manuscript contains the all-rank proof.

The nearest editable source recovered was `HaarCritical_Signed_Windows_Source.zip`. Its editable master is `HaarCritical_Complete.tex`, paired with a 481-page PDF with SHA-256 `e65aba46920ef29b3d93668a9119b2131a000fc0a09e79070cdf4c0661d7d799`. That earlier compilation lacks Theorem 23.1A and the final editorial changes. A later production handoff places the edited 163-file source tree in `Grovers Goal/release_candidate/source/` on the author's machine. The matching final source tree was unavailable in this workspace or as a public deposit attachment. The 487-page PDF controls the published reading edition.
