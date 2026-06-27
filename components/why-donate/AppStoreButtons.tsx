import AppIcon from "@/components/Icon";
import { whyDonateStoreButtons } from "@/data/whyDonate";

export default function AppStoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {whyDonateStoreButtons.map((store) => (
        <a
          key={store.id}
          href={store.href}
          className="inline-flex h-[51px] items-center gap-2 rounded-lg bg-[#00104D] px-5 text-base font-medium text-white transition hover:bg-[#001a6e]"
        >
          <AppIcon icon={store.icon} width={22} height={22} aria-hidden />
          {store.label}
        </a>
      ))}
    </div>
  );
}
