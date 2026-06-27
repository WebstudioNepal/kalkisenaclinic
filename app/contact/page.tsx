import type { Metadata } from "next";
import ContactUsSection from "@/components/contact/ContactUsSection";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Contact Us | Kalkisena Clinic",
  description:
    "Get in touch with Kalkisena Clinic. Reach out for care, volunteering, donations, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#00176A]">
      <ContactUsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
}
