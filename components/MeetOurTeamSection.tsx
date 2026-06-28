"use client";

import { useState } from "react";
import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { meetOurTeamMembers } from "@/data/meetOurTeam";

type MeetOurTeamSectionProps = {
  id?: string;
};

export default function MeetOurTeamSection({ id }: MeetOurTeamSectionProps) {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  return (
    <section id={id} className="scroll-mt-8 overflow-x-hidden bg-white py-6 sm:py-8">
      <PageContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="font-heading text-[36px] leading-none text-black sm:text-[42px] lg:text-[50px]">
              Meet our
            </h2>
            <Image
              src="/images/meetourlogo.png"
              alt=""
              width={80}
              height={80}
              className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              aria-hidden
            />
          </div>

          <Button
            variant="outline"
            className="h-[51px] w-fit self-start px-6 text-base font-medium text-black/60 hover:text-black sm:self-auto"
          >
            Know More
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-2 place-items-center gap-4 sm:mt-12 sm:gap-6 md:gap-8 xl:flex xl:flex-wrap xl:items-start xl:justify-between">
          {meetOurTeamMembers.map((member) => {
            const isSelected = selectedMemberId === member.id;

            return (
              <button
                key={member.id}
                type="button"
                aria-pressed={isSelected}
                aria-label={member.imageAlt}
                onClick={() => setSelectedMemberId(isSelected ? null : member.id)}
                className="w-full max-w-[160px] cursor-pointer border-0 bg-transparent p-0 sm:max-w-[200px] md:max-w-[240px] xl:w-[292px] xl:max-w-[292px] xl:shrink-0"
              >
                <Image
                  src={isSelected ? member.imageClicked : member.imageNotClicked}
                  alt={member.imageAlt}
                  width={292}
                  height={379}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 45vw, (max-width: 1280px) 30vw, 292px"
                />
              </button>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
