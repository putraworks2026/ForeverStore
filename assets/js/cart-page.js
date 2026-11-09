/* Cart page: line items, totals, and an order summary the customer can send. */
(function () {
  "use strict";

  var CONFIG = window.STORE_CONFIG || {};
  var DRAFT_KEY = "foreverstore.draft.v1";

  var linesBox = document.getElementById("cart-lines");
  var emptyBox = document.getElementById("cart-empty");
  var filledBox = document.getElementById("cart-filled");
  var form = document.getElementById("order-form");
  var outBox = document.getElementById("order-out");
  var outText = document.getElementById("order-text");
  var sendNote = document.getElementById("send-note");
  var waBtn = document.getElementById("wa-order");
  var emailBtn = document.getElementById("email-order");

  /* ---------- rendering ---------- */

  function lineHtml(line) {
    var esc = Cart.escapeHtml;
    var p = line.product;
    return (
      '<div class="cart-line" data-line="' + esc(p.id) + '">' +
        '<div class="cart-line-media">' +
          '<img src="assets/img/' + encodeURIComponent(p.id) + '.svg" alt="" width="84" height="84" loading="lazy">' +
        "</div>" +
        "<div>" +
          '<p class="cart-line-title"><a href="product.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.name) + "</a></p>" +
          '<p class="cart-line-meta">' + esc(p.sku ? "Code " + p.sku : "") + " · " + Cart.money(p.price) + " each</p>" +
        "</div>" +
        '<div class="cart-line-side">' +
          '<div class="qty">' +
            '<button type="button" data-step="-1" aria-label="Decrease quantity of ' + esc(p.name) + '">−</button>' +
            '<label class="sr-only" for="q-' + esc(p.id) + '">Quantity of ' + esc(p.name) + "</label>" +
            '<input id="q-' + esc(p.id) + '" type="number" min="1" max="99" value="' + line.qty + '" data-qty="' + esc(p.id) + '" inputmode="numeric">' +
            '<button type="button" data-step="1" aria-label="Increase quantity of ' + esc(p.name) + '">+</button>' +
          "</div>" +
          '<span class="price">' + Cart.money(line.lineTotal) + "</span>" +
          '<button class="btn-quiet" type="button" data-remove="' + esc(p.id) + '">Remove</button>' +
        "</div>" +
      "</div>"
    );
  }

  function render() {
    var ls = Cart.lines();
    var t = Cart.totals();

    linesBox.innerHTML = ls.map(lineHtml).join("");
    emptyBox.hidden = ls.length > 0;
    filledBox.hidden = ls.length === 0;

    document.getElementById("sum-items").textContent = String(t.itemCount);
    document.getElementById("sum-subtotal").textContent = ls.length ? Cart.money(t.subtotal) : "—";
    document.getElementById("sum-ship").textContent = ls.length
      ? t.shipping === 0
        ? "Free"
        : Cart.money(t.shipping)
      : "—";
    document.getElementById("sum-total").textContent = ls.length ? Cart.money(t.total) : "—";

    var hint = document.getElementById("sum-hint");
    if (ls.length && t.toFreeShipping > 0 && t.freeFrom > 0) {
      hint.textContent = "Add " + Cart.money(t.toFreeShipping) + " to reach free delivery.";
      hint.hidden = false;
    } else if (ls.length && t.freeFrom > 0) {
      hint.textContent = "Free delivery applied.";
      hint.hidden = false;
    } else {
      hint.hidden = true;
    }

    var checkout = document.getElementById("to-checkout");
    if (checkout) checkout.hidden = ls.length === 0;

    if (ls.length === 0) {
      outBox.hidden = true;
    }
  }

  /* ---------- line events ---------- */

  linesBox.addEventListener("click", function (e) {
    var stepBtn = e.target.closest("[data-step]");
    if (stepBtn) {
      var wrap = stepBtn.closest(".qty");
      var input = wrap ? wrap.querySelector("[data-qty]") : null;
      if (!input) return;
      var id = input.getAttribute("data-qty");
      var next = Number(input.value) + Number(stepBtn.getAttribute("data-step"));
      if (next <= 0) {
        Cart.remove(id);
      } else {
        Cart.setQty(id, Math.min(99, next));
      }
      render();
      return;
    }
    var rm = e.target.closest("[data-remove]");
    if (rm) {
      var removed = Cart.findProduct(rm.getAttribute("data-remove"));
      Cart.remove(rm.getAttribute("data-remove"));
      render();
      Cart.flash((removed ? removed.name : "Item") + " removed");
    }
  });

  linesBox.addEventListener("change", function (e) {
    var input = e.target.closest("[data-qty]");
    if (!input) return;
    var id = input.getAttribute("data-qty");
    var val = Math.floor(Number(input.value) || 0);
    if (val <= 0) Cart.remove(id);
    else Cart.setQty(id, Math.min(99, val));
    render();
  });

  var clearBtn = document.getElementById("clear-cart");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      if (!Cart.count()) return;
      if (!window.confirm("Remove all items from the cart?")) return;
      Cart.clear();
      render();
      Cart.flash("Cart emptied");
    });
  }

  /* ---------- draft persistence ---------- */

  function saveDraft() {
    if (!form) return;
    var data = {};
    new FormData(form).forEach(function (v, k) {
      data[k] = String(v);
    });
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    } catch (err) {
      /* ignore */
    }
  }

  function loadDraft() {
    if (!form) return;
    try {
      var raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      Object.keys(data).forEach(function (k) {
        var field = form.elements[k];
        if (field && typeof data[k] === "string") field.value = data[k];
      });
    } catch (err) {
      /* ignore */
    }
  }

  /* ---------- order summary ---------- */

  function orderText() {
    var ls = Cart.lines();
    var t = Cart.totals();
    var f = form.elements;
    var stamp = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    var rows = ls.map(function (l, i) {
      return (
        (i + 1) + ". " + l.product.name + " (" + (l.product.sku ? "code " + l.product.sku : "each") + ") x" + l.qty +
        " — " + Cart.money(l.lineTotal)
      );
    });

    var parts = [
      "FOREVERSTORE ORDER",
      "Date: " + stamp,
      "",
      "Customer",
      "Name: " + (f.name.value || "-"),
      "Phone: " + (f.phone.value || "-"),
      "Email: " + (f.email.value || "-"),
      "Address: " + (f.address.value || "-") + (f.postcode.value ? ", " + f.postcode.value : ""),
      f.notes.value ? "Notes: " + f.notes.value : "Notes: -",
      "",
      "Items",
      rows.join("\n"),
      "",
      "Items total: " + Cart.money(t.subtotal),
      "Delivery: " + (t.shipping === 0 ? "Free" : Cart.money(t.shipping)),
      "TOTAL: " + Cart.money(t.total),
      "",
      "Currency: " + (CONFIG.currency || ""),
      "Please confirm stock, delivery time and payment method."
    ];
    return parts.join("\n");
  }

  function buildSummary() {
    var required = ["name", "phone", "email", "address"];
    var bad = null;
    required.forEach(function (key) {
      var field = form.elements[key];
      if (!field) return;
      field.value = field.value.trim();
      if (!field.value && !bad) bad = field;
    });
    if (bad) {
      bad.focus();
      Cart.flash("Please fill in " + (bad.labels && bad.labels[0] ? bad.labels[0].textContent.toLowerCase() : bad.name));
      return;
    }
    var email = form.elements.email;
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.focus();
      Cart.flash("Please check the email address");
      return;
    }

    if (!Cart.count()) {
      Cart.flash("Your cart is empty");
      return;
    }

    saveDraft();
    var text = orderText();
    outText.value = text;
    outBox.hidden = false;

    if (CONFIG.orderEmail) {
      emailBtn.href =
        "mailto:" + encodeURIComponent(CONFIG.orderEmail) +
        "?subject=" + encodeURIComponent("ForeverStore order — " + (form.elements.name.value || "")) +
        "&body=" + encodeURIComponent(text);
      emailBtn.hidden = false;
    } else {
      emailBtn.hidden = true;
    }

    var waReady = CONFIG.orderWhatsApp && /^\d{6,15}$/.test(String(CONFIG.orderWhatsApp));
    if (waReady) {
      waBtn.href = "https://wa.me/" + CONFIG.orderWhatsApp + "?text=" + encodeURIComponent(text);
      waBtn.hidden = false;
    } else {
      waBtn.hidden = true;
    }

    var hasEmail = !!CONFIG.orderEmail;
    if (hasEmail && waReady) {
      sendNote.textContent = "Sending opens your email or WhatsApp app with the summary already filled in.";
    } else if (hasEmail) {
      sendNote.textContent = "Sending opens your email app with the summary already filled in.";
    } else if (waReady) {
      sendNote.textContent = "Sending opens WhatsApp with the summary already filled in.";
    } else {
      sendNote.textContent = "Copy the summary and send it to us. Set an order email in assets/js/config.js to enable one-tap sending.";
    }

    outBox.scrollIntoView({ behavior: "smooth", block: "start" });
    Cart.flash("Order summary ready");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      buildSummary();
    });
    form.addEventListener("input", saveDraft);
  }

  var copyBtn = document.getElementById("copy-order");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var text = outText.value;
      if (!text) return;
      var done = function () {
        Cart.flash("Summary copied");
        copyBtn.textContent = "Copied";
        window.setTimeout(function () {
          copyBtn.textContent = "Copy summary";
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
      function fallbackCopy() {
        outText.removeAttribute("readonly");
        outText.select();
        try {
          document.execCommand("copy");
          done();
        } catch (err) {
          Cart.flash("Select the text and copy it manually");
        }
        outText.setAttribute("readonly", "readonly");
      }
    });
  }

  /* ---------- init ---------- */

  loadDraft();
  render();
})();
