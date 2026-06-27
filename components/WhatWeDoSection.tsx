import PageContainer from "@/components/PageContainer";
import ImpactStatsBar from "@/components/geo-centers/ImpactStatsBar";
import WhatWeDoCard from "@/components/what-we-do/WhatWeDoCard";
import WhatWeDoDecor from "@/components/what-we-do/WhatWeDoDecor";
import { whatWeDoIntro, whatWeDoServices } from "@/data/whatWeDo";

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-x-hidden bg-white pb-0 pt-16">
      <WhatWeDoDecor />

      <PageContainer className="relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="shrink-0 font-heading text-[42px] leading-none text-black sm:text-[62px]">
            What we do
          </h2>
          <p className="max-w-[620px] text-base leading-normal text-black/70">{whatWeDoIntro}</p>
        </div>

        <div className="mt-[61px] grid grid-cols-1 gap-8 min-[640px]:grid-cols-2 xl:grid-cols-4">
          {whatWeDoServices.map((service) => (
            <WhatWeDoCard key={service.id} service={service} />
          ))}
        </div>
      </PageContainer>

      <div className="relative z-10 mt-[60px] overflow-hidden">
        <ImpactStatsBar />
      </div>
    </section>
  );
}
