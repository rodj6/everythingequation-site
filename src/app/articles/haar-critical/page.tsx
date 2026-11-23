import { haarCriticalEdition as paper } from "@/config/new-reading-editions";
import { ReadingEntrance } from "@/components/reading-edition";
import { readingMetadata } from "@/lib/reading-editions";

export const dynamic = "force-static";
export const metadata = readingMetadata(paper);

const links = [
  { slug: "proof-and-certification-map", title: "Proof and certification map" },
  { number: "1", title: "Finite-rank mixed moments" },
  { number: "11", title: "Fixed-interior large-rank limit" },
  { number: "15", title: "Microscopic moments at positive depth" },
  { number: "17", title: "The unit-circle determinant" },
  { number: "19", title: "Shrinking depth and the circle" },
  { number: "21", title: "Certified evaluation and zero geometry" },
  { slug: "22-verification-interface-and-reproducibility-q9", title: "Signed depth-one certificate", anchor: "theorem-22-w1" },
  { number: "23", title: "Scalar recovery through resonances" },
  { number: "25", title: "Consecutive critical radii" },
];

export default function HaarCriticalPage() {
  return (
    <ReadingEntrance paper={paper} links={links}>
      <p>The cumulative manuscript connects exact finite-size formulas for Haar unitary derivative moments to fixed-interior, microscopic and unit-circle limits. Its proof and certification map identifies the hypotheses, proofs and executed checks for each result.</p>
      <p>For ranks 3 through 8, finite exact-arithmetic absolute approximations cover the full interval 0 ≤ <var>z</var> ≤ 0.9 on the stated independent complex order and tilt box. The result controls absolute accuracy. Relative accuracy near zeros and runtime have their own limits.</p>
      <p>The rank-eight simple-zero branch covers |<var>h</var>| ≤ 0.20 and 0.899 ≤ <var>z</var> ≤ 0.9. In the moving predictor tube the uniqueness radius is 0.012, the zero lies within 0.01 of the predictor, and the cofactor has modulus above 1/1300. The inner theorem on |<var>h</var>| ≤ 0.18 has uniqueness radius 0.006, zero radius 0.004537, and cofactor bound 1/625.</p>
      <p>At depth <var>c</var> = 1 with <var>h</var> = 1/2 + <var>i</var>/8 and <var>s</var> = 1/2 + <var>i</var>/20, the signed-window certificate gives an absolute disk of radius below 0.000263563 and a modulus lower bound above 0.51513048. The verification chapters distinguish theorems, executed certificates, numerical controls, and remaining obligations. The zeta prediction is conditional on the transfer hypotheses stated in the paper.</p>
      <p>The public verification archive includes the saved arithmetic ledgers, a checker for Theorem 23.1A, and documented optional numerical replays. The continuation provenance identifies earlier working archives separately.</p>
    </ReadingEntrance>
  );
}
