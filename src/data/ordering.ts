export const orderingRules = {
  notice: {
    standardOrderDays: {
      min: 3,
      max: 4,
    },
    eventOrderWeeks: {
      min: 2,
      max: 3,
    },
  },

  pickup: {
    locationDescription:
      "Molenbeek-Saint-Jean, entre Simonis et Belgica",
    timeSlots: [
      {
        start: "13:00",
        end: "14:30",
      },
      {
        start: "16:30",
        end: "18:30",
      },
    ],
  },

  delivery: {
    available: true,
    minimumProducts: 3,
    priceDependsOnDistance: true,
    dependsOnDayAndTime: true,
  },

  payment: {
    depositRequired: true,
    depositMethod: "Virement bancaire",
    remainingPaymentMethods: [
      "Virement avant réception",
      "Espèces",
    ],
  },

  modifications: {
    allowedUntilHoursBefore: 48,
  },

  cancellation: {
    depositRefundable: false,
  },
} as const;

export const appleOrderRules = {
  maximumFlavours: 5,

  oneFlavour: {
    minimumQuantity: 1,
  },

  twoOrMoreFlavours: {
    minimumPerFlavour: 2,
  },

  upToFourFlavours: {
    specialFormatAllowed: "2-2-2-1",
  },

  fiveFlavours: {
    minimumQuantityForAtLeastThreeFlavours: 3,
    minimumQuantityForRemainingFlavours: 2,
  },
} as const;

export const grapePricing = {
  bags: [
    { quantity: 4, price: 5 },
    { quantity: 5, price: 6 },
    { quantity: 6, price: 7 },
  ],

  tray: {
    quantity: 10,
    price: 12,
  },

  rules: {
    standaloneMinimumBags: 4,

    withApple: {
      minimumBags: 2,
      appleQuantity: 1,
      sameFlavourRequired: true,
    },

    mixedFlavours: {
      availableFromTrays: 2,
      maximumFlavours: 2,
    },
  },
} as const;

export const loveStrawberryPricing = {
  box: {
    quantity: 5,
    price: 13,
  },

  mixedFlavours: {
    availableFromBoxes: 2,
    maximumFlavours: 2,
  },

  singleBoxRequirement: {
    requiresEither: [
      "1 pomme d'amour",
      "2 sachets minimum de raisins d'amour de la même saveur",
    ],
  },
} as const;

export const chocolateStrawberryPricing = {
  box: {
    quantity: 5,
    price: 15,
  },

  chocolateChoiceCustomizable: true,
  toppingsCustomizable: true,
} as const;

export const franuiPricing = [
  {
    weightGrams: 160,
    price: 7,
    numberOfFlavours: 1,
  },
  {
    weightGrams: 300,
    price: 14,
    mixedFlavoursAllowed: true,
  },
] as const;

export const sweetDubai = {
  name: "Bombe Sweet’ Dubai",
  price: 15,
  approximateWeightGrams: 300,
  servings: "1 à 2 personnes",
  storage: "48h au réfrigérateur",

  ingredients: [
    "Crème cheese à base de Philadelphia",
    "Kunefe pistache croquant style Dubai",
    "Enrobage chocolat",
  ],
} as const;

export const sourLollipopEventPricing = {
  minimumPerFlavour: 12,

  standard: {
    pricePerPiece: 2,
  },

  bulk: {
    minimumQuantity: 50,
    pricePerPiece: 1.8,
  },

  ribbonOption: {
    available: true,
    supplementPerPiece: 0.5,
  },
} as const;

export const miniAppleEventRules = {
  eventOnly: true,
  minimumQuantity: 60,
  discountComparedToFullSize: 2.5,
} as const;

export const eventRules = {
  customizable: true,

  customizationOptions: [
    "Couleurs",
    "Thème de l'événement",
  ],

  products: [
    "Pommes d'amour",
    "Mini pommes d'amour",
    "Sucettes Sour++",
    "Rose Dubai",
  ],
} as const;