import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getResearchDocument,getResearchPaper,getResearchChapterIntro,listResearchDocuments} from "@/lib/consciousness-research";
import ConsciousnessResearchReader from "@/components/consciousness-research-reader";
export const dynamic="force-static";export const dynamicParams=false;
export function generateStaticParams(){return listResearchDocuments().map(d=>({paper:d.paperId,slug:d.slug}));}
export async function generateMetadata({params}:{params:Promise<{paper:string;slug:string}>}):Promise<Metadata>{const {paper,slug}=await params;const document=getResearchDocument(paper,slug);if(!document)return {};const publication=getResearchPaper(paper)!;return {title:`${document.title} · Consciousness Paper ${publication.number}`,description:getResearchChapterIntro(document)?.standfirst||publication.deck,alternates:{canonical:document.url,types:{"text/markdown":document.markdownUrl}},openGraph:{title:document.title,url:document.url,type:"article",images:["/publications/consciousness/social.png"]}};}
export default async function ResearchSection({params}:{params:Promise<{paper:string;slug:string}>}){const {paper,slug}=await params;const document=getResearchDocument(paper,slug);if(!document)notFound();return <ConsciousnessResearchReader document={document}/>;}
