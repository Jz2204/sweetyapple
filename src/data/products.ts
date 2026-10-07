export type ProductCategory =
  | "fruit-caramel"
  | "chocolat"
  | "confiserie";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  description?: string;
  priceFrom?: number;
  unit?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "pommes-amour",
    name: "Pommes d'amour",
    category: "fruit-caramel",
    description:
      "Pommes d'amour disponibles dans plusieurs saveurs, acidulées ou non acidulées.",
    priceFrom: 5,
    unit: "pièce",
    featured: true,
  },
  {
    slug: "raisins-amour",
    name: "Raisins d'amour",
    category: "fruit-caramel",
    description:
      "Raisins d'amour disponibles en sachets ou en barquettes.",
    priceFrom: 5,
    featured: true,
  },
  {
    slug: "kiwi-amour",
    name: "Kiwi d'amour",
    category: "fruit-caramel",
    priceFrom: 6.5,
    unit: "pièce",
  },
  {
    slug: "fraises-amour",
    name: "Fraises d'amour",
    category: "fruit-caramel",
    priceFrom: 13,
    unit: "box de 5",
  },
  {
    slug: "fraises-chocolat",
    name: "Fraises au chocolat",
    category: "chocolat",
    description:
      "Fraises enrobées de chocolat avec choix du chocolat et des toppings.",
    priceFrom: 15,
    unit: "box de 5",
    featured: true,
  },
  {
    slug: "franui-revisites",
    name: "Franui revisités",
    category: "chocolat",
    description:
      "Franui revisités disponibles notamment en saveurs spéculoos, Oreo et Maltesers.",
    priceFrom: 7,
  },
  {
    slug: "tablette-chocolat-dubai",
    name: "Tablette chocolat Dubai",
    category: "chocolat",
    description:
      "Tablette de chocolat Dubai en forme de rose.",
  },
  {
    slug: "bombe-sweet-dubai",
    name: "Bombe Sweet’ Dubai",
    category: "chocolat",
    description:
      "Dessert composé de crème cheese, kunefe pistache croquant et enrobage chocolat.",
    priceFrom: 15,
    unit: "environ 300 g",
    featured: true,
  },
  {
    slug: "sucettes-sour",
    name: "Sucettes Sour++",
    category: "confiserie",
    description:
      "Sucettes vegan faites maison, disponibles également pour les événements.",
    priceFrom: 2,
    unit: "pièce",
  },
  {
    slug: "barbe-a-papa-petillante",
    name: "Barbe à papa pétillante",
    category: "confiserie",
    description: "Pots de barbe à papa pétillante.",
  },
];