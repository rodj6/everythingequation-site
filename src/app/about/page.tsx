/**
 * About page. Explains the mission behind Everything Equation and
 * introduces the author behind it. This is a static page that can be
 * customised freely without affecting the generated content.
 */
export const dynamic = 'force-static';

import Image from 'next/image';

export default function AboutPage() {
  // Replace this with your correct email later
  const contactEmail = 'jeremysemails@gmail.com';

  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2>About</h2>

      <p>
        <strong>EverythingEquation.com</strong> is a structured research corpus built around a single
        organizing principle:
      </p>

      {/* TSX-safe equation rendering (no raw LaTeX) */}
      <div className="not-prose my-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="font-mono text-lg">𝓛 = Ω Δ ∂(𝓛)</div>
      </div>

      <p>
        In plain terms: a proposed <strong>Tier-0 closure criterion</strong> for “lawhood.” Rather than
        starting with a fixed set of axioms and exploring consequences, the project starts with a{' '}
        <strong>selection rule</strong>: candidate laws must survive boundary normalization (∂),
        persistence / collapse filtering (Δ), and reflective closure (Ω), returning as a stable fixed
        point.
      </p>

      <p>The site is designed to be navigated like a research map, not a feed.</p>

      <ul>
        <li>
          <strong>Problems</strong> are the conceptual hubs: what the object is, why it matters, what
          the resolution claims, and how the argument is structured.
        </li>
        <li>
          <strong>Papers</strong> are the technical artifacts: formal writeups, proofs, and archived
          releases (e.g., Zenodo/DOI), linked into the relevant Problems they support.
        </li>
        <li>
          <strong>Monograph / Pages</strong> are the spine: the integrated narrative and high-level
          framing that ties the corpus together.
        </li>
      </ul>

      <p>
        The objective is simple to state and hard to do well: <strong>compress a wide family of hard
        questions into a single structural language</strong>, then push that language until it either
        (i) collapses ambiguity and produces rigid outcomes, or (ii) exposes precise obstruction
        boundaries that clarify what cannot be achieved by local or ad hoc methods.
      </p>

      <p>
        This project assumes a research-level reader. It prioritizes internal consistency, explicit
        definitions, and reproducible structure over persuasion.
      </p>

      <h3>What you’ll find here</h3>

      <ul>
        <li>
          A unified vocabulary (closure, invariants, admissibility, budget/rigidity constraints) used across domains.
        </li>
        <li>Conceptual overviews that explain what each area is trying to do before you dive into artifacts.</li>
        <li>Formal papers and releases that serve as the evidence layer, linked directly to the Problems they support.</li>
      </ul>

      <p>
        If you’re looking for a single entry point, start with the Monograph / framing pages, then
        follow the Problems outward into the supporting Papers.
      </p>

      <h3>About the author</h3>

      <p>
        Jeremy Rodgers is an independent researcher building a long-form body of work at the
        intersection of mathematical structure, theoretical physics, and “law selection” frameworks.
        The style of the project is deliberately systems-oriented: define a small number of operators
        and invariants, then test how far rigorous closure can be pushed across multiple problem
        families without allowing uncontrolled degrees of freedom.
      </p>

      <p>
        This site exists to keep the work organized, navigable, and properly separated into its
        conceptual layer (Problems) and artifact layer (Papers).
      </p>

      <h3>Contact</h3>

      <div className="not-prose mt-6 flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 md:flex-row md:items-center">
        <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/images/jeremy.png"
            alt="Jeremy Rodgers"
            fill
            className="object-cover"
            sizes="112px"
            priority
          />
        </div>

        <div className="min-w-0">
          <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            Jeremy Rodgers
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Independent research • Everything Equation
          </div>

          <div className="mt-2 text-sm">
            <span className="font-medium text-neutral-900 dark:text-neutral-100">Email:</span>{' '}
            <a className="underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>

          <div className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            For correspondence, citations, or collaboration inquiries.
          </div>
        </div>
      </div>
    </div>
  );
}
