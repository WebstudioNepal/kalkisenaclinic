export const socialPlatformsHeading = "Connect Us on Social Platforms";

export type SocialPlatform = {
  id: string;
  label: string;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const socialPlatforms: SocialPlatform[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "#",
    image: "/images/social-platforms/instagram.png",
    imageWidth: 80,
    imageHeight: 80,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "#",
    image: "/images/social-platforms/facebook.png",
    imageWidth: 80,
    imageHeight: 80,
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "#",
    image: "/images/social-platforms/telegram.png",
    imageWidth: 80,
    imageHeight: 80,
  },
  {
    id: "x",
    label: "X",
    href: "#",
    image: "/images/social-platforms/x.png",
    imageWidth: 80,
    imageHeight: 80,
  },
];
