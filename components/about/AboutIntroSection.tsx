import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { aboutIntroCtaLabel, aboutIntroParagraphLines, aboutQuote } from "@/data/about";

export default function AboutIntroSection() {
  return (
    <section id="about-intro" className="relative z-10 -mt-12 pb-8 sm:-mt-20 lg:-mt-[160px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
        <div
          className="rounded-t-[24px] px-4 pt-6 pb-4 backdrop-blur-[20px] sm:rounded-t-[32px] sm:px-8 sm:pt-10 sm:pb-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(242, 242, 242, 0.92) 0%, rgba(242, 242, 242, 0.88) 55%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <p className="text-center text-base leading-[1.5] text-black/80">
            {aboutIntroParagraphLines.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                <span className="inline-block">{line}</span>
              </span>
            ))}
          </p>

          <div className="mt-8 flex justify-center">
            <Button className="h-[51px] rounded-lg bg-[#002CCC] px-8 text-base font-medium hover:bg-[#0024b3]">
              {aboutIntroCtaLabel}
            </Button>
          </div>
        </div>
      </div>

      <PageContainer>
        <p className="font-heading mx-auto max-w-[900px] bg-white pt-2 text-center text-[28px] italic leading-snug text-black/70 sm:pt-4 sm:text-[32px] lg:text-[36px]">
          &ldquo;{aboutQuote}&rdquo;
        </p>
      </PageContainer>
    </section>
  );
}
