# Targeted PDF transcription audit

Source: the supplied 980-page PDF dated 22 November 2026, SHA-256 `bae1f777817c69c9a3ca7eac08543538547315c640a31ff24d13ac02666c3fb3`. Page numbers below are the PDF’s one-based pages. I inspected rendered portions of the pages and used text coordinates to recover the overfull line on page 970. This audit checks selected notation and the stated dependency order. The mathematical validity of the proofs, the pinned Lean environment, and the rest of the transcription are outside this audit.

The companion `checked-math.json` gives 18 checked display transcriptions, including equations (1)–(8). The `bbox` fields use PDF points in PyMuPDF’s top-down coordinates. A `tag` records the printed number separately from the formula body. In untagged cases, match the whole display by its coordinates. A single display can contain multiple original text blocks.

## Ordinary RH, EC, ZF and the value at one

**Pages 6–8, 9 and 14.** Equation (1) excludes the trivial zeros using `\neg\exists n\in\mathbb N\;s=-2(n+1)` and separately assumes `s\ne1`. The natural numbers start at zero. The conclusion is `\operatorname{Re}s=\frac12`. Definition 2.2 gives EC in (6) for all characters and uses the disjunction `\chi\ne1_N\text{ or }s\ne1`. The primitive-character statement ZF in (7) has no such disjunction.

For the primitive trivial character of modulus one, (4) gives `L(s,1_1)=\zeta(s)`. Away from one, the regularization `\zeta_1(s)=(s-1)\zeta(s)` and its nonvanishing yield the claimed nonvanishing of `\zeta(s)`. At one, the assigned value of Mathlib’s total function is nonzero by `riemannZeta_ne_zero_of_one_le_re`, as in the split in `Formalism/SharpRestriction/RamificationFrobenius/TotientGaloisClasses/Landau.lean:508--516`. The manuscript does not give a numerical value for this assignment. The analytic family zero sets discussed on pages 9 and 14 exclude the pole. Corollary 3.3 uses the pinned total-function theorem to include the value at one in ZF. Preserve the full attribution and AI assistance disclosure on page 6 as well as the shorter wording on the title page.

## Proposition 7.102

**Pages 444–448.** Keep all four layers of the statement: rational layer semistability and the two filtration bounds, uniform-height de Rham frames with conditional crystallinity, one limit frame with the quantified links, and passage to every finite-extension read model. The link condition uses a single integer `r_0\ge0`, then for every `n\ge0` an `m\ge n`. Its arguments are `\operatorname{Link}(\mathrm{bk},F_0.T,F_m.T,\Pi_m,n,r_0)`. The filtered spaces on page 444 use exponents `-N` and `N+1`.

Step 3a fixes `n` and defines `\operatorname{Img}(n,m)` for `m\ge n`. It obtains one `c` and one `y` with `\ell^n\mid\operatorname{ev}(u)^c-\tau^{2N}y` in `A_{\inf}`. Both are independent of `m`. The inclusion on page 446 is `R_n\operatorname{ev}_W(u^c\mathfrak S^{d'_n})\subseteq\operatorname{Img}(n,m)` for every `m\ge n`. The proof works with the finite quotient by `J=(\ell^n,u^c)` to obtain stabilization and then recovers stabilization modulo `\ell^n` alone. This last distinction matters. The three congruence lines, the stabilized-window congruence, and the initial definition are in the overlay. Page 447 continues with Witt-coordinate saturation, the transfers of de Rham and crystalline conditions, and the read-model argument. The source notes continue onto page 448.

## Proposition 7.114

**Pages 463–466.** The statement retains the same weakly attached `r`, requires a nonzero `K_1`-fixed vector, a recognized LLC map, and `\operatorname{mono0}(r_c(\operatorname{algNorm}(\sigma)))`. The support alternative is plain toral, or a continuous `E_w\simeq\mathbb Q_p` with `Apart` for the normalized inertial support. For `w\nmid\ell`, the equality is on every element of the specified inertia group. For `w\mid\ell`, preserve the de Rham clause, potential semistability, trivial monodromy, and equality for every tied period-ring bridge, on the same inertia group.

In Step 2, `f=n!` and `q_{w'}=q_w^{n!}=p^{n!}`. The splitting extension is realized by prime-degree Galois CM steps. At each such step there is a place `u\notin S` which splits completely in `X.K` and ramifies in `Y.K/X.K`. The four-part `Carry(X)` retains base change, scope, weak attachment of the restricted representation, and the stated split-place Satake assertion. The induction uses ramification to exclude self-twists before applying prime-cyclic base change. Keep the subsequent preservation of split-place unramifiedness and the passage from the unlinked depth-zero support to the plain-toral lift. Pages 465–466 contain the local comparisons and source notes.

## Lemma 10.65

**Pages 814–816.** One integral support function `\phi` works for every principal level `n\ge3`. Preserve the global condition on each face `\tau\subseteq\sigma` including boundary faces. The face cut is `h=(\sum_{i\in T}\psi_i)\circ\rho` on all of `\operatorname{Bilin}_{\mathbb Z}(X)`, with `h(\gamma_i)=1` for omitted rays and zero for retained rays. After establishing `-h(\beta)\le C\ell(\beta)` globally, take `K=C+CNB+1`. The integer gap on the strict orbit representatives gives the positive chain in part (c). Summing on one cone gives part (d), with equality exactly when `\ell(\beta)=N\phi(\beta)` and `h(\beta)=0`. The face majorant is `(N',\ell')=(KN,K\ell+h)`. Page 816 establishes equality only on the face and then keeps the same function under scaling of the principal-level lattice.

## Propositions 17.3 and 17.4, and Theorem 17.5

**Pages 969–972.** In (398), the first and third types are both `Row0b(IsRecT)`. The order of witnesses in `O=(h,h_L,h)` is literal. The F-13 wrapper returns its first supplied witness `h_L` unchanged. The construction uses `h_A\wedge h_M` in that component order, then applies the seven-input result of Proposition 17.2 and the endpoint of Proposition 2.3.

Proposition 17.4 uses one `c_{\mathrm{dep}}=\max(CF_0,CF_1)` and one grid. Its input `BoundAtTwoThreeFamilyFonAlt` holds for all supplied compatible `SetupAlt` witnesses, before construction of any particular setup or `HypsAlt` bundle. The proof later supplies candidates and applies the bound, then transports the twelve open clauses and the norm-link bound to the one stronger extension `\mathcal P_A`. The next stage ties functional, covolume, and large-exponent assertions to that extension. The finite conjunction and single selection come last. Preserve the single realization class and single compatible selection. The notation `A` for the grid and `\mathcal A` for the realization class distinguishes objects.

The page-970 display defining `\mathcal P_A` is overfull in the supplied PDF. Printed view and default crop-sensitive text extraction truncate the end of `anyGeometry`. The glyph stream through `x=641.96` preserves `geoCl anyGeometry`, the closing delimiter, and the terminal period. The checked transcribed display retains these glyphs. A whole-document infinite-clip scan found 28 text blocks extending more than one point beyond the nominal page edge on 17 pages. Using a crop-sensitive extraction for the main conversion can omit substantive content.

In Theorem 17.5, retain all six input discharges, including that the closed two/three bound uses `P.nLink` before any specific setup or family is constructed. The ending invokes Proposition 17.4, establishes ZF through the family and window results, applies Proposition 2.4 for EC, then Proposition 2.3 for RH. The theorem repeats the distinction between the textual import scan and a Lean 4 kernel check.

## The four unidentified brace glyphs

**Page 547, Section 8.15, `the-selected-rank-link#p-0547-b-07`.** The four CMEX10 glyphs named `bracehtipupleft`, `bracehtipdownright`, `bracehtipdownleft`, and `bracehtipupright` form one underbrace marking the first \(k\) diagonal entries. Their source text-trace bounds span x145.99–197.13 and y292.35–303.26. The PDF vector retains the whole underbrace. The checked transcription below can replace the provisional candidate in a subsequent conversion.

```latex
d_{s,k}=\operatorname{diag}(\underbrace{\varpi_s,\ldots,\varpi_s}_{k},1,\ldots,1),
\qquad
T_{s,k}f(g)=q_s^{-k(n-1)}\sum_{a\in K_s d_{s,k}K_s/K_s}f(ga),
\qquad 1\le k\le n.
```
