export const business = {
  name: null as string | null,

  location: {
    city: "Bruxelles",
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
    method: null as string | null,
    pickupAvailable: null as boolean | null,
    deliveryAvailable: null as boolean | null,
  },
} as const;