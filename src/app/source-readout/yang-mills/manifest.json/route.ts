import {liftEditions,liftManifest} from '@/lib/source-lift';
export const dynamic='force-static';
export function GET(){return Response.json({schemaVersion:1,title:'Shadow Theory and the Wilson Yang–Mills Construction: A Source–Readout Reconstruction with Mathematical Companion',doi:'10.5281/zenodo.24173681',url:'/source-readout/yang-mills',editions:liftEditions.map(p=>({...liftManifest(p.id),publication:p}))});}
