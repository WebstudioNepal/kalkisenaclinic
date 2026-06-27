"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { configureLeafletDefaultIcon } from "@/lib/leaflet";

type ContactLeafletMapProps = {
  lat: number;
  lng: number;
  zoom: number;
  interactive?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function ContactLeafletMap({
  lat,
  lng,
  zoom,
  interactive = true,
  className = "",
  ariaLabel = "Clinic location map",
}: ContactLeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    configureLeafletDefaultIcon();

    const map = L.map(container, {
      center: [lat, lng],
      zoom,
      zoomControl: interactive,
      dragging: interactive,
      scrollWheelZoom: interactive,
      doubleClickZoom: interactive,
      touchZoom: interactive,
      boxZoom: interactive,
      keyboard: interactive,
      attributionControl: interactive,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([lat, lng]).addTo(map);

    mapRef.current = map;

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, [interactive, lat, lng, zoom]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${className}`.trim()}
      role="img"
      aria-label={ariaLabel}
    />
  );
}
