# Research transparency and reproducibility

<!-- Complete sealed-or-leaky web edition. Mathematical macros used below:
\status = \textbf{[#1]}\quad
\TV = \mathrm{TV}
\BC = \mathrm{BC}
\tr = \operatorname{tr}
\Prb = \mathbb P
\E = \mathbb E
\ket = \lvert#1\rangle
\bra = \langle#1\rvert
\fl = \lfloor#1\rfloor
\fr = \operatorname{fr}
\one = \mathbf1
\idm = \operatorname{id}
\cM = \mathcal M
\cE = \mathcal E
\cD = \mathcal D
\cK = \mathcal K
\cH = \mathcal H
\cC = \mathcal C
\fE = \mathfrak E
\fD = \mathfrak D
\lab = \texttt{#1}
\Dg = \Delta_{\mathrm{gas}}
\dd = \,\mathrm d
\Law = \operatorname{Law}
\fNS = f_{\mathrm{NS}}
\fQ = f_{\mathrm{Q}}
-->

<a id="paragraph-20"></a>

## Research transparency and reproducibility

  

<a id="paragraph-21"></a>

#### AI assistance.

 Drafting, calculations and revisions used AI assistance (Claude, Anthropic; OpenAI tools for technical audits and revisions, including version 3.1 and preparation of this preprint edition). AI assistance and the accompanying computational checks do not constitute independent external verification. 

<a id="paragraph-22"></a>

#### Funding and collaboration.

 The author is an independent researcher and received no external research funding for this work. Independent mathematical review, computational replication, physical implementation and empirical testing are invited, particularly where specialist expertise, equipment or institutional resources are required. 

<a id="paragraph-23"></a>

#### Computational materials.

 The accompanying `Sealed_or_Leaky_v3.1_Verification.py` uses Python 3 and the standard library. It checks finite constructions and numerical certificates with exact rational arithmetic and explicit series bounds, supplemented by reproducibly seeded numerical sanity checks. When this manuscript is adjacent under the filename `Sealed_or_Leaky_v3.1.tex`, it also checks status tags, label uniqueness, internal references and the absence of ontological terms in proofs. Comparison with the earlier version 3 premises is performed only if that earlier source is available; it is not included in this package. No experimental trial records are generated or reanalyzed. The script does not verify every proof or certify the physical assumptions. The accompanying README states how to compile the manuscript and reproduce the report.
