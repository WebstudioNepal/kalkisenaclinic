import AboutSuccessStoryCard from "@/components/about/AboutSuccessStoryCard";
import PageContainer from "@/components/PageContainer";
import { aboutSuccessStories } from "@/data/about";

export default function AboutSuccessStoriesSection() {
  return (
    <section id="success-stories" className="scroll-mt-8 bg-white pb-8 pt-2 lg:pb-14 lg:pt-4">
      <PageContainer>
        <h2 className="font-heading text-[36px] leading-none text-black lg:text-[42px]">
          Our <span className="text-[#002CCC]">Success</span> Stories
        </h2>

        <div className="mt-8 flex flex-col gap-6">
          {aboutSuccessStories.map((story, index) => (
            <AboutSuccessStoryCard key={story.id} number={index + 1} text={story.text} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
