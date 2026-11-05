import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('sustained-carriers');
export default function Page(){return <IntegratedPaper id="sustained-carriers"/>;}
