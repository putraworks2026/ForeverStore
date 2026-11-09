/*
 * Product detail copy for ForeverStore.
 *
 * Every entry is taken from the official Forever Living product fact sheet named in
 * `source`. Nothing here is written from general knowledge: if a fact is not on the
 * sheet, it is not in this file. `pack` values are the net weight or count printed on
 * the pack in the same document.
 *
 * Benefit statements are quoted in the sheet's own terms and shown on the product page
 * under "From the official fact sheet". The sheets themselves carry the standard line
 * that Forever makes no claim that its products cure or prevent any disease.
 *
 * When a new fact sheet arrives, update the entry and bump `verified`.
 */
window.PRODUCT_DETAILS = {
  "aloe-vera-gel": {
    summary: "Stabilised inner-leaf aloe vera gel in a 1 litre bottle. The sheet states the bottle is 97.4% aloe vera gel, with no added sugar.",
    pack: "1 L",
    highlights: [
      "Patented stabilisation of the aloe vera inner leaf gel, described as drinking straight from the leaf",
      "No added sugar",
      "97.4% aloe vera gel per 1 litre bottle",
      "First of its kind to receive International Aloe Science Council certification for purity and potency"
    ],
    ingredients: ["Stabilised aloe vera inner leaf gel"],
    directions: "60 ml twice daily before a meal. Mix it with water or your favourite beverage.",
    notes: "Shake well. Refrigerate after opening.",
    certifications: ["Vegan", "Vegetarian"],
    source: "ForeverAloeVeraGel.pdf",
    verified: "2026-11-10"
  },

  "aloe-berry-nectar": {
    summary: "Cranberry and apple flavoured aloe vera gel drink in a 1 litre bottle, described on the sheet as a good source of vitamin C.",
    pack: "1 L",
    highlights: [
      "Patented stabilisation of the aloe vera inner leaf gel, described as drinking straight from the leaf",
      "Sweet apple and berry flavour",
      "The sheet notes it is popular among women",
      "Good source of vitamin C"
    ],
    ingredients: [
      "Stabilised aloe vera inner leaf gel",
      "Vitamin C",
      "Apple juice concentrate",
      "Cranberries juice concentrate"
    ],
    directions: "60 ml twice daily before a meal. Mix it with water or your favourite beverage.",
    notes: "Refrigerate after opening.",
    certifications: ["Vegan", "Vegetarian"],
    source: "ForeverAloeBerryNectar.pdf",
    verified: "2026-11-10"
  },

  "aloe-bits-n-peaches": {
    summary: "Peach flavoured aloe vera gel drink in a 1 litre bottle, made with aloe vera inner leaf gel and natural peach concentrate.",
    pack: "1 L",
    highlights: [
      "Patented stabilisation of the aloe vera inner leaf gel, described as drinking straight from the leaf",
      "The sheet describes it as great for kids and adults alike"
    ],
    ingredients: ["Stabilised aloe vera inner leaf gel", "Natural peach concentrate"],
    directions: "60 ml twice daily before a meal. Mix it with water or your favourite beverage.",
    notes: "Refrigerate after opening.",
    certifications: ["Vegetarian"],
    source: "ForeverAloeBitsNPeaches.pdf",
    verified: "2026-11-10"
  },

  "forever-freedom": {
    summary: "Orange flavoured aloe vera drink with chondroitin, glucosamine and MSM, in a 1 litre bottle.",
    pack: "1 L",
    highlights: [
      "Pleasant orange flavour",
      "Combines aloe vera gel with chondroitin, glucosamine and MSM",
      "Contains shellfish (shrimp, crab, lobster)"
    ],
    ingredients: ["Stabilised aloe vera gel", "Chondroitin", "Glucosamine", "MSM"],
    directions: "30 ml twice daily before a meal. Mix it with water.",
    notes: "Refrigerate after opening. The sheet lists it as suitable for athletes and active seniors.",
    certifications: [],
    source: "ForeverFreedom_196.pdf",
    verified: "2026-11-10"
  },

  "forever-aloe-msm-gel": {
    summary: "Clear aloe vera gel with methyl sulfonyl methane (MSM), described on the sheet as non-staining and fragrance free.",
    pack: "",
    highlights: [
      "Clear, non-staining formula",
      "Readily absorbed into the skin",
      "Fragrance free"
    ],
    ingredients: ["Aloe vera", "Methyl sulfonyl methane (MSM)", "Glycerin"],
    directions: "Apply liberally two to three times a day and massage well into the skin.",
    notes: "The sheet suggests using it with Aloe Heat Lotion after a long day or a tough workout.",
    certifications: [],
    source: "ALOEMSMGEL.PDF",
    verified: "2026-11-10"
  },

  "forever-lite-ultra-vanilla": {
    summary: "Vanilla Forever Lite Ultra with Aminotein, supplied as a pouch. The archive copy is the retail price list and product brochure; the full fact sheet is not in the library yet, so this entry stays deliberately short.",
    pack: "Pouch",
    highlights: [],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: [],
    source: "EN.PDF (2025/26 Forever Product Brochure)",
    verified: "2026-11-10"
  },

  "forever-lite-ultra-chocolate": {
    summary: "Chocolate Forever Lite Ultra with Aminotein, supplied as a pouch. The archive copy is the retail price list and product brochure; the full fact sheet is not in the library yet, so this entry stays deliberately short.",
    pack: "Pouch",
    highlights: [],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: [],
    source: "EN.PDF (2025/26 Forever Product Brochure)",
    verified: "2026-11-10"
  },

  "forever-bee-honey": {
    summary: "Pure mountain-harvested honey from Spain, sold in a 500 g jar. The sheet describes it as raw, unheated and unprocessed.",
    pack: "500 g",
    highlights: [
      "Spain's high mountain-harvested honey",
      "Smooth, dark flavour",
      "Raw, unheated, unprocessed honey",
      "100% natural"
    ],
    ingredients: ["Pure bee honey"],
    directions: "Enjoy it as a natural energy source, use it with Aloe Vera Gel, or simply take it with a spoon.",
    notes: "Warning on the sheet: not suitable for children under 12 months. One tablespoon is about 70 calories and has no fat or preservatives.",
    certifications: ["Vegetarian"],
    source: "ForeverBeeHoney.pdf",
    verified: "2026-11-10"
  },

  "forever-bee-propolis": {
    summary: "Chewable bee propolis tablets, 60 per bottle. The sheet notes propolis is a natural source of flavonoids.",
    pack: "60 chewable tablets",
    highlights: [
      "Chewable and easily digested",
      "No artificial colours or flavours added"
    ],
    ingredients: ["Bee propolis"],
    directions: "Take one to two tablets twice daily before a meal. The tablets must be chewed before swallowing.",
    notes: "",
    certifications: ["Vegetarian"],
    source: "FOREVERBEEPROPOLIS_027.PDF",
    verified: "2026-11-10"
  },

  "forever-bee-pollen": {
    summary: "Chewable bee pollen tablets, 100 per bottle, combined with honey.",
    pack: "100 tablets",
    highlights: [
      "No preservatives, artificial colouring or flavouring",
      "Easily digested chewable tablet",
      "The sheet describes bee pollen as a natural source of proteins, amino acids, carbohydrates, vitamins and minerals"
    ],
    ingredients: ["Bee pollen", "Honey"],
    directions: "Begin with a quarter tablet daily, then gradually increase to one or two tablets twice daily.",
    notes: "",
    certifications: ["Vegetarian"],
    source: "FOREVERBEEPOLLEN_026.PDF",
    verified: "2026-11-10"
  },

  "forever-royal-jelly": {
    summary: "Royal jelly tablets, 60 per bottle. The sheet describes royal jelly as a milky bee secretion containing proteins, simple sugars, fatty acids, vitamin B5 and B6.",
    pack: "60 tablets",
    highlights: [
      "The sheet describes the product as all natural",
      "Easily absorbed and readily digestible",
      "Contains 10-HDA, also called queen bee acid"
    ],
    ingredients: ["Royal jelly"],
    directions: "Take two tablets twice daily with meals.",
    notes: "The sheet suggests taking it with Forever Bee Pollen and Forever Bee Propolis.",
    certifications: ["Vegetarian"],
    source: "FOREVERROYALJELLY_036.PDF",
    verified: "2026-11-10"
  },

  "aloe-vera-gelly": {
    summary: "A thick, clear aloe vera gel in a 118 ml tube, described on the sheet as a back-to-basics formula.",
    pack: "118 ml",
    highlights: [
      "Doesn't stain clothing",
      "Readily absorbed into the skin",
      "Thick, translucent gel the sheet describes as almost identical to aloe",
      "The aloe used is IASC certified for purity and potency"
    ],
    ingredients: ["Stabilised aloe vera gel"],
    directions: "Thoroughly cleanse the skin before applying liberally. Repeat application as required.",
    notes: "The sheet suggests storing it in the fridge for extra cooling effect.",
    certifications: [],
    source: "ForeverAloeVeraGelly.pdf",
    verified: "2026-11-10"
  },

  "aloe-propolis-creme": {
    summary: "A cream blending aloe vera, bee propolis and chamomile, in a 113 g tube.",
    pack: "113 g",
    highlights: [
      "Deeply moisturises and nourishes skin",
      "The sheet describes propolis as forming a natural barrier on the skin"
    ],
    ingredients: ["Aloe vera", "Bee propolis", "Chamomile", "Vitamin C", "Vitamin E"],
    directions: "Apply liberally as needed.",
    notes: "For external use only. The sheet advises a patch test if unsure about sensitivity, and consulting a healthcare professional during pregnancy.",
    certifications: ["Vegetarian"],
    source: "ALOEPROPOLISCREME.PDF",
    verified: "2026-11-10"
  },

  "aloe-heat-lotion": {
    summary: "A creamy lotion with aloe, menthol and eucalyptus that the sheet describes as delivering a warming and cooling sensation on the skin.",
    pack: "",
    highlights: [
      "Delivers a heating and cooling sensation to the skin",
      "Ultra-rich and non-greasy creamy lotion",
      "Menthol and eucalyptus fragrance"
    ],
    ingredients: ["Aloe vera", "Eucalyptus oil", "Menthol"],
    directions: "Apply two to three times a day and massage well into the skin.",
    notes: "The sheet suggests pairing it with Aloe MSM Gel; it lists athletes and active seniors among its users.",
    certifications: [],
    source: "ALOEHEATLOTION.PDF",
    verified: "2026-11-10"
  },

  "aloe-scrub": {
    summary: "A face and body scrub with jojoba microspheres, in a 99 g tube.",
    pack: "99 g",
    highlights: [
      "Can be used for face and body",
      "Smooth jojoba microspheres gently exfoliate",
      "The sheet notes it conditions skin with aloe"
    ],
    ingredients: ["Aloe vera", "Jojoba oil beads"],
    directions: "Apply to wet face or body and gently massage with fingertips for two to three minutes in a circular motion, carefully avoiding the eyes. Add more water as needed, rinse thoroughly and pat dry with a clean, soft towel.",
    notes: "",
    certifications: [],
    source: "ALOESCRUB.PDF",
    verified: "2026-11-10"
  },

  "aloe-body-lotion": {
    summary: "A lightweight body lotion with aloe, argan oil and macadamia seed oil. The sheet describes it as silicone-free with a light floral scent.",
    pack: "",
    highlights: [
      "Suitable for normal to dry skin",
      "Absorbs quickly into the skin",
      "Non-greasy feel",
      "Silicone-free formula",
      "Light floral scent"
    ],
    ingredients: ["Aloe vera", "Argan oil", "Macadamia seed oil"],
    directions: "Apply liberally and gently massage until the lotion is completely absorbed into the skin.",
    notes: "",
    certifications: [],
    source: "ALOEBODYLOTION.PDF",
    verified: "2026-11-10"
  },

  "aloe-lips": {
    summary: "Aloe vera lip balm with jojoba and beeswax. This pack holds two tubes of 4.25 g balm each.",
    pack: "2 tubes, 4.25 g each",
    highlights: [
      "Pocket size lip balm",
      "Each tube contains 4.25 g of balm",
      "Contains aloe, jojoba and beeswax, plus the emollient myristyl myristate"
    ],
    ingredients: ["Aloe vera", "Jojoba", "Beeswax", "Myristyl myristate"],
    directions: "Apply on the lips regularly as a moisturiser, particularly in harsh or extreme weather.",
    notes: "The sheet also lists other uses: taming eyebrows, softening dry cuticles, and soothing insect bites, small cuts and wounds.",
    certifications: [],
    source: "ForeverAloeLips.pdf",
    verified: "2026-11-10"
  },

  "aloe-eye-gel": {
    summary: "Awakening Eye Cream from the Forever skincare range, 30 ml. Only the brochure entry is in the archive, so this page carries no ingredient list yet.",
    pack: "30 ml",
    highlights: [],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: [],
    source: "EN.PDF (2025/26 Forever Product Brochure)",
    verified: "2026-11-10"
  },

  "bright-toothgel": {
    summary: "A fluoride-free aloe vera toothgel with natural peppermint and spearmint, in a 130 g tube.",
    pack: "130 g",
    highlights: [
      "Fluoride-free",
      "Refreshing natural mint flavour",
      "Contains bee propolis",
      "The sheet notes the formula was developed with scholars and dentists"
    ],
    ingredients: ["Aloe vera", "Bee propolis", "Peppermint", "Spearmint"],
    directions: "Brush teeth after meals with Forever Bright Toothgel.",
    notes: "",
    certifications: [],
    source: "ForeverBrightToothgel.pdf",
    verified: "2026-11-10"
  },

  "aloe-ever-shield": {
    summary: "A deodorant stick with pure inner leaf aloe vera gel, free from antiperspirants and aluminium salts.",
    pack: "92.1 g",
    highlights: [
      "Gentle on sensitive skin",
      "Glides on easily, non-staining formula",
      "Clean, subtle scent",
      "Free from antiperspirants and aluminium salts"
    ],
    ingredients: ["Pure inner leaf aloe vera gel"],
    directions: "Apply under the arms every day.",
    notes: "The sheet describes it as gentle enough to use after showering or waxing.",
    certifications: [],
    source: "ALOEEVERSHIELD.PDF",
    verified: "2026-11-10"
  },

  "aloe-jojoba-shampoo": {
    summary: "A shampoo with aloe vera gel and jojoba oil, described on the sheet as suitable for every hair type.",
    pack: "296 ml",
    highlights: [
      "Suitable for every hair type",
      "Perfect for everyday use",
      "Gentle on the scalp",
      "Tropical fruit scent with a touch of sweet cream"
    ],
    ingredients: ["Stabilised aloe vera gel", "Jojoba oil"],
    directions: "Apply to wet hair and massage to stimulate the scalp and create a rich lather.",
    notes: "",
    certifications: [],
    source: "ALOEJOJOBASHAMPOO.PDF",
    verified: "2026-11-10"
  },

  "aloe-jojoba-conditioner": {
    summary: "A conditioner with aloe vera, jojoba, argan and rosehip oils, with no added sulfates.",
    pack: "296 ml",
    highlights: [
      "Gentle on the scalp",
      "No added sulfates",
      "Blend of three oils: jojoba, argan and rosehip"
    ],
    ingredients: ["Aloe vera", "Jojoba oil", "Argan oil", "Rosehip oil"],
    directions: "After shampooing, massage into the hair and leave on for two to three minutes.",
    notes: "",
    certifications: [],
    source: "ALOEJOJOBACONDITIONER.PDF",
    verified: "2026-11-10"
  },

  "aloe-liquid-soap": {
    summary: "A creamy liquid soap for face and body, in a 473 ml bottle. The sheet describes it as gentle on sensitive skin.",
    pack: "473 ml",
    highlights: [
      "Soft on sensitive skin",
      "Suitable for the entire family",
      "Contains coconut fatty acids, hydrolysed jojoba esters, arnica flower extract and argan oil"
    ],
    ingredients: [
      "Stabilised aloe vera gel",
      "Coconut fatty acids",
      "Hydrolysed jojoba esters",
      "Arnica flower extract",
      "Argan oil",
      "Cucumber fruit"
    ],
    directions: "Dispense, wet, lather and rinse completely. Repeat application as required.",
    notes: "",
    certifications: [],
    source: "FOREVERALOELIQUIDSOAP_633.PDF",
    verified: "2026-11-10"
  },

  "active-probiotic": {
    summary: "Forever Active Pro-B, a six-strain probiotic capsule with zinc. The sheet states 8 billion CFU per capsule and 30 capsules per bottle.",
    pack: "30 capsules",
    highlights: [
      "Proprietary probiotic blend of six strains",
      "8 billion CFU per capsule",
      "Activ Vial packaging to protect the product from moisture",
      "Strains are freeze-dried for protection, potency and shelf stability",
      "Includes FloraActive strains, described on the sheet as from Copenhagen University Hospital"
    ],
    ingredients: [
      "Six probiotic strains including Lactobacillus rhamnosus",
      "Zinc"
    ],
    directions: "Simply take one capsule daily.",
    notes: "",
    certifications: [],
    source: "ACTIVEPRO-B.PDF",
    verified: "2026-11-10"
  },

  "forever-argi-plus": {
    summary: "ARGI+, a berry-flavoured stick pack with 5 g of L-arginine plus vitamins C, K, D, B6 and B12.",
    pack: "Stick pack",
    highlights: [
      "Berry flavour",
      "One sachet provides 5 g of L-arginine",
      "Contains vitamins C, K, D, B6 and B12"
    ],
    ingredients: ["L-arginine", "Grape extract", "Vitamins C, K, D, B6, B12"],
    directions: "Stir a packet into water, or add it to Forever Aloe Vera Gel or Forever Aloe Berry Nectar.",
    notes: "",
    certifications: [],
    source: "ARGI.pdf",
    verified: "2026-11-10"
  },

  "forever-garlic-thyme": {
    summary: "An odourless garlic and thyme softgel, 100 per bottle. The sheet states one softgel equals 1000 mg of fresh garlic.",
    pack: "100 softgels",
    highlights: [
      "Odourless softgel",
      "Easy to swallow",
      "1 softgel = 1000 mg fresh garlic",
      "5 softgels = 1 clove of fresh garlic"
    ],
    ingredients: ["Garlic concentrate oil", "Thyme"],
    directions: "One softgel three times daily after a meal.",
    notes: "",
    certifications: [],
    source: "ForeverGarlicThyme.pdf",
    verified: "2026-11-10"
  },

  "absorbent-c": {
    summary: "Vitamin C tablets with honey and oat bran, in a natural orange and honey flavour. The sheet states 60 mg of vitamin C with 500 mg of oat bran per tablet.",
    pack: "",
    highlights: [
      "Each tablet contains 60 mg vitamin C with 500 mg of oat bran",
      "Natural orange and honey flavour",
      "The sheet describes oat bran and honey as assisting absorption of vitamin C"
    ],
    ingredients: ["Vitamin C", "Oat bran", "Honey"],
    directions: "One tablet three times daily as a dietary supplement.",
    notes: "",
    certifications: [],
    source: "ForeverAbsorbent-C.pdf",
    verified: "2026-11-10"
  }
};
