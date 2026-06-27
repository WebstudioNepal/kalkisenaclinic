export type WhatWeDoService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  tall?: boolean;
};

export const whatWeDoIntro =
  "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications. Everyday, people throughout America going to the doctor and getting their needed medications.";

export const whatWeDoServices: WhatWeDoService[] = [
  {
    id: "funding",
    title: "Funding",
    description: "Our residential proxies use a real IP address assigned by an internet.",
    icon: "/images/what-we-do/icon-funding.svg",
    tall: true,
  },
  {
    id: "clinic-support",
    title: "Clinic Support",
    description: "Our residential proxies use a real IP address assigned.",
    icon: "/images/what-we-do/icon-clinic-support.svg",
    tall: true,
  },
  {
    id: "health-equity",
    title: "Health Equity",
    description: "Our residential proxies use a real IP address assigned by an internet.",
    icon: "/images/what-we-do/icon-health-equity.svg",
    tall: true,
  },
  {
    id: "education-training",
    title: "Education & Training",
    description: "Our residential proxies use a real IP address assigned.",
    icon: "/images/what-we-do/icon-education-training.svg",
    tall: true,
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief",
    description: "Our residential proxies use a real IP address assigned.",
    icon: "/images/what-we-do/icon-disaster-relief.svg",
  },
  {
    id: "charitable-pharmacies",
    title: "Charitable Pharmacies",
    description: "Our residential proxies use a real IP address assigned by an internet.",
    icon: "/images/what-we-do/icon-charitable-pharmacies.svg",
  },
  {
    id: "quality-standards",
    title: "Quality Standards",
    description: "Our residential proxies use a real IP address assigned.",
    icon: "/images/what-we-do/icon-quality-standards.svg",
  },
  {
    id: "healthcare-advocacy",
    title: "Healthcare Advocacy",
    description: "Our residential proxies use a real IP address assigned by an internet.",
    icon: "/images/what-we-do/icon-healthcare-advocacy.svg",
  },
];
