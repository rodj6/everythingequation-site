import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
import {integratedChapters} from '@/lib/paper-integrations';
export const dynamic='force-static';export const dynamicParams=false;
export function generateStaticParams(){return integratedChapters('block-universe').map(c=>({chapter:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{chapter:string}>}){return paperMetadata('block-universe',(await params).chapter);}
export default async function Page({params}:{params:Promise<{chapter:string}>}){return <IntegratedPaper id="block-universe" chapter={(await params).chapter}/>;}
