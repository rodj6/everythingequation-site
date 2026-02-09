"use client";

import * as React from "react";
import { MdxWrapper } from "@/components/mdx-components";

type Props = {
  Component: React.ComponentType<any>;
};

export default function ManualMdxRenderer({ Component }: Props) {
  return (
    <MdxWrapper>
      <Component />
    </MdxWrapper>
  );
}
