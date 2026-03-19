"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { ProjectsGrid } from "./ProjectsGrid";
// import { ExperienceTimeline } from './ExperienceTimeline';
// import { SkillsPanel } from './SkillsPanel';
import { ContactBar } from "./ContactBar";
import { LoadingScreen } from "./LoadingScreen";

export function DashboardView() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <AnimatePresence>
        {/* <LoadingScreen onLoadComplete={() => setIsLoading(false)} /> */}
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 md:p-6 lg:p-8 bg-black"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl -top-48 -left-48"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl -bottom-48 -right-48"
        />
      </div>

      <div className="max-w-400 mx-auto relative z-10">
        {/* Top Row - Profile + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
          {/* <div className="col-span-1 h-100">
            <ContactBar />
          </div> */}
          <div className="col-span-2">
            <ProfileCard
              onHover={(isHovered) =>
                setHoveredSection(isHovered ? "profile" : null)
              }
            />
          </div>

          <div className="col-span-2">
            <ProjectsGrid
              onHover={(isHovered) =>
                setHoveredSection(isHovered ? "projects" : null)
              }
            />
          </div>
        </div>

        {/* Bottom Row - Experience + Contact */}
        <div className="grid grid-cols-1 gap-4">
          {/* <ExperienceTimeline */}
          {/*   onHover={(isHovered) => */}
          {/*     setHoveredSection(isHovered ? "experience" : null) */}
          {/*   } */}
          {/* /> */}
        </div>
      </div>
    </motion.div>
  );
}
