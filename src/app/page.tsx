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

      {/* HERO */}
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
          It is a layered architecture: a concrete constrained field system (Tier-1),
          a law-selection principle (Tier-0), and now a structural inevitability theorem
          showing why any viable notion of physical law must induce the same certification architecture.
        </p>
      </section>

      {/* CORE SYSTEM HOOK */}
      <section>
        <div className="max-w-3xl mx-auto rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md p-8">

          <h2 className="text-xl font-semibold text-center mb-6">
            Core System (Compact Form)
          </h2>

          <div className="space-y-4 text-center text-lg font-mono">
            <div
              dangerouslySetInnerHTML={renderKatex(
                String.raw`S[g,A,\psi]=\mathrm{Tr}^\ast(f(D_E^2/\Lambda^2)) + \langle \psi, D_E \psi \rangle`
              )}
            />

            <div
              dangerouslySetInnerHTML={renderKatex(
                String.raw`S_{\Omega}(D_E;T) \le D_T(K)`
              )}
            />

            <div
              dangerouslySetInnerHTML={renderKatex(
                String.raw`\delta\!\left(S + \int (S_{\Omega} - D_T)\, d\mu \right) = 0`
              )}
            />
          </div>

          <div className="text-center my-6 text-slate-500 text-sm">
            ↓ forces ↓
          </div>

          <p className="text-center text-sm font-medium text-slate-800 dark:text-slate-200">
            N = 3, α⁻¹ ≈ 137, sin²θ<sub>W</sub> ≈ 0.2316, discrete fermion masses
          </p>

          <p className="text-xs text-slate-500 mt-4 text-center">
            Physical parameters arise as solutions of a constrained spectral system, not free inputs.
          </p>

          <div className="text-center mt-6">
            <Link href="/tier-1" className="text-blue-600 hover:underline text-sm">
              Inspect the full system →
            </Link>
          </div>
        </div>
      </section>

      {/* TIER-1 */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold mb-3">Tier-1: Forced Physical System</h2>

          <p className="mb-4 text-slate-700 dark:text-slate-300">
            The coupled Dirac–Λ system is the concrete realization of the framework.
            Its spectral action reproduces General Relativity, Yang–Mills gauge theory,
            and fermionic matter.
          </p>

          <p className="text-slate-700 dark:text-slate-300">
            A capacity inequality couples coherent and dissipative sectors, and
            constrained variational structure (KKT stationarity) determines physical
            parameters through saturation conditions.
          </p>

          <div className="mt-4">
            <Link href="/tier-1" className="text-blue-600 hover:underline">
              View full field equations
            </Link>
          </div>
        </div>
      </section>

      {/* RESULTS */}
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

      {/* TIER-0 */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold mb-3">Tier-0: Law Selection Principle</h2>

          <div
            className="my-4"
            dangerouslySetInnerHTML={renderKatex(
              String.raw`\mathcal{L}=\Omega\Delta\partial(\mathcal{L})`
            )}
          />

          <p className="text-slate-700 dark:text-slate-300">
            A fixed-point condition defining what qualifies as a physical law.
            On any nontrivial structure, it forces a dual-sector operator split,
            which admits a canonical spectral realization.
          </p>

          <div className="mt-4">
            <Link href="/what-is-the-everything-equation" className="text-blue-600 hover:underline">
              Learn the full Tier-0 framework
            </Link>
          </div>
        </div>
      </section>

      {/* LAWHOOD NECESSITY */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Why This Architecture Is Unavoidable
          </h2>

          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The newest lawhood paper closes the remaining foundational objection:
            why these operators, and not some different architecture?
            Starting from no formal framework at all, only the pre-theoretic demand
            that “law” must exclude notation artifacts, chronicles, accidents, and fragments,
            it proves that any viable notion of physical law must implement the same
            quotient → filter → closure structure.
          </p>

          <div className="rounded-md border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-black/20 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-800 dark:text-slate-200">
              <div><strong>∂</strong>: semantic invariance</div>
              <div><strong>Δ</strong>: genericity + robustness</div>
              <div><strong>Ω</strong>: composability / closure</div>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 mt-4">
            In other words: the Everything Equation is not just one candidate framework among many.
            At the role level, every repaired alternative converges to the same certification skeleton.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/problems/lawhood-necessity" className="text-blue-600 hover:underline">
              Read the lawhood necessity theorem
            </Link>
            <Link href="/problems/lawhood" className="text-blue-600 hover:underline">
              See the broader lawhood framework
            </Link>
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Verification Chain</h2>
        <p className="text-slate-700 dark:text-slate-300">
          Lawhood necessity → Tier-0 closure law → dual-sector operators → Tier-1 spectral realization → physical predictions
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

    </div>
  );
}
