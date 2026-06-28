import Image from "next/image";
import AboutVisionCard from "@/components/about/AboutVisionCard";
import PageContainer from "@/components/PageContainer";
import { aboutVisionCards, aboutVisionContent } from "@/data/about";

export default function AboutVisionSection() {
  return (
    <section id="our-vision" className="relative scroll-mt-8 overflow-hidden py-8 lg:py-14">
      <Image
        src="/images/about/visionbackground.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
        aria-hidden
      />

      <PageContainer className="relative z-10">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <h2 className="font-heading text-[36px] leading-none text-white sm:text-[42px] lg:text-[50px]">
            {aboutVisionContent.title}
          </h2>

          <div className="mt-6 space-y-4">
            {aboutVisionContent.intro.map((paragraph, index) => (
              <p key={`vision-intro-${index}`} className="text-base leading-normal text-white/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 min-[640px]:grid-cols-2 xl:grid-cols-4 lg:mt-12">
          {aboutVisionCards.map((card) => (
            <AboutVisionCard key={card.id} card={card} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
