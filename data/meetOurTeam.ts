export type MeetOurTeamMember = {
  id: string;
  imageNotClicked: string;
  imageClicked: string;
  imageAlt: string;
};

export const meetOurTeamMembers: MeetOurTeamMember[] = [
  {
    id: "jay-sah",
    imageNotClicked: "/images/our-meet/notclicked/01js.png",
    imageClicked: "/images/our-meet/onclicked/01js.png",
    imageAlt: "Kalki Jay Sah",
  },
  {
    id: "uma-prasad-chairman",
    imageNotClicked: "/images/our-meet/notclicked/02druma.png",
    imageClicked: "/images/our-meet/onclicked/02usp.png",
    imageAlt: "Dr Uma Shankar Prasad, Chairman",
  },
  {
    id: "uma-prasad-ceo",
    imageNotClicked: "/images/our-meet/notclicked/03drumashankarprasad.png",
    imageClicked: "/images/our-meet/onclicked/03usp.png",
    imageAlt: "Dr Uma Shankar Prasad, Chief Executive Officer",
  },
  {
    id: "shishir-thapa",
    imageNotClicked: "/images/our-meet/notclicked/04shisir-thapa.png",
    imageClicked: "/images/our-meet/onclicked/04st.png",
    imageAlt: "Shishir Thapa, Head of Department",
  },
];
