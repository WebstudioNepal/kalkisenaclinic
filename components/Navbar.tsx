import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  donateNavHref,
  heroNavHref,
  primaryNavItems,
} from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="inline-flex w-fit items-center gap-[72px] rounded-2xl bg-white px-5 py-2.5 backdrop-blur-[35px]">
      <a href={heroNavHref} aria-label="Kalkisena Clinic home">
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
              className="block px-4 py-2.5 text-base font-normal text-black transition hover:text-[#002CCC]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Button variant="secondary" className="h-[51px] px-6 text-base font-medium">
          Login
        </Button>
        <a
          href={donateNavHref}
          className={buttonVariants({
            variant: "outline",
            className: "h-[51px] border-black px-6 text-base font-medium",
          })}
        >
          Donate Now
        </a>
      </div>
    </nav>
  );
}
