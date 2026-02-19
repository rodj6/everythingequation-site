import Tier1Article from "@/components/tier-1";

export const metadata = {
  title: "Tier-1 Dynamical Realization: The Coupled Dirac–Λ System",
  description:
    "Tier-1 dynamical realization of the Tier-0 programme via the Coupled Dirac–Λ System.",
};

export const dynamic = "force-static";

export default function Tier1Page() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 py-16">
      <Tier1Article />
    </div>
  );
}
