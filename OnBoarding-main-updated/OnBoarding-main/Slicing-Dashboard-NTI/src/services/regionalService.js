export async function getRegionalData({ period, region }) {
  const params = new URLSearchParams({ period, region });
  const response = await fetch(`/api/regionalData?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch regional data");
  }

  const json = await response.json();
  return json.data;
}
