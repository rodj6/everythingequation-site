import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('slow-passage');
export default function Page(){return <IntegratedPaper id="slow-passage"/>;}
