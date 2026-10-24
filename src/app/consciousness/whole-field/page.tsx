import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('whole-field');
export default function Page(){return <IntegratedPaper id="whole-field"/>;}
