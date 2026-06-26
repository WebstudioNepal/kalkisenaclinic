export type MeetOurTeamMember = {
  id: string;
  number: string;
  image: string;
  imageAlt: string;
  role: string;
  name: string;
};

export const meetOurTeamMembers: MeetOurTeamMember[] = [
  {
    id: "kalki-jay-sah",
    number: "01",
    image: "/images/team-kalki-jay.png",
    imageAlt: "Kalki Jay Sah",
    role: "Kalki",
    name: "Jay Sah",
  },
  {
    id: "uma-prasad-chairman",
    number: "02",
    image: "/images/team-uma-prasad.png",
    imageAlt: "Dr Uma Shankar Prasad",
    role: "Chairman",
    name: "Dr Uma Shankar Prasad",
  },
  {
    id: "uma-prasad-ceo",
    number: "03",
    image: "/images/team-member-3.png",
    imageAlt: "Dr Uma Shankar Prasad",
    role: "Chief Executive Officer",
    name: "Dr Uma Shankar Prasad",
  },
  {
    id: "shishir-thapa",
    number: "04",
    image: "/images/team-uma-prasad.png",
    imageAlt: "Shishir Thapa",
    role: "Head of Department",
    name: "Shishir Thapa",
  },
];
