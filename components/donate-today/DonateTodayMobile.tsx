import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  donateTodayCtaLabel,
  donateTodayDescriptionLines,
  donateTodayGalleryBorderRadius,
  donateTodayGalleryImageHeight,
  donateTodayGalleryImageWidth,
  donateTodayHeading,
  donateTodayPhotos,
} from "@/data/donateToday";

const mobileAspectRatio = `${donateTodayGalleryImageWidth} / ${donateTodayGalleryImageHeight}`;

export default function DonateTodayMobile() {
  return (
    <div className="flex flex-col items-center gap-8 lg:hidden">
      <div className="max-w-xl text-center">
        <h2 className="font-heading text-[36px] leading-[1.05] text-black sm:whitespace-nowrap sm:text-[42px]">
          {donateTodayHeading}
        </h2>
        <p className="mt-4 text-base leading-normal text-black">
          {donateTodayDescriptionLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <Button className="mt-6 h-[51px] rounded-lg px-6 text-base font-medium">
          {donateTodayCtaLabel}
        </Button>
      </div>

      <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-2xl sm:grid-cols-3">
        {donateTodayPhotos.map((photo) => (
          <div
            key={photo.id}
            className="relative overflow-hidden"
            style={{ aspectRatio: mobileAspectRatio, borderRadius: donateTodayGalleryBorderRadius }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
