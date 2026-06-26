"use client";

import AppIcon from "@/components/Icon";
import { tabs, type TabId } from "@/data/missionVision";
import { motion } from "framer-motion";

const TAB_HEIGHT = 84;

type MissionTabsProps = {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
};

export default function MissionTabs({ activeTab, onChange }: MissionTabsProps) {
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
      className="relative w-[248px] shrink-0"
      onKeyDown={handleKeyDown}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[71px] w-full border-b-2 border-r-4 border-[#002CCC]"
        animate={{ y: activeIndex * TAB_HEIGHT }}
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
            className="relative flex h-[84px] w-full items-center gap-3 pl-0 pr-4 text-left"
          >
            <span className="font-heading text-[36px] leading-none text-black">{tab.label}</span>
            <AppIcon
              icon={isActive ? "mdi:chevron-right" : "mdi:chevron-down"}
              width={16}
              height={isActive ? 42 : 30}
              className="shrink-0 text-black"
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
