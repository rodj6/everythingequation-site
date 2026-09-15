import type { Metadata } from "next";
import { QuantumReader } from "@/components/quantum-reader";
import { quantumMassive } from "@/config/quantum";
import { getQuantumDocument } from "@/lib/quantum";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: quantumMassive.title,
  description: quantumMassive.description,
  alternates: { canonical: quantumMassive.webUrl },
  openGraph: { title: quantumMassive.title, type: "article", url: quantumMassive.webUrl },
};
export default function MassiveConfigurationPaper() { return <QuantumReader document={getQuantumDocument("massive-configuration")!} />; }
