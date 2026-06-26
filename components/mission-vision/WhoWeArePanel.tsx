"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { aboutUsBio, staticQuote, teamMembers } from "@/data/missionVision";

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
    <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-heading text-2xl text-black">About Us</h3>

        <p className="mt-6 max-w-[567px] text-base leading-normal text-black/70">{aboutUsBio}</p>

        <button
          type="button"
          className="mt-8 h-[51px] w-fit rounded-lg border border-black/30 px-6 text-base font-medium text-black transition hover:bg-black/[0.04]"
        >
          Know More
        </button>

        <p className="font-heading mt-auto pt-16 text-[36px] italic leading-snug text-black/70 lg:pt-24">
          &ldquo;{staticQuote}&rdquo;
        </p>
      </div>

      <div className="flex w-full max-w-[353px] shrink-0 flex-col lg:items-end">
        <AnimatePresence mode="wait">
          <motion.div key={member.id} {...imageMotionProps} className="w-full">
            <div className="relative h-[410px] w-full overflow-hidden rounded-xl">
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
            className="mt-6 flex items-baseline justify-end gap-2 text-right"
          >
            <span className="font-heading text-[26px] italic text-black/70">- by</span>
            <span className="text-base font-medium text-[#002CCC]">{member.name}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
