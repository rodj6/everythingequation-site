/** Keep external metadata inside the JSON data block, including </script>. */
export function jsonLdText(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
