/* Stamps a content hash onto every local CSS/JS link in the HTML pages so a changed
 * file never gets served from a stale cache. Run before committing:
 *   node tools/stamp-assets.cjs
 */
const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const pages = ["index.html", "product.html", "cart.html", "404.html"];
const assets = [];
for (const dir of ["assets/css", "assets/js", "assets/data"]) {
  for (const f of fs.readdirSync(dir)) if (/\.(css|js)$/.test(f)) assets.push(path.posix.join(dir, f));
}
const hash = (p) => crypto.createHash("sha1").update(fs.readFileSync(p)).digest("hex").slice(0, 8);

let changed = 0;
for (const page of pages) {
  let s = fs.readFileSync(page, "utf8");
  const before = s;
  for (const a of assets) {
    const v = hash(a);
    s = s.replace(new RegExp('(src|href)="' + a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '(\\?v=[0-9a-f]+)?"', "g"),
      (m, attr) => attr + '="' + a + "?v=" + v + '"');
  }
  if (s !== before) { fs.writeFileSync(page, s); changed++; }
}
console.log("stamped " + changed + " page(s), " + assets.length + " assets");
