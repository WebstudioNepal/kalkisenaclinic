import AboutSplitSection from "@/components/about/AboutSplitSection";
import {
  aboutMissionCollageImages,
  aboutMissionContent,
} from "@/data/about";

export default function AboutMissionSection() {
  return (
    <AboutSplitSection
      id="our-mission"
      title={aboutMissionContent.title}
      intro={aboutMissionContent.intro}
      bullets={aboutMissionContent.bullets}
      images={aboutMissionCollageImages}
      imagePosition="right"
    />
  );
}
