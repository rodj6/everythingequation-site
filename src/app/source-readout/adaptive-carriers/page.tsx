import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('adaptive-carriers');
export default function Page(){return <IntegratedPaper id="adaptive-carriers"/>;}
