import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('cscf');
export default function Page(){return <IntegratedPaper id="cscf"/>;}
