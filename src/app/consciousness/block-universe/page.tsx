import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('block-universe');
export default function Page(){return <IntegratedPaper id="block-universe"/>;}
