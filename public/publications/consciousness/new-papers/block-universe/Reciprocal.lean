/-
  Reciprocal co-reality
  =====================

  Within the Stein-type classification (1+1 dimensions; translations,
  boosts, dilations, spatial reflection; reflexive, transitive):

  * `symmetric_classification` : a symmetric relation is either identity
      or universal.
  * `reciprocal_forces_block` : a symmetric relation relating ANY one pair of
      distinct events (spacelike, timelike or null) is universal.
  * `one_reciprocal_pair_forces_block` : without assuming global symmetry,
      a single pair of distinct events related in both directions suffices.
  * `mutual_core_trivial` : the mutual part R p q ∧ R q p of each of the four
      directed relations is identity. So on every non-block option, no two
      distinct events are reciprocally real.
-/
import BlockUniverse.Stein

namespace BlockUniverse.Reciprocal

open BlockUniverse BlockUniverse.Stein

variable {K : Type*} [Field K] [LinearOrder K] [IsStrictOrderedRing K]

/-- Light-cone coordinates swap sign when the arguments are swapped. -/
lemma U_swap (p q : Event K) : U q p = - U p q := by simp only [U]; ring
lemma W_swap (p q : Event K) : W q p = - W p q := by simp only [W]; ring

/-- Two events that are distinct have some nonzero light-cone coordinate. -/
lemma ne_UW {p q : Event K} (h : p ≠ q) : U p q ≠ 0 ∨ W p q ≠ 0 := by
  by_contra hc
  push Not at hc
  exact h ((identity_iff_eq p q).mp hc)

/-- The mutual core of each directed relation is identity. -/
theorem mutual_core_trivial (p q : Event K) :
    (ChronPast p q ∧ ChronPast q p → p = q) ∧
    (CausalPast' p q ∧ CausalPast' q p → p = q) ∧
    (ChronFuture p q ∧ ChronFuture q p → p = q) ∧
    (CausalFuture p q ∧ CausalFuture q p → p = q) := by
  have key : U p q = 0 → W p q = 0 → p = q := fun h1 h2 =>
    (identity_iff_eq p q).mp ⟨h1, h2⟩
  have su := U_swap p q
  have sw := W_swap p q
  refine ⟨?_, ?_, ?_, ?_⟩
  all_goals
    rintro ⟨h1, h2⟩
    simp only [ChronPast, CausalPast', ChronFuture, CausalFuture] at h1 h2
    rw [su, sw] at h2
    first
      | (rcases h1 with h1 | h1 <;> rcases h2 with h2 | h2 <;>
          first
            | exact key h1.1 h1.2
            | exact key (by linarith [h2.1]) (by linarith [h2.2])
            | (exfalso; linarith [h1.1, h2.1]))
      | exact key (by linarith [h1.1, h2.1]) (by linarith [h1.2, h2.2])

/-- Symmetric invariant reflexive transitive relations are identity or universal. -/
theorem symmetric_classification
    (hsqrt : ∀ y : K, 0 < y → ∃ s, 0 < s ∧ s * s = y)
    (R : Event K → Event K → Prop) (hI : Invariant R)
    (hrefl : ∀ p, R p p) (htrans : ∀ p q r, R p q → R q r → R p r)
    (hsymm : ∀ p q, R p q → R q p) :
    (∀ p q, R p q ↔ p = q) ∨ (∀ p q, R p q) := by
  have mc := mutual_core_trivial (K := K)
  rcases stein_classification hsqrt R hI hrefl htrans with H | H | H | H | H | H
  · left; intro p q; rw [H, identity_iff_eq]
  all_goals first
    | (right; intro p q; exact (H p q).mpr trivial)
    | skip
  all_goals
    left; intro p q
    constructor
    · intro h
      have h' := hsymm p q h
      rw [H] at h h'
      first
        | exact (mc p q).1 ⟨h, h'⟩
        | exact (mc p q).2.1 ⟨h, h'⟩
        | exact (mc p q).2.2.1 ⟨h, h'⟩
        | exact (mc p q).2.2.2 ⟨h, h'⟩
    · rintro rfl; exact hrefl p

/-- **Reciprocal co-reality forces the block.** One reciprocally co-real pair
    of distinct events — of any causal type — makes the relation universal. -/
theorem reciprocal_forces_block
    (hsqrt : ∀ y : K, 0 < y → ∃ s, 0 < s ∧ s * s = y)
    (R : Event K → Event K → Prop) (hI : Invariant R)
    (hrefl : ∀ p, R p p) (htrans : ∀ p q r, R p q → R q r → R p r)
    (hsymm : ∀ p q, R p q → R q p)
    (p₀ q₀ : Event K) (hne : p₀ ≠ q₀) (h : R p₀ q₀) :
    ∀ p q, R p q := by
  rcases symmetric_classification hsqrt R hI hrefl htrans hsymm with H | H
  · exact absurd ((H p₀ q₀).mp h) hne
  · exact H

/-- **One reciprocal pair forces the block — no global symmetry assumed.**
    If a single pair of distinct events is related in both directions, an
    invariant, reflexive, transitive relation is universal. (Each of the five
    non-universal options has an identity-only mutual core.) -/
theorem one_reciprocal_pair_forces_block
    (hsqrt : ∀ y : K, 0 < y → ∃ s, 0 < s ∧ s * s = y)
    (R : Event K → Event K → Prop) (hI : Invariant R)
    (hrefl : ∀ p, R p p) (htrans : ∀ p q r, R p q → R q r → R p r)
    (p₀ q₀ : Event K) (hne : p₀ ≠ q₀) (h₁ : R p₀ q₀) (h₂ : R q₀ p₀) :
    ∀ p q, R p q := by
  have mc := mutual_core_trivial p₀ q₀
  rcases stein_classification hsqrt R hI hrefl htrans with H | H | H | H | H | H
  · exact absurd ((identity_iff_eq _ _).mp ((H _ _).mp h₁)) hne
  · exact absurd (mc.1 ⟨(H _ _).mp h₁, (H _ _).mp h₂⟩) hne
  · exact absurd (mc.2.1 ⟨(H _ _).mp h₁, (H _ _).mp h₂⟩) hne
  · exact absurd (mc.2.2.1 ⟨(H _ _).mp h₁, (H _ _).mp h₂⟩) hne
  · exact absurd (mc.2.2.2 ⟨(H _ _).mp h₁, (H _ _).mp h₂⟩) hne
  · intro p q; exact (H p q).mpr trivial

end BlockUniverse.Reciprocal
