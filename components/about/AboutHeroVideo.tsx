"use client";

import { useEffect, useRef } from "react";

const ABOUT_HERO_VIDEO_SRC = "/video/about-us-hero.mp4";

export default function AboutHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const soundEnabledRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1;

    const setSoundForVisibility = (isVisible: boolean) => {
      if (!soundEnabledRef.current) return;
      video.muted = !isVisible;
    };

    const playWithSound = async () => {
      video.muted = false;

      try {
        await video.play();
        soundEnabledRef.current = true;
        return;
      } catch {
        video.muted = true;

        try {
          await video.play();
        } catch {
          return;
        }
      }

      const enableSound = () => {
        soundEnabledRef.current = true;
        video.muted = false;
        void video.play();

        const heroSection = video.closest("section");
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        setSoundForVisibility(isVisible);
      };

      document.addEventListener("click", enableSound, { once: true });
      document.addEventListener("keydown", enableSound, { once: true });
      document.addEventListener("touchstart", enableSound, { once: true });
    };

    void playWithSound();

    const heroSection = video.closest("section");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSoundForVisibility(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      playsInline
      className="absolute inset-0 h-full min-h-[inherit] w-full object-cover opacity-100"
      aria-hidden
    >
      <source src={ABOUT_HERO_VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
