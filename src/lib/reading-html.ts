import { readFile } from "node:fs/promises";
import katex from "katex";

const checkedDisplay = /(<details class="rh-formula-transcript"><summary>Checked LaTeX<\/summary>[\s\S]*?<pre id="[^"]+">)([\s\S]*?)(<\/pre><\/details>)/g;
const htmlEntities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', "#x27": "'" };

export async function readReadingHtml(path: string) {
  const html = await readFile(path, "utf8");
  return html.replace(checkedDisplay, (details, _start, notation: string) => {
    const latex = notation.replace(/&(amp|lt|gt|quot|#x27);/g, (_, key: string) => htmlEntities[key]);
    const math = katex.renderToString(latex, { displayMode: true, throwOnError: true, trust: false, strict: "ignore" });
    return '<div class="rh-semantic-display">' + math + "</div>" + details;
  });
}
