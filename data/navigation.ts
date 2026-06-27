export const sectionIds = {
  hero: "hero",
  whoWeAre: "who-we-are",
  whatWeDo: "what-we-do",
  ourImpact: "our-impact",
  getInvolved: "get-involved",
  contactUs: "contact-us",
  donateToday: "donate-today",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export const primaryNavItems = [
  {
    id: sectionIds.whoWeAre,
    label: "Who We Are",
    href: `/#${sectionIds.whoWeAre}`,
  },
  {
    id: sectionIds.whatWeDo,
    label: "What We Do",
    href: `/#${sectionIds.whatWeDo}`,
  },
  {
    id: sectionIds.ourImpact,
    label: "Our Impact",
    href: `/#${sectionIds.ourImpact}`,
  },
  {
    id: sectionIds.getInvolved,
    label: "Get Involved",
    href: `/#${sectionIds.getInvolved}`,
  },
  {
    id: sectionIds.contactUs,
    label: "Contact Us",
    href: `/#${sectionIds.contactUs}`,
  },
] as const;

export const footerQuickNavItems = [
  {
    id: sectionIds.whoWeAre,
    label: "Who we are",
    href: `/#${sectionIds.whoWeAre}`,
  },
  {
    id: sectionIds.getInvolved,
    label: "Get Involved",
    href: `/#${sectionIds.getInvolved}`,
  },
  {
    id: sectionIds.whatWeDo,
    label: "What we do",
    href: `/#${sectionIds.whatWeDo}`,
  },
  {
    id: sectionIds.ourImpact,
    label: "Our Impact",
    href: `/#${sectionIds.ourImpact}`,
  },
] as const;

export const donateNavHref = `/#${sectionIds.donateToday}`;

export const heroNavHref = "/";
