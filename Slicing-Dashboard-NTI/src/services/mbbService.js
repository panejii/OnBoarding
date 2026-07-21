export async function getMbbData({ period, source, region }) {
  const params = new URLSearchParams({ period, source, region });
  const response = await fetch(`/api/mbb-data?${params.toString()}`);

  if (!response.ok) throw new Error("Failed to fetch mbb data");

  const json = await response.json();
  return json.data;
}