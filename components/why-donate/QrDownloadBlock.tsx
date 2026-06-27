import Image from "next/image";
import { whyDonateAssets, whyDonateQrLabels } from "@/data/whyDonate";

export default function QrDownloadBlock() {
  return (
    <div className="flex items-center gap-4">
      <span className="shrink-0 text-base text-white">{whyDonateQrLabels.separator}</span>

      <div className="flex flex-col items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-4 py-3">
        <p className="text-sm leading-tight text-white">{whyDonateQrLabels.scanTitle}</p>

        <Image
          src={whyDonateAssets.qrCode}
          alt="QR code to download the Kalki Sena Super App"
          width={74}
          height={74}
          className="rounded-sm bg-white object-contain"
        />

        <p className="max-w-[140px] text-center text-xs leading-tight text-white/80">
          {whyDonateQrLabels.appName}
        </p>
      </div>
    </div>
  );
}
