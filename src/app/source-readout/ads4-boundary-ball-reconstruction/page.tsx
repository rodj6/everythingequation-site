import Link from "next/link";
import { ads4Edition as paper } from "@/config/new-reading-editions";
import { holographyAtlas } from "@/config/paper-integrations";
import { ReadingEntrance } from "@/components/reading-edition";
import { readingMetadata } from "@/lib/reading-editions";

export const dynamic = "force-static";
export const metadata = readingMetadata(paper);

const links = [
  { number: "2", title: "What fixed-slice balls miss at first order" },
  { number: "3", title: "Lorentzian HRT and canonical energy" },
  { number: "4", title: "What breaks the rest-frame blind spots?" },
  { number: "5", title: "Quadratic identification and recovery stability" },
  { number: "6", title: "Localized finite-energy wavepackets" },
  { number: "7", title: "Single-radius and multi-radius reconstruction" },
  { number: "7.6", title: "Single-ball uniqueness up to sign", anchor: "theorem-7-7" },
  { number: "7.7", title: "Stability and finite-window ill-conditioning" },
  { number: "C", title: "Companion reproducibility suite" },
];

export default function Ads4BoundaryBallPage() {
  return (
    <ReadingEntrance paper={paper} links={links}>
      <p>The earlier boundary-ball papers trace the move from the fixed-slice linear kernel to second-order detection. This paper asks what the resulting canonical-energy measurements can distinguish and recover.</p>
      <p>In Poincaré AdS₄ the paper derives Lorentzian surface-variation formulas and positive canonical energy on the specified perturbations. Rest-frame spherical balls still have explicit non-identifiability pairs. Time shifts, boosts, and shape changes lift particular blind spots under the stated conditions.</p>
      <p>The finite-dimensional and fixed-width localized constructions have their own measurement designs. In the axisymmetric axial sector, exact data at one fixed centered radius over any open time interval determine a perturbation in the compact positive width-measure class up to an overall sign. The unrestricted lifted inverse problem and multi-radius recovery are separate results. The paper proves stability for separated finite superpositions on a continuous observation window and gives an ill-conditioning bound for the broader infinite-dimensional setting.</p>
      <p><Link href={holographyAtlas}>Explore horizon and entropy readouts in the Atlas</Link>.</p>
    </ReadingEntrance>
  );
}
