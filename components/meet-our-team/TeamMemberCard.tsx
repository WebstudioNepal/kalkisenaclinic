import Image from "next/image";

export type TeamMemberCardProps = {
  number: string;
  image: string;
  imageAlt: string;
  role: string;
  name: string;
  isActive?: boolean;
};

export default function TeamMemberCard({
  number,
  image,
  imageAlt,
  role,
  name,
  isActive = false,
}: TeamMemberCardProps) {
  return (
    <article
      data-active={isActive}
      className={`group relative w-full overflow-hidden rounded-[24px] border-2 bg-[#F2F2F2] transition-colors ${
        isActive
          ? "border-[#002CCC]"
          : "border-[#E8E8E8] hover:border-[#002CCC]"
      }`}
    >
      <div className="relative h-[380px] w-full">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover grayscale"
          sizes="298px"
        />

        <div
          className="absolute left-0 top-0 z-10 rounded-br-[28px] bg-white pl-4 pr-6 pb-4 pt-3"
          aria-hidden
        >
          <span className="text-[28px] font-bold leading-none text-[#002CCC]">{number}</span>
        </div>

        <div className="absolute bottom-5 left-1/2 z-10 w-[calc(100%-40px)] -translate-x-1/2 rounded-2xl bg-[#F8F8F8] px-4 py-3 text-center">
          <p className="text-sm leading-snug text-black">{role}</p>
          <p className="mt-1 text-base font-medium leading-snug text-black">{name}</p>
        </div>
      </div>
    </article>
  );
}
