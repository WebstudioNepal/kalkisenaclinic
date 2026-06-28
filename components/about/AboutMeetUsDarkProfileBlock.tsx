import AboutProfilePortrait from "@/components/about/AboutProfilePortrait";
import PageContainer from "@/components/PageContainer";
import type { AboutMeetUsProfile } from "@/data/about";
import { cn } from "@/lib/utils";

function isFounderCutout(profile: AboutMeetUsProfile) {
  return profile.displayVariant === "founder-cutout";
}

type AboutMeetUsDarkProfileContentProps = {
  profile: AboutMeetUsProfile;
  imageFirst: boolean;
};

export function AboutMeetUsDarkProfileContent({
  profile,
  imageFirst,
}: AboutMeetUsDarkProfileContentProps) {
  const founderCutout = isFounderCutout(profile);

  const textBlock = (
    <div
      className={cn(
        "flex min-w-0 flex-col justify-center",
        founderCutout ? "flex-1 lg:max-w-[58%] lg:self-center lg:-translate-y-6 xl:-translate-y-8" : "flex-1",
      )}
    >
      <h3
        className={cn(
          "font-medium leading-tight text-white",
          founderCutout ? "text-[28px] sm:text-[32px] lg:text-[40px]" : "text-[28px] sm:text-[32px] lg:text-[36px]",
        )}
      >
        {founderCutout ? `${profile.name} ( Founder)` : profile.name}
      </h3>

      <p
        className={cn(
          "font-heading italic text-white",
          founderCutout ? "mt-1 text-lg lg:text-xl" : "mt-2 text-base text-white/80",
        )}
      >
        {profile.title}
      </p>

      <div className={cn("space-y-4", founderCutout ? "mt-8" : "mt-6")}>
        {profile.bio.map((paragraph, paragraphIndex) => (
          <p
            key={`${profile.id}-bio-${paragraphIndex}`}
            className={cn(
              "text-base leading-relaxed",
              founderCutout ? "text-white" : "leading-normal text-white/80",
            )}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const portraitBlock = (
    <div
      className={cn(
        "flex w-full shrink-0 justify-center",
        founderCutout
          ? "mt-auto lg:mt-0 lg:w-[42%] lg:justify-start lg:self-end"
          : "lg:w-auto lg:max-w-[360px]",
      )}
    >
      <AboutProfilePortrait
        src={profile.image}
        alt={profile.imageAlt}
        theme="dark"
        variant={profile.portraitVariant}
        grayscale={profile.imageGrayscale}
      />
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-col",
        founderCutout ? "gap-10 pb-10 lg:items-stretch lg:gap-16 lg:pb-16" : "gap-10 lg:items-center lg:gap-[72px]",
        imageFirst ? "flex-col-reverse lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      {textBlock}
      {portraitBlock}
    </div>
  );
}

type AboutMeetUsDarkProfileBlockProps = {
  profile: AboutMeetUsProfile;
  index: number;
};

export default function AboutMeetUsDarkProfileBlock({
  profile,
  index,
}: AboutMeetUsDarkProfileBlockProps) {
  const imageFirst = index % 2 === 1;
  const founderCutout = isFounderCutout(profile);

  return (
    <section
      className={cn(
        "relative overflow-x-hidden bg-[#00176A]",
        founderCutout ? "pt-10 pb-6 lg:pt-16 lg:pb-0" : "py-8 lg:py-14",
      )}
    >
      {founderCutout ? (
        <>
          <div
            className="pointer-events-none absolute left-0 top-1/2 h-[min(640px,90vw)] w-[min(720px,70vw)] -translate-y-1/2"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 65% 65% at 35% 50%, rgba(0, 80, 210, 0.5) 0%, rgba(0, 44, 150, 0.22) 42%, rgba(0, 23, 106, 0) 72%)",
            }}
          />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[min(480px,55vw)] w-[min(480px,55vw)] rounded-full opacity-35"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle, rgba(0, 44, 204, 0.55) 0%, rgba(0, 23, 106, 0) 68%)",
            }}
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle, rgba(0, 44, 204, 0.45) 0%, rgba(0, 23, 106, 0) 70%)",
          }}
        />
      )}

      <PageContainer className="relative z-10">
        <AboutMeetUsDarkProfileContent profile={profile} imageFirst={imageFirst} />
      </PageContainer>
    </section>
  );
}
