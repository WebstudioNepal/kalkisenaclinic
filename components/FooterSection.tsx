import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import FooterContactItem from "@/components/footer/FooterContactItem";
import {
  footerBrandBlurb,
  footerContactHeading,
  footerContactItems,
  footerCopyright,
  footerHelpHeading,
  footerHelpLinks,
  footerLogo,
  footerQuickLinks,
  footerQuickLinksHeading,
} from "@/data/footer";

export default function FooterSection() {
  return (
    <div className="bg-[#002CCC]">
      <footer id="contact-us" className="scroll-mt-8 overflow-hidden rounded-t-[24px]">
        <div className="h-1 rounded-t-[24px] bg-[#00C918]" aria-hidden />
        <div className="bg-[#00176A] pb-12 pt-10 text-white sm:pb-16 sm:pt-12">
          <PageContainer>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
              <div>
                <Image
                  src={footerLogo}
                  alt="Kalkisena Clinic"
                  width={100}
                  height={100}
                  className="h-[100px] w-[100px] object-contain"
                />
                <p className="mt-6 text-base leading-normal">{footerBrandBlurb}</p>
              </div>

              <div>
                <h3 className="font-heading text-[24px] leading-none">
                  {footerQuickLinksHeading}
                </h3>
                <ul className="mt-6 space-y-3 text-base">
                  {footerQuickLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="transition hover:text-white/80"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-[24px] leading-none">
                  {footerHelpHeading}
                </h3>
                <ul className="mt-6 space-y-3 text-base">
                  {footerHelpLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="transition hover:text-white/80"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-[24px] leading-none">
                  {footerContactHeading}
                </h3>
                <div className="mt-6 space-y-5">
                  {footerContactItems.map((item) => (
                    <FooterContactItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/80">
              {footerCopyright}
            </div>
          </PageContainer>
        </div>
      </footer>
    </div>
  );
}
