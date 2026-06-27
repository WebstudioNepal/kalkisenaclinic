export type MapMarker = {
  id: string;
  left: string;
  top: string;
};

export type GeoCountry = {
  id: string;
  name: string;
};

export type ImpactStat = {
  value: string;
  label: string;
};

export const geoMapMarkers: MapMarker[] = [
  { id: "m1", left: "23.2%", top: "6.1%" },
  { id: "m2", left: "9.0%", top: "24.7%" },
  { id: "m3", left: "27.2%", top: "34.3%" },
  { id: "m4", left: "32.1%", top: "47.0%" },
  { id: "m5", left: "13.8%", top: "49.8%" },
  { id: "m6", left: "51.4%", top: "41.1%" },
  { id: "m7", left: "59.6%", top: "61.5%" },
  { id: "m8", left: "43.0%", top: "70.6%" },
  { id: "m9", left: "64.1%", top: "84.9%" },
  { id: "m10", left: "81.2%", top: "94.6%" },
  { id: "m11", left: "94.5%", top: "76.5%" },
];

export const geoCountriesLeft: GeoCountry[] = [
  { id: "africa", name: "Africa" },
  { id: "afghanistan", name: "Afghanistan" },
  { id: "iran", name: "Iran" },
  { id: "georgia", name: "Georgia" },
  { id: "algeria", name: "Algeria" },
  { id: "greece", name: "Greece" },
  { id: "south-africa", name: "South Africa" },
];

export const geoCountriesRight: GeoCountry[] = [
  { id: "vietnam", name: "Viet Nam" },
  { id: "brazil", name: "Brazil" },
  { id: "china", name: "China" },
  { id: "haiti", name: "Haiti" },
];

export const impactStats: ImpactStat[] = [
  { value: "1400+", label: "Free Clinics" },
  { value: "1.2 M", label: "Patients Served Annually" },
  { value: "5 M", label: "Patients Visits Annualy" },
  { value: "243K+", label: "Members" },
];
