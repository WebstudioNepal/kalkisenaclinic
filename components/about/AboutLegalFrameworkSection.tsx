import PageContainer from "@/components/PageContainer";
import { aboutLegalFrameworkDescription } from "@/data/about";

export default function AboutLegalFrameworkSection() {
  return (
    <section id="legal-framework" className="scroll-mt-8 bg-white py-8 lg:py-14">
      <PageContainer>
        <div className="mx-auto text-center">
          <h2 className="font-heading text-[36px] leading-none text-black sm:text-[42px] lg:text-[50px]">
            Legal <span className="text-[#002CCC]">Framework</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-base leading-normal text-black/60">
            {aboutLegalFrameworkDescription}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
