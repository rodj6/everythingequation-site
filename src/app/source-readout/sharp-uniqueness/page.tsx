import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('sharp-uniqueness');
export default function Page(){return <IntegratedPaper id="sharp-uniqueness"/>;}
