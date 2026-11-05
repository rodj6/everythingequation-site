import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('spectral-ratios');
export default function Page(){return <IntegratedPaper id="spectral-ratios"/>;}
