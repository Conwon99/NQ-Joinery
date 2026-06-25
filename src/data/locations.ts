import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover ${name}?`,
    answer: `Yes. ${brand} provides ${categoryNames.toLowerCase()} in ${name} and nearby areas. Get in touch to confirm availability for your property.`,
  },
  {
    question: `What services do you carry out in ${name}?`,
    answer: `${brand} helps customers in ${name} with ${categoryNames.toLowerCase()} and related joinery work.`,
  },
  {
    question: `How do I get a quote for work in ${name}?`,
    answer: `Contact ${brand} by phone or through the contact form with a brief description of the work and your location in ${name}. Photos are helpful. Free quotes are available.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and surrounding towns across ${business.region}. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a local joiner or carpenter near ${name}?`,
    answer: `Yes. ${brand} is a local joiner serving ${name} and nearby areas with free quotes across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "glasgow",
    name: "Glasgow",
    description: `${brand} provides joinery, flooring and fencing in Glasgow and surrounding communities.`,
    intro: `For customers in Glasgow, ${brand} provides laminate flooring installation, joinery, carpentry and fencing with tidy workmanship and free quotes.`,
    nearby: ["Giffnock", "Shawlands", "Pollok"],
  },
  {
    slug: "giffnock",
    name: "Giffnock",
    description: `${brand} provides joinery, flooring and fencing in Giffnock and nearby areas.`,
    intro: `${brand} regularly works in Giffnock, completing laminate flooring, fencing and joinery jobs for local customers. Free quotes available.`,
    nearby: ["Glasgow", "Clarkston", "Newton Mearns"],
  },
  {
    slug: "pollok",
    name: "Pollok",
    description: `${brand} provides joinery, flooring and fencing in Pollok and surrounding areas.`,
    intro: `${brand} helps customers in Pollok with laminate flooring, skirting boards and general joinery work. Tidy workmanship and free quotes.`,
    nearby: ["Glasgow", "Darnley", "Barrhead"],
  },
  {
    slug: "cathkin",
    name: "Cathkin",
    description: `${brand} provides joinery, flooring and fencing in Cathkin and surrounding areas.`,
    intro: `${brand} supports Cathkin customers with laminate flooring, joinery and fencing. Practical work at fair prices with free quotes.`,
    nearby: ["Glasgow", "Clarkston", "Busby"],
  },
  {
    slug: "darnley",
    name: "Darnley",
    description: `${brand} provides joinery, flooring and fencing in Darnley and surrounding areas.`,
    intro: `${brand} carries out joinery and flooring work in Darnley, including skirting boards, laminate flooring and general carpentry. Free quotes available.`,
    nearby: ["Pollok", "Barrhead", "Glasgow"],
  },
  {
    slug: "barrhead",
    name: "Barrhead",
    description: `${brand} provides joinery, flooring and fencing in Barrhead and nearby areas.`,
    intro: `${brand} helps homeowners in Barrhead with laminate flooring, joinery and fencing. Tidy workmanship and free quotes across the local area.`,
    nearby: ["Darnley", "Newton Mearns", "Paisley"],
  },
  {
    slug: "clarkston",
    name: "Clarkston",
    description: `${brand} provides joinery, flooring and fencing in Clarkston and surrounding areas.`,
    intro: `${brand} works in Clarkston on laminate flooring, skirting boards and general joinery. Professional results and free quotes available.`,
    nearby: ["Giffnock", "Cathkin", "Busby"],
  },
  {
    slug: "newton-mearns",
    name: "Newton Mearns",
    description: `${brand} provides joinery, flooring and fencing in Newton Mearns and nearby areas.`,
    intro: `${brand} provides flooring, joinery and fencing for customers in Newton Mearns. Repeat customers and free quotes across the area.`,
    nearby: ["Giffnock", "Barrhead", "Clarkston"],
  },
  {
    slug: "shawlands",
    name: "Shawlands",
    description: `${brand} provides joinery, flooring and fencing in Shawlands and surrounding areas.`,
    intro: `${brand} carries out laminate flooring, joinery and carpentry in Shawlands for local homeowners. Tidy workmanship and free quotes.`,
    nearby: ["Glasgow", "Giffnock", "Thornliebank"],
  },
  {
    slug: "thornliebank",
    name: "Thornliebank",
    description: `${brand} provides joinery, flooring and fencing in Thornliebank and nearby areas.`,
    intro: `${brand} helps customers in Thornliebank with flooring, skirting boards and general joinery. Practical results and free quotes.`,
    nearby: ["Giffnock", "Shawlands", "Newton Mearns"],
  },
  {
    slug: "busby",
    name: "Busby",
    description: `${brand} provides joinery, flooring and fencing in Busby and surrounding areas.`,
    intro: `${brand} supports customers in Busby with laminate flooring, joinery and fencing. Free quotes available across the local area.`,
    nearby: ["Clarkston", "Cathkin", "Newton Mearns"],
  },
  {
    slug: "paisley",
    name: "Paisley",
    description: `${brand} provides joinery, flooring and fencing in Paisley and nearby areas.`,
    intro: `${brand} works in Paisley on laminate flooring, joinery and fencing for local homeowners. Tidy finishing and free quotes.`,
    nearby: ["Barrhead", "Glasgow", "Darnley"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Joinery & Flooring in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
