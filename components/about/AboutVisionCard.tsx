import Image from "next/image";
import type { AboutVisionCard as AboutVisionCardData } from "@/data/about";

type AboutVisionCardProps = {
  card: AboutVisionCardData;
};

export default function AboutVisionCard({ card }: AboutVisionCardProps) {
  return (
    <article className="flex min-h-[196px] flex-col justify-center rounded-2xl border border-white/10 bg-[rgba(0,44,204,0.15)] p-6 backdrop-blur-[20px]">
      <div className="flex flex-col gap-4">
        <Image
          src={card.icon}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 shrink-0 brightness-0 invert"
          aria-hidden
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold leading-8 text-white">{card.title}</h3>
          <p className="text-base leading-6 text-white/80">{card.description}</p>
        </div>
      </div>
    </article>
  );
}
