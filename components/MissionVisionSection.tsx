"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PageContainer from "@/components/PageContainer";
import MissionTabs from "@/components/mission-vision/MissionTabs";
import OurMissionPanel from "@/components/mission-vision/OurMissionPanel";
import OurVisionPanel from "@/components/mission-vision/OurVisionPanel";
import WhoWeArePanel from "@/components/mission-vision/WhoWeArePanel";
import { MISSION_VISION_PANEL_MIN_HEIGHT, type TabId } from "@/data/missionVision";

const panelTransition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

export default function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState<TabId>("who-we-are");
  const shouldReduceMotion = useReducedMotion();

  const panelMotionProps = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1, x: 0 }, exit: { opacity: 1, x: 0 } }
    : {
        initial: { opacity: 0, x: 16 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -16 },
        transition: panelTransition,
      };

  return (
    <section id="who-we-are" className="scroll-mt-8 bg-white py-8">
      <PageContainer>
        <h2 className="font-heading text-[62px] leading-none text-black">Our Mission & Visions</h2>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-16">
          <MissionTabs activeTab={activeTab} onChange={setActiveTab} />

          <div className={`min-w-0 flex-1 ${MISSION_VISION_PANEL_MIN_HEIGHT}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                role="tabpanel"
                id={`mission-panel-${activeTab}`}
                aria-labelledby={`mission-tab-${activeTab}`}
                className="h-full w-full"
                {...panelMotionProps}
              >
                {activeTab === "who-we-are" && <WhoWeArePanel />}
                {activeTab === "our-mission" && <OurMissionPanel />}
                {activeTab === "our-vision" && <OurVisionPanel />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
