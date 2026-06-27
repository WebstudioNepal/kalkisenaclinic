import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactLocationCard from "@/components/contact/ContactLocationCard";
import ContactUsForm from "@/components/contact/ContactUsForm";
import Navbar from "@/components/Navbar";
import PageContainer from "@/components/PageContainer";
import {
  contactEmail,
  contactHeading,
  contactPhone,
  contactSubtext,
} from "@/data/contact";

export default function ContactUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#00176A] pb-12 sm:pb-16">
      <div className="pointer-events-none absolute left-[-189px] top-[269px] h-[743px] w-[743px] rounded-full bg-black opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[318px] bg-gradient-to-b from-black/60 via-[rgba(0,23,106,0.3)] to-transparent" />

      <div className="pointer-events-none absolute left-[100px] top-[123px] hidden h-[63px] w-[63px] rounded-full bg-white/10 xl:block" />
      <div className="pointer-events-none absolute left-[797px] top-[231px] hidden h-[471px] w-[471px] rounded-full border-[44px] border-white/10 xl:block" />
      <div className="pointer-events-none absolute left-[1196px] top-[155px] hidden h-[161px] w-[161px] rounded-full bg-white/10 xl:block" />

      <PageContainer className="relative z-10 pt-[41px]">
        <div className="w-full">
          <Navbar variant="dark" logoHref="/" />
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-heading text-[36px] leading-tight text-white sm:text-[50px]">
              {contactHeading}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-normal text-white/90">
              {contactSubtext}
            </p>

            <div className="mt-8 space-y-4">
              <ContactInfoCard
                label={contactPhone.label}
                value={contactPhone.value}
                icon={contactPhone.icon}
              />
              <ContactInfoCard
                label={contactEmail.label}
                value={contactEmail.value}
                icon={contactEmail.icon}
              />
              <ContactLocationCard />
            </div>
          </div>

          <ContactUsForm />
        </div>
      </PageContainer>
    </section>
  );
}
