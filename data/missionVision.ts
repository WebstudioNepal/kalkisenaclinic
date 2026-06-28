export type TabId = "who-we-are" | "our-mission" | "our-vision";

export type TextPanelContent = {
  title: string;
  intro: string[];
  bullets: string[];
  quote: string;
  theme: "light" | "dark";
};

export type TeamMember = {
  id: string;
  name: string;
  displayName?: string;
  role?: string;
  image: string;
  bio: string;
};

export const tabs: { id: TabId; label: string }[] = [
  { id: "who-we-are", label: "Who we are" },
  { id: "our-mission", label: "Our Mission" },
  { id: "our-vision", label: "Our Vision" },
];

export const staticQuote = "Building a Healthy Nepal, One Person at a Time.";

export const MISSION_VISION_PANEL_MIN_HEIGHT = "min-h-[10px]";

export const whoWeAreParagraphs = [
  "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications. Everyday, people throughout America going to the doctor and getting their needed medications.",
  "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications.",
];

export const teamMembers: TeamMember[] = [
  {
    id: "shishir-thapa",
    name: "Shishir Thapa",
    role: "Team Member",
    image: "/images/team-kalki-jay.png",
    bio: whoWeAreParagraphs[0],
  },
  {
    id: "uma-prasad",
    name: "Dr. Uma Shankar Prasad",
    role: "Chairman",
    image: "/images/team-uma-prasad.png",
    bio: whoWeAreParagraphs[0],
  },
  {
    id: "kalki-jay",
    name: "Kalki Jay Shah",
    displayName: "Kalki Jay Shah (Mr. 666)",
    role: "Founder",
    image: "/images/team-member-3.png",
    bio: whoWeAreParagraphs[0],
  },
];

export const missionPanel: TextPanelContent = {
  title: "Our Mission",
  intro: [
    "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications. Everyday, people throughout America going to the doctor and getting their needed medications.",
  ],
  bullets: [
    "Everyday, people throughout America struggle with choosing between paying for food.",
    "Everyday, people throughout America struggle with choosing.",
    "Everyday, people throughout America.",
    "Everyday, people throughout America struggle with choosing.",
  ],
  quote: staticQuote,
  theme: "light",
};

export const visionPanel: TextPanelContent = {
  title: "Our Vision",
  intro: [
    "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications. Everyday, people throughout America going to the doctor and getting their needed medications.",
  ],
  bullets: [
    "We pursue sustainable funding to ensure every person can receive care without choosing between health and basic needs.",
    "We provide clinic support that strengthens local centers and expands access to free checkups and treatment.",
    "We advance health equity so underserved communities receive the same quality of care as everyone else.",
    "We invest in education and training to build skilled healthcare workers across Nepal.",
    "We deliver disaster relief that brings medical aid quickly when communities need it most.",
    "We support charitable pharmacies that help patients afford the medications they depend on.",
    "We uphold quality standards that keep every clinic safe, effective, and accountable.",
    "We champion healthcare advocacy that protects patient rights and expands access to essential services.",
  ],
  quote: staticQuote,
  theme: "light",
};
