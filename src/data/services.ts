import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mial13ktyN5Jkh/assets";
const brand = brandName();
const cities = citiesLabel();
const { assets } = business;

export const services: ServicePage[] = [
  {
    slug: "laminate-flooring-installation",
    title: "Laminate Flooring Installation",
    shortTitle: "Laminate Flooring",
    navTitle: "Laminate Flooring",
    parentCategorySlug: "flooring-glasgow-giffnock",
    description: `Professional laminate flooring installation in ${cities} and ${business.region}. Tidy finish, free quotes, and repeat-customer results from ${brand}.`,
    cardDescription: `New laminate flooring fitted neatly across ${cities} and surrounding areas. Standard and chevron styles available.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Laminate flooring installation icon",
    image: assets.gallery[0],
    imageAlt: `Laminate flooring installed by ${brand} in ${business.primaryCity}`,
    about: `${brand} installs laminate flooring for homes across ${business.region}. From standard planks to chevron-style layouts, every job is measured up carefully and laid to a tidy, even finish. Old flooring can be removed and disposed of so the space is ready to use from day one.`,
    why: `Laminate flooring is one of the most popular upgrades for Glasgow homes — durable, low-maintenance and available in a wide range of styles. Having it fitted by a professional means straight runs, tight joins and a result that looks right and lasts.`,
    signsYouNeed: `If your current floor is lifting, scratched, worn through in traffic areas or simply overdue a refresh, laminate is often the most cost-effective solution. Uneven or loose boards can become a trip hazard and get worse over time. If you are renovating a room or moving into a new property, getting the floor done at the start makes every other finish easier to manage.`,
    options: `${brand} fits standard laminate planks in a range of finishes and can also lay chevron-style patterns for a more striking look. Jobs range from a single room to a full property. Old flooring can be lifted and removed as part of the job. If you are unsure of the style or budget, a free quote helps you compare options before committing. See the ${cities} flooring pages for details on available styles.`,
    localContext: `Homes across ${cities} and ${business.region} vary in layout, subfloor condition and access — all of which affect how a floor is best fitted. If you are searching for a laminate flooring installer near ${business.primaryCity} or ${business.secondaryCity}, ${brand} works across the full local service area and can assess the room before quoting.`,
    whatToExpect: `When you get in touch, ${brand} will discuss the room size, style preference and subfloor condition. A visit can be arranged to measure up and provide a clear quote. Old flooring is removed where needed, the subfloor checked and prepared, and the new laminate laid neatly. The area is left clean and ready to use.`,
    whyChooseUs: `${brand} is trusted by repeat customers across ${cities} for tidy finishing, clear communication and fair pricing. From a single bedroom to multi-room installs, every job gets the same attention to detail. Free quotes are available with no pressure to proceed.`,
    benefits: [
      "Standard and chevron laminate laid to a tidy, even finish.",
      "Old flooring lifted and disposed of as part of the job.",
      "Multi-room installations and repeat-customer pricing available.",
      `Free quotes across ${cities} and nearby areas.`,
    ],
    process: [
      "Discuss the room size, style and current floor condition.",
      "Measure up and provide a clear, itemised quote.",
      "Lift old flooring, check the subfloor and prepare the surface.",
      "Lay the new laminate neatly and leave the space clean and ready.",
    ],
    faq: [
      {
        question: "Can you fit chevron-pattern laminate?",
        answer: `Yes. ${brand} installs chevron-style laminate as well as standard plank layouts. Get in touch with your preference and room size for a free quote.`,
      },
      {
        question: "Do you remove and dispose of old flooring?",
        answer: `Yes. Old laminate, carpet underlay and similar materials can be lifted and removed as part of the job.`,
      },
      {
        question: "How many rooms can you do in one visit?",
        answer: `${brand} handles single-room jobs and multi-room installs. Larger jobs are quoted accordingly — contact us with the full scope for an accurate price.`,
      },
      {
        question: `Do you offer laminate flooring near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} installs laminate flooring across ${cities} and ${business.region}. Contact us with your location and room details for a free quote.`,
      },
    ],
  },
  {
    slug: "skirting-board-installation",
    title: "Skirting Board Installation",
    shortTitle: "Skirting Boards",
    navTitle: "Skirting Boards",
    parentCategorySlug: "joinery-carpentry-glasgow-giffnock",
    description: `Skirting board installation in ${cities} and ${business.region}. Single rooms or full properties fitted neatly. Free quotes from ${brand}.`,
    cardDescription: `Skirting boards fitted neatly across single rooms or full properties in ${cities} and surrounding areas.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Skirting board installation icon",
    image: assets.gallery[2],
    imageAlt: `Skirting boards fitted by ${brand} in ${business.primaryCity}`,
    about: `${brand} fits skirting boards for homes across ${business.region}. Whether it is a single room or multiple rooms across a property, boards are cut, mitred and fixed neatly for a clean finish against the wall. Old skirting can be removed where needed.`,
    why: `New skirting boards make a real difference to how a room looks and feels — particularly after new flooring has been laid or walls have been replastered. A neat, well-mitred run of skirting gives the finish that pulls a room together.`,
    signsYouNeed: `Damaged, splitting or mismatched skirting is one of the most common issues in older Glasgow properties. If your boards are pulling away from the wall, have gaps at joins, or simply look tired after years of repainting, replacement is usually the most practical option. New skirting fitted to match throughout a property gives a consistent, updated finish with minimal disruption.`,
    options: `${brand} fits skirting boards in a range of profiles and can work from supplied materials or advise on suitable options. Jobs are quoted per room or per property depending on scope. Old skirting can be taken out and disposed of as part of the job. For customers having laminate flooring installed at the same time, combining the two jobs often makes practical and cost sense.`,
    localContext: `Properties across ${cities} and ${business.region} vary in age and wall finish, which affects how skirting is best fixed and finished. If you are searching for a skirting board fitter near ${business.primaryCity} or ${business.secondaryCity}, ${brand} works across the full local area and can discuss the best approach for your home.`,
    whatToExpect: `${brand} will confirm the room count, profile style and materials before work starts. Old skirting is removed where included, walls prepared at the base, and new boards cut, mitred and fixed neatly. Joins are kept tight and the finish is left ready for painting if required.`,
    whyChooseUs: `Customers across ${cities} recommend ${brand} for tidy joinery work, fair pricing and jobs completed without fuss. Skirting is a finishing trade — the quality shows — and ${brand} takes care to get corners mitred properly and boards sitting flush.`,
    benefits: [
      "Skirting fitted neatly across single rooms or full properties.",
      "Old boards removed and disposed of where required.",
      "Profiles cut and mitred to a tidy, professional finish.",
      `Free quotes across ${cities} and nearby areas.`,
    ],
    process: [
      "Confirm room count, skirting profile and any material preferences.",
      "Remove old skirting where included and prepare the base of the walls.",
      "Cut, mitre and fix new boards neatly throughout.",
      "Leave the area tidy and ready for painting or finishing.",
    ],
    faq: [
      {
        question: "Can you fit skirting across multiple rooms?",
        answer: `Yes. ${brand} regularly fits skirting boards across multiple rooms in a single visit. Provide the room count and rough measurements for an accurate quote.`,
      },
      {
        question: "Do you remove old skirting boards?",
        answer: `Yes. Old boards can be taken out and disposed of as part of the job where needed.`,
      },
      {
        question: `Do you offer skirting board fitting near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} installs skirting boards across ${cities} and ${business.region}. Get in touch with your location and room details for a free quote.`,
      },
    ],
  },
  {
    slug: "joinery-carpentry",
    title: "Joinery & Carpentry",
    shortTitle: "Joinery & Carpentry",
    navTitle: "Joinery & Carpentry",
    parentCategorySlug: "joinery-carpentry-glasgow-giffnock",
    description: `General joinery and carpentry in ${cities} and ${business.region}. Shelving, panelling, doorway alterations and more. Free quotes from ${brand}.`,
    cardDescription: `Shelving, panelling, doorway alterations and general joinery across ${cities}. Message with any joinery work.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Joinery and carpentry icon",
    image: assets.gallery[3],
    imageAlt: `Joinery and carpentry work by ${brand} in ${business.primaryCity}`,
    about: `${brand} carries out a range of joinery and carpentry jobs for homes across ${business.region}. Work includes shelving installations, wall panelling, blocking up doorways and general joinery. Each job is completed neatly, with practical advice on the best approach before work starts.`,
    why: `Skilled joinery work changes how a space looks and functions. Whether it is shelving that uses an alcove properly, panelling that adds character to a hallway, or a doorway being blocked up before plastering — quality carpentry makes a lasting difference.`,
    signsYouNeed: `If you have a joinery job around the home that needs a skilled hand, ${brand} can help. Common work includes fitting shelves that are level and properly fixed, adding panelling to walls or staircases, blocking up a disused doorway ready for a plasterer, and general carpentry repairs or improvements. If you are unsure whether a job is within scope, a quick message with photos is the quickest way to find out.`,
    options: `${brand} handles a range of joinery work for homes across ${cities}. Shelving can be fitted into alcoves or on open walls. Panelling is cut and fixed to suit the style of the room. Doorway blocking is done correctly so the wall is ready to be skimmed and decorated. For repeat customers or larger scopes, work can be phased across visits. Send a message with details and photos to get a quick response.`,
    localContext: `Homes across ${cities} and ${business.region} have a mix of older and newer properties, each with their own joinery requirements. If you are searching for a joiner near ${business.primaryCity} or ${business.secondaryCity}, ${brand} works across the full local area and can advise on the most practical approach for your home.`,
    whatToExpect: `Send ${brand} a message with the job and your location. Photos are useful for giving a quick and accurate quote. Work is agreed in advance and carried out neatly, with the area left tidy on completion. Any specific requirements around materials or finish are discussed before work starts.`,
    whyChooseUs: `${brand} takes on joinery work of all sizes — from a shelf to a full room of panelling — with the same attention to detail. Customers across ${cities} value the practical advice, tidy workmanship and willingness to take on jobs other tradespeople pass on. Free quotes available, no job too small.`,
    benefits: [
      "Shelving, panelling and doorway work carried out neatly.",
      "Practical advice before any work starts.",
      "Jobs of all sizes taken on across the local area.",
      `Free quotes across ${cities} and nearby areas.`,
    ],
    process: [
      "Send a message with the job details and location — photos are helpful.",
      "Discuss the scope, materials and approach before work starts.",
      "Carry out the agreed joinery work neatly and to a high standard.",
      "Leave the area tidy and advise on any follow-on work where helpful.",
    ],
    faq: [
      {
        question: "Can you block up a doorway?",
        answer: `Yes. ${brand} blocks up doorways correctly so the wall is ready to be skimmed and decorated by a plasterer. Get in touch with photos for a quick quote.`,
      },
      {
        question: "Do you fit shelving and panelling?",
        answer: `Yes. Shelving installations and wall panelling are common jobs. Send a message with photos and the room details for a free quote.`,
      },
      {
        question: "What joinery work can you take on?",
        answer: `${brand} handles a range of general carpentry and joinery — shelving, panelling, doorway alterations and more. If you are not sure, send a message and we will let you know.`,
      },
      {
        question: `Do you offer joinery and carpentry near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides joinery and carpentry across ${cities} and ${business.region}. Contact us with your location and job details for a free quote.`,
      },
    ],
  },
  {
    slug: "fencing-installation",
    title: "Fencing Installation",
    shortTitle: "Fencing",
    navTitle: "Fencing",
    parentCategorySlug: "fencing-glasgow-giffnock",
    description: `Fencing installation and replacement in ${cities} and ${business.region}. Old fencing removed and area left tidy. Free quotes from ${brand}.`,
    cardDescription: `Fencing installed or replaced neatly across ${cities}. Old fencing removed as part of the job.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Fencing installation icon",
    image: assets.gallery[4],
    imageAlt: `Fence installed by ${brand} in ${business.primaryCity}`,
    about: `${brand} installs and replaces fencing for homes across ${business.region}. Full fence replacements and individual section work are both available. Old fencing can be removed and disposed of so the garden is left tidy and secure.`,
    why: `A sound, well-fitted fence improves security, privacy and how the garden looks. Whether a fence has come down in the wind or is simply worn out after years of weathering, having it replaced properly means the new run is level, secure and finished neatly.`,
    signsYouNeed: `If your fence is leaning, rotting at the posts, missing sections or has come down entirely, replacement is usually the most practical fix. Damaged fencing can be an ongoing problem — sections that look secure can still shift or fall in poor weather. Getting a full assessment and replacement means the boundary is sorted properly rather than patched together.`,
    options: `${brand} handles full fence replacements and section-by-section work depending on the condition of what is in place. Old posts and panels can be removed and taken away. For gardens needing a full boundary, jobs are quoted based on the run length and access. Contact ${brand} with details of the fence run and location for a free quote. See the ${cities} fencing pages for local coverage.`,
    localContext: `Properties across ${cities} and ${business.region} are exposed to year-round weather that takes a toll on timber fencing. If you are searching for a fencing contractor near ${business.primaryCity} or ${business.secondaryCity}, ${brand} works across the full local area and can assess the current fence before quoting.`,
    whatToExpect: `${brand} will discuss the fence run, post condition and access before quoting. Old fencing is removed where included and the posts checked or replaced. New panels are fitted level and securely. The area is left tidy with old materials removed.`,
    whyChooseUs: `Customers across ${cities} trust ${brand} for fencing that goes up securely and stays up. Jobs are done neatly, old materials cleared away and the garden left better than found. Free quotes with no obligation to proceed.`,
    benefits: [
      "Full fence replacements and individual section work available.",
      "Old fencing and posts removed and disposed of where agreed.",
      "Posts checked and panels fitted level and securely.",
      `Free quotes across ${cities} and nearby areas.`,
    ],
    process: [
      "Discuss the fence run, post condition and any access requirements.",
      "Provide a clear quote based on the length and scope of work.",
      "Remove old fencing and check or replace posts as required.",
      "Fit new panels level and securely and clear away old materials.",
    ],
    faq: [
      {
        question: "Can you replace a full garden fence?",
        answer: `Yes. ${brand} replaces full fence runs and individual sections. Get in touch with the rough length and your location for a free quote.`,
      },
      {
        question: "Do you remove and take away old fencing?",
        answer: `Yes. Old panels and posts can be removed and disposed of as part of the replacement job.`,
      },
      {
        question: "Can you replace fencing that came down in a storm?",
        answer: `Yes. ${brand} assesses storm-damaged fencing and replaces what is needed — posts, panels or the full run.`,
      },
      {
        question: `Do you offer fencing installation near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} installs fencing across ${cities} and ${business.region}. Contact us with your location and fence details for a free quote.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${brand} for joinery, flooring and fencing across ${cities} and ${business.region}.`,
    cardDescription: `Message or call ${brand} to discuss your project and get a free, no-obligation quote.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Free quote icon",
    image: assets.gallery[5],
    imageAlt: `Joinery work completed by ${brand} in ${business.primaryCity}`,
    about: `If you are not sure where to start, send ${brand} a message or call with a few details about the work. Photos of the area are helpful. The team can discuss your options, confirm coverage and arrange a visit where needed before quoting.`,
    why: `A quick conversation helps clarify the scope, confirm the service area and work out the most practical approach before any commitment is made.`,
    signsYouNeed: `If you know work is needed but are unsure of cost, timing or how to approach it, a free quote is the best first step. Whether it is flooring, skirting boards, joinery or fencing — a clear quote with no obligation lets you plan properly before work starts.`,
    options: `${brand} quotes for all listed services. You can call, message through the contact form or reach out via Facebook with details of the work and your location. Photos help respond quickly with practical advice. No-obligation quotes are available across ${cities} and ${business.region}.`,
    localContext: `${brand} covers ${cities} and towns across ${business.region}. If you are nearby, get in touch to confirm coverage for your area.`,
    whatToExpect: `Send a message or call with the service you need and your location. Share photos if they help explain the job. ${brand} will discuss the work, confirm availability and arrange a visit or quote as needed. Clear, honest pricing before any work begins.`,
    whyChooseUs: `Free quotes, fair pricing and local service across ${cities}. Customers value the honest, practical advice before committing to work.`,
    benefits: [
      "Free quotes for all listed services — no obligation.",
      "Clear pricing agreed before any work starts.",
      `Local service across ${cities} and ${business.region}.`,
      "Practical advice on the most cost-effective approach.",
    ],
    process: [
      "Send a message or call with the service needed and your location.",
      "Share photos or measurements to help describe the job.",
      "Arrange a visit or quote where useful — no charge.",
      "Agree the work, timing and cost before anything starts.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: `A short description of the work, your location and photos of the area. Room sizes are helpful for flooring and skirting jobs. Fence run length for fencing work.`,
      },
      {
        question: "Which areas do you quote for?",
        answer: `${brand} covers ${cities} and surrounding areas in ${business.region}. Get in touch to confirm coverage for your postcode.`,
      },
      {
        question: "Is there any obligation after getting a quote?",
        answer: `No. Quotes are free and there is no obligation to proceed. ${brand} provides honest pricing so you can make the right decision for your project.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
