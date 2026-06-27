import AppIcon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#00176A] pb-[130px]">
      <div className="pointer-events-none absolute left-[-189px] top-[269px] h-[743px] w-[743px] rounded-full bg-black opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[318px] bg-gradient-to-b from-black/60 via-[rgba(0,23,106,0.3)] to-transparent" />

      <div className="pointer-events-none absolute left-[100px] top-[123px] hidden h-[63px] w-[63px] rounded-full bg-white/10 xl:block" />
      <div className="pointer-events-none absolute left-[797px] top-[231px] hidden h-[471px] w-[471px] rounded-full border-[44px] border-white/10 xl:block" />
      <div className="pointer-events-none absolute left-[1196px] top-[155px] hidden h-[161px] w-[161px] rounded-full bg-white/10 xl:block" />

      <PageContainer className="relative pt-[41px]">
        <div className="flex justify-center">
          <Navbar />
        </div>

        <div className="mt-[182px] text-white">
          <p className="text-[52px] font-normal leading-none">Join the</p>

          <h1 className="font-heading mt-[14px] max-w-[838px] text-[62px] leading-[1.15]">
            Kalkisena Clinic for free checkup
          </h1>

          <p className="mt-[29px] text-lg font-medium">Find clinic center near you</p>

          <div className="mt-[18px] flex h-[63px] w-full max-w-[910px] items-center rounded-[14px] bg-white pl-6 pr-1.5">
            <input
              type="text"
              placeholder="City and State or Zip Code"
              className="min-w-0 flex-1 bg-transparent text-base text-black outline-none placeholder:text-black/40"
            />

            <div className="mx-3 flex h-[51px] w-[69px] shrink-0 items-center justify-center gap-1 rounded-md border border-black/30">
              <span className="text-base text-black/40">10</span>
              <AppIcon
                icon="mdi:chevron-down"
                width={20}
                height={20}
                aria-hidden
                className="text-black/40"
              />
            </div>

            <span className="mr-3 hidden shrink-0 text-base text-black/40 sm:inline">Km radius</span>

            <Button className="h-[51px] shrink-0 px-6 text-base font-medium hover:bg-[#0024b3]">
              Find Now
            </Button>
          </div>

          <p className="mt-9 max-w-[947px] text-base leading-normal">
            Everyday, people throughout America struggle with choosing between paying for food
            and a place to live or going to the doctor and getting their needed medications.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
