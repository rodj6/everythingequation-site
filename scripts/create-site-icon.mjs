// Reuse the site's existing three-layer glyph as a small, local favicon.
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const sharp=require(process.env.SHARP_MODULE || 'sharp');
const png=await sharp('public/images/site-icon.svg').resize(64,64).png().toBuffer();
const header=Buffer.alloc(22);header.writeUInt16LE(1,2);header.writeUInt16LE(1,4);
header[6]=64;header[7]=64;header.writeUInt16LE(1,10);header.writeUInt16LE(32,12);
header.writeUInt32LE(png.length,14);header.writeUInt32LE(22,18);
fs.writeFileSync('public/favicon.ico',Buffer.concat([header,png]));
