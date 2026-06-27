import WhyDonateContent from "@/components/why-donate/WhyDonateContent";

export default function WhyDonateSection() {
  return (
    <section className="relative overflow-hidden bg-[#00176A] py-8">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 70% 50%, rgba(0, 44, 204, 0.35) 0%, rgba(0, 23, 106, 0) 70%)",
        }}
      />

      <WhyDonateContent />
    </section>
  );
}
