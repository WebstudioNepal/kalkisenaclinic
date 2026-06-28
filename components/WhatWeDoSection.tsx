import PageContainer from "@/components/PageContainer";
import ImpactStatsBar from "@/components/geo-centers/ImpactStatsBar";
import WhatWeDoCard from "@/components/what-we-do/WhatWeDoCard";
import WhatWeDoDecor from "@/components/what-we-do/WhatWeDoDecor";
import { whatWeDoIntro, whatWeDoServices } from "@/data/whatWeDo";

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="relative scroll-mt-8 overflow-x-hidden bg-white pb-0 pt-6 sm:pt-8">
      <WhatWeDoDecor />

      <PageContainer className="relative z-10">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <h2 className="shrink-0 font-heading text-[36px] leading-none text-black sm:text-[42px] lg:text-[62px]">
            What we do
          </h2>
          <p className="max-w-none text-base leading-normal text-black/70 lg:max-w-[620px]">
            {whatWeDoIntro}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:mt-[61px] xl:grid-cols-4 xl:gap-8">
          {whatWeDoServices.map((service) => (
            <WhatWeDoCard key={service.id} service={service} />
          ))}
        </div>
      </PageContainer>

      <div id="our-impact" className="relative z-10 mt-8 scroll-mt-8 overflow-hidden sm:mt-12 xl:mt-[60px]">
        <ImpactStatsBar />
      </div>
    </section>
  );
}
