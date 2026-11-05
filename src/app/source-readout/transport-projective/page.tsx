import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('transport-projective');
export default function Page(){return <IntegratedPaper id="transport-projective"/>;}
