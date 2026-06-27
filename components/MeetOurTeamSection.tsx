import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { meetOurTeamMembers } from "@/data/meetOurTeam";

export default function MeetOurTeamSection() {
  return (
    <section className="bg-white py-16">
      <PageContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-[50px] leading-none text-black">Meet our</h2>
            <Image
              src="/images/meetourlogo.png"
              alt=""
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 object-contain"
              aria-hidden
            />
          </div>

          <Button
            variant="outline"
            className="h-[51px] px-6 text-base font-medium text-black/60 hover:text-black"
          >
            Know More
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-8 xl:justify-between">
          {meetOurTeamMembers.map((member) => (
            <Image
              key={member.id}
              src={member.image}
              alt={member.imageAlt}
              width={292}
              height={379}
              className="h-auto w-[292px] shrink-0"
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
