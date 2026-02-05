# Everything Equation Site

This repository contains the source code for **Everything Equation**, a
premium research platform that curates open problems and key scholarly
articles. The site is built with [Next.js](https://nextjs.org/)
(App Router), TypeScript, MDX and Tailwind CSS, and is designed to be
deployed on [Vercel](https://vercel.com/). Content is driven entirely
from two YAML registries (`content/problems.yaml` and
`content/papers.yaml`) and supplemented with manual MDX files for
detailed commentary.

## Features

- **Static Generation** of problems and papers from YAML files.
- **Manual MDX blocks** for each problem/paper which persist across
  regenerations (`content/manual/problems/{slug}.mdx` and
  `content/manual/papers/{slug}.mdx`).
- **AI lighthouse outputs**: automatically generated `graph.json`,
  `llms.txt`, `sitemap.xml` and `feed.xml` endpoints.
- **Monograph view** grouping problems and papers into sections defined
  in the registries.
- **Tailwind CSS** for a clean grid layout and typography.
- **Daily GitHub Action** to refresh Zenodo metadata and commit
  updates.

## Development

To develop locally, ensure you have Node.js installed. Then run:

```bash
npm install
npm run dev
```

The site will be served at `http://localhost:3000` by default.

## Content Editing

- Add or edit problems in `content/problems.yaml`. Each entry must
  include an `id`, `title`, `claim`, `status` (`draft` or `public`)
  and any related paper IDs.
- Add or edit papers in `content/papers.yaml`. Each entry must
  include an `id`, `title`, `status` and optionally a `doi` or
  `zenodoId` along with the list of supported problems.
- Create manual MDX files for deeper commentary under
  `content/manual/problems/{slug}.mdx` or
  `content/manual/papers/{slug}.mdx`. These files are never overwritten
  by the build system.

## Deployment

Deployment is designed for Vercel. After pushing this repository to
GitHub, create a new Vercel project and import the repo. Set
`NEXT_PUBLIC_SITE_URL` in the Vercel environment to your custom domain
(e.g. `https://everythingequation.com`). The build command is `npm
run build` and the output directory is `.next` (the default for
Next.js).

## License

This project is released under the MIT License. See
[`LICENSE`](LICENSE) for details.