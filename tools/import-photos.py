#!/usr/bin/env python3
"""Turn the product photos cut from the fact sheets into web assets.

Each photo is cut out against its own backdrop (border-connected pixels close to
the corner colour become transparent), trimmed to the subject, padded to a square
and written as assets/img/products/<product-id>.webp with an alpha channel so it
sits on the storefront card without a visible box.

tools/photos.map.json maps product id -> source file.
"""
import json, os
import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAP = os.path.join(ROOT, "tools", "photos.map.json")
OUT = os.path.join(ROOT, "assets", "img", "products")
SIZE = 800

os.makedirs(OUT, exist_ok=True)


def cutout(im, tol=28):
    rgb = np.asarray(im.convert("RGB")).astype(int)
    corners = [rgb[0, 0], rgb[0, -1], rgb[-1, 0], rgb[-1, -1]]
    base = np.median(np.array(corners), axis=0)
    near = np.abs(rgb - base).sum(2) < tol
    lab, n = ndimage.label(near)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    bg = np.isin(lab, list(edge))
    keep = ~bg
    keep = ndimage.binary_fill_holes(keep)
    if keep.sum() < 0.02 * keep.size:
        keep = np.ones_like(keep)
    ys, xs = np.where(keep)
    y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
    alpha = (keep[y0:y1, x0:x1] * 255).astype(np.uint8)
    rgba = np.dstack([rgb[y0:y1, x0:x1].astype(np.uint8), alpha])
    return Image.fromarray(rgba, "RGBA")


mapping = json.load(open(MAP))
written = []
for pid, rel in mapping.items():
    src = os.path.join(ROOT, rel)
    if not os.path.exists(src):
        print("missing", rel)
        continue
    subject = cutout(Image.open(src))
    side = max(subject.size)
    pad = int(side * 0.04)
    canvas = Image.new("RGBA", (side + pad * 2, side + pad * 2), (0, 0, 0, 0))
    canvas.paste(subject, (pad + (side - subject.width) // 2, pad + (side - subject.height) // 2), subject)
    canvas = canvas.resize((SIZE, SIZE), Image.LANCZOS)
    dst = os.path.join(OUT, pid + ".webp")
    canvas.save(dst, "WEBP", quality=88, method=6)
    written.append((pid, os.path.getsize(dst)))

print(f"wrote {len(written)} images")
for pid, size in written:
    print(f"  {pid:24} {size / 1024:6.1f} KB")
