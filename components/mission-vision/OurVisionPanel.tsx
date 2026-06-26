import { visionCopy } from "@/data/missionVision";

export default function OurVisionPanel() {
  return (
    <div className="max-w-[806px]">
      <h3 className="font-heading text-[36px] leading-none text-black">Our Vision</h3>
      <p className="mt-6 text-base leading-normal text-black/70">{visionCopy}</p>
    </div>
  );
}
