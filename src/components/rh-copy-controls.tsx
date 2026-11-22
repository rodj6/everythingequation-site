"use client";

import { useEffect, useState } from "react";

export default function RhCopyControls() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const body = document.getElementById("rh-reading-body");
    if (!body) return;

    async function copy(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLButtonElement>("button[data-rh-copy]");
      if (!button?.dataset.rhCopy) return;
      const source = document.getElementById(button.dataset.rhCopy);
      if (!source?.textContent) return;
      try {
        await navigator.clipboard.writeText(source.textContent);
        setMessage("Notation copied.");
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(source);
        selection?.removeAllRanges();
        selection?.addRange(range);
        setMessage("Notation selected. Use your device’s copy command.");
      }
    }

    body.addEventListener("click", copy);
    return () => body.removeEventListener("click", copy);
  }, []);

  return <span className="rh-copy-status" role="status">{message}</span>;
}
