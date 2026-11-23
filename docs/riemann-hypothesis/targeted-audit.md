# Version 2 transcription audit

I compared selected rendered pages of the controlling 1,061-page PDF with the checked LaTeX overlay. The PDF’s SHA-256 is `dbb02e1656b98611c49380f6f4b3af07b45e0022de5525d43d70b3aaf210a0e8`. Page numbers below are physical PDF page numbers. These checks concern the web transcription and the stated order of inputs. They do not check mathematical validity, the full Lean environment, or the primary printed literature.

## Endpoint and terminal assembly

- **Pages 6–8, Equations (1)–(8).** All eight checked expressions were visually compared to the Version 2 printed notation. Equation (1) excludes the values `−2(n+1)` for natural numbers starting at zero and separately excludes `s = 1`. Equation (6), the EC statement, excludes the trivial-character pole through the disjunction `χ ≠ 1_N or s ≠ 1`. Equation (7), the ZF statement, has no such exclusion. Section 2.4 matches the source’s split. Away from one, it uses `riemannZetaOne_eq_mul_of_ne_one` and the regularized zeta function. At one, it invokes `riemannZeta_ne_zero_of_one_le_re` for the nonvanishing of the assigned value. It does not specify a numerical value for the total function at one.
- **Pages 1038–1040, Propositions 17.3 and 17.4.** The three-field package `(Row0b(IsRecT), RecTExists, Row0b(IsRecT))` is now Equation (402). Its witnesses are still `(h,h_L,h)`. Proposition 17.4 uses the repaired linked-closure premise, displayed on page 1039. The displayed norm-choice tower `N_list, N_orig, N_A` and the explicit projection witnesses belong to the four-stage proof. Version 2 replaces the former extended line with `P_A := parametersOfExtension(N_A, SExt.none, geoCl anyGeometry)`, which fits the source page. The previous edition’s extended expression should never be used here.
- **Pages 1040–1042, Theorem 17.5.** The theorem is relative to the explicitly inventoried classical literature basis. It keeps the repaired project-internal prose, the cited literature, and the textual import scan distinct. The manuscript describes 175,187 local modules, zero missing modules and zero textual axiom, sorry, or admit declarations. No local Lean 4 elaboration or kernel typechecking was run. Preserve the separate caveat for unopened primary print publications and the specified proof order from ZF through EC to ordinary RH.

## Dense equations and dependencies

- **Pages 472–476, Proposition 7.102.** Visually checked the filtration exponents `−N` and `N+1`, the definition of `Img(n,m)`, the divisibility giving one exponent `c` for each fixed `n`, and the uniform-containment and stabilization congruences. Keep the prime on the layer dimension `d'_m`, the fixed independence of `c,y) from `m`, and the distinction between the finite quotient by `(ℓ^n,u^c)` and stabilization modulo `ℓ^n` alone. The expanded height descent in the repaired proof is part of the Version 2 text.
- **Pages 496–499, Proposition 7.114.** The stated (K_1)-fixed support-separated upgrade keeps the same weakly attached representation. The proof uses degree (f=n!), then a tower of prime-cyclic steps. Each step uses a place splitting in the lower field and ramifying in the upper one, excludes self-twists before cyclic base change, and retains the four clauses of `Carry(X)`. The statement treats (w\nmid\ell) and (w\mid\ell) separately, retaining the tied bridge in the latter.
- **Pages 872–873, Lemma 10.65.** Visually checked both the positive integer-gap inequality and the nonnegative global face inequality. The integral functional acts on the full lattice of bilinear forms. Equality of `K(ℓ(β)−Nφ(β))+h(β)` with zero requires both `ℓ(β)=Nφ(β)` and `h(β)=0`. Boundary faces are included and the same support function works at every principal level (n\ge3).

## Source tables

| Table | PDF pages | Expected web content |
| --- | --- | --- |
| 1 | 122–123 | 27 numbered fields of `LiteratureRankNHypothesis` in five columns. Column order is number, field, exact statement, manuscript prose status, citation. |
| 2 | 1035 | Seven numbered `topCovolG_alt_alt` input records. The separate table below it on the same page starts the field map. |
| 3 | 1035–1036 | 24 printed rows representing 28 fields of `PublishedHodgeBundleTheorems`. Keep the grouped rows `p2,p3,q9`, `p4,q11`, and `p25,p26`. The internally proved entries `p18,q2,q12` are explained in the caption. |
| 4 | 1042–1044 | All 14 ordered frontier branch entries `F-1` through `F-14`, with their input and discharge columns. |
| 5 | 1045–1049 | All 60 numbered fields of `UnitaryGroupThirdPlaceHypotheses`, with mathematical statement, manuscript discharge, Lean interface, and citation. |
| 6 | 1050–1053 | All 53 numbered fields of `ThetaLocalInputs`. Keep the 20 exact `[=P #k]` cross-package overlap marks in their own rows. |

Sampled source page blocks for Tables 1–6 were checked visually, including the page 1035 split between Tables 2 and 3 and the mixed prose and table regions on pages 1042 and 1045. The source verifier checks all row labels, the exact Table 6 overlap inventory, and the expected named destinations.

## Raw PDF inventory

PyMuPDF found 1,061 pages, 145 bookmarks, and 3,755 named destinations. These include 129 citation, 899 theorem-group, 397 equation, 21 footnote, and six table destinations. The PDF supplies 4,529 internal and 137 external annotations. An infinite-clip scan found no text block extending more than one PDF point past the right page edge in Version 2.

## Four glyph components in one formula

On PDF page 581, the four unidentified Computer Modern extension glyphs belong to the underbrace in the selected rank link. Their text-extraction block is `the-selected-rank-link#p-0581-b-07`. The full printed page reproduces the underbrace and its context. This is the same mathematical expression as on Version 1 page 547. Its checked LaTeX is given below for a subsequent focused overlay.

```latex
d_{s,k}=\operatorname{diag}(\underbrace{\varpi_s,\ldots,\varpi_s}_{k},1,\ldots,1),
\qquad
T_{s,k}f(g)=q_s^{-k(n-1)}\sum_{a\in K_s d_{s,k}K_s/K_s}f(ga),
\qquad 1\le k\le n.
```
