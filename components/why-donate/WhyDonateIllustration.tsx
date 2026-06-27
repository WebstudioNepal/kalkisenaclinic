import Image from "next/image";
import { whyDonateAssets } from "@/data/whyDonate";

const ILLUSTRATION_WIDTH = 625;
const ILLUSTRATION_HEIGHT = 583;

export default function WhyDonateIllustration() {
  return (
    <div className="relative mx-auto flex w-full max-w-[625px] items-center justify-center lg:mx-0 lg:max-w-none">
      <Image
        src={whyDonateAssets.illustration}
        alt="Hand placing a coin into a donation box"
        width={ILLUSTRATION_WIDTH}
        height={ILLUSTRATION_HEIGHT}
        className="h-auto w-full max-w-[625px] object-contain"
        sizes="(min-width: 1024px) 625px, 90vw"
        priority
      />
    </div>
  );
}
