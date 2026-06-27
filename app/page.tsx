import CardSection from "@/components/CardSection";
import GeoCentersSection from "@/components/GeoCentersSection";
import HeroSection from "@/components/HeroSection";
import LodgingPartnersSection from "@/components/LodgingPartnersSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import PerksBenefitsSection from "@/components/PerksBenefitsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import DonateTodaySection from "@/components/DonateTodaySection";
import FooterSection from "@/components/FooterSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import NewsletterSection from "@/components/NewsletterSection";
import SocialPlatformsSection from "@/components/SocialPlatformsSection";
import WhyDonateSection from "@/components/WhyDonateSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <HeroSection />
      <CardSection />
      <MissionVisionSection />
      <MeetOurTeamSection />
      <GeoCentersSection />
      <WhatWeDoSection />
      <LodgingPartnersSection />
      <PerksBenefitsSection />
      <WhyDonateSection />
      <DonateTodaySection />
      <SocialPlatformsSection />
      <NewsletterSection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
}
