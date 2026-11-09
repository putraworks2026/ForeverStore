/* Product detail page. Reads ?id= and renders the matching catalogue item. */
(function () {
  "use strict";

  var CONFIG = window.STORE_CONFIG || {};
  var id = new URLSearchParams(window.location.search).get("id");
  var p = id ? Cart.findProduct(id) : null;
  var root = document.getElementById("product-root");
  var missing = document.getElementById("missing");

  if (!p) {
    if (root) root.querySelector(".detail-grid").hidden = true;
    var rel = document.getElementById("related");
    if (rel) rel.closest("section").hidden = true;
    if (missing) missing.hidden = false;
    document.title = "Product not found — ForeverStore";
    return;
  }

  document.title = p.name + " — ForeverStore";
  var set = function (elId, value) {
    var el = document.getElementById(elId);
    if (el) el.textContent = value;
  };

  set("p-cat", p.category);
  set("p-name", p.name);
  var metaBits = [];
  if (p.pack) metaBits.push(p.pack);
  if (p.badge) metaBits.push(p.badge);
  set("p-size", metaBits.join(" · "));
  set("p-price", p.price == null ? "Price on request" : Cart.money(p.price));
  set("p-blurb", p.blurb || "");
  set("f-cat", p.category);
  set("f-size", p.sku || "—");
  set("crumb-cat", p.category);
  set("crumb-name", p.name);

  var ship = "Ships within " + (CONFIG.shipsTo || "your area") + ". Free delivery from " + Cart.money(CONFIG.freeShippingFrom || 0) + ".";
  set("f-ship", ship);

  var media = document.getElementById("p-media");
  if (media) {
    media.src = "assets/img/" + p.id + ".svg";
    media.alt = p.name;
  }

  if (p.price == null) {
    var buyRow = document.getElementById("buy-row");
    if (buyRow) buyRow.hidden = true;
    var unavailable = document.getElementById("p-unavailable");
    if (unavailable) unavailable.hidden = false;
  }

  var notes = document.getElementById("p-notes");
  if (notes && p.notes) {
    notes.textContent = p.notes;
    notes.hidden = false;
  }

  var crumbCat = document.getElementById("crumb-cat");
  if (crumbCat) crumbCat.href = "index.html#shop";

  /* ---------- quantity ---------- */

  var qtyInput = document.getElementById("qty");
  function clampQty(n) {
    n = Math.floor(Number(n) || 1);
    return Math.min(99, Math.max(1, n));
  }
  function syncQty(n) {
    if (qtyInput) qtyInput.value = String(clampQty(n));
  }

  var minus = document.getElementById("qty-minus");
  var plus = document.getElementById("qty-plus");
  if (minus) minus.addEventListener("click", function () { syncQty(qtyInput.value - 1); });
  if (plus) plus.addEventListener("click", function () { syncQty(qtyInput.value + 1); });
  if (qtyInput) {
    qtyInput.addEventListener("change", function () { syncQty(qtyInput.value); });
    qtyInput.addEventListener("blur", function () { syncQty(qtyInput.value); });
  }

  var addBtn = document.getElementById("add-btn");
  if (addBtn) {
    addBtn.addEventListener("click", function () {
      var n = clampQty(qtyInput ? qtyInput.value : 1);
      Cart.add(p.id, n);
      Cart.flash(n + " × " + p.name + " added to cart");
    });
  }

  /* ---------- related ---------- */

  var relatedBox = document.getElementById("related");
  if (relatedBox) {
    var same = (window.PRODUCTS || []).filter(function (x) {
      return x.id !== p.id && x.category === p.category;
    }).slice(0, 4);

    if (!same.length) {
      var section = relatedBox.closest("section");
      if (section) section.hidden = true;
    } else {
      relatedBox.innerHTML = same.map(function (x) {
        var esc = Cart.escapeHtml;
        return (
          '<article class="card">' +
            '<a class="card-media" href="product.html?id=' + encodeURIComponent(x.id) + '" aria-label="' + esc(x.name) + '">' +
              '<img src="assets/img/' + encodeURIComponent(x.id) + '.svg" alt="" loading="lazy" width="600" height="600">' +
            "</a>" +
            '<div class="card-body">' +
              '<p class="card-cat">' + esc(x.category) + "</p>" +
              '<h3 class="card-title"><a href="product.html?id=' + encodeURIComponent(x.id) + '">' + esc(x.name) + "</a></h3>" +
              '<p class="card-size">' + esc(x.sku ? "Code " + x.sku : "") + "</p>" +
              '<div class="card-foot"><span class="price">' + (x.price == null ? "Price on request" : Cart.money(x.price)) + "</span>" +
              (x.price == null ? "" : '<button class="btn" type="button" data-add="' + esc(x.id) + '" aria-label="Add ' + esc(x.name) + ' to cart">Add</button>') + "</div>" +
            "</div>" +
          "</article>"
        );
      }).join("");

      relatedBox.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-add]");
        if (!btn) return;
        var item = Cart.findProduct(btn.getAttribute("data-add"));
        Cart.add(btn.getAttribute("data-add"), 1);
        Cart.flash((item ? item.name : "Item") + " added to cart");
      });
    }
  }
})();
