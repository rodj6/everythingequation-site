# Riemann Hypothesis web edition source provenance

The controlling manuscript is the 980-page PDF supplied as `The ordinary Riemann Hypothesis argument in the supplied Lean(2).pdf`. Its title page reads *The ordinary Riemann Hypothesis argument in the supplied Lean source: A mathematical reconstruction for referee checking*. The author is Jeremy Rodgers, Independent Researcher. The manuscript is dated 22 November 2026.

| Verification | Result |
| --- | --- |
| Attachment size | 6,636,091 bytes |
| Attachment SHA-256 | `bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3` |
| DOI resolution | `10.5281/zenodo.24433884` resolved to the Zenodo record with HTTP 200 |
| Zenodo status | Published, public files, resource type Preprint, publication date 22 November 2026 |
| DataCite state | `findable`. Registered 22 November 2026 at 09:37:38 UTC. |
| Deposit file | `The ordinary Riemann Hypothesis argument in the supplied Lean.pdf` is the sole recorded file |
| Deposit file identity | SHA-256 of the downloaded original matches the attachment. The reported and computed MD5 is `34868ee77c87717ca7e61045d7df376a`. |
| PDF internal structure | 980 pages, 144 bookmarks, 3,532 named destinations, zero embedded attachments |

Zenodo's deposited title is *The Riemann Hypothesis Argument of Levent Alpöge and Anthropic's Claude: A Full Human-Readable Reconstruction from Lean*. Use that wording to cite the deposited record and preserve the exact manuscript title in its reading edition. Zenodo reports a CC BY 4.0 licence.

[DOI resolver](https://doi.org/10.5281/zenodo.24433884) · [Zenodo record](https://zenodo.org/records/24433884) · [Zenodo record API](https://zenodo.org/api/records/24433884) · [DataCite DOI record](https://api.datacite.org/dois/10.5281/zenodo.24433884)

## Editable source search

- The supplied archive and its extracted site tree were checked for Riemann Hypothesis material. The site archive contains no matching RH manuscript or Lean project.
- The available workspace has the uploaded PDF and site archive. A search under `/workspace`, `/mnt`, and the expected `/home/agent/mnt` mount did not locate the Windows `C:\Users\jerem\OneDrive\Desktop\RH\RH_Referee_Manuscript` workspace or a matching `rh-main` source directory.
- Title and content searches for `RH_Referee_Manuscript`, `Riemann Hypothesis`, `RH_Exposition`, `rh-main`, `scope-and-freeze.json`, `10-assembly.tex`, and `NEON_HANDOVER` surfaced uploaded manuscript PDFs and an older `RH_Exposition_Run13_Checkpoint.zip`. The inspected checkpoint includes a 292-page earlier exposition with a different title, structure, and open branches. It cannot supply the editable source for the 980-page edition.
- Zenodo supplies the published manuscript PDF. The public deposit has no editable LaTeX, includes, bibliography source, or source asset bundle. The PDF contains no embedded files.

The checked sources establish the PDF as the authority for conversion. Manuscript-pointing metadata names the Lean input `rh-main.zip`, SHA-256 `02a2877f92f3a6579181209838e7e8de08ba472e87cf8404f56a0e4f42ed8f19`, and Mathlib revision `0df444a360eaa60ab8c11dca51a86af692955474`.

## Physical PDF page bounds

The PDF's glyph streams contain 44 text lines whose bounds extend beyond the right page edge by more than one PDF point. These occur on printed pages 123, 210, 628, 654, 655, 661, 665, 674, 784, 818, 902, 918, 919, 920, 931, 964, and 970. Reading the complete glyph stream recovers material outside the visible page. On page 970 the parameter-extension display in Proposition 17.4 ends with `SExt.none, geoCl anyGeometry).` in the glyph stream. Several fields on page 123 are entirely beyond the printed page edge.

## Attribution and verification scope

Jeremy Rodgers prepared the human-readable referee reconstruction. The manuscript credits the underlying mathematical argument to Levent Alpöge and Anthropic’s Claude. It discloses OpenAI’s GPT/Codex and Google’s Antigravity/Gemini assistance in translating Lean declarations, drafting and revising the exposition, and performing targeted consistency checks.

The manuscript reports a transitive textual scan of 175,187 local modules imported by `Main.lean` and states that it found zero missing modules and zero textual `axiom`, `sorry`, or `admit` declarations. It also reports targeted manuscript audits. It states that the full pinned environment did not receive a local Lean 4 elaboration or kernel check and that the manuscript did not receive a complete independent line-by-line review. Website conversion checks address fidelity to the source manuscript.
