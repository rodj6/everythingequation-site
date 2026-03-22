import { loadProblems, loadPapers } from "@/lib/registry";
import Card from "@/components/card";
import Link from "next/link";
import katex from "katex";

export const dynamic = "force-static";

export default async function HomePage() {
  const problems = await loadProblems();
  const papers = await loadPapers();

  const publicProblems = problems.filter((p) => p.status === "public");
  const publicPapers = papers.filter((p) => p.status === "public");

  const latestProblems = publicProblems.slice(0, 3);
  const latestPapers = publicPapers.slice(0, 3);

  const renderKatex = (tex: string, displayMode = true) => ({
    __html: katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      strict: "ignore",
    }),
  });

  return (
    <div className="space-y-16">

      {/* HERO — SYSTEM FIRST */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          The Everything Equation Programme
        </h1>

        <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">
          A unified physics framework in which a concrete field-equation system
          is not freely chosen — it is structurally forced.
        </p>

        <p className="text-lg text-slate-600 dark:text-slate-400">
          The coupled Dirac–Λ system reproduces gravity, gauge forces, and fermion matter,
          while non-tunable constraints determine generations, masses, and couplings.
        </p>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This is not a single equation replacing existing physics.
          It is a two-level architecture: a law-selection principle (Tier-0)
          coupled to a concrete field system (Tier-1).
          Existing theories remain the operational content — the framework determines
          which structures are admissible and how physical parameters arise.
        </p>
      </section>

      {/* TIER-1 — PHYSICS FIRST */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold mb-3">Tier-1: Forced Physical System</h2>

          <p className="mb-4 text-slate-700 dark:text-slate-300">
            The framework yields a coupled Dirac–Λ operator system whose spectral action
            reproduces General Relativity, Yang–Mills gauge theory, and fermionic matter.
            A capacity inequality couples coherent and dissipative sectors,
            enforcing non-tunable structural constraints.
          </p>

          <div className="rounded-md border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-black/20 p-4 space-y-4">
            <div dangerouslySetInnerHTML={renderKatex(
              String.raw`S[g,A,\psi]=\mathrm{Tr}^\ast\!\big(f(D_E^2/\Lambda^2)\big)+\langle \psi, D_E\psi\rangle`,
              true
            )} />
            <div dangerouslySetInnerHTML={renderKatex(
              String.raw`S_{\Omega}(D_E;T)\le D_T(K)`,
              true
            )} />
            <div dangerouslySetInnerHTML={renderKatex(
              String.raw`\delta\!\left(S+\int (S_{\Omega}-D_T)\,d\mu\right)=0`,
              true
            )} />
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/tier-1" className="text-blue-600 hover:underline">
              View full field equations
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS — THIS IS WHAT IT DOES */}
      <section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What the System Produces</h2>

          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• Exactly 3 fermion generations (capacity constraint)</li>
            <li>• Fine-structure constant α⁻¹ ≈ 137</li>
            <li>• Weinberg angle sin²θ_W ≈ 0.2316</li>
            <li>• Fermion mass hierarchy from KKT saturation</li>
            <li>• Strong CP phase θ = 0 (structural exclusion)</li>
            <li>• Bare cosmological constant suppressed at law level</li>
          </ul>
        </div>
      </section>

      {/* WHY THIS EXISTS — TIER-0 */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold mb-3">Tier-0: Law Selection Principle</h2>

          <div
            className="my-4"
            dangerouslySetInnerHTML={renderKatex(
              String.raw`\mathcal{L}=\Omega\Delta\partial(\mathcal{L})`,
              true
            )}
          />

          <p className="text-slate-700 dark:text-slate-300">
            This fixed-point condition defines what qualifies as a physical law.
            It enforces invariance under presentation removal, admissibility filtering,
            and canonical completion.
          </p>

          <p className="mt-4 text-slate-700 dark:text-slate-300">
            On any nontrivial structure, this forces a dual-sector operator split
            (coherent + dissipative), which admits a canonical spectral realization —
            the Dirac–Λ system above.
          </p>

          <Link href="/what-is-the-everything-equation" className="mt-4 inline-block text-blue-600 hover:underline">
            Learn the full framework
          </Link>
        </div>
      </section>

      {/* ARCHITECTURE PIPELINE */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">System Architecture</h2>

        <p className="text-slate-700 dark:text-slate-300">
          Law-level closure → Dual-sector operators → Spectral realization → Physical predictions
        </p>
      </section>

      {/* PROBLEMS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Downstream Physics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestProblems.map((p) => (
            <Card key={p.id} href={`/problems/${p.id}`} title={p.title} description={p.claim} />
          ))}
        </div>
      </section>

      {/* PAPERS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technical Papers</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestPapers.map((paper) => (
            <Card
              key={paper.id}
              href={`/papers/${paper.id}`}
              title={paper.metadata?.title ?? paper.role ?? paper.id}
              description={(paper.metadata?.description || "").replace(/<[^>]+>/g, "").slice(0, 120)}
            />
          ))}
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Everything Equation",
            description: "Two-tier framework where a law-selection principle forces physical field equations.",
          }),
        }}
      />
    </div>
  );
}
