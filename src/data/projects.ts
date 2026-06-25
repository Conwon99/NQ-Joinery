import { business, brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

const brand = brandName();
const { assets } = business;

export const projects: ProjectPage[] = [
  {
    slug: "chevron-laminate-giffnock",
    title: "Chevron Laminate Flooring in Giffnock",
    description: `Chevron-pattern laminate flooring fitted in Giffnock by ${brand}. Returning customer, tidy finish throughout.`,
    intro: `A returning customer in Giffnock commissioned ${brand} to fit a room of chevron-pattern laminate — one of the more striking flooring styles available and a job that requires careful layout to get right.`,
    details: `The chevron pattern was set out from the centre of the room to keep the layout balanced on both sides. Each plank was cut precisely to maintain the angle and the final result ran cleanly to the skirting on all four walls. The customer had previously had flooring done by ${brand} and came back for this room — a repeat customer is the best indicator of quality workmanship. Similar chevron and standard laminate installs are available across ${business.region}.`,
    highlights: [
      "Chevron-pattern layout set out from centre for a balanced finish",
      "Precise angled cuts maintained throughout",
      "Returning customer — second job for the same property",
      "Free quote provided in advance",
    ],
    serviceType: "Laminate Flooring",
    location: "Giffnock",
    image: assets.gallery[0],
    imageAlt: `Chevron laminate flooring fitted by ${brand} in Giffnock`,
  },
  {
    slug: "laminate-flooring-pollok",
    title: "Laminate Flooring Installation in Pollok",
    description: `Forty square metres of laminate flooring fitted in Pollok by ${brand}. Clean finish and practical advice throughout.`,
    intro: `${brand} was brought in to lay approximately 40 square metres of laminate flooring for a customer in Pollok — a larger single-room or open-plan job that required careful planning to minimise waste and get the layout right.`,
    details: `The floor was measured up before any material was ordered so the run direction and layout could be agreed with the customer. Old flooring was removed, the subfloor checked and any unevenness addressed before the laminate was laid. The result was a clean, even finish across the full area. Jobs of this size are well within scope for ${brand}, who regularly handles larger room installations alongside smaller single-room work across ${business.region}.`,
    highlights: [
      "Approximately 40 square metres laid in a single visit",
      "Old flooring removed and subfloor prepared before installation",
      "Run direction agreed with customer to suit the room",
      "Clean, even finish throughout",
    ],
    serviceType: "Laminate Flooring",
    location: "Pollok",
    image: assets.gallery[1],
    imageAlt: `Laminate flooring installed by ${brand} in Pollok`,
  },
  {
    slug: "skirting-boards-darnley",
    title: "Skirting Board Installation in Darnley",
    description: `Four rooms of skirting boards fitted in Darnley by ${brand}. Neatly mitred corners and tidy finish throughout.`,
    intro: `${brand} fitted skirting boards across four rooms of a property in Darnley — a common job following new flooring or replastering work where updated skirting finishes the room properly.`,
    details: `Each room was measured and the boards cut to length with mitred corners at internal and external angles. The boards were fixed securely and sat flush to the wall throughout. Four rooms in a single visit is a common scope for ${brand}, and customers often book skirting work alongside or immediately after a flooring installation. The result ties the flooring and wall finish together cleanly. Similar work is available across ${business.region}.`,
    highlights: [
      "Four rooms of skirting boards fitted in a single visit",
      "Corners mitred neatly for a clean internal and external finish",
      "Boards fixed flush and secure throughout",
      "Free quote provided before work began",
    ],
    serviceType: "Skirting Boards",
    location: "Darnley",
    image: assets.gallery[2],
    imageAlt: `Skirting boards fitted by ${brand} in Darnley`,
  },
  {
    slug: "laminate-flooring-cathkin",
    title: "Laminate Flooring in Cathkin",
    description: `Laminate flooring installed in Cathkin by ${brand}. Tidy finish and completed on time.`,
    intro: `${brand} completed a laminate flooring installation in Cathkin, fitting planks to a neat finish and clearing the area on completion.`,
    details: `The job in Cathkin involved removing existing flooring, preparing the subfloor and laying new laminate to the customer's chosen specification. The work was completed in a single visit and the area left clean and ready to use. ${brand} takes on flooring jobs across the south side of Glasgow and surrounding areas, from single rooms to multi-room properties. Customers in Cathkin and nearby towns can request a free quote with no obligation.`,
    highlights: [
      "Old flooring removed before new laminate was laid",
      "Subfloor prepared and checked before installation",
      "Completed in a single visit with area left tidy",
      "Free quote provided in advance",
    ],
    serviceType: "Laminate Flooring",
    location: "Cathkin",
    image: assets.gallery[3],
    imageAlt: `Laminate flooring installed by ${brand} in Cathkin`,
  },
  {
    slug: "fence-replacement-giffnock",
    title: "Fence Replacement in Giffnock",
    description: `Garden fence replaced in Giffnock by ${brand}. Old fencing removed and new panels fitted level and secure.`,
    intro: `${brand} replaced a garden fence in Giffnock, removing the old panels and posts and fitting a new run that is level, secure and leaves the garden looking tidy.`,
    details: `The existing fence in Giffnock had reached the end of its life — posts were unstable and panels beyond repair. ${brand} removed the old fencing in full, checked the ground conditions for the new posts, and fitted a replacement fence to a clean, level finish. Old materials were cleared away and the garden left secure. Fencing jobs across ${business.region} are available with free quotes — get in touch with the fence run length and location for a fast response.`,
    highlights: [
      "Old fence panels and posts removed and disposed of",
      "Ground conditions checked before new posts were set",
      "New panels fitted level and secure throughout the run",
      "Garden left tidy with all old materials cleared away",
    ],
    serviceType: "Fencing",
    location: "Giffnock",
    image: assets.gallery[4],
    imageAlt: `Fence replaced by ${brand} in Giffnock`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
