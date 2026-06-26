import MissionVisionTextPanel from "@/components/mission-vision/MissionVisionTextPanel";
import { visionPanel } from "@/data/missionVision";

export default function OurVisionPanel() {
  return <MissionVisionTextPanel {...visionPanel} />;
}
