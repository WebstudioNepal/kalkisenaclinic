import Image from "next/image";
import { cn } from "@/lib/utils";

type AboutProfilePortraitProps = {
  src: string;
  alt: string;
  theme: "light" | "dark";
  variant?: "feathered" | "rectangular" | "glow" | "cutout";
  grayscale?: boolean;
};

export default function AboutProfilePortrait({
  src,
  alt,
  theme,
  variant = "feathered",
  grayscale = false,
}: AboutProfilePortraitProps) {
  if (variant === "cutout") {
    return (
      <div className="relative mx-auto flex h-[320px] w-full max-w-[300px] items-end justify-center sm:h-[360px] sm:max-w-[340px] lg:mx-0 lg:h-[420px] lg:max-w-[360px]">
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 1024px) 340px, 360px"
            priority
          />
        </div>
      </div>
    );
  }

  if (variant === "rectangular") {
    return (
      <div className="relative mx-auto aspect-[4/5] w-[260px] max-w-full overflow-hidden sm:w-[280px] lg:mx-0 lg:w-full lg:max-w-[360px]">
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover object-top", grayscale && "grayscale")}
          sizes="(max-width: 1024px) 280px, 360px"
        />
      </div>
    );
  }

  if (variant === "glow") {
    return (
      <div className="relative mx-auto flex h-[300px] w-full max-w-[min(100%,300px)] items-end justify-center sm:h-[340px] sm:max-w-[340px] lg:mx-0 lg:h-[380px] lg:w-[380px] lg:max-w-none">
        <div
          className="pointer-events-none absolute inset-0 scale-105"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle, rgba(0, 90, 255, 0.85) 0%, rgba(0, 120, 255, 0.55) 35%, rgba(41, 137, 255, 0.25) 55%, rgba(255, 255, 255, 0) 72%)",
          }}
        />
        <div className="relative z-10 h-[92%] w-[92%]">
          <Image
            src={src}
            alt={alt}
            fill
            className={cn(
              "object-contain object-bottom mix-blend-screen",
              grayscale && "grayscale",
            )}
            sizes="380px"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex h-[340px] w-full max-w-[320px] items-center justify-center lg:mx-0 lg:h-[400px] lg:max-w-[360px]">
      {theme === "light" && (
        <div
          className="pointer-events-none absolute inset-0 scale-110"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0, 44, 204, 0.18) 0%, rgba(0, 44, 204, 0.06) 45%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
      )}

      <div
        className={cn(
          "relative h-full w-full",
          theme === "light" ? "max-w-[280px] lg:max-w-[320px]" : "max-w-[300px] lg:max-w-[340px]",
        )}
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 60% at 50% 45%, black 30%, rgba(0, 0, 0, 0.6) 55%, transparent 72%)",
          maskImage:
            "radial-gradient(ellipse 55% 60% at 50% 45%, black 30%, rgba(0, 0, 0, 0.6) 55%, transparent 72%)",
        }}
      >
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="340px" />
      </div>
    </div>
  );
}
