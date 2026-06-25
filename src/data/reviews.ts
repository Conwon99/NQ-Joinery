/** Total reviews — MUST match visible review count on site (schema + reviews page). */
export const TOTAL_REVIEW_COUNT = 3;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [
  {
    name: "Hassy Bee",
    meta: "Facebook review",
    time: "recommended",
    initial: "H",
    initialBg: "bg-lime-600",
    text: "I reached out to Nathan when he was just beginning his journey as an apprentice, and I was extremely impressed with the quality and professionalism of his work. Nathan went above and beyond to ensure everything was completed to a high standard. I would highly recommend Nathan to anyone looking for reliable, high-quality work.",
  },
  {
    name: "Brian Quinn",
    meta: "Facebook review",
    time: "recommended",
    initial: "B",
    initialBg: "bg-green-600",
    text: "Great customer service and a quality finish very tidy and punctual, Would highly recommend 👍🏻",
  },
  {
    name: "Vinnie Milloy",
    meta: "Facebook review",
    time: "recommended",
    initial: "V",
    initialBg: "bg-emerald-500",
    text: "Got my laminate flooring done in October, not one bad thing to say the job was done quick and efficient 👏👏",
  },
];
