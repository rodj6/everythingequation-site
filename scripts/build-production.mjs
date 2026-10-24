/** A portable heap budget for the complete mathematical reading corpus. */
import {spawn} from 'node:child_process';
const options=process.env.NODE_OPTIONS??'';
const nodeOptions=/--max[-_]old[-_]space[-_]size(?:-percentage)?(?:=|\s)/.test(options)?options:`${options} --max-old-space-size=4096`.trim();
const child=spawn(process.execPath,['node_modules/next/dist/bin/next','build','--webpack',...process.argv.slice(2)],{stdio:'inherit',env:{...process.env,NODE_OPTIONS:nodeOptions}});
child.on('error',error=>{console.error(error);process.exitCode=1;});
child.on('exit',(code,signal)=>{if(signal){console.error(`Production build terminated: ${signal}`);process.exitCode=1;}else process.exitCode=code??1;});
