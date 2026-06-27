import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import PerksBenefitsVisual from "@/components/perks-benefits/PerksBenefitsVisual";
import {
  perksBenefits,
  perksBenefitsAssets,
  perksBenefitsCtaLabel,
  perksBenefitsHeadingLines,
  perksBenefitsSubheading,
} from "@/data/perksBenefits";

export default function PerksBenefitsSection() {
  return (
    <section id="get-involved" className="scroll-mt-8 bg-white py-16">
      <PageContainer>
        <h2 className="font-heading text-[42px] leading-[1.05] text-black sm:text-[62px]">
          {perksBenefitsHeadingLines.map((line, index) => (
            <span
              key={line}
              className={index === 0 ? "block whitespace-nowrap" : "block"}
            >
              {line}
            </span>
          ))}
        </h2>

        <div className="relative mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,649px)_minmax(0,1fr)] lg:gap-x-20 xl:gap-x-28">
          <PerksBenefitsVisual />

          <div className="relative min-w-0 lg:pt-2">
            <h3 className="font-heading text-[30px] leading-none text-black sm:text-[36px]">
              {perksBenefitsSubheading}
            </h3>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-normal text-black marker:text-black">
              {perksBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <button
              type="button"
              className="relative z-10 mt-8 h-[51px] w-fit rounded-lg border border-black/30 px-6 text-base font-medium text-black transition hover:bg-black/4"
            >
              {perksBenefitsCtaLabel}
            </button>
          </div>

          <Image
            src={perksBenefitsAssets.membershipGift}
            alt=""
            width={232}
            height={232}
            className="pointer-events-none mx-auto object-contain opacity-100 lg:absolute lg:left-[989px] lg:top-[251px] lg:mx-0"
            style={{ width: 232, height: 232 }}
            aria-hidden
          />
        </div>
      </PageContainer>
    </section>
  );
}
