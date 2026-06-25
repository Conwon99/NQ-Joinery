import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  /** Matrix page SEO fields — used by locationServices.ts */
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "flooring-glasgow-giffnock",
    name: "Flooring",
    title: `Laminate Flooring in ${cities}`,
    description: `Professional laminate flooring installation across ${cities} and surrounding areas. Tidy workmanship and free quotes from ${brand}.`,
    intro: `${brand} installs laminate flooring for homes across ${region}. Whether it is a single room or a whole property, work is completed neatly with free quotes and no mess left behind.`,
    localParagraph: `Properties across ${cities} and nearby areas benefit from professional flooring that suits the home and lasts. ${brand} works locally and can advise on the best option for your property.`,
    image: assets.gallery[0],
    imageAlt: `Laminate flooring installed by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["laminate-flooring-installation"],
    matrixTitleSuffix: "Flooring",
    serviceNameLower: "laminate flooring",
    contractorPhrase: "flooring installer",
    nearMePhrase: "laminate flooring near me",
    metaTemplate: (displayName) =>
      `Professional laminate flooring installation in ${displayName} by ${brand}. Tidy finish and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides laminate flooring installation in ${town}. Whether you need a single room done or a full property, jobs are completed neatly with free quotes.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} often need flooring that suits local homes and lasts the distance. If you are searching for a flooring installer near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From standard laminate to chevron styles, ${brand} helps customers in ${town} choose and fit flooring that suits the room. Old flooring can be removed where needed. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you install laminate flooring in ${town}?`,
        answer: `Yes. ${brand} provides laminate flooring installation in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you remove old flooring in ${town}?`,
        answer: `Yes. ${brand} can lift and dispose of old flooring as part of the installation in ${town}. Contact us with details for a clear quote.`,
      },
      {
        question: `How do I get a flooring quote in ${town}?`,
        answer: `Call ${brand} or use the contact form with the room size and your location in ${town}. Photos of the current floor are helpful. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "joinery-carpentry-glasgow-giffnock",
    name: "Joinery & Carpentry",
    title: `Joinery & Carpentry in ${cities}`,
    description: `Joinery and carpentry services across ${cities} and surrounding areas. Skirting boards, shelving, panelling and more. Free quotes from ${brand}.`,
    intro: `${brand} provides joinery and carpentry services for homes across ${region}. From skirting boards to shelving and doorway alterations, jobs are carried out neatly with practical advice and free quotes.`,
    localParagraph: `Homes across ${cities} and the surrounding area regularly need skilled joinery work. ${brand} works locally and can handle jobs of all sizes with a clean, tidy finish.`,
    image: assets.gallery[2],
    imageAlt: `Joinery and carpentry work by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["skirting-board-installation", "joinery-carpentry"],
    matrixTitleSuffix: "Joinery & Carpentry",
    serviceNameLower: "joinery and carpentry",
    contractorPhrase: "joiner",
    nearMePhrase: "joiner near me",
    metaTemplate: (displayName) =>
      `Joinery and carpentry in ${displayName} by ${brand}. Skirting boards, shelving, and general joinery with free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides joinery and carpentry services in ${town}, including skirting boards, shelving, panelling and general joinery work. Jobs are carried out neatly with free quotes.`,
    localTemplate: (town, nearby) =>
      `Homes in ${town} regularly need skilled joinery work to a high standard. If you are searching for a joiner near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From fitting skirting boards across multiple rooms to installing shelving and carrying out general joinery, ${brand} helps customers in ${town} with practical solutions. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer joinery services in ${town}?`,
        answer: `Yes. ${brand} provides joinery and carpentry work in ${town} and nearby areas. Get in touch for a free quote.`,
      },
      {
        question: `Can you fit skirting boards in ${town}?`,
        answer: `Yes. Skirting board installation is one of the most common jobs ${brand} carries out in ${town}. Contact us with room details for a quick quote.`,
      },
      {
        question: `How do I book a joiner in ${town}?`,
        answer: `Contact ${brand} with details of the work and your location in ${town}. Photos are helpful. Free quotes are available with no obligation.`,
      },
    ],
  },
  {
    slug: "fencing-glasgow-giffnock",
    name: "Fencing",
    title: `Fencing in ${cities}`,
    description: `Fencing installation and replacement across ${cities} and surrounding areas. Tidy workmanship and free quotes from ${brand}.`,
    intro: `${brand} installs and replaces fencing for homes across ${region}. Old fencing can be removed and the area left tidy. Free quotes available.`,
    localParagraph: `Properties across ${cities} and the surrounding area regularly need fence replacement or new installations. ${brand} works locally with practical advice and a tidy finish.`,
    image: assets.gallery[4],
    imageAlt: `Fence installation by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["fencing-installation"],
    matrixTitleSuffix: "Fencing",
    serviceNameLower: "fencing",
    contractorPhrase: "fencing contractor",
    nearMePhrase: "fencing near me",
    metaTemplate: (displayName) =>
      `Fencing installation and replacement in ${displayName} by ${brand}. Tidy workmanship and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides fencing installation and replacement in ${town}. Whether you need a full new fence or sections replaced, jobs are completed neatly with free quotes.`,
    localTemplate: (town, nearby) =>
      `Properties in ${town} often need fencing that suits the garden and stands up to local conditions. If you are searching for a fencing contractor near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From full fence replacements to individual section repairs, ${brand} helps customers in ${town} with practical fencing solutions. Old fencing can be removed and disposed of. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you install fencing in ${town}?`,
        answer: `Yes. ${brand} provides fencing installation and replacement in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you remove old fencing in ${town}?`,
        answer: `Yes. Old fencing can be taken away and disposed of as part of the replacement job in ${town}.`,
      },
      {
        question: `How do I get a fencing quote in ${town}?`,
        answer: `Call ${brand} or use the contact form with details of the fence run and your location in ${town}. Photos are helpful. Free quotes with no obligation.`,
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
