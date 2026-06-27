import Image from "next/image";
import { socialPlatforms } from "@/data/socialPlatforms";

export default function SocialPlatformLinks() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      {socialPlatforms.map((platform) => (
        <a
          key={platform.id}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.label}
          className="transition hover:opacity-90"
        >
          <Image
            src={platform.image}
            alt={platform.label}
            width={platform.imageWidth}
            height={platform.imageHeight}
            className="size-20 rounded-2xl object-cover"
          />
        </a>
      ))}
    </div>
  );
}
