import AppIcon from "@/components/Icon";
import PageContainer from "@/components/PageContainer";
import NewsletterForm from "@/components/newsletter/NewsletterForm";
import {
  newsletterHeading,
  newsletterSubtext,
} from "@/data/newsletter";

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden rounded-t-[24px] bg-[#002CCC] py-8 sm:py-10">
      <AppIcon
        icon="mdi:star-four-points"
        width={300}
        height={300}
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 text-white opacity-[0.08]"
      />

      <PageContainer className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="font-heading text-[36px] leading-none sm:text-[50px]">
              {newsletterHeading}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-normal">
              {newsletterSubtext}
            </p>
          </div>

          <NewsletterForm />
        </div>
      </PageContainer>
    </section>
  );
}
