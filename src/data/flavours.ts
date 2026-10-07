export interface AppleFlavour {
  slug: string;
  name: string;
  price: number;
  acidic: boolean;
  isNew?: boolean;
}

export const appleFlavours: AppleFlavour[] = [
  {
    slug: "fraise-classique",
    name: "Fraise classique",
    price: 5,
    acidic: false,
  },
  {
    slug: "fraise-acidulee",
    name: "Fraise acidulée",
    price: 7,
    acidic: true,
  },
  {
    slug: "fraise-coco",
    name: "Fraise coco",
    price: 7,
    acidic: false,
  },
  {
    slug: "peche",
    name: "Pêche",
    price: 7,
    acidic: true,
  },
  {
    slug: "noisette",
    name: "Noisette",
    price: 7,
    acidic: false,
  },
  {
    slug: "bubble-gum",
    name: "Bubble gum",
    price: 7.5,
    acidic: true,
  },
  {
    slug: "fruits-rouges",
    name: "Fruits rouges",
    price: 7.5,
    acidic: true,
  },
  {
    slug: "framboise",
    name: "Framboise",
    price: 7.5,
    acidic: true,
  },
  {
    slug: "violette-myrtille",
    name: "Violette myrtille",
    price: 8,
    acidic: false,
  },
  {
    slug: "fruit-de-la-passion",
    name: "Fruit de la passion",
    price: 8,
    acidic: false,
  },
  {
    slug: "cerise",
    name: "Cerise",
    price: 8,
    acidic: false,
  },
  {
    slug: "pina-colada",
    name: "Piña colada",
    price: 8.5,
    acidic: false,
  },
  {
    slug: "shamallow",
    name: "Shamallow",
    price: 8.5,
    acidic: true,
  },
  {
    slug: "barbe-a-papa",
    name: "Barbe à papa",
    price: 8.5,
    acidic: false,
  },
  {
    slug: "pasteque",
    name: "Pastèque",
    price: 8.5,
    acidic: true,
  },
  {
    slug: "red-boost-power",
    name: "Red Boost Power",
    price: 8.5,
    acidic: true,
    isNew: true,
  },
];

export const flavourOptions = {
  removeAcidicCoating: {
    priceAdjustment: -1,
  },

  addAcidicCoating: {
    priceAdjustment: 1,
  },
} as const;