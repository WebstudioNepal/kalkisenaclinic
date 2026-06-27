"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import AppIcon from "@/components/Icon";
import { contactAddress, contactLocationCoords } from "@/data/contact";

const ContactLeafletMap = dynamic(() => import("@/components/contact/ContactLeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-white/5 text-sm text-white/60">
      Loading map...
    </div>
  ),
});

type ContactMapModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactMapModal({ open, onClose }: ContactMapModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#00176A] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-map-title"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <h2 id="contact-map-title" className="font-heading text-2xl text-white">
              {contactAddress.label}
            </h2>
            <p className="mt-1 text-sm text-white/80">{contactAddress.value}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Close map"
          >
            <AppIcon icon="mdi:close" width={20} height={20} aria-hidden />
          </button>
        </div>

        <div className="h-[min(70vh,480px)] w-full">
          <ContactLeafletMap
            lat={contactLocationCoords.lat}
            lng={contactLocationCoords.lng}
            zoom={contactLocationCoords.modalZoom}
            interactive
            ariaLabel={`Expanded map showing ${contactAddress.value}`}
          />
        </div>
      </div>
    </div>
  );
}
