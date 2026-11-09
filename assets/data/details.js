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
  },
  "clean-9-chocolate": {
    summary: "Nine-day programme built around the Forever Lite Ultra shake. The sheet describes the chocolate shake mix as blending fresh mint and cacao nibs with the richness of Forever Lite Ultra Chocolate.",
    pack: "",
    highlights: [
      "Sold as a nine-day programme",
      "Shake mix described as blending fresh mint and cacao nibs with Forever Lite Ultra Chocolate"
    ],
    ingredients: ["Forever Lite Ultra Chocolate shake mix", "Cacao nibs", "Mint"],
    directions: "",
    notes: "",
    certifications: [],
    source: "C9.PDF",
    verified: "2026-11-10"
  },

  "f15-vanilla": {
    summary: "Fifteen-day programme of Forever products taken on a set schedule. The sheet states each product in F15 was selected to work together, and lists aloe vera gel, Forever Fiber stick packs and supplements in the schedule.",
    pack: "",
    highlights: [
      "Each product in F15 was carefully selected to work together",
      "Aloe vera gel is the first product in the beginner schedule",
      "Supplements are taken as directed in the enclosed supplement schedule"
    ],
    ingredients: [],
    directions: "Follow the supplement schedule supplied with the pack.",
    notes: "",
    certifications: [],
    source: "F15SGP_EN.PDF",
    verified: "2026-11-10"
  },

  "f15-chocolate": {
    summary: "Fifteen-day programme of Forever products taken on a set schedule, in the chocolate variant. The sheet states each product was selected to work together.",
    pack: "",
    highlights: [
      "Each product in F15 was carefully selected to work together",
      "Product intakes follow the enclosed supplement schedule"
    ],
    ingredients: [],
    directions: "Follow the supplement schedule supplied with the pack.",
    notes: "",
    certifications: [],
    source: "F15SGP_EN.PDF",
    verified: "2026-11-10"
  },

  "dx4": {
    summary: "Four-day reset system built from a combination of Forever nutritional products and supplements. The sheet presents it as a four-day system to reset and renew.",
    pack: "",
    highlights: [
      "Sold as a four-day system",
      "Combines nutritional products with supplements"
    ],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: [],
    source: "dx4_en.pdf",
    verified: "2026-11-10"
  },

  "start-your-journey-1": {
    summary: "Preferred Customer starter bundle sold as one pack. The pack sheet lists the contents; ask us for the current contents of this pack before ordering.",
    pack: "",
    highlights: [
      "Sold as a single pack for Preferred Customers"
    ],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: [],
    source: "syjpsgp_en.pdf",
    verified: "2026-11-10"
  },

  "start-your-journey-2": {
    summary: "Preferred Customer starter bundle sold as one pack. The pack sheet lists the contents; ask us for the current contents of this pack before ordering.",
    pack: "",
    highlights: [
      "Sold as a single pack for Preferred Customers"
    ],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: [],
    source: "syjpsgp_en.pdf",
    verified: "2026-11-10"
  },

  "start-your-journey-3": {
    summary: "Preferred Customer starter bundle sold as one pack. The pack sheet lists the contents; ask us for the current contents of this pack before ordering.",
    pack: "",
    highlights: [
      "Sold as a single pack for Preferred Customers"
    ],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: [],
    source: "syjpsgp_en.pdf",
    verified: "2026-11-10"
  },

  "cardiohealth-coq10": {
    summary: "Sachets of a CoQ10 complex stirred into a serving of aloe vera gel. The sheet states one sachet provides 80 mg of CoQ10, with vitamin C, E, B6, B12, folate, magnesium and chromium.",
    pack: "Sachets",
    highlights: [
      "One sachet provides 80 mg of CoQ10",
      "Contains vitamin C, E, B6, B12, folate, magnesium and chromium",
      "The sheet names boswellia extract and grape seed extract among the ingredients"
    ],
    ingredients: ["CoQ10", "Boswellia extract", "Grape seed extract", "Vitamin C", "Vitamin E", "Vitamin B6", "Vitamin B12", "Folate", "Magnesium", "Chromium"],
    directions: "Pour one packet into a serving of Forever Aloe Vera Gel, stir and drink.",
    notes: "The sheet lists it as suitable for people who work long hours and those looking for heart-promoting nutrients.",
    certifications: [],
    source: "CARDIOHEALTHWITHCOQ10.PDF",
    verified: "2026-11-10"
  },

  "aloe-avocado-soap": {
    summary: "Face and body soap made with aloe vera and avocado oil, described on the sheet as gentle cleansing that leaves skin soft and supple.",
    pack: "",
    highlights: [
      "Rich texture",
      "Freshly-picked citrus scent",
      "Cleanses without leaving skin tight"
    ],
    ingredients: ["Aloe vera", "Avocado oil"],
    directions: "Use to cleanse the skin as needed. Rinse completely, then gently pat dry with a towel.",
    notes: "",
    certifications: [],
    source: "AloeAvocadoFaceAndBodySoap.pdf",
    verified: "2026-11-10"
  },

  "aloe-first": {
    summary: "Spray for the first aid kit formulated with stabilised aloe vera gel, bee propolis and a blend of herbs.",
    pack: "",
    highlights: [
      "Formulated with stabilised aloe vera gel from Forever's own fields",
      "Also contains bee propolis and a proprietary herbal blend",
      "The sheet describes it as a must-have for the first aid kit"
    ],
    ingredients: ["Stabilised aloe vera gel", "Bee propolis", "Herbal blend"],
    directions: "Apply liberally to the skin as needed to soothe and moisturise.",
    notes: "For external use only.",
    certifications: [],
    source: "ALOEFIRST.PDF",
    verified: "2026-11-10"
  },

  "aloe-lips-12": {
    summary: "Twelve-tube pack of the aloe and jojoba lip balm, sold as a single order line.",
    pack: "12 pieces",
    highlights: [
      "Sold as a 12-piece pack",
      "Balms are the standard Forever Aloe Lips tubes"
    ],
    ingredients: ["Aloe vera", "Jojoba"],
    directions: "Apply on the lips regularly as a moisturiser.",
    notes: "",
    certifications: [],
    source: "ForeverAloeLips.pdf",
    verified: "2026-11-10"
  },

  "aloe-body-wash": {
    summary: "Body wash described on the sheet as a sulfate-free, pH-balanced cleanser with a creamy foam, scented with woods, amber and herbs.",
    pack: "",
    highlights: [
      "Sulfate-free formula",
      "pH-balanced",
      "Rich creamy foam that rinses easily"
    ],
    ingredients: ["Vitamins A, C and E"],
    directions: "Apply to a shower puff, loofah or sponge and gently soap the entire body using a circular motion. Rinse well.",
    notes: "",
    certifications: [],
    source: "ALOEBODYWASH.PDF",
    verified: "2026-11-10"
  },

  "aloe-sunscreen": {
    summary: "SPF 30 sunscreen lotion for the face and body, built on a non-nanosized zinc oxide filter.",
    pack: "",
    highlights: [
      "SPF 30 protection from UVA and UVB rays",
      "Water resistant for 80 minutes",
      "Uses natural non-nanosized zinc oxide"
    ],
    ingredients: [],
    directions: "Apply liberally to all exposed areas 15 to 30 minutes before sun exposure. Reapply within 40 minutes of any water activity or at least every two hours.",
    notes: "",
    certifications: [],
    source: "ALOESUNSCREEN.PDF",
    verified: "2026-11-10"
  },

  "aloe-activator": {
    summary: "Aloe vera gel-based skin refresher the sheet describes as containing over 98% aloe vera gel, used to clean or freshen the skin or to mix a mask.",
    pack: "",
    highlights: [
      "Over 98% aloe vera gel",
      "Gentle enough for the entire face, including the eye area",
      "Contains enzymes, amino acids and polysaccharides"
    ],
    ingredients: [],
    directions: "Apply to a cotton ball and gently wipe across the skin to clean or freshen. For a mask, mix 1 tsp of Tightening Mask Powder with the Activator.",
    notes: "",
    certifications: [],
    source: "ALOEACTIVATOR.PDF",
    verified: "2026-11-10"
  },

  "replenishing-skin-oil": {
    summary: "Lightweight, silicone-free facial oil with retinyl palmitate and vitamin E, for face, neck and dry areas.",
    pack: "",
    highlights: [
      "Lightweight fluid that glides on easily",
      "Made with retinyl palmitate, borage seed oil, C15-19 alkane and safflower seed oil",
      "Silicone-free"
    ],
    ingredients: ["Retinyl palmitate", "Vitamin E", "Borage seed oil", "C15-19 alkane", "Safflower seed oil"],
    directions: "Apply to face, neck and dry areas where needed. For added moisture, dampen the skin with Aloe Activator first.",
    notes: "The sheet advises a patch test if unsure about sensitivity, and consulting a health professional during pregnancy.",
    certifications: [],
    source: "REPLENISHINGSKINOIL.PDF",
    verified: "2026-11-10"
  },

  "aloe-bio-cellulose-mask": {
    summary: "Single-use sheet mask made from bio-cellulose and infused with aloe, described as deep hydration without rinsing.",
    pack: "",
    highlights: [
      "Easy to use, no rinsing required",
      "The sheet describes it as ideal for sensitive skin",
      "Designed to reduce the appearance of redness"
    ],
    ingredients: [],
    directions: "Open the pouch and unfold the mask, which is protected by a woven fabric on each side. Remove one layer, apply the mask to the face, then remove the second layer.",
    notes: "",
    certifications: [],
    source: "ALOEBIOCELLULOSEMASK.PDF",
    verified: "2026-11-10"
  },

  "renewing-skin-creme": {
    summary: "Night cream fortified with vitamins A and E, which the sheet describes as restoring and renewing the skin's appearance.",
    pack: "",
    highlights: [
      "Fortified with vitamins A and E",
      "Helps maintain the skin's natural moisture",
      "Described as promoting the appearance of younger-looking skin"
    ],
    ingredients: ["Vitamin A", "Vitamin E"],
    directions: "",
    notes: "",
    certifications: [],
    source: "RSCPB.PDF",
    verified: "2026-11-10"
  },

  "logic-aloe-gel-cleanser": {
    summary: "Step one of the three-step Logic routine: a gel cleanser with desert date fruit extract, which the sheet says helps promote hydration.",
    pack: "",
    highlights: [
      "Step 1 of the Logic by Forever routine",
      "Made with desert date fruit extract",
      "Suitable for vegans and vegetarians"
    ],
    ingredients: ["Desert date fruit extract"],
    directions: "",
    notes: "",
    certifications: ["Vegan", "Vegetarian"],
    source: "LOGICSG.PDF",
    verified: "2026-11-10"
  },

  "logic-balancing-essence": {
    summary: "Step two of the three-step Logic routine: a balancing essence applied after the gel cleanser.",
    pack: "",
    highlights: [
      "Step 2 of the Logic by Forever routine",
      "Follows the Aloe Gel Cleanser",
      "Suitable for vegans and vegetarians"
    ],
    ingredients: [],
    directions: "",
    notes: "",
    certifications: ["Vegan", "Vegetarian"],
    source: "LOGICSG.PDF",
    verified: "2026-11-10"
  },

  "logic-soothing-moisturizer": {
    summary: "Step three of the three-step Logic routine: a soothing gel moisturiser made with jojoba esters, which the sheet says help nourish the skin.",
    pack: "",
    highlights: [
      "Step 3 of the Logic by Forever routine",
      "Made with jojoba esters",
      "Suitable for vegans and vegetarians"
    ],
    ingredients: ["Jojoba esters"],
    directions: "",
    notes: "",
    certifications: ["Vegan", "Vegetarian"],
    source: "LOGICSG.PDF",
    verified: "2026-11-10"
  },

  "refining-gel-mask": {
    summary: "Overnight gel mask in a 59 ml tube, described on the sheet as nourishing skin while you sleep without feeling greasy.",
    pack: "59 ml",
    highlights: [
      "Described as nourishing skin while you sleep",
      "Leaves skin feeling soft without a greasy finish",
      "Vegan and cruelty-free formula"
    ],
    ingredients: [],
    directions: "Apply as a mask and leave on overnight, then rinse.",
    notes: "For external use only.",
    certifications: ["Vegan", "Cruelty-free"],
    source: "GELEN.PDF",
    verified: "2026-11-10"
  },

  "b12-plus": {
    summary: "Time-release tablets combining vitamin B12 and folic acid. The sheet states each tablet carries 500 mcg of vitamin B12 and 400 mcg of folic acid.",
    pack: "",
    highlights: [
      "Time-release formula",
      "Each tablet contains 500 mcg vitamin B12 and 400 mcg folic acid",
      "The sheet lists vegetarians, vegans and pregnant or breastfeeding mothers among those it suits"
    ],
    ingredients: ["Folic acid", "Vitamin B12"],
    directions: "Take one to two tablets daily after meals.",
    notes: "",
    certifications: ["Vegetarian", "Vegan"],
    source: "B12PLUS.pdf",
    verified: "2026-11-10"
  },

  "forever-calcium": {
    summary: "Calcium and vitamin D tablets with manganese, copper and vitamin C. The sheet describes the formula as supporting bone health.",
    pack: "",
    highlights: [
      "Made with calcium and vitamin D",
      "Enhanced with manganese, copper and vitamin C",
      "The sheet describes it as suitable for the elderly"
    ],
    ingredients: ["Calcium", "Vitamin D", "Manganese", "Copper", "Vitamin C"],
    directions: "Take 3 to 4 tablets daily as a dietary supplement.",
    notes: "The sheet suggests taking it away from coffee.",
    certifications: [],
    source: "FOREVERCALCIUM.pdf",
    verified: "2026-11-10"
  },

  "forever-fiber": {
    summary: "Stick packs of four types of fibre that dissolve in any drink. The sheet names acacia gum, soluble corn fibre and fructooligosaccharides.",
    pack: "30 stick-packs",
    highlights: [
      "Easy-to-use stick pack",
      "Dissolves quickly into any drink",
      "Mild, grit-free taste",
      "Four types of fibre, including acacia gum, soluble corn fibre and fructooligosaccharides"
    ],
    ingredients: ["Acacia gum", "Soluble corn fibre", "Fructooligosaccharides"],
    directions: "",
    notes: "",
    certifications: [],
    source: "FOREVERFIBER.PDF",
    verified: "2026-11-10"
  },

  "fields-of-greens": {
    summary: "Tablets made from barley grass, wheatgrass, alfalfa and other greens, described on the sheet as green goodness in every tablet.",
    pack: "",
    highlights: [
      "Made with barley grass, wheatgrass, alfalfa and other greens"
    ],
    ingredients: ["Barley grass", "Wheatgrass", "Alfalfa"],
    directions: "Take one tablet twice a day before a meal.",
    notes: "",
    certifications: [],
    source: "FOREVERFIELDSOFGREENS.PDF",
    verified: "2026-11-10"
  },

  "forever-daily": {
    summary: "Multivitamin and mineral tablets coated in aloe. The sheet states 55 vitamins and nutrients and an AOS delivery complex.",
    pack: "",
    highlights: [
      "55 vitamins and nutrients",
      "Exclusive AOS complex used to aid delivery",
      "Aloe-coated tablets"
    ],
    ingredients: ["AOS complex", "55 vitamins and minerals"],
    directions: "Take two tablets twice daily with meals.",
    notes: "The sheet suggests taking it with Forever Nature-Min.",
    certifications: [],
    source: "ForeverDaily_439.pdf",
    verified: "2026-11-10"
  },

  "forever-focus": {
    summary: "Capsules built around Cognizin citicoline, described on the sheet as supporting mental clarity and organised thought.",
    pack: "",
    highlights: [
      "Uses Cognizin, a studied form of citicoline",
      "Also contains vitamin B6 and ginkgo biloba extract",
      "The sheet lists professionals, gamers, students and active seniors among those it suits"
    ],
    ingredients: ["Cognizin citicoline", "Vitamin B6", "Ginkgo biloba extract"],
    directions: "Take four capsules with a meal in the morning.",
    notes: "The sheet advises not taking it after 4 pm or before bedtime.",
    certifications: [],
    source: "ForeverFocus.pdf",
    verified: "2026-11-10"
  },

  "forever-kids": {
    summary: "Grape-flavoured chewable multivitamin for children, with no added sugar and no artificial flavours or colours.",
    pack: "",
    highlights: [
      "No added sugar",
      "No artificial flavours, colours or preservatives",
      "High in vitamins A, D, E, C, B1, B2, B6, B12, niacin, folic acid, biotin and pantothenic acid, plus zinc"
    ],
    ingredients: ["Vitamins A, D, E, C, B1, B2, B6, B12", "Niacin", "Folic acid", "Biotin", "Pantothenic acid", "Zinc"],
    directions: "Children over 4 and adults take four tablets daily. Children aged 2 to 4 take two tablets daily.",
    notes: "",
    certifications: [],
    source: "ForeverKids_354.pdf",
    verified: "2026-11-10"
  },

  "ivision": {
    summary: "Eye supplement softgels built on Lutemax 2020, which the sheet says supplies the carotenoids lutein, zeaxanthin and meso-zeaxanthin.",
    pack: "",
    highlights: [
      "Lutemax 2020 supplies lutein, zeaxanthin and meso-zeaxanthin",
      "Also contains vitamins A, C and E",
      "The sheet lists professionals, gamers, students and active seniors among those it suits"
    ],
    ingredients: ["Lutemax 2020", "Vitamin A", "Vitamin C", "Vitamin E"],
    directions: "Take two softgels with meals daily.",
    notes: "",
    certifications: [],
    source: "ForeveriVision.pdf",
    verified: "2026-11-10"
  },

  "lycium-plus": {
    summary: "Tablets blending lycium extract with licorice root, described on the sheet as a balanced blend of botanicals.",
    pack: "",
    highlights: [
      "Combines lycium extract and licorice root",
      "The sheet notes licorice as a herb with antioxidant benefits"
    ],
    ingredients: ["Licorice root", "Lycium extract"],
    directions: "Take one tablet three times daily after a meal.",
    notes: "",
    certifications: ["Vegetarian", "Vegan"],
    source: "ForeverLyciumPlus_072.pdf",
    verified: "2026-11-10"
  },

  "forever-move": {
    summary: "Joint and muscle softgels built on NEM, described on the sheet as its most advanced mobility formula.",
    pack: "",
    highlights: [
      "Built on NEM, described as clinically tested",
      "The sheet states results confirmed in as early as 7 to 10 days",
      "Also contains turmeric"
    ],
    ingredients: ["NEM", "Turmeric"],
    directions: "Take one softgel three times daily.",
    notes: "The sheet suggests taking it with Forever Aloe Vera Gel for joint care.",
    certifications: [],
    source: "ForeverMove.pdf",
    verified: "2026-11-10"
  },

  "nature-min": {
    summary: "Multi-mineral tablets supplying essential and trace minerals. The sheet names calcium, magnesium, manganese, iron, zinc, molybdenum, phosphorus, selenium, iodine and copper.",
    pack: "",
    highlights: [
      "A blend of essential and trace minerals"
    ],
    ingredients: ["Calcium", "Magnesium", "Manganese", "Iron", "Zinc", "Molybdenum", "Phosphorus", "Selenium", "Iodine", "Copper"],
    directions: "Take six tablets daily after meals.",
    notes: "",
    certifications: [],
    source: "NATUREMIN.pdf",
    verified: "2026-11-10"
  },

  "forever-therm": {
    summary: "Tablets combining green tea, guarana, natural caffeine and raspberry ketone, with B vitamins and vitamin C.",
    pack: "",
    highlights: [
      "Contains vitamin C, B1, B2, niacin, B6, B12, folate and pantothenic acid",
      "Contains guarana seed extract and raspberry ketones",
      "Also lists green coffee bean and green tea"
    ],
    ingredients: ["B vitamins", "Green coffee bean", "Green tea", "Guarana seed extract", "Raspberry ketones"],
    directions: "Take two tablets daily with meals.",
    notes: "Do not take after 4 pm because of the natural caffeine content.",
    certifications: ["Vegetarian", "Vegan"],
    source: "ForeverTherm_463.pdf",
    verified: "2026-11-10"
  },
};
