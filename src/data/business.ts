export const business = {
  name: "Sweety Apple",

  location: {
    city: "Bruxelles",
    pickupArea: "Molenbeek-Saint-Jean, entre Simonis et Belgica",
    country: "Belgique",
    countryCode: "BE",
  },

  contact: {
    phone: null as string | null,
    email: null as string | null,
    whatsapp: null as string | null,
  },

  social: {
    instagram: null as string | null,
    snapchat: null as string | null,
  },

  ordering: {
    standardNoticeDays: {
      min: 3,
      max: 4,
    },

    eventNoticeWeeks: {
      min: 2,
      max: 3,
    },

    pickupAvailable: true,
    deliveryAvailable: true,
  },
} as const;