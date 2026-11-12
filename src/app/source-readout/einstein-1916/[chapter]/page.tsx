import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
import {integratedChapters} from '@/lib/paper-integrations';
export const dynamic='force-static';export const dynamicParams=false;
export function generateStaticParams(){return integratedChapters('einstein-1916').map(c=>({chapter:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{chapter:string}>}){return paperMetadata('einstein-1916',(await params).chapter);}
export default async function Page({params}:{params:Promise<{chapter:string}>}){return <IntegratedPaper id="einstein-1916" chapter={(await params).chapter}/>;}
