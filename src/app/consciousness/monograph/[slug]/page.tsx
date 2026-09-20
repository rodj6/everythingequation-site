import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConsciousnessDocument, listConsciousnessDocuments } from "@/lib/consciousness";
import ConsciousnessReader from "@/components/consciousness-reader";
export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() { return listConsciousnessDocuments().map(document=>({slug:document.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug}=await params; const document=getConsciousnessDocument(slug); if(!document) return {};
  return {title:`${document.title} · Consciousness Monograph`,description:`${document.label || "Publication text"} of Shadow Theory and Consciousness, SPC-2 Version 2. ${document.sections.slice(0,3).map(s=>s.title).join("; ") || "Complete source-faithful publication edition with linked references and downloadable source formats."}`,alternates:{canonical:document.url,types:{"text/markdown":document.markdownUrl}},openGraph:{title:document.title,url:document.url,type:"article",images:["/publications/consciousness/social.png"]}};
}
export default async function ChapterPage({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const document=getConsciousnessDocument(slug); if(!document) notFound(); return <ConsciousnessReader document={document}/>; }
