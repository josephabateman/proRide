import { useEffect } from "react";

// Lightweight, dependency-free per-page SEO: updates the document title and
// meta tags whenever a page mounts. Improves browser tabs, link previews and
// the title/description search engines see for the page a visitor lands on.
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

function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description]);

  return null;
}

export default Seo;
