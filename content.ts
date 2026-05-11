// content.ts
// All copy for KITCHEN lives here. Edit freely — types are loose on purpose.

export const brand = {
  name: "KITCHEN",
  mark: "KITCHEN — London / No. 01",
  tagline: "Functional food and drink. Nothing wasted, nothing hidden.",
  intro:
    "A small menu built around what the body actually needs. Cold-pressed, cooked properly, measured to the gram.",
};

export const principles = [
  {
    label: "Backed by science",
    body: "Every item is formulated against a nutritional brief. No guesswork, no marketing copy dressed up as ingredients.",
  },
  {
    label: "Whole ingredients",
    body: "Real food, traceable sourcing, short shelf lives. If we can't pronounce it, we don't use it.",
  },
  {
    label: "No added sugar",
    body: "Sweetness from fruit, dates, or nothing at all. No syrups, no concentrates, no hidden grams.",
  },
  {
    label: "Functional by design",
    body: "Built around four jobs: recovery, focus, fuel, and gut. Every item tells you which one it does.",
  },
];

// Menu — 4 categories × 2 items. Keep descriptions one short sentence.
// Tags: recovery | focus | fuel | gut
export type Tag = "recovery" | "focus" | "fuel" | "gut";

export type Item = {
  no: string;
  name: string;
  description: string;
  ingredients: string[];
  protein: number; // grams
  kcal: number;
  tag: Tag;
  price: string;
};

export const menu: { category: string; items: Item[] }[] = [
  {
    category: "Smoothies",
    items: [
      {
        no: "01",
        name: "Cacao Recovery",
        description: "Banana, oats, whey, raw cacao, almond milk. Post-training.",
        ingredients: ["Banana", "Oats", "Whey isolate", "Raw cacao", "Almond milk"],
        protein: 28,
        kcal: 410,
        tag: "recovery",
        price: "£7.50",
      },
      {
        no: "02",
        name: "Berry & Kefir",
        description: "Blueberry, raspberry, kefir, flaxseed, collagen. For the gut.",
        ingredients: ["Blueberry", "Raspberry", "Kefir", "Flaxseed", "Marine collagen"],
        protein: 18,
        kcal: 320,
        tag: "gut",
        price: "£7.50",
      },
    ],
  },
  {
    category: "Protein Shakes",
    items: [
      {
        no: "03",
        name: "Cold Brew Protein",
        description: "Single-origin cold brew, whey, almond, dates. For the morning.",
        ingredients: ["Cold brew coffee", "Whey isolate", "Almond milk", "Medjool date"],
        protein: 30,
        kcal: 280,
        tag: "focus",
        price: "£7.00",
      },
      {
        no: "04",
        name: "Vanilla Casein",
        description: "Slow-release casein, banana, almond butter, vanilla. For the long stretch.",
        ingredients: ["Casein", "Banana", "Almond butter", "Vanilla", "Oat milk"],
        protein: 32,
        kcal: 380,
        tag: "fuel",
        price: "£7.00",
      },
    ],
  },
  {
    category: "Bagels",
    items: [
      {
        no: "05",
        name: "Hummus & Avocado",
        description: "Sourdough bagel, hummus, avocado, sprouts, chilli oil. Plant-based.",
        ingredients: ["Sourdough bagel", "Hummus", "Avocado", "Sprouts", "Chilli oil"],
        protein: 16,
        kcal: 460,
        tag: "fuel",
        price: "£8.50",
      },
      {
        no: "06",
        name: "Smoked Turkey",
        description: "Sourdough bagel, smoked turkey, rocket, mustard, pickled onion.",
        ingredients: ["Sourdough bagel", "Smoked turkey", "Rocket", "Dijon", "Pickled onion"],
        protein: 34,
        kcal: 520,
        tag: "fuel",
        price: "£9.50",
      },
    ],
  },
  {
    category: "Salads",
    items: [
      {
        no: "07",
        name: "Grains & Greens",
        description: "Quinoa, kale, feta, toasted seeds, lemon dressing.",
        ingredients: ["Quinoa", "Kale", "Feta", "Pumpkin seed", "Lemon", "Olive oil"],
        protein: 22,
        kcal: 480,
        tag: "gut",
        price: "£11.00",
      },
      {
        no: "08",
        name: "Chicken & Egg",
        description: "Grilled chicken, soft egg, edamame, brown rice, tahini.",
        ingredients: ["Chicken breast", "Soft-boiled egg", "Edamame", "Brown rice", "Tahini"],
        protein: 42,
        kcal: 560,
        tag: "recovery",
        price: "£12.50",
      },
    ],
  },
];

export const science = {
  heading: "How the menu is built",
  body: [
    "Every item starts with a job — recovery, focus, fuel, or gut — and is built backwards from there. Macros are set first, then ingredients chosen to hit them without filler. Protein targets are met with whole sources where possible; isolates only when the format demands it.",
    "We don't chase trends. Collagen is in the berry smoothie because the evidence on connective-tissue recovery holds up. Casein is in the vanilla shake because slow-release protein does what fast protein can't. Nothing on the menu is there because it photographs well.",
    "Nutrition information is printed at the counter and on every receipt. If you want the full breakdown — sourcing, amino profiles, glycaemic load — ask. We'll send it.",
  ],
};

export const founders = [
  {
    name: "[Your name]",
    role: "Operations & build",
    bio: "Ran dark store operations and consumer analytics before this. Builds the systems — sourcing, supply, the software that runs the counter. Believes the best food businesses are operations companies first.",
  },
  {
    name: "[Her name]",
    role: "Nutrition & menu",
    bio: "Biologist by training, competitive swimmer for a decade. Formulates the menu against real nutritional briefs. Reads the studies so you don't have to.",
  },
];

export const footer = {
  newsletter: {
    heading: "On the list",
    body: "Occasional notes on new items, sourcing, and openings. No spam, no discount theatre.",
    placeholder: "your@email.com",
    cta: "Subscribe",
  },
  social: {
    instagram: "@kitchen.london",
  },
  note: "Demo site. Not a real business — yet.",
};
