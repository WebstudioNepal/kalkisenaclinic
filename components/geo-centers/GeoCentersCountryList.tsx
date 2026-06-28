import Image from "next/image";
import type { GeoCountry } from "@/data/geoCenters";

type GeoCentersCountryListProps = {
  countries: GeoCountry[];
  variant?: "list" | "compact-grid";
  className?: string;
};

export default function GeoCentersCountryList({
  countries,
  variant = "list",
  className = "",
}: GeoCentersCountryListProps) {
  const isCompactGrid = variant === "compact-grid";

  return (
    <ul
      className={
        isCompactGrid
          ? `grid grid-cols-2 gap-x-3 gap-y-2.5 ${className}`.trim()
          : `flex flex-col gap-5 xl:gap-7 ${className}`.trim()
      }
    >
      {countries.map((country) => (
        <li
          key={country.id}
          className={`flex items-center ${isCompactGrid ? "gap-2" : "gap-3"}`}
        >
          <Image
            src="/images/bullet.png"
            alt=""
            width={14}
            height={14}
            className={`shrink-0 object-contain ${isCompactGrid ? "size-3" : "size-3.5"}`}
            aria-hidden
          />
          <span
            className={`leading-tight text-black/70 ${
              isCompactGrid ? "text-sm" : "text-base"
            }`}
          >
            {country.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
