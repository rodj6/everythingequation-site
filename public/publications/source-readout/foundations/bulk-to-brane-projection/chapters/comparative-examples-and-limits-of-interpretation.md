# Comparative examples and limits of interpretation

<div id="sec:controls">

</div>

## An exactly soluble projection: two coupled oscillators

<div id="sec:oscillator">

</div>

The following systems are scientific comparisons that clarify the meaning and limits of the RS2 result. An ordinary Hamiltonian model verifies, without gravitational complications, every step from fiber nonprojectability through memory to an exact Tier-1 surrogate, and simultaneously exhibits the logical boundary that Section [11](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#sec:opeq) proves in general. The projected equation obtained below is the elementary exactly soluble instance of the Mori–Zwanzig projection-operator structure \[[13](/source-readout/bulk-to-brane-projection/references#bib-MoriZwanzig)\]: a memory kernel, an initial-slip term, and a retained susceptibility. Let $$
H_f=\frac{p_x^2}{2m}+\tfrac12 m\omega_0^2x^2
+\frac{p_y^2}{2M}
+\tfrac12 M\Omega^2\Bigl(y-\frac{cx}{M\Omega^2}\Bigr)^2
-f(t)\,x ,\tag{106}$$ and retain $X=(x,v)^T$ while eliminating $Z=(y,w)^T$. With $\delta\equiv c^2/(mM\Omega^2)$, the first-order generator has blocks $$
A=\begin{pmatrix}0&1\\-(\omega_0^2+\delta)&0\end{pmatrix},
\quad
B=\begin{pmatrix}0&0\\c/m&0\end{pmatrix},
\quad
C=\begin{pmatrix}0&0\\c/M&0\end{pmatrix},
\quad
D=\begin{pmatrix}0&1\\-\Omega^2&0\end{pmatrix},\tag{107}$$ with $e^{tD}=\begin{pmatrix}\cos\Omega t&\sin\Omega t/\Omega\\
-\Omega\sin\Omega t&\cos\Omega t\end{pmatrix}$. Variation of constants evaluates *every* projected term: $$
\dot X(t)=AX(t)+Be^{tD}Z_0
+\int_0^t\mathcal K(t-s)X(s)\,ds
+\binom{0}{f(t)/m},\tag{108}$$ $$
\boxed{\;
\mathcal K(t)=Be^{tD}C
=\begin{pmatrix}
0&0\\[2pt]
\dfrac{c^2}{mM\Omega}\sin\Omega t&0
\end{pmatrix}.
\;}\tag{109}$$ Equivalently, after one integration by parts, $$
\boxed{\;
\ddot x+\omega_0^2x
+\int_0^t\delta\cos\bigl[\Omega(t-s)\bigr]\dot x(s)\,ds
=\frac{f(t)}{m}+\zeta(t),
\;}\tag{110}$$ $$
\zeta(t)=\frac{c}{m}
\Bigl[\Bigl(y_0-\frac{cx_0}{M\Omega^2}\Bigr)\cos\Omega t
+\frac{w_0}{\Omega}\sin\Omega t\Bigr].\tag{111}$$ Two states with equal $(x_0,v_0)$ and different $(y_0,w_0)$ have different later trajectories ,  the instantaneous readout is nonprojectable, exactly as in Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness), with $\zeta$ playing the role of $\eta_{z_0}$ in [(88)](/source-readout/bulk-to-brane-projection/minimal-dynamical-completion-and-memory#eq:memoryeq). The smallest generic Markov completion carries the two hidden coordinates, exactly as $E^{\mathrm{RS}}_{\mathrm{dyn}}$ does. The exact retarded susceptibility is $$
\boxed{\;
\chi^R_{xx}(\omega)
=\frac{\Omega^2-z^2}
{m\bigl[(\omega_0^2-z^2)(\Omega^2-z^2)-\delta z^2\bigr]},
\qquad z=\omega+i0^+ .
\;}\tag{112}$$

And yet eliminating $y$ also gives a *local, Tier-1-only*, higher-derivative equation, $$
\boxed{\;
\bigl[(\partial_t^2+\omega_0^2)(\partial_t^2+\Omega^2)
+\delta\,\partial_t^2\bigr]x
=\frac1m(\partial_t^2+\Omega^2)f .
\;}\tag{113}$$ Its extra initial derivatives encode precisely the two missing constants. This exactly soluble example exposes the logical boundary: nonprojectability of $(x,\dot x)$ proves the need for completion *relative to that state choice*, and proves nothing about the nonexistence of a higher-derivative or history-level theory written in $x$ alone. This is the finite-dimensional shadow of Lemma [11.1](/source-readout/bulk-to-brane-projection/the-operational-equivalence-obstruction#lem:pushforward).

## Einstein–Cartan and Aharonov–Bohm comparisons

<div id="sec:countercontrols">

</div>

These two examples distinguish a genuine propagating source degree of freedom from an auxiliary variable and from an incomplete choice of observable state: Einstein–Cartan–Dirac torsion is auxiliary and introduces no same-readout fiber, whereas the Aharonov–Bohm phase is already determined once the observable state is chosen completely.

#### Einstein–Cartan–Dirac.

Minimal Einstein–Cartan–Dirac theory fails as the required *propagating source-projection antecedent* ,  not as a theory ,  because its torsion is *auxiliary*: it introduces no independent propagating degree of freedom, and hence no same-readout fiber of the kind Proposition [3.1](/source-readout/bulk-to-brane-projection/a-genuine-same-readout-bulk-distinction#prop:witness) exhibits. The connection equation determines the contorsion algebraically from the axial current, and substitution gives the four-fermion term \[[15](/source-readout/bulk-to-brane-projection/references#bib-Diakonov)\] $$
S_{\mathrm{eff}}
=S_{\mathrm{EH}}+S_{\mathrm{Dirac}}[\mathring\omega]
+\frac{3\kappa}{16}\int d^4x\;e\,J_{5a}J_5^a,\tag{114}$$ up to signature and current conventions. A torsion-free theory containing this operator has *identical* retained observables. There is no independent propagating fiber analogous to a remote RS2 wave packet ,  which is exactly what RS2 supplies and Einstein–Cartan does not.

#### Aharonov–Bohm.

The Aharonov–Bohm effect \[[19](/source-readout/bulk-to-brane-projection/references#bib-AharonovBohm)\] remains a clean control for readout incompleteness: equal local curvature can coexist with different gauge-invariant holonomy and different interference phases. But holonomy is already a standard observable of four-dimensional gauge theory. The effect shows that a *curvature-only* state is incomplete; it does not show that a deeper source ontology has been observed. It is the correct model for “the readout you chose was too small,” not for “there is a hidden dimension.”
