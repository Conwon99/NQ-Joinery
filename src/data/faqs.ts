import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

const brand = brandName();
const cities = citiesLabel();

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: `Yes. Contact ${brand} by phone or message with details of your job and we will provide a free, no-obligation quote. Photos of the area are always helpful.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} serves ${cities} and surrounding areas across ${business.region}, including Pollok, Darnley, Clarkston, Newton Mearns, Barrhead, Shawlands and more. Get in touch to confirm coverage for your postcode.`,
  },
  {
    question: "What joinery and flooring services do you offer?",
    answer: `${brand} installs laminate flooring (standard and chevron styles), fits skirting boards, carries out general joinery and carpentry (shelving, panelling, doorway alterations), and installs or replaces fencing.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${brand} or send a message through the contact form with a brief description of the work and your location. Photos are helpful for getting a quick and accurate quote.`,
  },
  {
    question: "Can you work across multiple rooms in one visit?",
    answer: `Yes. ${brand} handles multi-room flooring and joinery jobs. Provide the full scope when enquiring so an accurate quote can be put together.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
