import Image from "next/image";

/** Figma Desktop - 3 decorative bands for the What we do section (#348:6109, #348:6113). */
export default function WhatWeDoDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 -translate-y-20 overflow-hidden"
      aria-hidden
    >
      <Image
        src="/images/what-we-do/green-band.svg"
        alt=""
        width={1649}
        height={725}
        priority
        className="absolute top-[-5px] z-10 h-auto w-[114.5%] max-w-[1649px]"
        style={{ left: "max(-111.89px, calc(50% - 831.89px))" }}
      />
      <Image
        src="/images/what-we-do/blue-band.svg"
        alt=""
        width={1697}
        height={594}
        className="absolute top-[290px] z-0 h-auto w-[117.9%] max-w-[1697px]"
        style={{ left: "max(-128.46px, calc(50% - 848.46px))" }}
      />
    </div>
  );
}
