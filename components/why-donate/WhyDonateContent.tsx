import PageContainer from "@/components/PageContainer";
import AppStoreButtons from "@/components/why-donate/AppStoreButtons";
import QrDownloadBlock from "@/components/why-donate/QrDownloadBlock";
import WhyDonateIllustration from "@/components/why-donate/WhyDonateIllustration";
import {
  whyDonateDownloadIntro,
  whyDonateHeading,
  whyDonateReasons,
} from "@/data/whyDonate";

export default function WhyDonateContent() {
  return (
    <PageContainer className="relative z-10">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-16">
        <div className="min-w-0 text-white">
          <h2 className="font-heading text-[36px] leading-none sm:text-[50px]">
            {whyDonateHeading}
          </h2>

          <ol className="mt-8 list-none space-y-4 text-base leading-normal">
            {whyDonateReasons.map((reason, index) => (
              <li key={reason} className="flex gap-2">
                <span className="shrink-0 font-medium">{index + 1}.</span>
                <span>{reason}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
            <div>
              <p className="text-base leading-normal">{whyDonateDownloadIntro}</p>
              <div className="mt-4">
                <AppStoreButtons />
              </div>
            </div>

            <QrDownloadBlock />
          </div>
        </div>

        <WhyDonateIllustration />
      </div>
    </PageContainer>
  );
}
