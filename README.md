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

Detail copy for every product lives in `assets/data/details.js`, keyed by product id. Each entry
records the document it came from in `source` and the date it was read in `verified`.

The rule is absolute: **if a fact is not in the document, it is not on the page.** That means no
benefit invented from general knowledge, no pack size that is not printed on the pack, and no
medical claim. Statements the manufacturer makes in its own material are shown under
"From the official fact sheet" and cited at the bottom of the section.

The fact sheets in the library are image-only PDFs, so their text was read by OCR and then checked
against the rendered page. Two products, Forever Lite Ultra with Aminotein and Awakening Eye Cream,
have only a brochure entry in the archive; their pages say so rather than filling the gap.

`tools/check-details.cjs` is the gate:

```bash
node tools/check-details.cjs
```

It fails on a missing source, a missing verification date, a thin summary, a stub bullet, a vague
pack size, a detail entry with no product, a priced product with no detail, or any of the medical
claim words in its blocklist (cure, treat, prevent, heal, diagnose, clinically proven, guaranteed,
detox, prescription).

To add or update a product:

1. Drop the fact sheet in the archive and read off the description, features, how-to-use,
   key ingredients, storage and certifications.
2. Fill or update that product's entry in `assets/data/details.js`; leave fields empty rather than
   guessing.
3. Set `verified` to today's date and re-run both checks.

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
