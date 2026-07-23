// Konfigurasi viewport peta (center + zoom) per level region. Key HARUS sama dengan value `region` di useFilterStore (nationwide | regionalwide | citywide).
export const MAP_REGION_CONFIG = {
  nationwide: {
    label: "Indonesia",
    center: [117.8, -2.5],
    zoom: 4.2,
  },
  regionalwide: {
    label: "Jawa",
    center: [110.4, -7.6],
    zoom: 6.5,
  },
  citywide: {
    label: "Jakarta",
    center: [106.8456, -6.2088],
    zoom: 10.5,
  },
};

export const DEFAULT_MAP_REGION = "nationwide";

export function getMapViewport(region) {
  return MAP_REGION_CONFIG[region] ?? MAP_REGION_CONFIG[DEFAULT_MAP_REGION];
}
