import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('temporal-passage');
export default function Page(){return <IntegratedPaper id="temporal-passage"/>;}
