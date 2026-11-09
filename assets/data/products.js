/**
 * ForeverStore product catalogue.
 *
 * Prices come from assets/data/price-list.json, the Singapore Assistant
 * Supervisor's Price List (AS.PDF, rev 26-08), and INCLUDE 9% GST.
 * `sku` is the Forever Living order code for that line.
 *
 * available:false means the line is not in the Singapore price list, so it has
 * no price and cannot be added to the cart.
 *
 * Descriptions are the store's own wording. Check them against the current
 * official fact sheet before publishing.
 */
window.PRODUCTS = [
  // ---------- Drinks ----------
  {
    id: "aloe-vera-gel",
    name: "Forever Aloe Vera Gel",
    category: "Drinks",
    form: "bottle",
    sku: "815",
    available: true,
    price: 55.62,
    badge: "Bestseller",
    blurb: "The classic drink made from inner-leaf aloe vera fillet. A mild, slightly tart taste served chilled or over ice.",
    notes: "Shake well before serving. Refrigerate after opening and use within the period stated on the label."
  },
  {
    id: "aloe-berry-nectar",
    name: "Forever Aloe Berry Nectar",
    category: "Drinks",
    form: "bottle",
    sku: "834",
    available: true,
    price: 55.62,
    blurb: "Inner-leaf aloe with cranberry and apple juice for a sweeter, fruit-forward drink.",
    notes: "Serve chilled. Refrigerate after opening."
  },
  {
    id: "aloe-peaches",
    name: "Forever Aloe Peaches",
    category: "Drinks",
    form: "bottle",
    available: false,
    price: null,
    blurb: "Aloe vera gel blended with peach juice. A soft, summery alternative to the original gel.",
    notes: "Serve chilled. Refrigerate after opening."
  },
  {
    id: "aloe-mango",
    name: "Forever Aloe Mango",
    category: "Drinks",
    form: "bottle",
    available: false,
    price: null,
    blurb: "Aloe vera gel with mango juice for a full, tropical flavour.",
    notes: "Serve chilled. Refrigerate after opening."
  },
  {
    id: "aloe-bits-n-peaches",
    name: "Forever Aloe Bits N' Peaches",
    category: "Drinks",
    form: "bottle",
    sku: "877",
    available: true,
    price: 55.62,
    blurb: "Aloe gel with real peach pieces and pulp for a thicker, textured drink.",
    notes: "Shake well before serving. Refrigerate after opening."
  },
  {
    id: "forever-freedom",
    name: "Forever Freedom",
    category: "Drinks",
    form: "bottle",
    sku: "896",
    available: true,
    price: 76.76,
    blurb: "Aloe vera gel drink combined with glucosamine, chondroitin and MSM in an orange-flavoured base, made with active adults in mind.",
    notes: "Contains shellfish-derived glucosamine. Check the label for allergen details."
  },
  {
    id: "forever-active",
    name: "Forever Active",
    category: "Drinks",
    form: "bottle",
    available: false,
    price: null,
    blurb: "Aloe vera drink with pomegranate and grape flavours, aimed at active lifestyles.",
    notes: "Serve chilled. Refrigerate after opening."
  },
  {
    id: "forever-aloe-msm-gel",
    name: "Forever Aloe MSM Gel",
    category: "Drinks",
    form: "bottle",
    sku: "205",
    available: true,
    price: 41.83,
    blurb: "Aloe vera gel drink with MSM and herbal extracts in a light berry flavour.",
    notes: "Serve chilled. Refrigerate after opening."
  },

  // ---------- Shakes ----------
  {
    id: "forever-lite-ultra-vanilla",
    name: "Forever Lite Aminotein — Vanilla",
    category: "Shakes",
    form: "tub",
    sku: "470",
    available: true,
    price: 63.39,
    blurb: "Protein shake mix from the Forever Lite range, supplied as a pouch. Blend with water or milk.",
    notes: "Use as part of a balanced diet, not as a meal replacement."
  },
  {
    id: "forever-lite-ultra-chocolate",
    name: "Forever Lite Aminotein — Chocolate",
    category: "Shakes",
    form: "tub",
    sku: "471",
    available: true,
    price: 63.39,
    blurb: "The chocolate flavour of the Forever Lite shake mix, supplied as a pouch.",
    notes: "Use as part of a balanced diet, not as a meal replacement."
  },

  // ---------- Bee products ----------
  {
    id: "forever-bee-honey",
    name: "Forever Bee Honey",
    category: "Bee products",
    form: "jar",
    sku: "207",
    available: true,
    price: 43.56,
    blurb: "Pure honey collected from apiaries in the American Southwest.",
    notes: "Not suitable for children under 12 months."
  },
  {
    id: "forever-bee-propolis",
    name: "Forever Bee Propolis",
    category: "Bee products",
    form: "jar",
    sku: "027",
    available: true,
    price: 66.84,
    blurb: "Chewable tablets with propolis and honey.",
    notes: "Check the label for allergen information. Not suitable for young children."
  },
  {
    id: "forever-bee-pollen",
    name: "Forever Bee Pollen",
    category: "Bee products",
    form: "jar",
    sku: "026",
    available: true,
    price: 35.78,
    blurb: "Chewable bee pollen tablets with honey. High in protein for a bee product.",
    notes: "Contains pollen. Avoid if you are allergic to bee products."
  },
  {
    id: "forever-royal-jelly",
    name: "Forever Royal Jelly",
    category: "Bee products",
    form: "jar",
    sku: "036",
    available: true,
    price: 66.84,
    blurb: "Softgel capsules containing royal jelly, the food of the queen bee.",
    notes: "Avoid if you are allergic to bee products."
  },

  // ---------- Skincare ----------
  {
    id: "aloe-vera-gelly",
    name: "Forever Aloe Vera Gelly",
    category: "Skincare",
    form: "tube",
    sku: "061",
    available: true,
    price: 32.34,
    badge: "Bestseller",
    blurb: "A stabilised aloe vera gel for the body, used on skin that has had too much sun or a shave.",
    notes: "For external use only."
  },
  {
    id: "aloe-propolis-creme",
    name: "Forever Aloe Propolis Creme",
    category: "Skincare",
    form: "jar",
    sku: "051",
    available: true,
    price: 42.70,
    blurb: "A rich cream combining aloe vera, propolis and bee-derived ingredients for dry skin.",
    notes: "For external use only."
  },
  {
    id: "aloe-heat-lotion",
    name: "Forever Aloe Heat Lotion",
    category: "Skincare",
    form: "tube",
    sku: "064",
    available: true,
    price: 32.34,
    blurb: "A warming lotion with aloe vera and methyl salicylate for use after exercise.",
    notes: "Warming sensation. Keep away from eyes and broken skin. Not for children."
  },
  {
    id: "aloe-scrub",
    name: "Forever Aloe Scrub",
    category: "Skincare",
    form: "tube",
    sku: "238",
    available: true,
    price: 36.65,
    blurb: "A face and body scrub with jojoba beads and aloe vera.",
    notes: "Massage gently, then rinse. Avoid the eye area."
  },
  {
    id: "aloe-body-lotion",
    name: "Forever Aloe Body Lotion",
    category: "Skincare",
    form: "tube",
    sku: "647",
    available: true,
    price: 37.94,
    blurb: "A light everyday body lotion with aloe vera and vitamin E.",
    notes: "For external use only."
  },
  {
    id: "aloe-lips",
    name: "Forever Aloe Lips",
    category: "Skincare",
    form: "tube",
    sku: "022RA",
    pack: "2-piece pack",
    available: true,
    price: 15.50,
    blurb: "A jojoba and aloe lip balm for dry, chapped lips.",
    notes: "For external use only."
  },
  {
    id: "aloe-eye-gel",
    name: "Forever Aloe Awakening Eye Creme",
    category: "Skincare",
    form: "tube",
    sku: "561",
    available: true,
    price: 36.65,
    blurb: "Eye cream from the Forever Aloe skincare range.",
    notes: "Apply to the eye contour only."
  },

  // ---------- Personal care ----------
  {
    id: "bright-toothgel",
    name: "Forever Bright Toothgel",
    category: "Personal care",
    form: "tube",
    sku: "028",
    available: true,
    price: 18.98,
    blurb: "A fluoride-free toothgel with aloe vera and bee propolis.",
    notes: "Use as your regular toothpaste."
  },
  {
    id: "aloe-ever-shield",
    name: "Forever Aloe Ever-Shield",
    category: "Personal care",
    form: "stick",
    sku: "067",
    available: true,
    price: 22.86,
    blurb: "A deodorant stick with aloe vera, free of aluminium chlorohydrate.",
    notes: "For external use only."
  },
  {
    id: "aloe-jojoba-shampoo",
    name: "Forever Aloe-Jojoba Shampoo",
    category: "Personal care",
    form: "bottle",
    sku: "640",
    available: true,
    price: 37.51,
    blurb: "A gentle everyday shampoo with aloe vera and jojoba oil.",
    notes: "Massage into wet hair, then rinse."
  },
  {
    id: "aloe-jojoba-conditioner",
    name: "Forever Aloe-Jojoba Conditioning Rinse",
    category: "Personal care",
    form: "bottle",
    sku: "641",
    available: true,
    price: 40.11,
    blurb: "The matching conditioner, for easy combing and softness.",
    notes: "Apply to clean, damp hair, then rinse."
  },
  {
    id: "aloe-liquid-soap",
    name: "Forever Aloe Liquid Soap",
    category: "Personal care",
    form: "bottle",
    sku: "633",
    available: true,
    price: 43.12,
    blurb: "A mild hand and body wash with aloe vera.",
    notes: "For external use only."
  },

  // ---------- Supplements ----------
  {
    id: "active-probiotic",
    name: "Forever Active Pro-B",
    category: "Supplements",
    form: "bottle",
    sku: "610",
    available: true,
    price: 63.39,
    blurb: "Probiotic supplement, listed in the Singapore price list as Active Pro-B.",
    notes: "Food supplement. Do not exceed the stated dose."
  },
  {
    id: "forever-argi-plus",
    name: "Forever ARGI+",
    category: "Supplements",
    form: "sachet",
    sku: "504",
    available: true,
    price: 131.09,
    blurb: "A grape-flavoured stick pack with L-arginine, vitamins and fruit extracts.",
    notes: "Food supplement. Not a substitute for a varied diet."
  },
  {
    id: "forever-multi-maca",
    name: "Forever Multi-Maca",
    category: "Supplements",
    form: "bottle",
    available: false,
    price: null,
    blurb: "Tablets combining maca root with vitamins and minerals.",
    notes: "Food supplement. Do not exceed the stated dose."
  },
  {
    id: "forever-garlic-thyme",
    name: "Forever Garlic-Thyme",
    category: "Supplements",
    form: "bottle",
    sku: "065",
    available: true,
    price: 49.15,
    blurb: "Softgels containing garlic oil and thyme.",
    notes: "Food supplement. Check the label for allergens."
  },
  {
    id: "forever-ginkgo-plus",
    name: "Forever Ginkgo Plus",
    category: "Supplements",
    form: "bottle",
    available: false,
    price: null,
    blurb: "Tablets with ginkgo biloba, gotu kola and other botanicals.",
    notes: "Food supplement. Do not exceed the stated dose."
  },
  {
    id: "absorbent-c",
    name: "Forever Absorbent-C",
    category: "Supplements",
    form: "bottle",
    sku: "048",
    available: true,
    price: 35.78,
    blurb: "Vitamin C tablets combined with oat bran as a carrier.",
    notes: "Food supplement. Do not exceed the stated dose."
  },
  {
    id: "forever-aloe-vera-gel-capsules",
    name: "Forever Aloe Vera Gel Capsules",
    category: "Supplements",
    form: "bottle",
    available: false,
    price: null,
    blurb: "The aloe vera gel in capsule form for people who prefer not to drink it.",
    notes: "Food supplement. Do not exceed the stated dose."
  }
];

window.CATEGORIES = ["Drinks","Shakes","Bee products","Skincare","Personal care","Supplements"];
