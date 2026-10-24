import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
import {integratedChapters} from '@/lib/paper-integrations';
export const dynamic='force-static';export const dynamicParams=false;
export function generateStaticParams(){return integratedChapters('constituted-agency').map(c=>({chapter:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{chapter:string}>}){return paperMetadata('constituted-agency',(await params).chapter);}
export default async function Page({params}:{params:Promise<{chapter:string}>}){return <IntegratedPaper id="constituted-agency" chapter={(await params).chapter}/>;}
