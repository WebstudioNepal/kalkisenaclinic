"use client";

import { useEffect, useState } from "react";
import AppIcon from "@/components/Icon";
import { tabs, type TabId } from "@/data/missionVision";
import { motion } from "framer-motion";

const DESKTOP_TAB_HEIGHT = 84;
const DESKTOP_INDICATOR_HEIGHT = 71;
const MOBILE_TAB_HEIGHT = 48;
const MOBILE_INDICATOR_HEIGHT = 40;

type MissionTabsProps = {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
};

function useTabMetrics() {
  const [metrics, setMetrics] = useState({
    tabHeight: DESKTOP_TAB_HEIGHT,
    indicatorHeight: DESKTOP_INDICATOR_HEIGHT,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const update = () => {
      setMetrics(
        mediaQuery.matches
          ? { tabHeight: MOBILE_TAB_HEIGHT, indicatorHeight: MOBILE_INDICATOR_HEIGHT }
          : { tabHeight: DESKTOP_TAB_HEIGHT, indicatorHeight: DESKTOP_INDICATOR_HEIGHT },
      );
    };

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return metrics;
}

export default function MissionTabs({ activeTab, onChange }: MissionTabsProps) {
  const { tabHeight, indicatorHeight } = useTabMetrics();
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (activeIndex + direction + tabs.length) % tabs.length;
    onChange(tabs[nextIndex].id);
  };

  return (
    <div
      role="tablist"
      aria-label="Mission and vision sections"
      className="relative w-full shrink-0 lg:w-[248px]"
      onKeyDown={handleKeyDown}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-full border-b-2 border-r-4 border-[#002CCC] lg:h-[71px]"
        style={{ height: indicatorHeight }}
        animate={{ y: activeIndex * tabHeight }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />

      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`mission-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`mission-panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className="relative flex h-12 w-full items-center justify-between gap-2 text-left lg:h-[84px] lg:justify-start lg:gap-3 lg:pr-4"
          >
            <span className="font-heading text-2xl leading-none text-black lg:text-[36px]">
              {tab.label}
            </span>
            <AppIcon
              icon={isActive ? "mdi:chevron-right" : "mdi:chevron-down"}
              width={14}
              height={isActive ? 20 : 16}
              className="shrink-0 text-black lg:hidden"
              aria-hidden
            />
            <AppIcon
              icon={isActive ? "mdi:chevron-right" : "mdi:chevron-down"}
              width={16}
              height={isActive ? 42 : 30}
              className="hidden shrink-0 text-black lg:block"
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
