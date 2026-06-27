import AboutProfilePortrait from "@/components/about/AboutProfilePortrait";
import PageContainer from "@/components/PageContainer";
import type { AboutMeetUsProfile } from "@/data/about";

const glowBackground =
  "radial-gradient(circle, rgba(0, 80, 255, 0.72) 0%, rgba(0, 120, 255, 0.48) 28%, rgba(41, 137, 255, 0.28) 48%, rgba(120, 180, 255, 0.1) 62%, rgba(255, 255, 255, 0) 78%)";

type AboutMeetUsLightProfileContentProps = {
  profile: AboutMeetUsProfile;
};

export function AboutMeetUsLightProfileContent({ profile }: AboutMeetUsLightProfileContentProps) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
      <div className="min-w-0 flex-1 lg:max-w-[58%]">
        <h3 className="text-[32px] font-medium leading-tight text-black lg:text-[36px]">
          {profile.name}
        </h3>

        <p className="font-heading mt-2 text-base italic text-black/60">{profile.title}</p>

        <div className="mt-6 space-y-4">
          {profile.bio.map((paragraph, paragraphIndex) => (
            <p
              key={`${profile.id}-bio-${paragraphIndex}`}
              className="text-base leading-normal text-black/60"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="flex w-full shrink-0 justify-center lg:w-[42%] lg:justify-end">
        <AboutProfilePortrait
          src={profile.image}
          alt={profile.imageAlt}
          theme="light"
          variant="glow"
          grayscale={profile.imageGrayscale}
        />
      </div>
    </div>
  );
}

type AboutMeetUsLightProfileBlockProps = {
  profile: AboutMeetUsProfile;
};

export default function AboutMeetUsLightProfileBlock({ profile }: AboutMeetUsLightProfileBlockProps) {
  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-14">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[min(580px,75vw)] w-[min(580px,75vw)] -translate-y-1/2 translate-x-[6%] lg:right-[4%] lg:h-[540px] lg:w-[540px] lg:translate-x-0"
        aria-hidden
        style={{ background: glowBackground }}
      />

      <PageContainer className="relative z-10">
        <AboutMeetUsLightProfileContent profile={profile} />
      </PageContainer>
    </section>
  );
}

export { glowBackground };
