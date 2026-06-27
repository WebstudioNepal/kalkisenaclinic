import Image from "next/image";
import PageContainer from "@/components/PageContainer";
import GeoCentersCountryList from "@/components/geo-centers/GeoCentersCountryList";
import GeoCentersMap from "@/components/geo-centers/GeoCentersMap";
import { geoCountriesLeft, geoCountriesRight } from "@/data/geoCenters";

export default function GeoCentersSection() {
  return (
    <section className="bg-white py-16">
      <PageContainer>
        <h2 className="text-center font-heading text-[42px] leading-none text-black sm:text-[62px]">
          Our Centers through Geo Locations
        </h2>

        <div className="mt-12 flex flex-col gap-12 xl:flex-row xl:items-start xl:justify-between">
          <GeoCentersMap />

          <div className="grid shrink-0 grid-cols-1 gap-x-16 gap-y-0 sm:grid-cols-2 xl:pt-8">
            <GeoCentersCountryList countries={geoCountriesLeft} />
            <GeoCentersCountryList countries={geoCountriesRight} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
