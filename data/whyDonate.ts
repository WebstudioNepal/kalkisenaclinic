export const whyDonateHeading = "Why Donate?";

export const whyDonateReasons: string[] = [
  "Your support helps provide free healthcare, education, and legal aid.",
  "We rely on donations from pharmaceutical companies, international sources (including the USA), and public supporters.",
];

export const whyDonateDownloadIntro =
  "Download the app now. Select your app store...";

export const whyDonateQrLabels = {
  separator: "Or,",
  scanTitle: "Scan the QR Code",
  appName: "Download the 'Kalki Sena' Super App",
} as const;

export const whyDonateStoreButtons = [
  { id: "play-store", label: "Play Store", icon: "logos:google-play-icon", href: "#" },
  { id: "apple-store", label: "Apple Store", icon: "mdi:apple", href: "#" },
] as const;

export const whyDonateAssets = {
  illustration: "/images/why-donate/illustration.png",
  qrCode: "/images/why-donate/qr.png",
} as const;
