export const footerBrandBlurb =
  "Everyday, people throughout America struggle with choosing between paying for food and a place to live or going to the doctor and getting their needed medications.";

export const footerLogo = "/images/logo-72e77c.png";

export const footerQuickLinksHeading = "Quick Links";

export { footerQuickNavItems as footerQuickLinks } from "@/data/navigation";

export const footerHelpHeading = "Help & Support";

export const footerHelpLinks = [
  { id: "privacy-policy", label: "Privacy Policy", href: "#" },
  { id: "terms-conditions", label: "Terms & Conditions", href: "#" },
] as const;

export const footerContactHeading = "Contact Us";

export type FooterContactItem = {
  id: string;
  label: string;
  value: string;
  icon: string;
};

export const footerContactItems: FooterContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "kalkiclinic@mail.com",
    icon: "mdi:email-outline",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+977-9876543210",
    icon: "mdi:phone",
  },
  {
    id: "address",
    label: "Address",
    value: "4517 Washington Ave. Manchester, Kentucky 39495",
    icon: "mdi:map-marker",
  },
];

export const footerCopyright =
  "Copyright © 2026. Kalkisena Clinic. All Rights Reserved";
