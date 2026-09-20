import type { Metadata } from "next";
import "../quantum-measurement/reader.css";
import "./consciousness.css";
export const metadata: Metadata = { openGraph: { images: [{url:"/publications/consciousness/social.png",width:1200,height:630,alt:"Shadow Theory and Consciousness — from awareness to a lived world"}] }, twitter: { card:"summary_large_image", images:["/publications/consciousness/social.png"] } };
export default function ConsciousnessLayout({children}:{children:React.ReactNode}) { return <div className="consciousness-section">{children}</div>; }
