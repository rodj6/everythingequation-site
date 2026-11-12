import {SourceLiftReader,liftMetadata} from '@/components/source-lift-reader';
export const dynamic='force-static';
export const metadata=liftMetadata('yang-mills-reconstruction');
export default function Page(){return <SourceLiftReader id="yang-mills-reconstruction"/>;}
