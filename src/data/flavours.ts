import type { ImageMetadata } from "astro";

export interface Flavour {
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;

  image?: ImageMetadata;
  imageAlt?: string;

  price?: number;
  available?: boolean;
  featured?: boolean;
}

export const flavours: Flavour[] = [];