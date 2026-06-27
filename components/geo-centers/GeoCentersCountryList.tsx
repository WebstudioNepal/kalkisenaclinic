import Image from "next/image";
import type { GeoCountry } from "@/data/geoCenters";

type GeoCentersCountryListProps = {
  countries: GeoCountry[];
};

export default function GeoCentersCountryList({ countries }: GeoCentersCountryListProps) {
  return (
    <ul className="flex flex-col gap-7">
      {countries.map((country) => (
        <li key={country.id} className="flex items-center gap-3">
          <Image
            src="/images/bullet.png"
            alt=""
            width={14}
            height={14}
            className="size-3.5 shrink-0 object-contain"
            aria-hidden
          />
          <span className="text-base text-black/70">{country.name}</span>
        </li>
      ))}
    </ul>
  );
}
