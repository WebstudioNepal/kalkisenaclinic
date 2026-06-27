import Image from "next/image";
import type { AboutFatalCrisisItem } from "@/data/about";

type AboutFatalCrisisIconCardProps = {
  item: AboutFatalCrisisItem;
};

export default function AboutFatalCrisisIconCard({ item }: AboutFatalCrisisIconCardProps) {
  return (
    <article className="flex flex-col items-center gap-4">
      <div className="flex aspect-square w-full max-w-[140px] items-center justify-center rounded-2xl bg-[#F2F2F2]">
        <Image
          src={item.icon}
          alt=""
          width={56}
          height={56}
          className="h-12 w-12 object-contain lg:h-14 lg:w-14"
          aria-hidden
        />
      </div>
      <p className="text-center text-sm leading-normal text-black lg:text-base">{item.label}</p>
    </article>
  );
}
