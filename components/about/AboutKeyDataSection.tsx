import Image from "next/image";
import AboutFatalCrisisIconCard from "@/components/about/AboutFatalCrisisIconCard";
import PageContainer from "@/components/PageContainer";
import { aboutFatalCrisisContent, aboutKeyDataContent } from "@/data/about";

export default function AboutKeyDataSection() {
  return (
    <section id="key-data" className="scroll-mt-8 bg-white py-8 lg:py-14">
      <PageContainer>
        <h2 className="text-center font-heading text-[32px] leading-[1.1] text-black sm:text-[42px] lg:text-[56px]">
          <span className="block">{aboutKeyDataContent.title}</span>
          <span className="block text-[#002CCC]">{aboutKeyDataContent.titleAccent}</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
          <Image
            src={aboutKeyDataContent.graph.src}
            alt={aboutKeyDataContent.graph.alt}
            width={3096}
            height={1740}
            className="h-auto w-full rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />

          <div className="flex flex-col gap-8 lg:gap-10">
            {aboutKeyDataContent.stats.map((stat) => (
              <div key={stat.id} className="space-y-1">
                {stat.lines.map((line, lineIndex) => (
                  <p
                    key={`${stat.id}-line-${lineIndex}`}
                    className="text-xl leading-snug text-black sm:text-2xl lg:text-[28px]"
                  >
                    {line.map((part, partIndex) =>
                      part.highlight ? (
                        <span
                          key={`${stat.id}-part-${partIndex}`}
                          className="font-medium text-[#DC2626]"
                        >
                          {part.text}
                        </span>
                      ) : (
                        <span key={`${stat.id}-part-${partIndex}`}>{part.text}</span>
                      ),
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-12 text-center font-heading text-[32px] leading-none text-black sm:text-[42px] lg:mt-16 lg:text-[56px]">
          {aboutFatalCrisisContent.title}
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-12 lg:grid-cols-5 lg:gap-8">
          {aboutFatalCrisisContent.items.map((item) => (
            <AboutFatalCrisisIconCard key={item.id} item={item} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
