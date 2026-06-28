import { type TextPanelContent, MISSION_VISION_PANEL_MIN_HEIGHT } from "@/data/missionVision";

type MissionVisionTextPanelProps = TextPanelContent;

export default function MissionVisionTextPanel({
  title,
  intro,
  bullets,
  quote,
  theme,
}: MissionVisionTextPanelProps) {
  const isDark = theme === "dark";
  const headingClass = isDark ? "text-white" : "text-black";
  const bodyClass = isDark ? "text-white/80" : "text-black/70";
  const quoteClass = isDark ? "text-white/80" : "text-black/70";

  return (
    <div className={`flex w-full flex-col ${MISSION_VISION_PANEL_MIN_HEIGHT}`}>
      <h3 className={`font-heading text-[36px] leading-none ${headingClass}`}>{title}</h3>

      <div className="mt-6 w-full space-y-4">
        {intro.map((paragraph, index) => (
          <p
            key={`intro-${index}`}
            className={`w-full text-justify text-base leading-normal ${bodyClass}`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <ul className={`mt-6 w-full list-disc space-y-1 pl-5 text-base leading-normal ${bodyClass}`}>
        {bullets.map((item, index) => (
          <li key={`bullet-${index}`} className="text-justify">
            {item}
          </li>
        ))}
      </ul>

      <p
        className={`font-heading mt-auto w-full pt-10 text-left text-[36px] italic leading-snug lg:pt-12 ${quoteClass}`}
      >
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}
