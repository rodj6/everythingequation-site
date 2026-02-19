import { loadProblems, loadPapers } from "@/lib/registry";
import Card from "@/components/card";
import Link from "next/link";

export const dynamic = "force-static";

/**
 * Home page: Introduces the Everything Equation platform and highlights
 * recently added problems and papers. Data is fetched at build time.
 */
export default async function HomePage() {
  const problems = await loadProblems();
  const papers = await loadPapers();
  const publicProblems = problems.filter((p) => p.status === "public");
  const publicPapers = papers.filter((p) => p.status === "public");
  const latestProblems = publicProblems.slice(0, 3);
  const latestPapers = publicPapers.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome to the Everything Equation</h2>
        <p className="text-lg font-semibold mb-4 text-slate-600 dark:text-slate-400">
          And The Tier-0 Framework
        </p>
        <p className="mx-auto max-w-3xl text-lg text-slate-700 dark:text-slate-300">
          A premium research platform curating open problems and scholarly articles, connecting ideas
          across disciplines.
        </p>
      </section>

      {/* Gateway card introducing the Everything Equation */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-blue-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h3 className="text-2xl font-semibold mb-2">
            What is the Everything Equation?{" "}
            <span className="font-mono text-xl">𝓛=ΩΔ∂(𝓛)</span>
          </h3>
          <p className="mb-4">
            The Everything Equation is a unifying structural principle proposed to govern physical law,
            mathematics, and information under a single closure condition.
          </p>
          <Link href="/what-is-the-everything-equation" className="inline-block text-blue-600 hover:underline">
            Learn more
          </Link>
        </div>
      </section>

      {/* Tier-1 dynamical realization card */}
      <section>
        <div className="max-w-3xl mx-auto rounded-lg border-t-4 border-emerald-500 bg-slate-100 dark:bg-slate-800 p-6">
          <h3 className="text-2xl font-semibold mb-2">Tier-1 Dynamical Realization</h3>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Tier-0 provides a closure/admissibility criterion. Tier-1 makes it concrete: a coupled Dirac–Λ
            operator system whose low-energy expansion recovers GR + Yang–Mills + fermions, while enforcing
            non-tunable admissibility constraints.
          </p>

          <div className="rounded-md border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-black/20 p-4">
            <div className="font-mono text-sm sm:text-base leading-relaxed space-y-2 whitespace-pre-wrap">
              <div>{"S[g, A, ψ] = Tr∗( f(D²/Λ²) ) + ⟨ψ, Dψ⟩"}</div>
              <div>{"SΩ(D; T) ≤ D_T(K)   for   T ∈ [T_UV, T_IR]"}</div>
              <div>{"UV anchor: SΩ(D; T_UV) = D_{T_UV}(c_M K)"}</div>
              <div>{"KKT stationarity: δ( S + ∫(SΩ − D_T) dμ ) = 0"}</div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/monograph" className="inline-block text-emerald-700 dark:text-emerald-400 hover:underline">
              View Tier-1 field equations
            </Link>
            <Link
              href="/problems/quantum-gravity"
              className="inline-block text-slate-700 dark:text-slate-300 hover:underline"
            >
              See downstream physics problems
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Problems */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Latest Problems</h3>
        {latestProblems.length === 0 ? (
          <p>No public problems have been added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestProblems.map((p) => (
              <Card key={p.id} href={`/problems/${p.id}`} title={p.title} description={p.claim} />
            ))}
          </div>
        )}
      </section>

      {/* Latest Papers */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Latest Papers</h3>
        {latestPapers.length === 0 ? (
          <p>No public papers have been added yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestPapers.map((paper) => (
              <Card
                key={paper.id}
                href={`/papers/${paper.id}`}
                title={paper.metadata?.title ?? paper.role ?? paper.id}
                description={paper.metadata?.description?.substring(0, 120) || ""}
              />
            ))}
          </div>
        )}
      </section>

      {/* JSON-LD for the home page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Everything Equation",
            url: "https://everythingequation.com",
            description: "A premium research platform curating open problems and scholarly articles.",
          }),
        }}
      />
    </div>
  );
}
