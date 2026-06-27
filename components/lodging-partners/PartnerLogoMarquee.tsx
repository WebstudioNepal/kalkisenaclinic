import Image from "next/image";
import { lodgingPartners } from "@/data/lodgingPartners";

export default function PartnerLogoMarquee() {
  const logos = [...lodgingPartners, ...lodgingPartners];

  return (
    <div className="relative w-full select-none overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 "
        aria-hidden
      />

      <div className="flex w-max shrink-0 animate-marquee will-change-transform">
        {logos.map((partner, index) => (
          <Image
            key={`${partner.id}-${index}`}
            src={partner.logo}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            className="mx-8 h-20 w-auto shrink-0 object-contain sm:h-24"
            draggable={false}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 md:w-40"
        aria-hidden
      />
    </div>
  );
}
