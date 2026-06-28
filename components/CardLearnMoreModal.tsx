"use client";

import Image from "next/image";
import { useEffect } from "react";

const CARD_POPUP_IMAGE = "/images/cardpopup.png";
const CARD_POPUP_WIDTH = 592;
const CARD_POPUP_HEIGHT = 925;

type CardLearnMoreModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CardLearnMoreModal({ open, onClose }: CardLearnMoreModalProps) {
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
        className="relative w-full max-w-[592px]"
        role="dialog"
        aria-modal="true"
        aria-label="Download the Kalki Sena Super App"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 size-10 cursor-pointer opacity-0 sm:right-4 sm:top-4"
          aria-label="Close popup"
        />

        <Image
          src={CARD_POPUP_IMAGE}
          alt='Scan the QR code to download the "Kalki Sena" Super App'
          width={CARD_POPUP_WIDTH}
          height={CARD_POPUP_HEIGHT}
          className="h-auto w-full rounded-2xl"
          priority
        />
      </div>
    </div>
  );
}
