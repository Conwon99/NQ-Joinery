/** Central business config — single source of truth for NAP, SEO, assets, and schema. */

export type BusinessAddress = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
  streetAddress?: string;
};

export type BusinessAssets = {
  hero: string;
  logo: string;
  about: string;
  gallery: [string, string, string, string, string, string];
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type BusinessConfig = {
  businessName: string;
  alternateName: string;
  tagline: string;
  gbpCategory: string;
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  /** Set to enable client-side tracking number swap; null = canonical everywhere */
  trackingPhone: string | null;
  trackingPhoneLocal: string | null;
  email: string;
  siteUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
  whatsappUrl: string | null;
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  serviceAreaPolygon: [number, number][];
  assets: BusinessAssets;
  serviceTypes: string[];
  openingHours: OpeningHoursSpec[];
  /** Google Analytics measurement ID — empty string to disable */
  googleAnalyticsId: string;
  /** Google Ads conversion ID — empty string to disable */
  googleAdsId: string;
};

export const business: BusinessConfig = {
  businessName: "NQ Joinery | Glasgow",
  alternateName: "NQ Joinery",
  tagline: "Tidy joinery and flooring work across Glasgow. Free quotes.",
  gbpCategory: "Carpenter",

  phone: "+44 7375 514379",
  phoneDisplay: "+44 7375 514379",
  phoneLocal: "07375 514379",
  trackingPhone: null,
  trackingPhoneLocal: null,

  email: "hello@nqjoineryglasgow.co.uk",
  siteUrl: "https://www.nqjoineryglasgow.co.uk",
  facebookUrl: "https://www.facebook.com/profile.php?id=61580904917513",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=NQ+Joinery+Glasgow",
  whatsappUrl: null,

  primaryCity: "Glasgow",
  secondaryCity: "Giffnock",
  region: "Greater Glasgow",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Glasgow",
    addressRegion: "Greater Glasgow",
    addressCountry: "GB",
  },

  mapCenter: [55.8617, -4.2583],
  serviceAreaPolygon: [
    [55.8617, -4.2583],
    [55.8900, -4.3500],
    [55.9100, -4.2800],
    [55.9000, -4.1500],
    [55.8500, -4.1000],
    [55.7800, -4.1500],
    [55.7600, -4.2800],
    [55.7900, -4.3800],
    [55.8300, -4.4200],
    [55.8617, -4.2583],
  ],

  assets: {
    hero: "/nqjoineryglasgow-hero.jpg",
    logo: "/logo.png",
    about: "/nqjoineryglasgow-about.jpg",
    gallery: [
      "/nqjoineryglasgow-gal-01.jpg",
      "/nqjoineryglasgow-gal-02.jpg",
      "/nqjoineryglasgow-gal-03.jpg",
      "/nqjoineryglasgow-gal-04.jpg",
      "/nqjoineryglasgow-gal-05.jpg",
      "/nqjoineryglasgow-gal-06.jpg",
    ],
  },

  serviceTypes: [
    "Laminate Flooring Installation",
    "Skirting Board Installation",
    "Joinery and Carpentry",
    "Fencing Installation",
    "Free Quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],

  googleAnalyticsId: "",
  googleAdsId: "",
};

export const SITE_URL = business.siteUrl;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const brandName = () => business.alternateName;

export const citiesLabel = () => `${business.primaryCity} & ${business.secondaryCity}`;

export const homepageTitle = () =>
  `${business.alternateName} | Joinery & Flooring in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} provides laminate flooring, joinery, and fencing across ${citiesLabel()} and ${business.region}. Free quotes available.`,
  );

export const homepageH1 = () => `Joinery & Flooring in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `joinery Glasgow, laminate flooring Glasgow, ${business.secondaryCity}, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} joinery and flooring work in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
