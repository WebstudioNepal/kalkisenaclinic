import AboutProfilePortrait from "@/components/about/AboutProfilePortrait";
import PageContainer from "@/components/PageContainer";
import { aboutMeetUsIntro, aboutMeetUsProfiles } from "@/data/about";
import type { AboutMeetUsProfile } from "@/data/about";
import { cn } from "@/lib/utils";

const lightGlowBackground =
  "radial-gradient(circle, rgba(0, 80, 255, 0.55) 0%, rgba(0, 120, 255, 0.32) 30%, rgba(41, 137, 255, 0.14) 52%, rgba(255, 255, 255, 0) 72%)";

function isFounderCutout(profile: AboutMeetUsProfile) {
  return profile.displayVariant === "founder-cutout";
}

function hasLightGlow(profile: AboutMeetUsProfile) {
  return profile.theme === "light" && profile.portraitVariant === "glow";
}

type MeetUsProfileCardProps = {
  profile: AboutMeetUsProfile;
  imageFirst: boolean;
};

function MeetUsProfileCard({ profile, imageFirst }: MeetUsProfileCardProps) {
  const founderCutout = isFounderCutout(profile);
  const isDark = profile.theme === "dark";
  const showGlow = hasLightGlow(profile);

  const textBlock = (
    <div
      className={cn(
        "flex min-w-0 flex-1 flex-col justify-center",
        founderCutout && isDark && "lg:max-w-[58%]",
      )}
    >
      <h3
        className={cn(
          "text-[22px] font-medium leading-tight sm:text-[24px] lg:text-[28px]",
          isDark ? "text-white" : "text-black",
        )}
      >
        {founderCutout && isDark ? `${profile.name} ( Founder)` : profile.name}
      </h3>

      <p
        className={cn(
          "font-heading mt-1 text-sm italic sm:text-base",
          isDark ? (founderCutout ? "text-white/90" : "text-white/75") : "text-black/60",
        )}
      >
        {profile.title}
      </p>

      <div className="mt-4 space-y-3">
        {profile.bio.map((paragraph, paragraphIndex) => (
          <p
            key={`${profile.id}-bio-${paragraphIndex}`}
            className={cn(
              "text-sm leading-relaxed sm:text-base",
              isDark ? (founderCutout ? "text-white/95" : "text-white/75") : "text-black/60",
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
        founderCutout && isDark
          ? "mt-auto lg:mt-0 lg:w-[38%] lg:justify-start lg:self-end"
          : "lg:w-[34%] lg:max-w-[280px] lg:justify-end",
      )}
    >
      <AboutProfilePortrait
        src={profile.image}
        alt={profile.imageAlt}
        theme={profile.theme}
        variant={profile.portraitVariant}
        grayscale={profile.imageGrayscale}
        size="compact"
      />
    </div>
  );

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl p-5 sm:p-6 lg:p-7",
        isDark ? "bg-[#00176A] text-white" : "bg-white shadow-sm ring-1 ring-black/5",
      )}
    >
      {isDark && (
        <>
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle, rgba(0, 44, 204, 0.5) 0%, rgba(0, 23, 106, 0) 70%)",
            }}
          />
          {founderCutout && (
            <div
              className="pointer-events-none absolute left-0 top-1/2 h-[min(420px,80vw)] w-[min(520px,65vw)] -translate-y-1/2 opacity-80"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 65% 65% at 35% 50%, rgba(0, 80, 210, 0.42) 0%, rgba(0, 44, 150, 0.18) 42%, rgba(0, 23, 106, 0) 72%)",
              }}
            />
          )}
        </>
      )}

      {showGlow && (
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[min(360px,70vw)] w-[min(360px,70vw)] -translate-y-1/2 translate-x-[10%] opacity-90"
          aria-hidden
          style={{ background: lightGlowBackground }}
        />
      )}

      <div
        className={cn(
          "relative z-10 flex flex-col gap-5 sm:gap-6",
          founderCutout && isDark
            ? "lg:items-stretch lg:gap-8"
            : "lg:flex-row lg:items-center lg:gap-8",
          imageFirst ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        {textBlock}
        {portraitBlock}
      </div>
    </article>
  );
}

export default function AboutMeetUsSection() {
  return (
    <section id="meet-us" className="scroll-mt-8 overflow-x-hidden bg-[#F2F2F2] py-6 sm:py-8 lg:py-10">
      <PageContainer>
        <header className="max-w-[720px]">
          <h2 className="font-heading text-[32px] leading-none text-black sm:text-[36px] lg:text-[42px]">
            Meet Us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/60 sm:text-base">{aboutMeetUsIntro[0]}</p>
        </header>

        <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:gap-5 lg:mt-8 lg:gap-6">
          {aboutMeetUsProfiles.map((profile, index) => (
            <MeetUsProfileCard key={profile.id} profile={profile} imageFirst={index % 2 === 1} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
