# Section 2 transcription fixture

This separately checked transcription covers Section 2 on printed pages 6–8 of the controlling 980-page PDF. It supports comparisons of prose, Lean paths, inline notation, and numbered displays. The renderer generates its chapters from the PDF and does not use this file.

## 2 The precise target and the endpoint reduction

### 2.1 Conventions and established analytic inputs

We write $\zeta$ for the continued Riemann zeta function and $L(s,\chi)$ for the continued Dirichlet $L$-function of a character $\chi$ modulo a positive integer $N$. For positive real $x$ we use $x^s=\exp(s\log x)$ with the real logarithm. The Lean functions are total functions: a value is assigned even at a pole. All substantive applications below either avoid the pole or explicitly retain the source’s convention at it.

The exact target definition in `Mathlib/NumberTheory/LSeries/RiemannZeta.lean:185--186` is the following proposition:

$$
\forall s\in\mathbb C,\qquad \zeta(s)=0,\quad \neg\exists n\in\mathbb N\;s=-2(n+1),\quad s\ne1\quad\Longrightarrow\quad\operatorname{Re}s=\frac12.\tag{1}
$$

The quantified $n$ starts at zero, so the excluded values are exactly $-2,-4,-6,\ldots$. No restriction to the critical strip has been silently inserted.

We use the following established analytic results in their precise forms. Each is a theorem in the pinned source; the source paths and names identify the exact version being cited.

(i) $\zeta(0)=-1/2$: `riemannZeta_zero`, `Mathlib/NumberTheory/LSeries/RiemannZeta.lean:151--152`.

(ii) If $w\ne-n$ for every $n\in\mathbb N$ and $w\ne1$, then

$$
\zeta(1-w)=2(2\pi)^{-w}\Gamma(w)\cos(\pi w/2)\zeta(w).\tag{2}
$$

This is `riemannZeta_one_sub` in the same file, lines 178–180. The displayed identity, rather than the informal comment preceding it in that file, fixes the normalization.

(iii) $\Gamma(w)\ne0$ for $\operatorname{Re}w>0$: `Complex.Gamma_ne_zero_of_re_pos`, `Mathlib/Analysis/SpecialFunctions/Gamma/Beta.lean:454--457`.

(iv) For $z\in\mathbb C$,

$$
\cos z=0\quad\Longleftrightarrow\quad\exists k\in\mathbb Z\;z=(2k+1)\pi/2.\tag{3}
$$

This is `Complex.cos_eq_zero_iff`, `Mathlib/Analysis/SpecialFunctions/Trigonometric/Complex.lean:33--42`.

(v) For the character modulo one,

$$
L(s,1_1)=\zeta(s)\qquad (s\in\mathbb C).\tag{4}
$$

This equality of the total functions is `DirichletCharacter.LFunction_modOne_eq`, `Mathlib/NumberTheory/LSeries/DirichletContinuation.lean:67--69`.

For the elementary nonvanishing of $(2\pi)^{-w}$ we need only $2\pi>0$ and the exponential formula above: an exponential is nonzero. This checks the same nonzero-base condition used by `Complex.cpow_ne_zero_iff` in the source.

### 2.2 The functional-equation argument

**Proposition 2.1.** *Suppose*

$$
\forall w\in\mathbb C,\qquad\operatorname{Re}w>\frac12,\quad w\ne1\quad\Longrightarrow\quad\zeta(w)\ne0.\tag{5}
$$

*Then the Riemann Hypothesis in (1) holds.*

*Source:* `Formalism/GammaFactorNonvanishing/RhOfRight.lean:5--62`; `Formalism.VW.rh_of_right`.

*Proof.* Let $s$ satisfy the three hypotheses on the left of (1). If $\operatorname{Re}s>1/2$, (5) contradicts $\zeta(s)=0$. If $\operatorname{Re}s=1/2$, the conclusion already holds. It remains to exclude $\operatorname{Re}s<1/2$.

First $s\ne0$, since otherwise $\zeta(s)=-1/2$ by (i). Set $w=1-s$. Then $\operatorname{Re}w=1-\operatorname{Re}s>1/2$ and $w\ne1$. For every $n\in\mathbb N$, the real part of $-n$ is nonpositive, whereas $\operatorname{Re}w>0$; hence $w\ne-n$. These verify every hypothesis of (ii), so (2) applies. Its left side is zero.

The factors $2$ and $(2\pi)^{-w}$ are nonzero. The factor $\Gamma(w)$ is nonzero by (iii), since $\operatorname{Re}w>0$. The factor $\zeta(w)$ is nonzero by (5), since $\operatorname{Re}w>1/2$ and $w\ne1$. To handle the remaining factor, suppose $\cos(\pi w/2)=0$. By (iv), $\pi w/2=(2k+1)\pi/2$ for an integer $k$. Cancelling the nonzero real number $\pi$ gives $w=2k+1$, and therefore $s=-2k$. If $k<0$, then $k\le-1$ and $\operatorname{Re}s=-2k\ge2$, contrary to $\operatorname{Re}s<1/2$. If $k=0$, then $s=0$, already excluded. If $k>0$, set $n=k-1\in\mathbb N$; then $s=-2(n+1)$, contrary to the nontrivial-zero hypothesis. Thus the cosine factor is also nonzero. The right side of (2) is consequently a product of nonzero complex numbers, contradicting its zero left side. This excludes the remaining case. $\square$

**Definition 2.2.** Write EC for the statement

$$
\forall N\ge1\;\forall\chi\bmod N\;\forall s\in\mathbb C,\quad\operatorname{Re}s>\frac12,\quad(\chi\ne1_N\text{ or }s\ne1)\quad\Longrightarrow\quad L(s,\chi)\ne0.\tag{6}
$$

This is exactly `UpperTheory.EveryCharacter` in `Development/AutomorphicArithmetic/CharacterBoxes/EveryCharacter.lean:13--14`. The typeclass condition `NeZero N` means $N\ne0$; for $N\in\mathbb N$ it is exactly the stated $N\ge1$.

**Proposition 2.3.** *The statement EC implies ordinary RH.*

*Source:* `Formalism/GammaFactorNonvanishing/CritLine.lean:29--32`; `Formalism.VW.rh_of_every`.

*Proof.* For $\operatorname{Re}s>1/2$ and $s\ne1$, specialize (6) to $N=1$ and $\chi=1_1$. The disjunction in that statement holds through $s\ne1$. Equation (4) therefore gives $\zeta(s)\ne0$. Proposition 2.1 applies. $\square$

### 2.3 The terminal source calls

The terminal declaration at `Main.lean:4` is `riemannHypothesis : RiemannHypothesis := rhOfAll`. At `Supplements/Kernels/MainTheorems.lean:7--9`, `allChi` is the supplied proof of EC, and `rhOfAll` applies precisely Proposition 2.3 to it. Thus the remaining mathematical obligation is to establish that supplied EC argument with its full quantifiers. The companion statements in `Main.lean` are not used to prove this endpoint. We do not replace this obligation by the stronger generalized RH conclusions announced elsewhere.

### 2.4 The reduction from primitive characters

A primitive-character object $\psi$ consists of a positive modulus $d$, a primitive Dirichlet character $\chi_\psi$ modulo $d$, and the indicated primitivity certificate. Write ZF for

$$
\forall\psi\;\forall s\in\mathbb C,\qquad\operatorname{Re}s>\frac12\quad\Longrightarrow\quad L(s,\chi_\psi)\ne0.\tag{7}
$$

This is the source’s `Formalism.HC.ZeroFreeAll`: `Formalism/SharpRestriction/RamificationFrobenius/TotientGaloisClasses/ExplicitFormulaErrorOfHostConditions.lean:11--18`. For the primitive trivial character modulo one, $L(s,1_1)=\zeta(s)$ by (4), so the universal quantifier in (7) also includes the total function’s assigned value at $s=1$. We account for that point explicitly, matching the case split in `Formalism/SharpRestriction/RamificationFrobenius/TotientGaloisClasses/Landau.lean:508--516`: for $s\ne1$, the analytic nonvanishing of the regularized function $\zeta_1(s)=(s-1)\zeta(s)$ (`riemannZetaOne_eq_mul_of_ne_one`) yields $\zeta(s)\ne0$, whereas at $s=1$ the assigned value of Mathlib’s total function $\zeta(1)$ is nonzero by the pinned Mathlib theorem `riemannZeta_ne_zero_of_one_le_re`. By contrast, both EC (6) and ordinary RH (1) explicitly exclude $s=1$ for the trivial character, so the total function’s convention at the pole $s=1$ plays no role in ordinary RH itself.

**Proposition 2.4.** *The assertion ZF implies EC.*

*Source:* `Development/AutomorphicArithmetic/CharacterBoxes/Imprimitive.lean:5--35`; `UpperTheory.Top.imprimitive`.

*Proof.* Fix $N\ge1$, a character $\chi$ modulo $N$, and $s$ with $\sigma=\operatorname{Re}s>1/2$ and $(\chi\ne1_N\text{ or }s\ne1)$. Let $d=\operatorname{cond}(\chi)$ and let $\chi'$ be its primitive character. The conductor facts in `Mathlib/NumberTheory/DirichletCharacter/Basic.lean` give $d\ne0$, $d\mid N$, primitivity of $\chi'$, and $\operatorname{changeLevel}_{d\mid N}(\chi')=\chi$ (`conductor_ne_zero`, `conductor_dvd_level`, `primitiveCharacter_isPrimitive`, and `changeLevel_primitiveCharacter`, the last at 310–312). Thus $\psi=(d,\chi')$ is one of the objects quantified in (7), and $L(s,\chi')\ne0$.

We also have $\chi'\ne1_d$ or $s\ne1$. If $s\ne1$ this is immediate. Otherwise the original disjunction gives $\chi\ne1_N$; if $\chi'=1_d$, changing level would give $\chi=1_N$, a contradiction. Here change of level preserves the trivial character, the theorem `changeLevel_one` in the same pinned file.

We may therefore apply the exact continuation identity `DirichletCharacter.LFunction_changeLevel`, `Mathlib/NumberTheory/LSeries/DirichletContinuation.lean:150--154`:

$$
L(s,\chi)=L(s,\chi')\prod_{p\mid N}(1-\chi'(p)p^{-s}).\tag{8}
$$

The product ranges over distinct prime divisors of $N$; primes dividing $d$ cause no problem since $\chi'(p)=0$. All the identity’s hypotheses have been checked: both moduli are nonzero, $d\mid N$, and the preceding disjunction holds for $\chi'$.

For every prime in this product, $p>1$ and $|\chi'(p)|\le1$. The latter is the exact character bound `DirichletCharacter.norm_le_one`, `Mathlib/NumberTheory/DirichletCharacter/Bounds.lean:33--37`. Our complex-power convention gives $|p^{-s}|=p^{-\sigma}<1$. Hence $|\chi'(p)p^{-s}|\le p^{-\sigma}<1$, so $1-\chi'(p)p^{-s}\ne0$. The finite product in (8) is nonzero, as is its first factor. This proves (6) with its full modulus and character quantifiers. $\square$
