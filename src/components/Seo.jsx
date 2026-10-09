import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Lightweight, dependency-free per-page SEO: updates the document title and
// meta tags whenever a page mounts. Every page is pre-rendered at build time
// (scripts/prerender.js), so these tags end up in the static HTML that search
// engines and link previews read.
export const SITE_URL = "https://proridecoaching.co.uk";
const DEFAULT_IMAGE = "/og-image.jpg";
const DEFAULT_ROBOTS = "index, follow, max-image-preview:large";

// Some image files have spaces in their names ("after school clubs.jpg").
function absoluteUrl(path) {
  return /^https?:\/\//.test(path) ? path : SITE_URL + encodeURI(path);
}

function setMeta(key, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function Seo({ title, description, image, noindex }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Pages are served from folders (/services/), so canonical URLs end in "/".
    const url = SITE_URL + pathname.replace(/\/?$/, "/");
    const img = absoluteUrl(image || DEFAULT_IMAGE);

    if (title) document.title = title;
    setMeta("description", description);
    setMeta("robots", noindex ? "noindex, follow" : DEFAULT_ROBOTS);
    setCanonical(noindex ? null : url);
    setMeta("og:url", url, "property");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", img, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", img);
  }, [pathname, title, description, image, noindex]);

  return null;
}

export default Seo;
