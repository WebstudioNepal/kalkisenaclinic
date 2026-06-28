import Image from "next/image";
import { perksBenefitsAssets } from "@/data/perksBenefits";

const LOGO_WIDTH = 271;
const LOGO_HEIGHT = 300;
const DOCTORS_WIDTH = 471;
const DOCTORS_HEIGHT = 474;

export default function PerksBenefitsVisual() {
  return (
    <div className="relative mx-auto aspect-649/442 w-full max-w-[min(100%,320px)] overflow-hidden sm:max-w-[420px] md:max-w-[520px] lg:mx-0 lg:max-w-[649px]">
      <Image
        src={perksBenefitsAssets.logo}
        alt=""
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="absolute left-0 top-0 z-0 h-auto w-[41.8%] object-contain opacity-100"
        aria-hidden
      />

      <Image
        src={perksBenefitsAssets.doctors}
        alt="Kalki Care Clinic medical professionals"
        width={DOCTORS_WIDTH}
        height={DOCTORS_HEIGHT}
        className="absolute left-[24.6%] top-[-7.2%] z-20 h-auto w-[72.5%] object-contain opacity-100"
        sizes="(max-width: 1024px) 90vw, 471px"
        priority
      />
    </div>
  );
}
