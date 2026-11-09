/*
 * ForeverStore site configuration.
 * Edit these values before publishing. Do not put API keys or payment secrets
 * in this file — it is served publicly.
 */
window.STORE_CONFIG = {
  storeName: "ForeverStore",
  tagline: "Forever Living products, delivered",
  currency: "SGD",
  currencySymbol: "S$",

  // Site-wide notice bar. Prices are the Forever Living Singapore retail prices
  // and already include 9% GST.
  noticeBar: true,
  noticeText: "Retail prices, 9% GST included.",

  // Where orders are sent. Replace with your real address / number.
  orderEmail: "orders@example.com",
  orderWhatsApp: "", // digits only with country code, e.g. "6591234567". Leave empty to hide the button.

  // Shipping shown in the cart summary.
  shippingFlat: 6.0,
  freeShippingFrom: 120.0,

  // Fulfilment markets you actually serve.
  shipsTo: "Singapore"
};
