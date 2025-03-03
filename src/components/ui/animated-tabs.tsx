
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content: React.ReactNode;
};

export type AnimatedTabsProps = {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
};

export const AnimatedTabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.value || "");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  return (
    <div className={cn("w-full", containerClassName)}>
      <div className="flex flex-wrap items-center gap-4 border-b border-neutral-800 relative overflow-hidden mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            onMouseEnter={() => setHoveredTab(tab.value)}
            onMouseLeave={() => setHoveredTab(null)}
            className={cn(
              "relative px-4 py-2 font-medium text-sm sm:text-base transition-colors font-syne",
              activeTab === tab.value
                ? "text-white " + activeTabClassName
                : "text-neutral-400 hover:text-neutral-200 " + tabClassName
            )}
          >
            {activeTab === tab.value && (
              <motion.div
                layoutId="active-tab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-custom-orange"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {hoveredTab === tab.value && hoveredTab !== activeTab && (
              <motion.div
                layoutId="hovered-tab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-custom-orange/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {tab.title}
          </button>
        ))}

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-custom-orange/20 to-transparent animate-pulse-slow" />
      </div>

      <div className={cn("", contentClassName)}>
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={cn("", { hidden: activeTab !== tab.value })}
          >
            {activeTab === tab.value && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
