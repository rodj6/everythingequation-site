import type { ReactNode } from "react";
import "../riemann-hypothesis/reader.css";

export default function ReadingEditionLayout({ children }: { children: ReactNode }) {
  return <div className="rh-edition">{children}</div>;
}
