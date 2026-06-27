import AppIcon from "@/components/Icon";
import type { FooterContactItem as FooterContactItemType } from "@/data/footer";

type FooterContactItemProps = {
  item: FooterContactItemType;
};

export default function FooterContactItem({ item }: FooterContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
        <AppIcon
          icon={item.icon}
          width={18}
          height={18}
          className="text-[#00C918]"
          aria-hidden
        />
      </div>

      <div className="min-w-0">
        <p className="text-sm text-white/80">{item.label}</p>
        <p className="mt-0.5 text-base leading-normal text-white">{item.value}</p>
      </div>
    </div>
  );
}
