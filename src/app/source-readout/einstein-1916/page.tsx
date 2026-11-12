import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('einstein-1916');
export default function Page(){return <IntegratedPaper id="einstein-1916"/>;}
