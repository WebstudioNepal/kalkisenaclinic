import Image from "next/image";
import { perksBenefitsAssets } from "@/data/perksBenefits";

const LOGO_WIDTH = 271;
const LOGO_HEIGHT = 300;
const DOCTORS_WIDTH = 471;
const DOCTORS_HEIGHT = 474;

export default function PerksBenefitsVisual() {
  return (
    <div className="relative h-[442px] w-full max-w-[649px]">
      <Image
        src={perksBenefitsAssets.doctors}
        alt="Kalki Care Clinic medical professionals"
        width={DOCTORS_WIDTH}
        height={DOCTORS_HEIGHT}
        className="absolute z-20 object-contain opacity-100"
        style={{ left: 160, top: -32, width: 471, height: 474 }}
        sizes="471px"
        priority
      />

      <Image
        src={perksBenefitsAssets.logo}
        alt=""
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="absolute left-0 top-0 z-0 object-contain opacity-100"
        style={{ width: 271, height: 300 }}
        aria-hidden
      />
    </div>
  );
}
