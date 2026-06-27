import Image from "next/image";
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
  const isDark = variant === "dark";

  return (
    <nav
      className={cn(
        "inline-flex w-fit items-center gap-[72px] rounded-2xl px-5 py-2.5 backdrop-blur-[35px]",
        isDark ? "bg-white/10" : "bg-white",
      )}
    >
      <a href={logoHref} aria-label="Kalkisena Clinic home">
        <Image
          src="/images/logo-72e77c.png"
          alt="Kalkisena Clinic"
          width={66}
          height={69}
          className="h-[69px] w-[66px] shrink-0 object-contain"
          priority
        />
      </a>

      <ul className="hidden items-center gap-[3px] lg:flex">
        {primaryNavItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={cn(
                "block px-4 py-2.5 text-base font-normal transition",
                isDark
                  ? "text-white hover:text-white/80"
                  : "text-black hover:text-[#002CCC]",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Button
          variant={isDark ? "ghost" : "secondary"}
          className={cn(
            "h-[51px] px-6 text-base font-medium",
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
              "h-[51px] px-6 text-base font-medium",
              isDark
                ? "border-white text-white hover:bg-white/10 hover:text-white"
                : "border-black",
            ),
          })}
        >
          Donate Now
        </a>
      </div>
    </nav>
  );
}
