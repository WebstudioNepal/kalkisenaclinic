import { missionCopy, missionQuote } from "@/data/missionVision";

export default function OurMissionPanel() {
  return (
    <div className="max-w-[608px] rounded-2xl bg-[#F2F2F2] p-8">
      <h3 className="font-heading text-[36px] leading-none text-black">Our Mission</h3>
      <p className="mt-6 text-base leading-normal text-black/70">{missionCopy}</p>
      <p className="font-heading mt-8 text-[36px] italic leading-snug text-black/70">
        &ldquo;{missionQuote}&rdquo;
      </p>
    </div>
  );
}
