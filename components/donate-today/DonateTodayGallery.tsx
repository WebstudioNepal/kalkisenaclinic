import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  donateTodayCtaLabel,
  donateTodayDescriptionLines,
  donateTodayGalleryBorderRadius,
  donateTodayGalleryImageHeight,
  donateTodayGalleryImageWidth,
  donateTodayHeading,
  donateTodayLayout,
  donateTodayPhotos,
} from "@/data/donateToday";

export default function DonateTodayGallery() {
  return (
    <div
      className="relative mx-auto hidden lg:block"
      style={{ width: donateTodayLayout.width, height: donateTodayLayout.height }}
    >
      <div className="absolute left-1/2 top-0 z-10 w-full max-w-[920px] -translate-x-1/2 text-center">
        <h2 className="font-heading whitespace-nowrap text-[62px] leading-[1.05] text-black">
          {donateTodayHeading}
        </h2>
        <p className="mt-6 text-base leading-normal text-black">
          {donateTodayDescriptionLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <Button className="mt-8 h-[51px] rounded-lg px-6 text-base font-medium">
          {donateTodayCtaLabel}
        </Button>
      </div>

      {donateTodayPhotos.map((photo) => (
        <div
          key={photo.id}
          className="absolute overflow-hidden"
          style={{
            left: photo.left,
            top: photo.top,
            width: donateTodayGalleryImageWidth,
            height: donateTodayGalleryImageHeight,
            borderRadius: donateTodayGalleryBorderRadius,
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes={`${donateTodayGalleryImageWidth}px`}
          />
        </div>
      ))}
    </div>
  );
}
