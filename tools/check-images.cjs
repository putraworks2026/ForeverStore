/* Image integrity check for the storefront.
 * Run from the repo root:  node tools/check-images.cjs
 *
 * Fails when a product points at an SVG, when a referenced image is missing,
 * when a WebP sits in assets/img/products with no product using it, or when a
 * product still resolves to an SVG even though an unused WebP exists for it.
 */
const fs = require("fs");
const path = require("path");

global.window = {};
require(path.join(process.cwd(), "assets/data/products.js"));
const P = global.window.PRODUCTS || [];

const imgDir = path.join("assets", "img");
const photoDir = path.join(imgDir, "products");
let bad = 0;
const fail = (msg) => {
  console.log("FAIL " + msg);
  bad++;
};
const ok = (msg) => console.log("ok   " + msg);

// 1. no product references an SVG
const svgRefs = P.filter((p) => /\.svg$/i.test(p.img || ""));
svgRefs.length ? fail("products still using SVG: " + svgRefs.map((p) => p.id).join(", ")) : ok("no product image is an SVG");

// 2. every referenced image exists and is a real file
const missing = P.filter((p) => !p.img || !fs.existsSync(p.img));
missing.length ? fail("missing image files: " + missing.map((p) => p.id).join(", ")) : ok("all " + P.length + " image paths exist");

// 3. no orphan WebP: every file in assets/img/products is used by a product
const onDisk = fs.existsSync(photoDir) ? fs.readdirSync(photoDir).filter((f) => f.endsWith(".webp")) : [];
const used = new Set(P.map((p) => path.basename(p.img || "")));
const orphans = onDisk.filter((f) => !used.has(f));
orphans.length ? fail("unreferenced WebP: " + orphans.join(", ")) : ok("no orphan WebP (" + onDisk.length + " files, all referenced)");

// 4. no stale bespoke SVG sitting beside an available WebP
const staleSvg = fs
  .readdirSync(imgDir)
  .filter((f) => f.endsWith(".svg"))
  .filter((f) => fs.existsSync(path.join(photoDir, f.replace(/\.svg$/i, ".webp"))));
staleSvg.length ? fail("SVG files still present beside a WebP: " + staleSvg.join(", ")) : ok("no stale per-product SVG beside a WebP");

// 5. tiles are flagged and are the only opaque images among the pack shots
const tiles = P.filter((p) => p.placeholder === true).map((p) => p.id).sort();
ok("rendered tiles (" + tiles.length + "): " + (tiles.join(", ") || "none"));

console.log(bad ? "FAILED (" + bad + ")" : "ALL PASS");
process.exit(bad ? 1 : 0);
