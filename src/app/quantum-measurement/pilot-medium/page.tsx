import type { Metadata } from "next";
import { QuantumReader } from "@/components/quantum-reader";
import { quantumPilot } from "@/config/quantum";
import { getQuantumDocument } from "@/lib/quantum";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: quantumPilot.title,
  description: quantumPilot.description,
  alternates: { canonical: quantumPilot.webUrl },
  openGraph: { title: quantumPilot.title, type: "article", url: quantumPilot.webUrl },
};
export default function PilotMediumPaper() { return <QuantumReader document={getQuantumDocument("pilot-medium")!} />; }
