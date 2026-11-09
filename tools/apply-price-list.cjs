/* Rebuilds assets/data/products.js price/sku fields from assets/data/price-list.json.
 * Run from the repo root:  node tools/apply-price-list.cjs
 */
const fs = require("fs");

const pl = JSON.parse(fs.readFileSync("assets/data/price-list.json", "utf8"));
const byCode = new Map(pl.items.map((i) => [i.code, i]));

global.window = {};
require(process.cwd() + "/assets/data/products.js");
const cur = global.window.PRODUCTS;

const map = {
  "aloe-vera-gel": { code: "815" },
  "aloe-berry-nectar": { code: "834" },
  "aloe-bits-n-peaches": { code: "877" },
  "forever-freedom": { code: "896", name: "Forever Freedom" },
  "forever-aloe-msm-gel": { code: "205" },
  "forever-lite-ultra-vanilla": {
    code: "470",
    name: "Forever Lite Aminotein — Vanilla",
    blurb: "Protein shake mix from the Forever Lite range, supplied as a pouch. Blend with water or milk."
  },
  "forever-lite-ultra-chocolate": {
    code: "471",
    name: "Forever Lite Aminotein — Chocolate",
    blurb: "The chocolate flavour of the Forever Lite shake mix, supplied as a pouch."
  },
  "forever-bee-honey": { code: "207" },
  "forever-bee-propolis": { code: "027" },
  "forever-bee-pollen": { code: "026" },
  "forever-royal-jelly": { code: "036" },
  "aloe-vera-gelly": { code: "061" },
  "aloe-propolis-creme": { code: "051" },
  "aloe-heat-lotion": { code: "064" },
  "aloe-scrub": { code: "238" },
  "aloe-body-lotion": { code: "647" },
  "aloe-lips": { code: "022RA", pack: "2-piece pack" },
  "aloe-eye-gel": {
    code: "561",
    name: "Forever Aloe Awakening Eye Creme",
    blurb: "Eye cream from the Forever Aloe skincare range."
  },
  "bright-toothgel": { code: "028" },
  "aloe-ever-shield": { code: "067" },
  "aloe-jojoba-shampoo": { code: "640" },
  "aloe-jojoba-conditioner": { code: "641" },
  "aloe-liquid-soap": { code: "633" },
  "active-probiotic": {
    code: "610",
    name: "Forever Active Pro-B",
    blurb: "Probiotic supplement, listed in the Singapore price list as Active Pro-B."
  },
  "forever-argi-plus": { code: "504" },
  "forever-garlic-thyme": { code: "065" },
  "absorbent-c": { code: "048" }
};

const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const out = [];
out.push("/**");
out.push(" * ForeverStore product catalogue.");
out.push(" *");
out.push(" * Prices come from assets/data/price-list.json, the Singapore Assistant");
out.push(" * Supervisor's Price List (AS.PDF, rev 26-08), and INCLUDE 9% GST.");
out.push(" * `sku` is the Forever Living order code for that line.");
out.push(" *");
out.push(" * available:false means the line is not in the Singapore price list, so it has");
out.push(" * no price and cannot be added to the cart.");
out.push(" *");
out.push(" * Descriptions are the store's own wording. Check them against the current");
out.push(" * official fact sheet before publishing.");
out.push(" */");
out.push("window.PRODUCTS = [");

const groups = {};
for (const p of cur) (groups[p.category] = groups[p.category] || []).push(p);
const cats = Object.keys(groups);

cats.forEach((cat, ci) => {
  out.push("  // ---------- " + cat + " ----------");
  groups[cat].forEach((p, pi) => {
    const m = map[p.id] || {};
    const row = m.code ? byCode.get(m.code) : null;
    if (m.code && !row) throw new Error("unknown sku " + m.code + " for " + p.id);
    out.push("  {");
    out.push('    id: "' + p.id + '",');
    out.push('    name: "' + esc(m.name || p.name) + '",');
    out.push('    category: "' + esc(cat) + '",');
    out.push('    form: "' + esc(p.form) + '",');
    if (row) out.push('    sku: "' + row.code + '",');
    if (m.pack) out.push('    pack: "' + esc(m.pack) + '",');
    out.push("    available: " + (row ? "true" : "false") + ",");
    out.push("    price: " + (row ? row.priceInclGst.toFixed(2) : "null") + ",");
    if (p.badge) out.push('    badge: "' + esc(p.badge) + '",');
    out.push('    blurb: "' + esc(m.blurb || p.blurb) + '"' + (p.notes ? "," : ""));
    if (p.notes) out.push('    notes: "' + esc(p.notes) + '"');
    const isLast = ci === cats.length - 1 && pi === groups[cat].length - 1;
    out.push("  }" + (isLast ? "" : ","));
  });
  if (ci !== cats.length - 1) out.push("");
});
out.push("];");
out.push("");
out.push("window.CATEGORIES = " + JSON.stringify(cats) + ";");
out.push("");

fs.writeFileSync("assets/data/products.js", out.join("\n"));
console.log("products:", cur.length, "| priced:", cur.filter((p) => map[p.id]).length);
