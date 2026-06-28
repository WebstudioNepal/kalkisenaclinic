import PageContainer from "@/components/PageContainer";
import GeoCentersCountryList from "@/components/geo-centers/GeoCentersCountryList";
import GeoCentersMap from "@/components/geo-centers/GeoCentersMap";
import { geoCountries, geoCountriesLeft, geoCountriesRight } from "@/data/geoCenters";

export default function GeoCentersSection() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <PageContainer>
        <h2 className="text-center font-heading text-[36px] leading-none text-black sm:text-[42px] lg:text-[62px]">
          Our Centers through Geo Locations
        </h2>

        <div className="mt-6 flex flex-col gap-6 sm:mt-12 sm:gap-12 xl:flex-row xl:items-start xl:justify-between">
          <GeoCentersMap />

          <GeoCentersCountryList
            countries={geoCountries}
            variant="compact-grid"
            className="sm:hidden"
          />

          <div className="hidden shrink-0 grid-cols-2 gap-x-16 gap-y-0 sm:grid xl:pt-8">
            <GeoCentersCountryList countries={geoCountriesLeft} />
            <GeoCentersCountryList countries={geoCountriesRight} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
