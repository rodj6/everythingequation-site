import {SourceLiftReader,liftMetadata} from '@/components/source-lift-reader';
import {liftChapters} from '@/lib/source-lift';
export const dynamic='force-static';export const dynamicParams=false;
export function generateStaticParams(){return liftChapters('yang-mills-reconstruction').map(c=>({chapter:c.slug}));}
export async function generateMetadata({params}:{params:Promise<{chapter:string}>}){return liftMetadata('yang-mills-reconstruction',(await params).chapter);}
export default async function Page({params}:{params:Promise<{chapter:string}>}){return <SourceLiftReader id="yang-mills-reconstruction" chapter={(await params).chapter}/>;}
