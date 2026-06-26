"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MISSION_VISION_PANEL_MIN_HEIGHT, staticQuote, teamMembers, whoWeAreParagraphs } from "@/data/missionVision";

const ROTATE_INTERVAL_MS = 5000;
const fadeTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

export default function WhoWeArePanel() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const member = teamMembers[activeMemberIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveMemberIndex((current) => (current + 1) % teamMembers.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  const imageMotionProps = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1, x: 0 }, exit: { opacity: 1, x: 0 } }
    : {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
        transition: fadeTransition,
      };

  const nameMotionProps = shouldReduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 }, exit: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: fadeTransition,
      };

  return (
    <div
      className={`flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12 ${MISSION_VISION_PANEL_MIN_HEIGHT}`}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-heading text-[36px] leading-none text-black">About Us</h3>

        <div className="mt-4 w-full space-y-3">
          {whoWeAreParagraphs.map((paragraph) => (
            <p key={paragraph} className="w-full text-justify text-base leading-normal text-black/70">
              {paragraph}
            </p>
          ))}
        </div>

        <button
          type="button"
          className="mt-5 h-[51px] w-fit rounded-lg border border-black/30 px-6 text-base font-medium text-black transition hover:bg-black/[0.04]"
        >
          Know More
        </button>

        <p className="font-heading mt-auto pt-6 text-[36px] italic leading-snug text-black/70 lg:pt-8">
          &ldquo;{staticQuote}&rdquo;
        </p>
      </div>
      <div className="flex w-full max-w-[353px] shrink-0 flex-col lg:items-start">
        <AnimatePresence mode="wait">
          <motion.div key={member.id} {...imageMotionProps} className="w-full">
            <div className="relative h-[340px] w-full overflow-hidden rounded-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="353px"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={member.id}
            {...nameMotionProps}
            className="mt-6 flex items-baseline justify-start gap-2 text-left"
          >
            <span className="font-heading text-[26px] italic text-black/70">- by</span>
            <span className="text-base font-medium text-[#002CCC]">
              {member.displayName ?? member.name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
