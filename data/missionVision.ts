export type TabId = "who-we-are" | "our-mission" | "our-vision";

export type TeamMember = {
  id: string;
  name: string;
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

export const aboutUsBio =
  "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications. Everyday, people throughout America going to the doctor and getting their needed medications.";

export const teamMembers: TeamMember[] = [
  {
    id: "shishir-thapa",
    name: "Shishir Thapa",
    role: "Team Member",
    image: "/images/team-kalki-jay.png",
    bio: aboutUsBio,
  },
  {
    id: "uma-prasad",
    name: "Dr. Uma Shankar Prasad",
    role: "Chairman",
    image: "/images/team-uma-prasad.png",
    bio: aboutUsBio,
  },
  {
    id: "kalki-jay",
    name: "Kalki Jay Shah",
    role: "Founder",
    image: "/images/team-member-3.png",
    bio: aboutUsBio,
  },
];

export const missionCopy =
  "The Kalkiism Research Center (KRC) is an economic and social research institution founded by 15 top economists from all government colleges in Kathmandu, including the Central Department of Economics, TU. Our mission is to drive a new economic revolution that guarantees free healthcare, education, and legal services for all Nepalis.";

export const missionQuote = staticQuote;

export const visionCopy =
  "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications. Everyday, people throughout America going to the doctor and getting their needed medications.";
