import Image from "next/image";
import { impactStats } from "@/data/geoCenters";

/** Figma Desktop - 3 design canvas (1440 × 311 banner). */
const BANNER_W = 1440;
const BANNER_H = 311;

/** Page-absolute coords → relative to banner frame (top ≈ 4010px on Desktop - 3). */
const BANNER_TOP = 4010;

const LEAF = {
  width: 384,
  height: 260,
  left: -170,
  top: 4051 - BANNER_TOP,
  rotate: -60.49,
  opacity: 0.3,
};

const PLUS = {
  width: 763.3390438294564,
  height: 763.3390438294564,
  left: 845,
  top: 3784 - BANNER_TOP,
  rotate: -10.02,
  opacity: 1,
};

function figmaPos(value: number, axis: "x" | "y") {
  const base = axis === "x" ? BANNER_W : BANNER_H;
  return `${(value / base) * 100}%`;
}

/** Figma Desktop - 3 impact stats band (Rectangle 823 + decorative plus). */
export default function ImpactStatsBar() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/images/Rectangle 823.png"
        alt=""
        width={BANNER_W}
        height={BANNER_H}
        className="block h-auto w-full"
        aria-hidden
        priority
      />

      <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
        {/* Figma: geo-green-leaf — bottom-left watermark */}
        <div
          className="absolute"
          style={{
            left: figmaPos(LEAF.left, "x"),
            top: figmaPos(LEAF.top, "y"),
            width: figmaPos(LEAF.width, "x"),
            opacity: LEAF.opacity,
            transform: `rotate(${LEAF.rotate}deg)`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src="/images/geo-green-leaf-3abbfb.png"
            alt=""
            width={LEAF.width}
            height={LEAF.height}
            className="h-auto w-full"
          />
        </div>

        {/* Figma: material-symbols:add — right watermark */}
        <div
          className="absolute"
          style={{
            left: figmaPos(PLUS.left, "x"),
            top: figmaPos(PLUS.top, "y"),
            width: figmaPos(PLUS.width, "x"),
            aspectRatio: "1",
            opacity: PLUS.opacity,
            transform: `rotate(${PLUS.rotate}deg)`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src="/images/material-symbols_add.png"
            alt=""
            width={558}
            height={963}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Stats content — inset to clear torn edges */}
      <div className="absolute inset-0 z-10 flex items-center px-[5%] py-10 sm:py-12">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="font-heading text-[50px] leading-none sm:text-[62px]">{stat.value}</p>
              <p className="mt-3 text-2xl leading-normal">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
