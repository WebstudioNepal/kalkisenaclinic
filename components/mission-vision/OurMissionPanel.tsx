import MissionVisionTextPanel from "@/components/mission-vision/MissionVisionTextPanel";
import { missionPanel } from "@/data/missionVision";

export default function OurMissionPanel() {
  return <MissionVisionTextPanel {...missionPanel} />;
}
