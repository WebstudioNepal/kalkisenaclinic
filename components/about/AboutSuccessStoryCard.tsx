type AboutSuccessStoryCardProps = {
  number: number;
  text: string;
};

export default function AboutSuccessStoryCard({ number, text }: AboutSuccessStoryCardProps) {
  return (
    <article className="flex items-center gap-5 rounded-2xl bg-[#F2F2F2] px-6 py-5">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#002CCC] text-base font-medium text-white"
        aria-hidden
      >
        {number}
      </span>
      <p className="text-base leading-normal text-black/60">{text}</p>
    </article>
  );
}
