import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
import {integratedChapters} from '@/lib/paper-integrations';
export const dynamic='force-static';export const dynamicParams=false;
export function generateStaticParams(){return integratedChapters('sharp-uniqueness').map(c=>({chapter:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{chapter:string}>}){return paperMetadata('sharp-uniqueness',(await params).chapter);}
export default async function Page({params}:{params:Promise<{chapter:string}>}){return <IntegratedPaper id="sharp-uniqueness" chapter={(await params).chapter}/>;}
