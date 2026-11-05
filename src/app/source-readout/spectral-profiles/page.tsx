import {IntegratedPaper,paperMetadata} from '@/components/integrated-paper-reader';
export const dynamic='force-static';
export const metadata=paperMetadata('spectral-profiles');
export default function Page(){return <IntegratedPaper id="spectral-profiles"/>;}
