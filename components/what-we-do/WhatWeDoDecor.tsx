import Image from "next/image";

/** Figma Desktop - 3 decorative bands for the What we do section (#348:6109, #348:6113). */
export default function WhatWeDoDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 h-[420px] -translate-y-6 overflow-hidden sm:h-[520px] sm:-translate-y-12 lg:h-auto lg:min-h-0 lg:-translate-y-20"
      aria-hidden
    >
      <Image
        src="/images/what-we-do/green-band.svg"
        alt=""
        width={1649}
        height={725}
        priority
        className="absolute left-1/2 top-0 z-10 h-auto w-[130%] max-w-none -translate-x-1/2 sm:top-[-2px] sm:w-[120%] lg:top-[-5px] lg:w-[114.5%] lg:max-w-[1649px]"
      />
      <Image
        src="/images/what-we-do/blue-band.svg"
        alt=""
        width={1697}
        height={594}
        className="absolute left-1/2 top-[140px] z-0 h-auto w-[135%] max-w-none -translate-x-1/2 sm:top-[210px] sm:w-[125%] lg:top-[290px] lg:w-[117.9%] lg:max-w-[1697px]"
      />
    </div>
  );
}
