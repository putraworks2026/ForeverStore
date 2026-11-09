/* Deterministic quality check for the storefront data and cart maths.
 * Run from the repo root:  node tools/check-catalogue.cjs
 */
const fs = require("fs");
const vm = require("vm");

const store = new Map();
const listeners = {};
const ctx = {
  console,
  localStorage: {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k)
  },
  CustomEvent: class { constructor(type, o) { this.type = type; this.detail = o && o.detail; } },
  document: {
    addEventListener: (t, fn) => { (listeners[t] = listeners[t] || []).push(fn); },
    dispatchEvent: (ev) => { (listeners[ev.type] || []).forEach((fn) => fn(ev)); return true; },
    querySelectorAll: () => [],
    getElementById: () => null
  },
  Date, Math, JSON, isNaN
};
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ["assets/js/config.js", "assets/data/products.js", "assets/js/cart-core.js"]) {
  vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
}

const Cart = ctx.Cart;
const P = ctx.PRODUCTS;
const priceList = JSON.parse(fs.readFileSync("assets/data/price-list.json", "utf8"));
const listByCode = new Map(priceList.items.map((i) => [i.code, i]));
const priced = P.filter((p) => p.available !== false);

let fails = 0;
const check = (label, got, want) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  if (!ok) { fails++; console.log("FAIL " + label + ": got " + JSON.stringify(got) + " want " + JSON.stringify(want)); }
  else console.log("ok   " + label);
};
const near = (a, b) => Math.abs(a - b) < 0.005;

/* ---------- cart maths, derived from the catalogue ---------- */
const gel = P.find((p) => p.id === "aloe-vera-gel");
const lips = P.find((p) => p.id === "aloe-lips");
const cfg = ctx.STORE_CONFIG;

const shipFor = (sub) => (sub >= cfg.freeShippingFrom ? 0 : cfg.shippingFlat);

check("empty count", Cart.count(), 0);
Cart.add(gel.id, 1);
check("single line", Cart.count(), 1);
check("subtotal 1 unit", near(Cart.totals().subtotal, gel.price), true);
check("shipping below threshold", Cart.totals().shipping, shipFor(gel.price));
check("total = subtotal + shipping", near(Cart.totals().total, gel.price + shipFor(gel.price)), true);

Cart.add(gel.id, 2);
check("merges same id", Cart.count(), 3);
check("line qty", Cart.lines()[0].qty, 3);
check("subtotal 3 units", near(Cart.totals().subtotal, gel.price * 3), true);

const need = Math.ceil((cfg.freeShippingFrom - Cart.totals().subtotal) / lips.price);
if (need > 0) Cart.add(lips.id, need);
check("free shipping at threshold", Cart.totals().shipping, 0);
check("total without shipping", near(Cart.totals().total, Cart.totals().subtotal), true);

const linesBefore = Cart.lines().length;
Cart.setQty(gel.id, 0);
check("setQty 0 removes the line", Cart.lines().length, linesBefore - 1);
Cart.add(lips.id, 1);
Cart.setQty(lips.id, 500);
check("qty capped at 99", Cart.lines()[0].qty, 99);
Cart.remove(lips.id);
check("remove all -> empty", Cart.count(), 0);
Cart.add("nope-not-real", 1);
check("unknown id ignored", Cart.lines().length, 0);

const unavailable = P.find((p) => p.available === false);
if (unavailable) {
  Cart.add(unavailable.id, 1);
  check("unpriced product cannot be added", Cart.count(), 0);
}
Cart.clear();
check("money format", Cart.money(38.9), "S$38.90");
check("money null is dash", Cart.money(null), "—");
check("escape html", Cart.escapeHtml('<b>&"x"</b>'), "&lt;b&gt;&amp;&quot;x&quot;&lt;/b&gt;");

/* ---------- catalogue integrity ---------- */
const ids = P.map((p) => p.id);
check("unique ids", ids.length, new Set(ids).size);
check("unique names", P.length, new Set(P.map((p) => p.name)).size);
check("categories valid", [...new Set(P.map((p) => p.category))].sort(), [...ctx.CATEGORIES].sort());
check("all have image", P.filter((p) => !fs.existsSync("assets/img/" + p.id + ".svg")).map((p) => p.id), []);
check("all have blurb", P.filter((p) => !p.blurb || p.blurb.length < 20).map((p) => p.id), []);

/* every priced product must match the price list exactly */
const mismatched = [];
const unknownSku = [];
for (const p of P) {
  if (p.available === false) {
    if (p.price !== null) mismatched.push(p.id + " priced but unavailable");
    continue;
  }
  const row = listByCode.get(p.sku);
  if (!row) { unknownSku.push(p.id + " (" + p.sku + ")"); continue; }
  if (!near(p.price, row.priceInclGst)) mismatched.push(p.id + " " + p.price + " != " + row.priceInclGst);
}
check("skus exist in price list", unknownSku, []);
check("prices match price list", mismatched, []);
check("priced count", priced.length, P.length - P.filter((p) => p.available === false).length);
check("sku uniqueness", priced.length, new Set(priced.map((p) => p.sku)).size);
check("no size attributions", P.filter((p) => "size" in p).map((p) => p.id), []);

console.log(fails === 0 ? "\nALL PASS" : "\n" + fails + " FAILURES");
process.exit(fails === 0 ? 0 : 1);
