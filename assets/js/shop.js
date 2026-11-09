/* Shop page: catalogue filtering, sorting and add-to-cart. */
(function () {
  "use strict";

  var ALL = "__all__";
  var state = { category: ALL, query: "", sort: "featured" };

  var grid = document.getElementById("grid");
  var chips = document.getElementById("chips");
  var empty = document.getElementById("empty");
  var countEl = document.getElementById("result-count");
  var search = document.getElementById("search");
  var sortEl = document.getElementById("sort");
  var resetBtn = document.getElementById("reset-filters");

  var products = (window.PRODUCTS || []).filter(function (p) {
    return p.available !== false;
  });

  /* ---------- rendering ---------- */

  function cardHtml(p) {
    var esc = Cart.escapeHtml;
    var badge = p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "";
    var meta = shopMeta(p);
    return (
      '<article class="card">' +
        '<a class="card-media" href="product.html?id=' + encodeURIComponent(p.id) + '" aria-label="' + esc(p.name) + '">' +
          badge +
          '<img src="' + p.img + '" alt="" loading="lazy" width="600" height="600">' +
        "</a>" +
        '<div class="card-body">' +
          '<p class="card-cat">' + esc(p.category) + "</p>" +
          '<h3 class="card-title"><a href="product.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.name) + "</a></h3>" +
          '<p class="card-size">' + esc(meta) + "</p>" +
          '<div class="card-foot">' +
            '<span class="price">' + esc(priceText(p)) + "</span>" +
            (p.price == null
              ? ""
              : '<button class="btn" type="button" data-add="' + esc(p.id) + '" aria-label="Add ' + esc(p.name) + ' to cart">Add</button>') +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function shopMeta(p) {
    var bits = [];
    if (p.sku) bits.push("Code " + p.sku);
    if (p.pack) bits.push(p.pack);
    return bits.join(" · ");
  }

  function priceText(p) {
    return p.price == null ? "Price on request" : Cart.money(p.price);
  }

  function matches(p) {
    if (state.category !== ALL && p.category !== state.category) return false;
    if (!state.query) return true;
    var d = (window.PRODUCT_DETAILS || {})[p.id] || {};
    var hay = (p.name + " " + p.category + " " + (d.summary || "") + " " +
      (d.highlights || []).join(" ") + " " + (d.ingredients || []).join(" ")).toLowerCase();
    return state.query
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every(function (term) {
        return hay.indexOf(term) !== -1;
      });
  }

  function sortList(list) {
    var out = list.slice();
    var val = function (p) { return p.price == null ? Infinity : p.price; };
    if (state.sort === "price-asc") out.sort(function (a, b) { return val(a) - val(b); });
    else if (state.sort === "price-desc") out.sort(function (a, b) { return val(b) - val(a); });
    else if (state.sort === "name") out.sort(function (a, b) { return a.name.localeCompare(b.name); });
    return out;
  }

  function render() {
    var visible = sortList(products.filter(matches));
    grid.innerHTML = visible.map(cardHtml).join("");
    empty.hidden = visible.length > 0;
    countEl.textContent =
      visible.length + (visible.length === 1 ? " product" : " products") +
      (state.category === ALL ? "" : " in " + state.category);
  }

  function renderChips() {
    var cats = window.CATEGORIES || [];
    var html = ['<li><button class="chip" type="button" data-cat="' + ALL + '">All products</button></li>'];
    cats.forEach(function (c) {
      html.push('<li><button class="chip" type="button" data-cat="' + Cart.escapeHtml(c) + '">' + Cart.escapeHtml(c) + "</button></li>");
    });
    chips.innerHTML = html.join("");
    syncChips();
  }

  function syncChips() {
    var nodes = chips.querySelectorAll(".chip");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].setAttribute("aria-pressed", nodes[i].getAttribute("data-cat") === state.category ? "true" : "false");
    }
  }

  function setCategory(cat) {
    state.category = cat || ALL;
    syncChips();
    render();
  }

  /* ---------- events ---------- */

  chips.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    setCategory(btn.getAttribute("data-cat"));
  });

  grid.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-add]");
    if (!btn) return;
    var id = btn.getAttribute("data-add");
    Cart.add(id, 1);
    var p = Cart.findProduct(id);
    Cart.flash((p ? p.name : "Item") + " added to cart");
  });

  search.addEventListener("input", function () {
    state.query = search.value.trim();
    render();
  });

  sortEl.addEventListener("change", function () {
    state.sort = sortEl.value;
    render();
  });

  resetBtn.addEventListener("click", function () {
    search.value = "";
    sortEl.value = "featured";
    state.query = "";
    state.sort = "featured";
    setCategory(ALL);
    search.focus();
  });

  var jump = document.querySelector("[data-jump-category]");
  if (jump) {
    jump.addEventListener("click", function () {
      setCategory(jump.getAttribute("data-jump-category"));
    });
  }

  /* ---------- init ---------- */

  renderChips();
  render();
  sortEl.value = state.sort;

  var footerCats = document.getElementById("footer-cats");
  if (footerCats) {
    footerCats.innerHTML = (window.CATEGORIES || [])
      .map(function (c) {
        return '<li><a href="index.html#shop" data-footer-cat="' + Cart.escapeHtml(c) + '">' + Cart.escapeHtml(c) + "</a></li>";
      })
      .join("");
    footerCats.addEventListener("click", function (e) {
      var link = e.target.closest("[data-footer-cat]");
      if (!link) return;
      setCategory(link.getAttribute("data-footer-cat"));
    });
  }

  var contact = document.getElementById("footer-contact");
  if (contact && window.STORE_CONFIG && window.STORE_CONFIG.orderEmail) {
    var email = window.STORE_CONFIG.orderEmail;
    contact.innerHTML = '<a href="mailto:' + Cart.escapeHtml(email) + '">' + Cart.escapeHtml(email) + "</a>";
  }
})();
