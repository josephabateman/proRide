#!/usr/bin/env node
// Pre-renders every page of the built site to static HTML so search engines,
// link previews and slow phones get real content straight away (React then
// hydrates it in the browser). Runs automatically after `npm run build`.
//
// - Crawls the site from "/" by following its own links, so new services
//   added via /admin are picked up without touching this file.
// - Writes build/<path>/index.html for each page, build/404.html, and a fresh
//   build/sitemap.xml.
// - Fails the build if any page crashes or renders empty, so a broken site
//   never gets deployed.

const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer");

const SITE_URL = "https://proridecoaching.co.uk";
const BUILD_DIR = path.join(__dirname, "..", "build");
const NOT_FOUND_PROBE = "/__prerender-404__";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".map": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
};

// The untouched app shell, served for every route while crawling.
const shell = fs.readFileSync(path.join(BUILD_DIR, "index.html"));

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const file = path.join(BUILD_DIR, urlPath);
    if (file.startsWith(BUILD_DIR) && fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
      fs.createReadStream(file).pipe(res);
    } else {
      res.writeHead(200, { "Content-Type": TYPES[".html"] });
      res.end(shell);
    }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

// "/services/" -> "/services"; ignores files, assets, hashes and query strings.
function routeFromHref(href, origin) {
  if (!href) return null;
  let url;
  try {
    url = new URL(href, origin);
  } catch (e) {
    return null;
  }
  if (url.origin !== origin) return null;
  let p = url.pathname;
  if (/^\/(static|media|admin)\//.test(p) || /\.[a-z0-9]+$/i.test(p)) return null;
  p = p.replace(/\/+$/, "") || "/";
  return p;
}

function outputFile(route) {
  return route === "/"
    ? path.join(BUILD_DIR, "index.html")
    : path.join(BUILD_DIR, route.slice(1), "index.html");
}

async function renderPage(browser, origin, route) {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  // Only the page's own HTML/JS/CSS are needed to render the markup.
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const local = req.url().startsWith(origin);
    const heavy = ["image", "media", "font"].includes(req.resourceType());
    if (local && !heavy) req.continue();
    else req.abort();
  });

  await page.goto(origin + route, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 150)); // let Seo/useEffect hooks finish

  const result = await page.evaluate(() => ({
    html: "<!DOCTYPE html>\n" + document.documentElement.outerHTML,
    text: (document.getElementById("root").innerText || "").trim(),
    title: document.title,
    noindex: /noindex/.test((document.querySelector('meta[name="robots"]') || {}).content || ""),
    links: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
  }));
  await page.close();
  // Aborted requests (images/fonts/analytics) log "Failed to load resource"; ignore those.
  result.errors = errors.filter((e) => !/Failed to load resource|net::ERR_FAILED/.test(e));
  return result;
}

(async () => {
  const server = await startServer();
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });

  const pages = new Map(); // route -> rendered result
  const queue = ["/"];
  const brokenLinks = [];
  let failed = false;

  try {
    while (queue.length) {
      const route = queue.shift();
      if (pages.has(route)) continue;
      const result = await renderPage(browser, origin, route);
      pages.set(route, result);

      if (result.errors.length || result.text.length < 50) {
        failed = true;
        console.error(`✗ ${route} — ${result.errors.join(" | ") || "rendered (almost) no content"}`);
        continue;
      }
      if (result.noindex) {
        brokenLinks.push(route);
        continue;
      }
      console.log(`✓ ${route}  —  ${result.title}`);
      for (const href of result.links) {
        const next = routeFromHref(href, origin);
        if (next && !pages.has(next) && !queue.includes(next)) queue.push(next);
      }
    }

    const notFound = await renderPage(browser, origin, NOT_FOUND_PROBE);
    if (notFound.errors.length || !notFound.noindex) {
      failed = true;
      console.error(`✗ 404 page — ${notFound.errors.join(" | ") || "did not render the not-found page"}`);
    }

    if (failed) throw new Error("Pre-rendering found broken pages (see above); not writing output.");

    const good = [...pages.entries()].filter(([, r]) => !r.noindex);
    for (const [route, r] of good) {
      const file = outputFile(route);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, r.html);
    }
    fs.writeFileSync(path.join(BUILD_DIR, "404.html"), notFound.html);

    const today = new Date().toISOString().slice(0, 10);
    const urls = good
      .map(([route]) => route)
      .sort()
      .map((route) => {
        const loc = SITE_URL + (route === "/" ? "/" : route + "/");
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
      })
      .join("\n");
    fs.writeFileSync(
      path.join(BUILD_DIR, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
    );

    console.log(`\nPre-rendered ${good.length} pages + 404.html; sitemap.xml has ${good.length} URLs.`);
    if (brokenLinks.length) {
      console.warn(`⚠ Internal links pointing at missing pages: ${brokenLinks.join(", ")}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
})().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
