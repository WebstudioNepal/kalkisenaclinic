import AppIcon from "@/components/Icon";

type ContactInfoCardProps = {
  label: string;
  value: string;
  icon: string;
};

export default function ContactInfoCard({ label, value, icon }: ContactInfoCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
        <AppIcon icon={icon} width={20} height={20} className="text-white" aria-hidden />
      </div>

      <div className="min-w-0">
        <p className="text-sm text-white/70">{label}</p>
        <p className="mt-0.5 text-base leading-normal text-white">{value}</p>
      </div>
    </div>
  );
}
