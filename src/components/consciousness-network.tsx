"use client";
import { useEffect, useRef, useState } from "react";

// Original editorial linework. Each impulse belongs to one physical organization;
// there are deliberately no paths connecting the two vessels.
const outline = "M85 219 C57 208 48 181 58 162 C44 143 58 115 78 108 C78 83 103 62 129 66 C143 43 177 38 197 49 C222 33 252 38 273 52 C300 45 330 55 342 76 C367 76 391 94 393 118 C415 132 419 160 406 179 C421 204 402 230 377 235 C365 258 337 267 314 258 C298 272 280 267 269 251 L273 283 C265 294 252 294 245 284 L231 252 C209 252 190 239 179 229 C157 244 130 239 116 226 C107 232 93 231 85 219 Z";
const folds = [
  "M79 110 C109 102 93 139 116 140 C138 145 149 119 134 101 C121 85 143 77 158 90",
  "M61 164 C82 151 99 160 93 184 C87 207 107 221 124 208 C140 196 119 175 139 161 C154 151 167 161 167 179",
  "M131 68 C111 89 153 102 162 116 C177 141 159 154 182 166 C210 172 203 148 195 134 C180 110 204 105 201 83 C196 67 179 63 177 48",
  "M203 49 C223 58 216 75 230 84 C248 92 260 73 251 58",
  "M261 86 C281 71 303 78 300 97 C298 118 277 109 271 126 C262 146 285 151 297 137",
  "M342 79 C322 82 313 101 331 114 C350 127 361 105 377 117 C397 132 379 147 365 147",
  "M396 152 C365 143 346 161 358 177 C370 193 391 178 400 191",
  "M80 137 C93 134 103 149 116 153",
  "M129 228 C144 221 153 214 149 196 C145 181 161 174 174 188 C188 203 177 216 195 223 C216 230 224 216 220 201",
  "M186 181 C203 181 215 167 226 173 C244 184 239 206 253 211 C275 218 285 198 272 181",
  "M227 252 C217 235 242 232 247 247",
  "M215 109 C205 124 223 147 238 140 C258 134 242 119 248 105",
  "M298 160 C286 166 297 184 310 184 C332 184 323 205 312 213 C300 222 318 243 335 235",
  "M342 133 C323 129 309 144 321 156 C334 166 342 156 345 175",
  "M361 198 C344 200 348 219 365 225",
  "M177 68 C161 75 169 90 181 92",
  "M248 161 C253 151 268 153 273 164",
  "M288 232 C277 224 263 232 269 247",
  "M95 185 C106 184 116 190 120 199",
  "M301 63 C308 75 321 69 329 79",
  "M187 232 C181 222 195 209 205 213",
  "M340 244 C350 247 360 239 367 231",
];
const brainNodes = [[82,110],[132,103],[162,117],[196,135],[230,84],[274,126],[330,114],[365,148],[357,177],[310,184],[272,183],[238,139],[186,182],[166,178],[141,164],[125,209],[208,221],[254,211],[332,235],[95,184],[299,97],[248,161]];
const artificialNodes = Array.from({length: 37}, (_,i) => {
  if (!i) return [250,151];
  const ring = i <= 12 ? 1 : 2; const count = ring === 1 ? 12 : 24;
  const angle = ((i - (ring === 1 ? 1 : 13)) / count) * Math.PI * 2 + (ring === 1 ? .13 : 0);
  return [250 + Math.cos(angle) * (ring === 1 ? 91 : 180), 153 + Math.sin(angle) * (ring === 1 ? 62 : 116)];
});
const artificialEdges = artificialNodes.flatMap((a,i) => artificialNodes.slice(i + 1).map((b,j) => ({a,b,i,j:j+i+1}))).filter(({a,b,i,j}) => (Math.hypot(a[0]-b[0],a[1]-b[1]) < 107 && (i+j)%3 !== 0) || i === 0 && j%2 === 0 && j < 13);

export default function ConsciousnessNetwork() {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false); const [paused, setPaused] = useState(true);
  const [visible, setVisible] = useState(false); const [activeTab, setActiveTab] = useState(true);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReady(true); setReduced(media.matches); setPaused(media.matches);
    const preference = () => { setReduced(media.matches); setPaused(media.matches); };
    const visibility = () => setActiveTab(document.visibilityState === "visible");
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {threshold: .05});
    if (ref.current) observer.observe(ref.current); visibility();
    media.addEventListener("change", preference); document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); media.removeEventListener("change", preference); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  const running = ready && !paused && visible && activeTab;
  return <figure ref={ref} className="c-network" data-motion={running ? "running" : "paused"} aria-label="Conceptual comparison of a biological brain and an artificial network">
    <div className="c-network-art" aria-hidden="true">
      <div className="c-network-vessel c-network-biological">
        <svg viewBox="0 0 480 310" fill="none"><defs><radialGradient id="brain-haze"><stop stopColor="#52dccf" stopOpacity=".12"/><stop offset="1" stopColor="#52dccf" stopOpacity="0"/></radialGradient><linearGradient id="brain-stroke" x1="50" y1="50" x2="420" y2="280" gradientUnits="userSpaceOnUse"><stop stopColor="#73eedb"/><stop offset="1" stopColor="#228999"/></linearGradient><filter id="brain-glow"><feGaussianBlur stdDeviation="2.5"/></filter></defs>
          <ellipse cx="235" cy="154" rx="235" ry="145" fill="url(#brain-haze)" />
          <path d={outline} stroke="#65e1d1" strokeWidth="5" opacity=".12" filter="url(#brain-glow)"/>
          <path d={outline} stroke="url(#brain-stroke)" strokeWidth="1.65" fill="#0b2830" fillOpacity=".22"/>
          <g stroke="url(#brain-stroke)" strokeWidth="1.35" strokeLinecap="round">{folds.map((d,i)=><path d={d} key={i} opacity={i%3===0 ? .85 : .5}/>)}</g>
          <g stroke="#80f4e4" strokeWidth=".5" opacity=".13">{brainNodes.slice(0,-1).map((a,i)=><path key={i} d={`M${a} Q230 158 ${brainNodes[(i+7)%brainNodes.length]}`}/>)}</g>
          <g fill="#91fff0">{brainNodes.map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r={i%3===0?2.2:1.5} opacity={i%3===0?.85:.4}/>)}</g>
          <g fill="#b1fff4">{brainNodes.filter((_,i)=>i%4===0).map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="3.4" className="c-junction" style={{animationDelay:`-${i*1.3}s`}}/>)}</g>
          <g stroke="#b1fff4" strokeWidth="2.5" strokeLinecap="round">{[0,2,4,8,9,12,13].map((i,n)=><path key={i} d={folds[i]} pathLength="100" className="c-impulse" style={{animationDelay:`-${n*1.3}s`,animationDuration:`${5+n%3}s`}}/>)}</g>
        </svg>
      </div>
      <div className="c-network-vessel c-network-artificial">
        <svg viewBox="0 0 480 310" fill="none"><defs><radialGradient id="network-haze"><stop stopColor="#9d8dff" stopOpacity=".14"/><stop offset="1" stopColor="#9d8dff" stopOpacity="0"/></radialGradient><linearGradient id="network-stroke" x1="60" y1="60" x2="420" y2="270" gradientUnits="userSpaceOnUse"><stop stopColor="#739eea"/><stop offset="1" stopColor="#ba8afd"/></linearGradient></defs>
          <ellipse cx="250" cy="155" rx="228" ry="150" fill="url(#network-haze)"/>
          <g stroke="url(#network-stroke)" strokeWidth=".85">{artificialEdges.map(({a,b},i)=><path key={i} d={`M${a}L${b}`} opacity={i%4===0?.6:.26}/>)}</g>
          <g stroke="#a3a4ff" fill="#0d1731">{artificialNodes.map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r={i===0?6:i%3===0?4:2.5} strokeWidth={i===0?1.3:.8}/>)}</g>
          <g fill="#c8b6ff">{artificialNodes.filter((_,i)=>i%3===0).map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="1.7"/>)}</g>
          <g fill="#dfd2ff">{artificialNodes.filter((_,i)=>i%7===0).map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="3.3" className="c-junction" style={{animationDelay:`-${i*1.4}s`}}/>)}</g>
          <g stroke="#d2c4ff" strokeWidth="2.2" strokeLinecap="round">{artificialEdges.filter((_,i)=>i%12===0).map(({a,b},i)=><path key={i} d={`M${a}L${b}`} pathLength="100" className="c-impulse" style={{animationDelay:`-${i*1.4}s`,animationDuration:`${4+i%4}s`}}/>)}</g>
          <circle cx="250" cy="153" r="140" stroke="#9791e0" strokeOpacity=".12" strokeDasharray="1 10"/>
        </svg>
      </div>
    </div>
    <div className="c-network-labels"><div><span>01 / Biological organization</span><strong>Human consciousness</strong></div><div><span>02 / Artificial organization</span><strong>Artificial consciousness?</strong></div></div>
    <figcaption><div><p>Different vessels. What makes a perspective?</p><span>A conceptual illustration—not measured activity or a consciousness score.</span></div><button type="button" disabled={!ready} onClick={()=>setPaused(value=>!value)} aria-pressed={!paused} aria-label={paused ? "Play network animation" : "Pause network animation"}><span aria-hidden="true">{paused?"▷":"Ⅱ"}</span> {paused ? "Play" : "Pause"} motion{reduced && paused ? " · reduced" : ""}</button></figcaption>
  </figure>;
}
