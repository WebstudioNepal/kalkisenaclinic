import Image from "next/image";
import type { WhatWeDoService } from "@/data/whatWeDo";

type WhatWeDoCardProps = {
  service: WhatWeDoService;
};

export default function WhatWeDoCard({ service }: WhatWeDoCardProps) {
  return (
    <article
      className={`flex flex-col justify-center rounded-xl border border-[#D3D3D3] bg-white/50 p-6 backdrop-blur-[23px] ${
        service.tall ? "min-h-[230px]" : "min-h-[196px]"
      }`}
    >
      <div className="flex flex-col gap-4">
        <Image
          src={service.icon}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 shrink-0"
          aria-hidden
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold leading-8 text-[#080A0C]">{service.title}</h3>
          <p className="max-w-[263px] text-base leading-6 text-[#313B45]">{service.description}</p>
        </div>
      </div>
    </article>
  );
}
