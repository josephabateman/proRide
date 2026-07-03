"""
apply_content.py
Reads SITE-CONTENT.md (human-edited) and writes src/data/siteContent.json
(what the website actually reads). Deterministic — no AI needed.

Run by the "Publish ProRide" desktop button, or manually:  python scripts/apply_content.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MD = ROOT / "SITE-CONTENT.md"
OUT = ROOT / "src" / "data" / "siteContent.json"

ICONS = {
    "shield": "fas fa-shield-alt",
    "shield-check": "fas fa-shield-alt",
    "insured": "fas fa-shield-alt",
    "truck": "fas fa-truck",
    "delivery": "fas fa-truck",
    "van": "fas fa-truck",
    "hand-holding-heart": "fas fa-hand-holding-heart",
    "heart": "fas fa-heart",
    "inclusive": "fas fa-hand-holding-heart",
    "award": "fas fa-award",
    "medal": "fas fa-medal",
    "trophy": "fas fa-trophy",
    "bicycle": "fas fa-bicycle",
    "bike": "fas fa-bicycle",
    "child": "fas fa-child",
    "children": "fas fa-child",
    "users": "fas fa-users",
    "group": "fas fa-users",
    "star": "fas fa-star",
    "check": "fas fa-check",
    "calendar": "fas fa-calendar",
    "clock": "fas fa-clock",
    "smile": "fas fa-face-smile",
}


def icon_class(name):
    key = (name or "").strip().lower()
    if key in ICONS:
        return ICONS[key]
    if key.startswith("fa"):  # user gave a raw Font Awesome class
        return name.strip()
    return "fas fa-" + key.replace(" ", "-")


def field(block, label):
    """Single-line value:  Label: value"""
    m = re.search(r"^\s*" + re.escape(label) + r"\s*:\s*(.*)$", block, re.M)
    return m.group(1).strip() if m else ""


def block_after(block, start_label, stop_labels):
    """Multi-line body starting after 'start_label:' until a stop label or end.
    Blank line = new paragraph. A '### ' line is its own paragraph (sub-heading)."""
    lines = block.split("\n")
    start = None
    inline = ""
    for idx, ln in enumerate(lines):
        m = re.match(r"^\s*" + re.escape(start_label) + r"\s*:\s*(.*)$", ln)
        if m:
            start = idx
            inline = m.group(1)
            break
    if start is None:
        return ""

    def is_stop(ln):
        return any(
            re.match(r"^\s*" + re.escape(sl) + r"\s*:", ln) for sl in stop_labels
        )

    collected = []
    if inline.strip():
        collected.append(inline)
    for ln in lines[start + 1:]:
        if is_stop(ln):
            break
        collected.append(ln)

    paras = []
    cur = []
    for ln in collected:
        s = ln.strip()
        if s == "":
            if cur:
                paras.append(" ".join(cur))
                cur = []
            continue
        if s.startswith("<!--"):
            continue
        if s.startswith("### "):
            if cur:
                paras.append(" ".join(cur))
                cur = []
            paras.append(s)
            continue
        cur.append(s)
    if cur:
        paras.append(" ".join(cur))
    return "\n\n".join(p for p in paras if p)


def split_top_sections(text):
    parts = re.split(r"\n-{3,}\s*\n-{3,}\s*\n", text)
    sections = {}
    for p in parts:
        m = re.search(r"^#\s*(\d+)\.\s*(.+)$", p, re.M)
        if m:
            sections[int(m.group(1))] = p
    return sections


def split_subs(block):
    subs = {}
    parts = re.split(r"^##\s+(.+)$", block, flags=re.M)
    for i in range(1, len(parts), 2):
        subs[parts[i].strip()] = parts[i + 1]
    return subs


def find_sub(subs, needle):
    for k, v in subs.items():
        if needle.lower() in k.lower():
            return v
    return ""


def parse_cards(block):
    cards = []
    blocks = re.split(r"^\[CARD\s*\d+\]\s*$", block, flags=re.M)[1:]
    for cb in blocks:
        title = field(cb, "Title")
        if not title:
            continue
        cards.append(
            {
                "icon": icon_class(field(cb, "Icon")),
                "title": title,
                "body": field(cb, "Body"),
            }
        )
    return cards


def parse_qa(block):
    pairs = []
    q = None
    for ln in block.split("\n"):
        mq = re.match(r"^\s*Q:\s*(.+)$", ln)
        ma = re.match(r"^\s*A:\s*(.+)$", ln)
        if mq:
            q = mq.group(1).strip()
        elif ma and q is not None:
            pairs.append({"q": q, "a": ma.group(1).strip()})
            q = None
    return pairs


def main():
    if not MD.exists():
        print("ERROR: SITE-CONTENT.md not found at", MD)
        return 1
    text = MD.read_text(encoding="utf-8")
    S = split_top_sections(text)

    data = {}

    # 1. Contact
    c = S.get(1, "")
    data["contact"] = {
        "phone": field(c, "Phone"),
        "email": field(c, "Email"),
        "facebook": field(c, "Facebook page"),
        "x": field(c, "X (Twitter) page"),
    }

    # 2. Home
    h = S.get(2, "")
    subs = split_subs(h)
    hero = find_sub(subs, "Hero buttons")
    why = find_sub(subs, "Why schools choose")
    action = find_sub(subs, "See ProRide in action")
    cta = find_sub(subs, "Closing call-to-action")
    data["home"] = {
        "heroButton1": field(hero, "Button 1"),
        "heroButton2": field(hero, "Button 2"),
        "whyHeading": field(why, "Heading"),
        "whySubtitle": field(why, "Subtitle"),
        "cards": parse_cards(why),
        "actionHeading": field(action, "Heading"),
        "actionSubtitle": field(action, "Subtitle"),
        "promoVideo": field(action, "Promo video link"),
        "ctaHeading": field(cta, "Heading"),
        "ctaText": field(cta, "Text"),
        "ctaButton": field(cta, "Button"),
    }

    # 3. Services
    services = []
    svc_parts = re.split(r"^-{2,}\s*SERVICE:\s*(.+?)\s*-{2,}\s*$", S.get(3, ""), flags=re.M)
    for i in range(1, len(svc_parts), 2):
        name = svc_parts[i].strip()
        blk = svc_parts[i + 1]
        body2 = block_after(blk, "Body (second section)", [])
        services.append(
            {
                "name": name,
                "header": field(blk, "Header"),
                "body": block_after(blk, "Body", ["Body (second section)"]),
                "body2": body2 or None,
            }
        )
    data["services"] = services

    # 4 & 5. About pages
    for num, key in ((4, "aboutProRide"), (5, "aboutPhil")):
        b = S.get(num, "")
        data[key] = {
            "heading": field(b, "Heading"),
            "body": block_after(b, "Body", ["Body (second section)"]),
            "body2": block_after(b, "Body (second section)", []),
        }

    # 6. FAQ
    f = S.get(6, "")
    fsubs = split_subs(f)
    data["faq"] = {
        "heading": field(f, "Page heading"),
        "subtitle": field(f, "Page subtitle"),
        "general": parse_qa(find_sub(fsubs, "General questions")),
        "balanceBike": parse_qa(find_sub(fsubs, "Balance bike day questions")),
        "ctaHeading": field(find_sub(fsubs, "Still have a question"), "Heading"),
        "ctaText": field(find_sub(fsubs, "Still have a question"), "Text"),
        "ctaButton": field(find_sub(fsubs, "Still have a question"), "Button"),
    }

    # 7. Contact page
    cp = S.get(7, "")
    data["contactPage"] = {
        "heading": field(cp, "Page heading"),
        "subtitle": field(cp, "Page subtitle"),
        "sidebarHeading": field(cp, "Sidebar heading"),
        "sidebarText": field(cp, "Sidebar text"),
    }

    # 8. Jobs
    j = S.get(8, "")
    data["jobs"] = {
        "heading": field(j, "Heading"),
        "text": field(j, "Text"),
        "button": field(j, "Download button"),
    }

    # 9. Footer
    ft = S.get(9, "")
    data["footer"] = {
        "blurb": field(ft, "Blurb"),
        "bottomLine": field(ft, "Bottom line"),
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print("Wrote", OUT.relative_to(ROOT))
    print(
        f"  contact + {len(data['home']['cards'])} home cards + "
        f"{len(services)} services + {len(data['faq']['general'])} general FAQs + "
        f"{len(data['faq']['balanceBike'])} balance-bike FAQs"
    )
    # light sanity check
    missing = []
    if not data["contact"]["phone"]:
        missing.append("contact phone")
    if len(services) < 1:
        missing.append("services")
    if len(data["home"]["cards"]) < 1:
        missing.append("home cards")
    if missing:
        print("WARNING: nothing parsed for:", ", ".join(missing))
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
