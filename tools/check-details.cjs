/* Deterministic check for product detail copy: sources present, no medical claims,
 * nothing invented. Run from the repo root:  node tools/check-details.cjs
 */
const fs = require("fs");
const vm = require("vm");

const ctx = { console, window: null, Date, JSON, Math, URLSearchParams };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ["assets/data/products.js", "assets/data/details.js"]) {
  vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
}

const P = ctx.PRODUCTS;
const D = ctx.PRODUCT_DETAILS;
let fails = 0;
const check = (label, ok, detail) => {
  if (ok) console.log("ok   " + label);
  else { fails++; console.log("FAIL " + label + (detail ? ": " + detail : "")); }
};

// Words that assert a medical outcome. The fact sheets avoid them; our copy must too.
const BANNED = ["cure", "cures", "treat", "treats", "treatment", "prevent", "prevents",
  "heal", "heals", "diagnose", "clinically proven", "guarantee", "guaranteed",
  "detox", "detoxify", "prescription"];
const text = (v) => (Array.isArray(v) ? v.join(" ") : v || "");
const violations = [];
for (const [id, d] of Object.entries(D)) {
  const blob = (text(d.summary) + " " + text(d.highlights) + " " + text(d.directions) + " " +
    text(d.ingredients) + " " + text(d.notes)).toLowerCase();
  for (const w of BANNED) {
    if (new RegExp("\\b" + w.replace(/ /g, "\\s+") + "\\b").test(blob)) violations.push(id + " -> " + w);
  }
}
check("no medical claim words", violations.length === 0, violations.join(", "));

const ids = new Set(P.map((p) => p.id));
const orphans = Object.keys(D).filter((k) => !ids.has(k));
check("every detail maps to a product", orphans.length === 0, orphans.join(", "));

const declared = JSON.parse(fs.readFileSync("tools/no-sheet.json", "utf8")).ids.slice().sort();
const missing = P.filter((p) => !D[p.id]).map((p) => p.id).sort();
check("products without details match the declared list", JSON.stringify(missing), JSON.stringify(declared));

const noSource = Object.entries(D).filter(([, d]) => !d.source);
check("every detail names its source", noSource.length === 0, noSource.map((x) => x[0]).join(", "));

const noDate = Object.entries(D).filter(([, d]) => !/^\d{4}-\d{2}-\d{2}$/.test(d.verified || ""));
check("every detail has a verification date", noDate.length === 0, noDate.map((x) => x[0]).join(", "));

const thinSummary = Object.entries(D).filter(([, d]) => (d.summary || "").length < 40);
check("summaries are substantive", thinSummary.length === 0, thinSummary.map((x) => x[0]).join(", "));

// A product with a real fact sheet must carry usage or highlights; the brochure-only
// entries are the documented exception.
const brochureOnly = /EN\.PDF/;
const empty = Object.entries(D).filter(([, d]) =>
  !brochureOnly.test(d.source) && !(d.highlights || []).length && !d.directions);
check("fact-sheet entries carry substance", empty.length === 0, empty.map((x) => x[0]).join(", "));

const shortBullets = [];
for (const [id, d] of Object.entries(D)) {
  for (const h of d.highlights || []) if (h.trim().length < 10) shortBullets.push(id);
}
check("no stub bullets", shortBullets.length === 0, [...new Set(shortBullets)].join(", "));

// Pack sizes must be stated, not guessed: allow empty, ban vague values.
const vaguePack = Object.entries(D).filter(([, d]) => d.pack && /^(standard|regular|various|assorted)$/i.test(d.pack));
check("no vague pack sizes", vaguePack.length === 0, vaguePack.map((x) => x[0]).join(", "));

console.log("");
console.log(fails === 0 ? "ALL PASS" : fails + " FAILURES");
process.exit(fails === 0 ? 0 : 1);
