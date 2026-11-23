# Targeted review of the two PDF reading editions

These checks compare selected rendered source pages with the website’s transcription, markup, and publication links. They do not independently prove the mathematics or validate every candidate transcription.

## Second-Order AdS4 Gravitational Boundary-Ball Readouts

- **PDF pages 11 and 63–64.** Eight checked displays preserve the two canonical-energy representations, the positive off-shell charge–area prefactor, the sign in the second-order readout, the single-radius sign ambiguity, and the triangular Laurent coefficient reconstruction. Equation (7.32) uses equality on an open time interval (I) for two measures in the stated compact positive width class. It gives one overall sign. Equations (7.33)–(7.35) preserve each even and odd moment exponent, (R_0^8), and the (8\pi/105) and (16\pi/105) coefficients. The native proof target is `theorem.7.7`.
- **PDF pages 9, 18, 21, 30, 37, 39 and 44.** Seven named tables carry the geometric setup data, canonical-energy mode figures, lifted recovery and stability records, and localized packet data under distinct domains. Preserve the table columns, captions, and links. The selectable table transcriptions remain provisional where formulas require visual geometry.
- **PDF pages 80–84.** The tensor verification, exact symbolic sum-of-squares certificate, and companion suite are separate appendices. The source’s description of the companion suite is preserved in the web text. Only files independently identified with this publication belong under its download links.

## Planar Formulas and Microscopic Asymptotics for Derivative Moments of Haar Unitary Characteristic Polynomials

- **PDF page 8.** The finite-rank definitions use independently varying (h,s), with (Lambda_N(z)=\det(I-zU)) and the minus sign in (Lambda_N'/Lambda_N) in the expression for (S_N(z)). Positive bases use the real logarithm.
- **PDF page 179.** Equation (19.1) has the factors (N^{-s^2}c^{-2h}) on the left and (4^{-h}g_s\mathbb E(1+X_s^2)^h) on the right, on the order strip stated in the theorem. This is the shrinking-depth result, with separate hypotheses from the sharp fixed-positive-depth result.
- **PDF pages 434 and 437.** Figure 1 shows chart geometries, the overlap intervals, and representative disks. The circles are chart domains, not root uncertainty disks. Figure 2 shows the order domain and selected certified zeros at (z=0.899), with original axes, legends, and the distinction between illustrative samples and the continuum proof. Both are native PDF vector plots, with searchable labels and captions in the reading edition.
- **PDF pages 447–448.** Theorem 22.W1 uses (z=\sqrt{1-1/N}), (c=1), (h=1/2+i/8) and (s=1/2+i/20). The decimal center is (0.507915310133050-0.087481791197421i). Its sufficient radius is (0.000263562331). The exact dyadic center has radius below (0.000263562330130), modulus lower bound (0.515130486974), and relative error below (0.000511641879). These figures stay tied to that tuple and centering convention. The earlier (q_8) polynomial is a separate retained approximation. The proof target is the native `windowresult.1` destination. The text identifies a substantially higher accuracy target as an outstanding calculation.

The adjacent `checked-math.json` records eight AdS and five Haar display formulas checked directly against source glyphs. Each passed strict KaTeX compilation. The independent tests check all PDF destinations and annotations, the complete page ledger, semantic table structure, searchable chapter links, and initial server-rendered content. The exact printed math remains available in the reading pages, and mathematical copy outside the checked overlays is explicitly provisional.

## Remaining font-token candidates

Haar PDF page 118, Section 10, block `p-0118-b-05`, contains the two glyph labels `contintegraldisplay` in the provisional text. Both are the contour-integral signs in the display defining (F) and (G). The printed page lets readers verify the entire expression, including the signs and derivative:

```latex
F=\oint w\,\frac{\mathrm d\lambda}{2\pi i\lambda}
  ={}_2F_1(-s,-s;1;z^2),\qquad
G=\oint w\,\frac{\mathrm d\lambda}{2\pi i(\lambda-z)}
  =F-\frac{z}{2s}\frac{\mathrm dF}{\mathrm dz}.
```

The Haar display and inline candidates otherwise contain no raw PDF controls after the font normalization. The signed-window theorem’s detached radical is restored as verified inline MathML and LaTeX in both the HTML and Markdown.
