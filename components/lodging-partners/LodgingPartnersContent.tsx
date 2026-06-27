import PageContainer from "@/components/PageContainer";
import PartnerLogoMarquee from "@/components/lodging-partners/PartnerLogoMarquee";
import { lodgingPartnersIntro } from "@/data/lodgingPartners";

export default function LodgingPartnersContent() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-[42px] leading-none text-black sm:text-[62px]">
          Our Lodging Partners
        </h2>
        <p className="min-w-[1031px] text-base leading-normal text-black/60">{lodgingPartnersIntro}</p>
      </div>

      <div className="mt-12">
        <PartnerLogoMarquee />
      </div>
    </PageContainer>
  );
}
