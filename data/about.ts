import { staticQuote, missionPanel, visionPanel } from "@/data/missionVision";
import { whatWeDoServices } from "@/data/whatWeDo";

export const aboutIntroParagraphLines = [
  "The Kalkiism Research Center (KRC) is an economic and social research institution founded by 15 top economists from",
  "all government colleges in Kathmandu, including the Central Department of Economics, TU. Our mission is to drive a new economic revolution that ",
  "guarantees free healthcare, education, and legal services for all Nepalis.",
];

export const aboutIntroCtaLabel = "Get in touch";

export const aboutQuote = staticQuote;

export const aboutMissionContent = {
  title: missionPanel.title,
  intro: missionPanel.intro,
  bullets: missionPanel.bullets,
};

export const aboutVisionContent = {
  title: visionPanel.title,
  intro: visionPanel.intro,
};

export type AboutVisionCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const aboutVisionCards: AboutVisionCard[] = whatWeDoServices.map((service, index) => ({
  id: service.id,
  title: service.title,
  description: visionPanel.bullets[index] ?? service.description,
  icon: service.icon,
}));

export type AboutCollageImage = {
  src: string;
  alt: string;
  className: string;
};

export type AboutMeetUsProfile = {
  id: string;
  name: string;
  title: string;
  bio: string[];
  image: string;
  imageAlt: string;
  theme: "light" | "dark";
  portraitVariant?: "feathered" | "rectangular" | "glow" | "cutout";
  imageGrayscale?: boolean;
  displayVariant?: "founder-cutout";
};

export const aboutMeetUsIntro = [
  "Everyday, people throughout America struggle with choosing between paying for food and a place g their needed medications. Everyday, people throughout America going to the doctor and getting their to live or going to the doctor and gettin needed medications.",
];

export const aboutMeetUsProfiles: AboutMeetUsProfile[] = [
  {
    id: "uma-prasad-chairman",
    name: "Dr. Uma Shankar Prasad",
    title: "(Chairman of Kalkiism Clinic Center)",
    bio: [
      "Dr. Uma Shankar Prasad has 37 years of experience working with the Government of Nepal, Tribhuvan University, the UN system, bilateral and multilateral organizations, INGOs, and NGOs. He is a former member of the National Planning Commission (NPC) and former Chairman of the Health Insurance Board of the Government of Nepal. He has also served as a member of the HighLevel Cross-Sector Advisory Committee of Madhesh Province.",
      "Dr. Prasad holds a PhD in Economics from Jawaharlal Nehru University and has served as a Guest Researcher at the Institute of Federalism, University of Fribourg, Switzerland. Currently, he is a faculty member at the Central Department of Economics, Tribhuvan University",
    ],
    image: "/images/team-uma-prasad.png",
    imageAlt: "Dr. Uma Shankar Prasad, Chairman",
    theme: "light",
    portraitVariant: "glow",
  },
  {
    id: "kalki-jay-founder",
    name: "Kalki Jay Sah",
    title: "(Founder)",
    bio: [
      "Jay Sah is the author of 'The Kalkiist Manifesto,' a book that proposes a financial and economic revolution called 'Kalkiism' as a solution to end Kaliyuga, the current age of conflict and suffering, through political change rather than divine intervention",
    ],
    image: "/images/jay.sah.3.23.2024-removebg-preview 1.png",
    imageAlt: "Kalki Jay Sah, Founder",
    theme: "dark",
    portraitVariant: "cutout",
    displayVariant: "founder-cutout",
  },
  {
    id: "team-member-3",
    name: "Dr. Uma Shankar Prasad",
    title: "(Chairman of Kalkiism Clinic Center)",
    bio: [
      "Currently, Dr Prasad is a Faculty Member at the Tribhuvan University, and a Chairman of the Research Center For Applied Economics, Kathmandu, Nepal. He is a former Guest Researcher at the Institute for Federalism, University of Fribourg, Switzerland.",
    ],
    image: "/images/team-member-3.png",
    imageAlt: "Team member at Kalkisena Clinic Center",
    theme: "light",
    portraitVariant: "glow",
    imageGrayscale: true,
  },
  {
    id: "kalki-jay-founder-portrait",
    name: "Kalki Jay Sah",
    title: "(Founder)",
    bio: [
      "Jay Sah is the author of 'The Kalkiist Manifesto,' a book that proposes a financial and economic revolution called 'Kalkiism' as a solution to end Kaliyuga, the current age of conflict and suffering, through political change rather than divine intervention",
    ],
    image: "/images/team-kalki-jay.png",
    imageAlt: "Kalki Jay Sah, Founder",
    theme: "dark",
    portraitVariant: "rectangular",
    imageGrayscale: true,
    displayVariant: "founder-cutout",
  },
];

export const aboutLegalFrameworkDescription =
  "KRC operates as an independent research institution, advocating for economic policies that will create a corruption-free system and prevent capital flight from Nepal.";

export type AboutSuccessStory = {
  id: string;
  text: string;
};

export const aboutSuccessStories: AboutSuccessStory[] = [
  {
    id: "dda-antibiotics-ban",
    text: "Our advocacy led to Nepal's Department of Drug Administration (DDA) banning reserved antibiotics to combat antibiotic resistance.",
  },
  {
    id: "doctors-pledge",
    text: "Over 50 doctors have pledged free healthcare to supporters of the movement.",
  },
  {
    id: "healthcare-reforms",
    text: "Healthcare reforms aim to save 20,000 lives annually.",
  },
];

export type AboutKeyDataStatPart = {
  text: string;
  highlight?: boolean;
};

export type AboutKeyDataStat = {
  id: string;
  lines: AboutKeyDataStatPart[][];
};

export const aboutKeyDataContent = {
  title: "Key Data on Public Health &",
  titleAccent: "Economic Crisis",
  graph: {
    src: "/images/keydata.png",
    alt: "Projected deaths in Nepal from 2040 to 2055",
  },
  stats: [
    {
      id: "antibiotic-resistance",
      lines: [
        [{ text: "Antibiotic resistance deaths" }],
        [{ text: "in Nepal (2025):" }],
        [{ text: "6,400 per year", highlight: true }],
      ],
    },
    {
      id: "projected-deaths",
      lines: [
        [{ text: "Projected " }, { text: "Deaths", highlight: true }],
        [{ text: "if no action is taken." }],
      ],
    },
  ] satisfies AboutKeyDataStat[],
};

export type AboutFatalCrisisItem = {
  id: string;
  label: string;
  icon: string;
};

export const aboutFatalCrisisContent = {
  title: "Annual Fatal Crisis In Nepal",
  items: [
    {
      id: "suicide-murder",
      label: "Suicide / Murder Deaths",
      icon: "/images/icons/hang.png",
    },
    {
      id: "female-feticide",
      label: "Female Feticide",
      icon: "/images/icons/femailf.png",
    },
    {
      id: "air-pollution",
      label: "Air Pollution Deaths",
      icon: "/images/icons/airpol.png",
    },
    {
      id: "lack-of-treatment",
      label: "Lack of Treatment",
      icon: "/images/icons/savewater.png",
    },
    {
      id: "global-warming",
      label: "Global Warming Effects",
      icon: "/images/icons/globlawarmaing.png",
    },
  ] satisfies AboutFatalCrisisItem[],
};

export const aboutMissionCollageImages: AboutCollageImage[] = [
  {
    src: "/images/about/surgical-scrubs.png",
    alt: "Medical professional in surgical scrubs",
    className:
      "relative z-10 aspect-[195/350] w-[110px] shrink-0 -mr-1 translate-x-2 overflow-hidden rounded-[15px] sm:w-[130px] sm:-mr-2 sm:translate-x-3 lg:w-[175px] lg:-mr-2 lg:translate-x-4",
  },
  {
    src: "/images/about/operating-room.png",
    alt: "Surgical team in operating room",
    className:
      "relative z-30 aspect-[299/529] w-[165px] shrink-0 overflow-hidden rounded-[15px] sm:w-[195px] lg:w-[268px]",
  },
  {
    src: "/images/about/doctor-stethoscope.png",
    alt: "Doctor with stethoscope",
    className:
      "relative z-10 aspect-[195/350] w-[110px] shrink-0 -ml-1 -translate-x-2 overflow-hidden rounded-[15px] sm:w-[130px] sm:-ml-2 sm:-translate-x-3 lg:w-[175px] lg:-ml-2 lg:-translate-x-4",
  },
];

