import type { ReactNode } from "react";
import "./reader.css";

export default function RhLayout({ children }: { children: ReactNode }) {
  return <div className="rh-edition">{children}</div>;
}
