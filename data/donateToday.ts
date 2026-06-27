export const donateTodayHeading = "Donate to Kalki Clinic Today!";

export const donateTodayDescriptionLines = [
  "Please take a moment to join our movement in saving lives and building healthier communities;",
  "support the NAFC, our members and our patients by making a tax-deductible donation today!",
] as const;

export const donateTodayCtaLabel = "Donate Now";

/** Uniform gallery frame width (scaled from Figma 121px ref). */
export const donateTodayGalleryImageWidth = 230;

/** Portrait frame height — taller than width to match Figma gallery tiles. */
export const donateTodayGalleryImageHeight = 260;

export const donateTodayGalleryBorderRadius = 16;

export type DonateGalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  left: number;
  top: number;
};

const PHOTO = (id: string) => `/images/donate-today/gallery-img-${id}.png`;

/** Scale Figma reference coords (1024-wide frame) to 1296px content width. */
const S = 1296 / 1024;

function slot(left: number, top: number): Pick<DonateGalleryPhoto, "left" | "top"> {
  return {
    left: Math.round(left * S),
    top: Math.round(top * S),
  };
}

/**
 * 6-column staggered mosaic — positions measured from Figma reference (Desktop 1440).
 * Row tops adjusted for portrait frames (180×235).
 */
export const donateTodayPhotos: DonateGalleryPhoto[] = [
  { id: "top-left", src: PHOTO("01"), alt: "Community member portrait", ...slot(-110, 28) },
  { id: "top-right", src: PHOTO("11"), alt: "Community member portrait", ...slot(960, 28) },
  { id: "mid-col2", src: PHOTO("03"), alt: "Community member portrait", ...slot(105, 180) },
  { id: "mid-col5", src: PHOTO("09"), alt: "Community member portrait", ...slot(750, 180) },
  { id: "mid-col3", src: PHOTO("05"), alt: "Community member portrait", ...slot(320, 248) },
  { id: "mid-col4", src: PHOTO("07"), alt: "Community member portrait", ...slot(535, 248) },
  { id: "bottom-col1", src: PHOTO("02"), alt: "Community member portrait", ...slot(-110, 260) },
  { id: "bottom-col2", src: PHOTO("04"), alt: "Community member portrait", ...slot(105, 410) },
  { id: "bottom-col3", src: PHOTO("06"), alt: "Community member portrait", ...slot(320, 480) },
  { id: "bottom-col4", src: PHOTO("08"), alt: "Community member portrait", ...slot(535, 480) },
  { id: "bottom-col5", src: PHOTO("10"), alt: "Community member portrait", ...slot(750, 410) },
  { id: "bottom-col6", src: PHOTO("12"), alt: "Community member portrait", ...slot(960, 260) },
];

export const donateTodayLayout = {
  width: 1296,
  height: Math.round(450 * S) + donateTodayGalleryImageHeight,
} as const;
