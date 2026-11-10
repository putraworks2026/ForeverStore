# ForeverStore

A lightweight storefront for **Forever Living Products** — aloe vera drinks, bee products,
skincare and everyday supplements.

Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no dependencies.
Open it in a browser or serve the folder as a static site.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Shop: hero, category filter, search, sort, product grid |
| `product.html?id=<id>` | Product detail with quantity, notes and related items |
| `cart.html` | Cart, delivery form, and a generated order summary the customer sends to you |

Product data lives in `assets/data/products.js`; site settings live in
`assets/js/config.js`; product illustrations are SVG files in `assets/img/`.

## Where the prices come from

`assets/data/price-list.json` holds all 80 lines of the Forever Living Singapore **Retail Price
List** (SRP.PDF), with the order code, section, SRP, GST per unit and `SRP INCL GST`. The
`SRP INCL GST` column is what a customer pays, so it is used directly as the store price. Each
product in `assets/data/products.js` carries the matching `sku`, and its `price` must equal that
line in the price list.

The distributor (`AS.PDF`, "for FBOs' use only") and preferred-customer (`PC.PDF`) price sheets
are internal. They are deliberately **not** stored in this public repository, and no distributor
cost appears anywhere in the site.

Six products in the catalogue are not in the Singapore price list (Aloe Peaches, Aloe Mango,
Forever Active, Multi-Maca, Ginkgo Plus, Aloe Vera Gel Capsules). They are marked
`available: false`, carry no price, are hidden from the shop grid, and cannot be added to a cart.

To reprice after a new retail list:

1. Replace `assets/data/price-list.json` with the new export (same shape).
2. Add or adjust the `id → sku` entries in `tools/apply-price-list.cjs`.
3. `node tools/apply-price-list.cjs && node tools/check-catalogue.cjs`

`tools/check-catalogue.cjs` is the gate: it fails on a price that does not match the price list,
an unknown SKU, a duplicate id or name, a missing image, a missing description, or broken cart
maths.

## Product information

The shop lists all 80 lines of the Singapore retail price list. Names, categories and pack forms
come from `tools/catalogue-map.json`; prices and order codes come from
`assets/data/price-list.json`. `node tools/build-catalogue.cjs` regenerates
`assets/data/products.js` from those two files, so no product or figure is typed twice.

Detail copy for 60 products lives in `assets/data/details.js`, keyed by product id. Each entry
records the fact sheet it came from and the date it was read: summary, the sheet's own feature
list, key ingredients, how to use, storage or warnings, and certifications. Nothing is written
from general knowledge; if a fact is not on the sheet, it is not in the file.

The 20 products without a fact sheet in the archive are listed in `tools/no-sheet.json`. Their
pages carry price and order code and a plain statement that nothing has been written about them
yet. When a sheet arrives, add an entry to `details.js`, remove the id from `no-sheet.json`, and
run the checks.

Product pictures live in `assets/img/`. A file named after the product id is used when one exists;
otherwise the page falls back to a generic illustration for that pack form (`form-bottle.svg`,
`form-jar.svg`, `form-tube.svg` and so on).

The sheets are image-only PDFs, so their text was read with OCR and each entry was checked by
hand against the page before it was written.

## Checks

```bash
node tools/check-catalogue.cjs   # prices vs price list, coverage, ids, images, cart maths
node tools/check-details.cjs     # sources, no medical claims, no stubs, declared gaps
```

`check-catalogue.cjs` fails on a price that does not match the price list, a price-list line
missing from the shop, a shop line with no price-list entry, a duplicate id or name, a missing
illustration, or broken cart maths. `check-details.cjs` fails on an unsourced entry, a missing
verification date, a stub bullet, a vague pack size, or the words cure, treat, prevent, heal,
diagnose, guaranteed, detox or prescription.

## Asset versions

Asset links in the HTML carry a short content hash, e.g. `assets/css/styles.css?v=873cad68`.
GitHub Pages serves assets with a 10 minute cache, so a plain reload can show stale CSS on a
phone. Whenever styles or scripts change, re-run the version stamp:

```bash
python3 tools/stamp-assets.py
```

## Ingredients

`assets/data/ingredients.js` holds the ingredient block for each product: a per-serving line
where the source prints a quantity, then each named ingredient with a short note in the
source's own terms, plus the document it came from. It covers 48 of the 60 products that have
a fact sheet; pack bundles and the three Logic products have no ingredient list in their
documents, so the page falls back to the plain key-ingredient line.

`node tools/check-details.cjs` rejects an ingredient block with no source, an empty list, a
one-word note, or a medical claim word. Asset links are stamped with a content hash by
`node tools/stamp-assets.cjs`; run it before committing so a changed file cannot be served
from a stale cache.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly from disk also works, because catalogue data is loaded
as a script rather than fetched.

## How ordering works

There is no payment gateway. The customer builds a cart, fills in delivery details, and
the site assembles a plain-text order summary. They send it with one tap by email
(`orderEmail`) or WhatsApp (`orderWhatsApp`), or copy it. You confirm stock, delivery and
payment directly. Cart contents and the delivery draft are kept in `localStorage`.

## Before you go live

1. **Prices.** Done: retail prices from the Singapore SRP list, GST included. Refresh them with
   `tools/apply-price-list.cjs` when Forever Living issues a new list.
2. **Contact.** Set `orderEmail` (and `orderWhatsApp`, digits only with country code) so
   orders reach you. Both are still placeholders.
3. **Unpriced lines.** Decide whether the six `available: false` products should be dropped or
   sourced from another market.
4. **Delivery.** Adjust `shippingFlat`, `freeShippingFrom` and `shipsTo`.
5. **Catalogue.** Add, edit or remove products in `assets/data/products.js`. Each product
   needs a matching `assets/img/<id>.svg` — either the generated placeholder or a real
   product photo.
6. **Copy and claims.** Only 27 of the 77 price-list lines are in the shop so far. Product
   descriptions are the store's own wording, not Forever Living copy. Descriptions are deliberately factual. Health, nutrition and
   skincare claims are regulated in most markets, so check every line against your
   distributor agreement and local advertising rules before publishing.
7. **Policies.** Add real delivery, returns and privacy pages, and link them in the footer.

## Product images: photographs and AI-restyled cut-outs

Sixty of the eighty images are photographs lifted from official Forever Living fact sheets
(provenance in `tools/product-photo-sources.json`). Twenty were flat white cut-outs with no
shadow or lighting, which read as clip art beside the rest; those were re-lit with generated
backgrounds and lighting on 2026-11-11 (`tools/ai-restyled.json`).

The rule that keeps this honest: **the product, its packaging artwork and every label word come
from the official art, never from the model.** The render supplies only the studio sweep, the key
light and the contact shadow. If a render ever shows label text that differs from the official
cut-out, discard it: the label is the source of truth. Four pack tiles (Daily Nutrition Pack and
Start Your Journey 1-3) remain renders, because no photograph of that packaging exists.

## Deploy

Any static host works. For GitHub Pages: **Settings → Pages → Deploy from a branch →
`main` / root**. The site is then at `https://<owner>.github.io/ForeverStore/`.

All internal links are relative, so it works from a subpath as well as a domain root.

## Structure

```
index.html
product.html
cart.html
404.html
assets/
  css/styles.css
  data/products.js      # catalogue
  img/*.svg             # product illustrations + favicon
  js/config.js          # store settings
  js/cart-core.js       # cart storage, totals, helpers
  js/shop.js            # catalogue filtering and sorting
  js/product.js         # product detail page
  js/cart-page.js       # cart, delivery form, order summary
```

## Notes

- Accessibility: skip links, labelled controls, visible focus styles, live regions for
  status messages, reduced-motion support, keyboard-operable filters and quantity controls.
- No analytics, no third-party scripts, no cookies. The only stored data is the cart and
  the delivery draft, both in the customer's own browser.
- Never put API keys, payment credentials or customer data in this repository.

## Disclaimer

Forever Living products are sold through independent distributors. Selling them requires
an active distributorship, and the product statements you publish have to comply with the
rules of the market you sell in. This repository is storefront code only.
