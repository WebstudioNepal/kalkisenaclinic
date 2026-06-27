import L from "leaflet";

const MARKER_ICON_URL = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const MARKER_ICON_RETINA_URL =
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const MARKER_SHADOW_URL = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";

let defaultIconConfigured = false;

export function configureLeafletDefaultIcon() {
  if (defaultIconConfigured || typeof window === "undefined") {
    return;
  }

  L.Icon.Default.mergeOptions({
    iconUrl: MARKER_ICON_URL,
    iconRetinaUrl: MARKER_ICON_RETINA_URL,
    shadowUrl: MARKER_SHADOW_URL,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  defaultIconConfigured = true;
}
