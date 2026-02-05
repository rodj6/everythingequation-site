#!/usr/bin/env ts-node
import { loadPapers } from '../lib/registry';

/**
 * Script to refresh cached Zenodo metadata. This script loads all papers
 * defined in `content/papers.yaml`, fetching any missing metadata and
 * updating `.cache/zenodo.json` accordingly. Intended to run on a
 * schedule via GitHub Actions.
 */
async function main() {
  await loadPapers();
  console.log('Zenodo metadata refreshed');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});