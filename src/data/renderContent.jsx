import React from "react";

// Turns a plain-text block from siteContent.json into JSX.
// - Blank line = new paragraph
// - A line starting with "### " becomes a sub-heading
export function renderContent(text) {
  if (!text) return null;
  const blocks = String(text)
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
  return (
    <>
      {blocks.map((b, i) =>
        b.startsWith("### ") ? (
          <h3 key={i}>{b.slice(4).trim()}</h3>
        ) : (
          <p key={i}>{b}</p>
        )
      )}
    </>
  );
}

// Derives the phone formats used around the site from a single display number.
// "07960 534 012" -> { display, digits: "07960534012", intl: "+447960534012" }
export function phoneParts(display) {
  const digits = String(display || "").replace(/\D/g, "");
  const intl = "+44" + digits.replace(/^0/, "");
  return { display: String(display || ""), digits, intl };
}
