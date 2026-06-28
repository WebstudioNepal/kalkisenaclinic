import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import type { AboutCollageImage } from "@/data/about";
import { cn } from "@/lib/utils";

type AboutSplitSectionProps = {
  id: string;
  title: string;
  intro: string[];
  bullets: string[];
  images: AboutCollageImage[];
  imagePosition?: "left" | "right";
};

function ImageCollage({ images }: { images: AboutCollageImage[] }) {
  const centerIndex = Math.floor(images.length / 2);

  return (
    <div className="relative mx-auto w-fit max-w-full lg:mx-0">
      <div className="flex items-center justify-center">
        {images.map((image, index) => {
          const imageElement = (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 268px, 33vw"
            />
          );

          if (index !== centerIndex) {
            return (
              <div key={image.src} className={image.className}>
                {imageElement}
              </div>
            );
          }

          return (
            <div key={image.src} className="relative shrink-0">
              <div
                className="pointer-events-none absolute -left-3 -top-3 z-40 h-14 w-14 rounded-tl-[12px] border-l-2 border-t-2 border-[#002CCC]/35"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-3 -right-3 z-40 h-14 w-14 rounded-br-[12px] border-b-2 border-r-2 border-[#002CCC]/35"
                aria-hidden
              />
              <div className={image.className}>{imageElement}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TextContent({
  title,
  intro,
  bullets,
}: Pick<AboutSplitSectionProps, "title" | "intro" | "bullets">) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-center">
      <h2 className="font-heading text-[36px] leading-none text-black sm:text-[42px] lg:text-[50px]">{title}</h2>

      <div className="mt-6 w-full space-y-4">
        {intro.map((paragraph, index) => (
          <p
            key={`intro-${index}`}
            className="w-full text-base leading-normal text-black/60"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="mt-6 w-full list-disc space-y-3 pl-5 text-base leading-normal text-black/60 marker:text-black/60">
        {bullets.map((item, index) => (
          <li key={`bullet-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutSplitSection({
  id,
  title,
  intro,
  bullets,
  images,
  imagePosition = "right",
}: AboutSplitSectionProps) {
  const textBlock = <TextContent title={title} intro={intro} bullets={bullets} />;
  const imageBlock = <ImageCollage images={images} />;

  return (
    <section id={id} className="scroll-mt-8 overflow-x-hidden bg-white py-8 lg:py-14">
      <PageContainer>
        <div
          className={cn(
            "flex flex-col gap-8 lg:items-center lg:gap-[72px]",
            imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse",
          )}
        >
          {textBlock}
          <div className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-start">
            {imageBlock}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
