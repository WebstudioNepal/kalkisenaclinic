import Image from "next/image";
import type { WhatWeDoService } from "@/data/whatWeDo";

type WhatWeDoCardProps = {
  service: WhatWeDoService;
};

export default function WhatWeDoCard({ service }: WhatWeDoCardProps) {
  return (
    <article
      className={`flex flex-col justify-center rounded-xl border border-[#D3D3D3] bg-white/50 p-4 backdrop-blur-[23px] sm:p-5 lg:p-6 ${
        service.tall ? "min-h-0 sm:min-h-[230px]" : "min-h-0 sm:min-h-[196px]"
      }`}
    >
      <div className="flex gap-3 sm:flex-col sm:gap-4">
        <Image
          src={service.icon}
          alt=""
          width={24}
          height={24}
          className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h3 className="text-lg font-bold leading-7 text-[#080A0C] sm:text-xl sm:leading-8">
              {service.title}
            </h3>
            <p className="max-w-none text-base leading-6 text-[#313B45] sm:max-w-[263px]">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
