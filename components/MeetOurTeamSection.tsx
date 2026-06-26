"use client";

import { useState } from "react";
import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import TeamMemberCard from "@/components/meet-our-team/TeamMemberCard";
import { meetOurTeamMembers } from "@/data/meetOurTeam";

export default function MeetOurTeamSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="bg-white py-16">
      <PageContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-[50px] leading-none text-black">Meet our</h2>
            <Image
              src="/images/logo-72e77c.png"
              alt=""
              width={48}
              height={50}
              className="h-[50px] w-[48px] shrink-0 object-contain"
              aria-hidden
            />
          </div>

          <button
            type="button"
            className="w-fit rounded-lg border border-black/20 bg-white px-6 py-3 text-base font-medium text-black/60 transition hover:border-black/40 hover:text-black"
          >
            Know More
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 min-[900px]:grid-cols-2 xl:grid-cols-4">
          {meetOurTeamMembers.map((member, index) => (
            <button
              key={member.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="w-full cursor-pointer text-left"
              aria-pressed={activeIndex === index}
            >
              <TeamMemberCard
                number={member.number}
                image={member.image}
                imageAlt={member.imageAlt}
                role={member.role}
                name={member.name}
                isActive={activeIndex === index}
              />
            </button>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
