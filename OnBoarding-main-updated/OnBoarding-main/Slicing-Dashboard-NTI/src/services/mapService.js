export async function getMapData({ period, region }) {
  const params = new URLSearchParams({ period, region });
  const response = await fetch(`/api/mapData?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch map data");
  }

  const json = await response.json();
  return json.data;
}
