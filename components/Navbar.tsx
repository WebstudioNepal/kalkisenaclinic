"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AppIcon from "@/components/Icon";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  donateNavHref,
  heroNavHref,
  primaryNavItems,
} from "@/data/navigation";
import { cn } from "@/lib/utils";

export type NavbarProps = {
  variant?: "light" | "dark";
  logoHref?: string;
};

export default function Navbar({
  variant = "light",
  logoHref = heroNavHref,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = variant === "dark";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClassName = cn(
    "block rounded-lg px-4 py-2.5 text-base font-normal transition",
    isDark
      ? "text-white hover:bg-white/10 hover:text-white"
      : "text-black hover:bg-black/[0.04] hover:text-[#002CCC]",
  );

  const mobileLinkClassName = cn(
    "block w-full rounded-lg px-4 py-3.5 text-base font-normal transition",
    isDark
      ? "text-white hover:bg-white/10"
      : "text-black hover:bg-black/[0.04] hover:text-[#002CCC]",
  );

  const logo = (size: "mobile" | "desktop") => (
    <Image
      src="/images/logo-72e77c.png"
      alt="Kalkisena Clinic"
      width={66}
      height={69}
      className={cn(
        "shrink-0 object-contain",
        size === "mobile" ? "h-12 w-12" : "h-[69px] w-[66px]",
      )}
      priority
    />
  );

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 md:static md:w-fit md:translate-x-0 md:px-0">
        <nav
          className={cn(
            "relative flex w-full items-center justify-between rounded-2xl backdrop-blur-[35px]",
            "px-4 py-3 md:px-5 md:py-2.5 md:gap-[72px]",
            isDark ? "bg-white/10" : "bg-white",
          )}
        >
          <a
            href={logoHref}
            aria-label="Kalkisena Clinic home"
            className="relative z-10 shrink-0"
          >
            <span className="md:hidden">{logo("mobile")}</span>
            <span className="hidden md:block">{logo("desktop")}</span>
          </a>

          <ul className="hidden items-center gap-[3px] md:flex">
            {primaryNavItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className={linkClassName}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex shrink-0 items-center gap-2 md:gap-3">
            <Button
              variant={isDark ? "ghost" : "secondary"}
              className={cn(
                "hidden h-[51px] px-6 text-base font-medium md:inline-flex",
                isDark && "text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Login
            </Button>
            <a
              href={donateNavHref}
              className={buttonVariants({
                variant: "outline",
                className: cn(
                  "hidden h-[51px] px-6 text-base font-medium md:inline-flex",
                  isDark
                    ? "border-white text-white hover:bg-white/10 hover:text-white"
                    : "border-black",
                ),
              })}
            >
              Donate Now
            </a>
            <button
              type="button"
              id="openMenu"
              className={cn(
                "flex size-10 items-center justify-center rounded-lg transition md:hidden",
                isDark
                  ? "text-white hover:bg-white/10"
                  : "text-black hover:bg-black/[0.04]",
              )}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="menu"
              onClick={() => setMenuOpen(true)}
            >
              <AppIcon icon="mdi:menu" width={24} height={24} aria-hidden />
            </button>
          </div>
        </nav>
      </div>

      <aside
        id="menu"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-full max-w-[320px] flex-col rounded-r-2xl shadow-xl transition-transform duration-300 ease-out md:hidden",
          "backdrop-blur-[35px]",
          isDark ? "bg-[#00176A]/98" : "bg-white",
          menuOpen ? "translate-x-0" : "pointer-events-none -translate-x-full",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "flex items-center justify-between border-b px-4 py-3",
            isDark ? "border-white/10" : "border-black/10",
          )}
        >
          <a
            href={logoHref}
            aria-label="Kalkisena Clinic home"
            onClick={() => setMenuOpen(false)}
          >
            {logo("mobile")}
          </a>
          <button
            type="button"
            id="closeMenu"
            className={cn(
              "flex size-10 items-center justify-center rounded-lg transition",
              isDark
                ? "text-white hover:bg-white/10"
                : "text-black hover:bg-black/[0.04]",
            )}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <AppIcon icon="mdi:close" width={24} height={24} aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="flex flex-col gap-1">
            {primaryNavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={mobileLinkClassName}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={cn(
            "flex flex-col gap-3 border-t p-4",
            isDark ? "border-white/10" : "border-black/10",
          )}
        >
          <Button
            variant={isDark ? "ghost" : "secondary"}
            className={cn(
              "h-[51px] w-full text-base font-medium",
              isDark && "text-white hover:bg-white/10 hover:text-white",
            )}
          >
            Login
          </Button>
          <a
            href={donateNavHref}
            className={buttonVariants({
              variant: "outline",
              className: cn(
                "h-[51px] w-full text-base font-medium",
                isDark
                  ? "border-white text-white hover:bg-white/10 hover:text-white"
                  : "border-black",
              ),
            })}
            onClick={() => setMenuOpen(false)}
          >
            Donate Now
          </a>
        </div>
      </aside>
    </>
  );
}
