import Image from "next/image";
import { geoMapMarkers } from "@/data/geoCenters";

export default function GeoCentersMap() {
  return (
    <div className="relative aspect-839/496 w-full">
      <Image
        src="/images/mapnepal.svg"
        alt="Nepal map showing clinic center locations"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />

      {geoMapMarkers.map((marker) => (
        <span
          key={marker.id}
          className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{ left: marker.left, top: marker.top }}
          aria-hidden
        />
      ))}
    </div>
  );
}
