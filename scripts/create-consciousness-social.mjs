// Original, static social card. Uses the hero's authored geometry; no remote media.
// Run with the optional sharp package installed or SHARP_MODULE pointing at it.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP_MODULE || 'sharp');
const hero = fs.readFileSync('src/components/consciousness-network.tsx', 'utf8');
const outline = hero.match(/const outline = "([^"]+)"/)[1];
const folds = [...hero.split('const folds = [')[1].split('];')[0].matchAll(/"([^"]+)"/g)].map(m=>m[1]);
const nodes = Array.from({length:18},(_,i)=>[870+Math.cos(i/18*Math.PI*2)*170,421+Math.sin(i/18*Math.PI*2)*97]);
const lines = nodes.flatMap((a,i)=>nodes.slice(i+1).map((b,j)=>({a,b,j:j+i+1,i}))).filter(({i,j})=>(i+j)%3===0).map(({a,b})=>`<path d="M${a}L${b}"/>`).join('');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><radialGradient id="h"><stop stop-color="#443167" stop-opacity=".32"/><stop offset="1" stop-color="#080e1d" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="630" fill="#080e1d"/><ellipse cx="885" cy="380" rx="370" ry="300" fill="url(#h)"/><text x="65" y="59" fill="#b8a5f5" font-family="monospace" font-size="14" letter-spacing="3">SHADOW THEORY / SPC-2 / VERSION 2</text><text x="61" y="160" fill="#edf0f7" font-family="Arial,sans-serif" font-size="86" letter-spacing="-4">Consciousness.</text><text x="65" y="221" fill="#bbb2d6" font-family="Georgia,serif" font-style="italic" font-size="35">From awareness to a lived world.</text><g transform="translate(105 265) scale(.84)" fill="none" stroke="#70dfd2"><path d="${outline}" stroke-width="2.3"/>${folds.map(d=>`<path d="${d}" stroke-width="1.5" opacity=".6"/>`).join('')}</g><g fill="none" stroke="#a594e2" stroke-opacity=".45" stroke-width="1">${lines}</g><g fill="#b8a5f5">${nodes.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3"/>`).join('')}</g><text x="171" y="555" fill="#93c5c2" font-family="Arial,sans-serif" font-size="16">Human consciousness</text><text x="765" y="555" fill="#bbacdf" font-family="Arial,sans-serif" font-size="16">Artificial consciousness?</text><path d="M65 581H1135" stroke="#2b3249"/><text x="65" y="611" fill="#8591ab" font-family="monospace" font-size="12">JEREMY RODGERS · 25 CHAPTERS · COMPLETE WEB MONOGRAPH</text><text x="912" y="611" fill="#b8a5f5" font-family="monospace" font-size="12">everythingequation.com</text></svg>`;
const out = path.resolve('public/publications/consciousness');
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'social.svg'),svg);
await sharp(Buffer.from(svg)).png().toFile(path.join(out,'social.png'));
console.log('Created original 1200 × 630 consciousness social card.');
