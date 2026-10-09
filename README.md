# Pro Ride Coaching website

Live at https://proridecoaching.co.uk (GitHub Pages).

## Editing text
Use the web editor at https://proridecoaching.co.uk/admin — change text, tap **Publish live**, and the
site updates in a minute or two. The content lives in `src/data/siteContent.json`.

## Working on the code
1. `npm install` (first time only — also downloads a headless Chrome used for pre-rendering)
2. `npm start` — local preview at http://localhost:3000
3. Commit and push to `main`. GitHub Actions builds, pre-renders and deploys automatically
   (see `.github/workflows/deploy.yml`). There's no need to run `npm run deploy`.

`npm run build` creates the production site in `build/`, then `scripts/prerender.js` saves a static
HTML page for every route plus `404.html` and `sitemap.xml`. The build fails if any page crashes,
so a broken site never goes live.

`.npmrc` passes `--openssl-legacy-provider` to Node, which react-scripts 4 needs on Node 17+.
