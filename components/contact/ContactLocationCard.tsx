"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import AppIcon from "@/components/Icon";
import ContactMapModal from "@/components/contact/ContactMapModal";
import { contactAddress, contactLocationCoords } from "@/data/contact";

const ContactLeafletMap = dynamic(() => import("@/components/contact/ContactLeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-white/5 text-xs text-white/60">
      Loading map...
    </div>
  ),
});

export default function ContactLocationCard() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <>
      <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
        <button
          type="button"
          onClick={() => {
            setMapOpen(true);
          }}
          className="group relative size-[100px] shrink-0 cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/10 transition hover:border-white/30 hover:ring-2 hover:ring-white/20"
          aria-label={`Open map for ${contactAddress.value}`}
        >
          <ContactLeafletMap
            lat={contactLocationCoords.lat}
            lng={contactLocationCoords.lng}
            zoom={contactLocationCoords.previewZoom}
            interactive={false}
            ariaLabel={`Map preview for ${contactAddress.value}`}
          />

          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
            <AppIcon
              icon="mdi:arrow-expand"
              width={22}
              height={22}
              className="text-white opacity-0 transition group-hover:opacity-100"
              aria-hidden
            />
          </span>
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-sm text-white/70">{contactAddress.label}</p>
          <p className="mt-1 text-base leading-normal text-white">{contactAddress.value}</p>
        </div>
      </div>

      <ContactMapModal open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  );
}
