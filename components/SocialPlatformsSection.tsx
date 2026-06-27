import PageContainer from "@/components/PageContainer";
import SocialPlatformLinks from "@/components/social-platforms/SocialPlatformLinks";
import { socialPlatformsHeading } from "@/data/socialPlatforms";

export default function SocialPlatformsSection() {
  return (
    <section className="bg-white py-16">
      <PageContainer>
        <h2 className="text-center font-heading text-[36px] leading-none text-black sm:text-[50px]">
          {socialPlatformsHeading}
        </h2>
        <SocialPlatformLinks />
      </PageContainer>
    </section>
  );
}
