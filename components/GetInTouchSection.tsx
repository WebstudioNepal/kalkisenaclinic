import Image from "next/image";
import GetInTouchForm from "@/components/get-in-touch/GetInTouchForm";
import PageContainer from "@/components/PageContainer";
import { getInTouchHeading, getInTouchSubtext } from "@/data/getInTouch";

export default function GetInTouchSection() {
  return (
    <section id="get-in-touch" className="scroll-mt-8 relative overflow-hidden bg-[#002CCC] py-8 sm:py-10">
      <Image
        src="/images/material-symbols_add.png"
        alt=""
        width={558}
        height={963}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-auto w-[min(420px,55vw)] -translate-y-1/2 opacity-[0.1]"
      />

      <PageContainer className="relative z-10">
        <h2 className="font-heading text-[36px] leading-none text-white sm:text-[50px]">
          {getInTouchHeading}
        </h2>

        <div className="mt-6 border-t border-white/20" />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <p className="max-w-lg text-base leading-normal text-white">
            {getInTouchSubtext}
          </p>

          <GetInTouchForm />
        </div>
      </PageContainer>
    </section>
  );
}
