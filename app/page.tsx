import CardSection from "@/components/CardSection";
import HeroSection from "@/components/HeroSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import MissionVisionSection from "@/components/MissionVisionSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <HeroSection />
      <CardSection />
      <MissionVisionSection />
      <MeetOurTeamSection />
    </div>
  );
}
