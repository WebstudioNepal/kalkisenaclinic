import PageContainer from "@/components/PageContainer";
import DonateTodayGallery from "@/components/donate-today/DonateTodayGallery";
import DonateTodayMobile from "@/components/donate-today/DonateTodayMobile";

export default function DonateTodaySection() {
  return (
    <section id="donate-today" className="scroll-mt-8 bg-white py-8">
      <PageContainer>
        <DonateTodayGallery />
        <DonateTodayMobile />
      </PageContainer>
    </section>
  );
}
