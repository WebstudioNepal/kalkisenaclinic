import {
  AboutMeetUsLightProfileContent,
  glowBackground,
} from "@/components/about/AboutMeetUsLightProfileBlock";
import PageContainer from "@/components/PageContainer";
import type { AboutMeetUsProfile } from "@/data/about";

type AboutMeetUsIntroBlockProps = {
  intro: string[];
  profile: AboutMeetUsProfile;
};

export default function AboutMeetUsIntroBlock({ intro, profile }: AboutMeetUsIntroBlockProps) {
  return (
    <section className="relative overflow-x-hidden bg-white py-8 lg:py-14">
      <div
        className="pointer-events-none absolute right-0 top-[68%] h-[min(580px,75vw)] w-[min(580px,75vw)] -translate-y-1/2 translate-x-[6%] lg:right-[4%] lg:top-[70%] lg:h-[540px] lg:w-[540px] lg:translate-x-0"
        aria-hidden
        style={{ background: glowBackground }}
      />

      <PageContainer className="relative z-10">
        <h2 className="font-heading text-[36px] leading-none text-black sm:text-[42px] lg:text-[50px]">Meet Us</h2>

        <p className="mt-6 max-w-[900px] text-base leading-relaxed text-black/60 lg:max-w-[980px]">
          {intro[0]}
        </p>

        <div className="mt-12 lg:mt-14">
          <AboutMeetUsLightProfileContent profile={profile} />
        </div>
      </PageContainer>
    </section>
  );
}
