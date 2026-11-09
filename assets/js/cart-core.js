/* Shared cart logic + small DOM helpers. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  var KEY = "foreverstore.cart.v1";
  var CONFIG = window.STORE_CONFIG || {};
  var SYMBOL = CONFIG.currencySymbol || "$";

  /* ---------------- storage ---------------- */

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      var parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(function (l) {
          return l && typeof l.id === "string" && Number(l.qty) > 0;
        })
        .map(function (l) {
          return { id: l.id, qty: Math.min(99, Math.floor(Number(l.qty))) };
        });
    } catch (err) {
      return [];
    }
  }

  function write(lines) {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch (err) {
      /* storage may be unavailable in private mode; cart stays in memory */
    }
    emit();
  }

  function emit() {
    document.dispatchEvent(new CustomEvent("cart:changed", { detail: { count: count() } }));
  }

  /* ---------------- operations ---------------- */

  function add(id, qty) {
    var product = findProduct(id);
    if (!product || product.available === false || product.price == null) return read();
    qty = Math.max(1, Math.floor(Number(qty) || 1));
    var lines = read();
    var found = null;
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].id === id) {
        found = lines[i];
        break;
      }
    }
    if (found) {
      found.qty = Math.min(99, found.qty + qty);
    } else {
      lines.push({ id: id, qty: qty });
    }
    write(lines);
    return lines;
  }

  function setQty(id, qty) {
    qty = Math.floor(Number(qty) || 0);
    var lines = read()
      .map(function (l) {
        return l.id === id ? { id: l.id, qty: Math.min(99, Math.max(0, qty)) } : l;
      })
      .filter(function (l) {
        return l.qty > 0;
      });
    write(lines);
    return lines;
  }

  function remove(id) {
    var lines = read().filter(function (l) {
      return l.id !== id;
    });
    write(lines);
    return lines;
  }

  function clear() {
    write([]);
  }

  function count() {
    return read().reduce(function (sum, l) {
      return sum + l.qty;
    }, 0);
  }

  /* ---------------- pricing ---------------- */

  function products() {
    return window.PRODUCTS || [];
  }

  function findProduct(id) {
    var list = products();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function lines() {
    return read()
      .map(function (l) {
        var p = findProduct(l.id);
        if (!p) return null;
        return { product: p, qty: l.qty, lineTotal: round(p.price * l.qty) };
      })
      .filter(Boolean);
  }

  function round(n) {
    return Math.round(n * 100) / 100;
  }

  function totals() {
    var ls = lines();
    var subtotal = round(
      ls.reduce(function (sum, l) {
        return sum + l.lineTotal;
      }, 0)
    );
    var flat = Number(CONFIG.shippingFlat) || 0;
    var freeFrom = Number(CONFIG.freeShippingFrom) || 0;
    var shipping = subtotal === 0 ? 0 : freeFrom > 0 && subtotal >= freeFrom ? 0 : flat;
    return {
      itemCount: ls.reduce(function (s, l) {
        return s + l.qty;
      }, 0),
      subtotal: subtotal,
      shipping: shipping,
      total: round(subtotal + shipping),
      freeFrom: freeFrom,
      toFreeShipping: freeFrom > 0 ? Math.max(0, round(freeFrom - subtotal)) : 0
    };
  }

  function money(n) {
    if (n == null || n === "") return "—";
    var value = Number(n);
    if (isNaN(value)) return "—";
    return SYMBOL + value.toFixed(2);
  }

  /* ---------------- UI helpers ---------------- */

  function updateCartCounters() {
    var n = count();
    var nodes = document.querySelectorAll("[data-cart-count]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = String(n);
      nodes[i].hidden = n === 0;
    }
  }

  function flash(message) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("is-visible");
    window.clearTimeout(flash._t);
    flash._t = window.setTimeout(function () {
      el.classList.remove("is-visible");
    }, 2200);
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  document.addEventListener("cart:changed", updateCartCounters);
  document.addEventListener("DOMContentLoaded", function () {
    updateCartCounters();
    var bar = document.getElementById("demo-bar");
    if (bar && CONFIG.noticeBar) {
      bar.textContent = CONFIG.noticeText || "";
      bar.hidden = false;
    }
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  });

  window.Cart = {
    add: add,
    setQty: setQty,
    remove: remove,
    clear: clear,
    count: count,
    lines: lines,
    totals: totals,
    money: money,
    findProduct: findProduct,
    flash: flash,
    escapeHtml: escapeHtml,
    updateCartCounters: updateCartCounters
  };
})();
