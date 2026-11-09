#!/usr/bin/env python3
"""Rewrite asset links in the HTML pages with a content hash, so browsers and the
GitHub Pages CDN never serve stale CSS or JS after a change."""
import hashlib, glob, re

PAGES = ("index.html", "product.html", "cart.html", "404.html")
ASSETS = ["assets/css/styles.css"] + sorted(glob.glob("assets/js/*.js")) + sorted(glob.glob("assets/data/*.js"))

def version(path):
    return hashlib.sha1(open(path, "rb").read()).hexdigest()[:8]

def main():
    vmap = {a: version(a) for a in ASSETS}
    for page in PAGES:
        s = open(page).read()
        before = s
        for asset, v in vmap.items():
            s = re.sub(r'(src|href)="' + re.escape(asset) + r'(\?v=[0-9a-f]+)?"',
                       lambda m, a=asset, h=v: f'{m.group(1)}="{a}?v={h}"', s)
        if s != before:
            open(page, "w").write(s)
            print("stamped", page)
    print("versions:", vmap)

if __name__ == "__main__":
    main()
