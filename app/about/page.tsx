import type { Metadata } from "next";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutLegalFrameworkSection from "@/components/about/AboutLegalFrameworkSection";
import AboutMissionSection from "@/components/about/AboutMissionSection";
import AboutSuccessStoriesSection from "@/components/about/AboutSuccessStoriesSection";
import AboutVisionSection from "@/components/about/AboutVisionSection";
import FooterSection from "@/components/FooterSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import HeroSection from "@/components/HeroSection";
import AboutKeyDataSection from "@/components/about/AboutKeyDataSection";
import AboutMeetUsSection from "@/components/about/AboutMeetUsSection";
import OurPeakSection from "@/components/PerksBenefitsSection";

export const metadata: Metadata = {
  title: "About Us | Kalkisena Clinic",
  description:
    "Learn about the Kalkiism Research Center, our mission, vision, and the team behind Kalkisena Clinic.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection variant="about" navbarVariant="dark" />
      <AboutIntroSection />
      <AboutMissionSection />
      <AboutVisionSection />
      <AboutMeetUsSection />
      <AboutLegalFrameworkSection />
      <AboutSuccessStoriesSection />
      <OurPeakSection />
      <AboutKeyDataSection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
}
