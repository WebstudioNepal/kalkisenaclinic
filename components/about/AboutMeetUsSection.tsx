import AboutMeetUsDarkProfileBlock from "@/components/about/AboutMeetUsDarkProfileBlock";
import AboutMeetUsIntroBlock from "@/components/about/AboutMeetUsIntroBlock";
import AboutMeetUsLightProfileBlock from "@/components/about/AboutMeetUsLightProfileBlock";
import { aboutMeetUsIntro, aboutMeetUsProfiles } from "@/data/about";

function isLightGlowProfile(profile: (typeof aboutMeetUsProfiles)[number]) {
  return profile.theme === "light" && profile.portraitVariant === "glow";
}

export default function AboutMeetUsSection() {
  const [firstProfile, ...remainingProfiles] = aboutMeetUsProfiles;

  return (
    <div id="meet-us" className="scroll-mt-8">
      <AboutMeetUsIntroBlock intro={aboutMeetUsIntro} profile={firstProfile} />

      {remainingProfiles.map((profile, index) => {
        const rowIndex = index + 1;

        if (isLightGlowProfile(profile)) {
          return <AboutMeetUsLightProfileBlock key={profile.id} profile={profile} />;
        }

        if (profile.theme === "dark") {
          return (
            <AboutMeetUsDarkProfileBlock key={profile.id} profile={profile} index={rowIndex} />
          );
        }

        return null;
      })}
    </div>
  );
}
