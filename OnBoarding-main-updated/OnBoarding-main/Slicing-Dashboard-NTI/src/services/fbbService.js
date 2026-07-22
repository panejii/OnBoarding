// fbbService.js
export async function getFbbData({ period, source, region }) {
  const params = new URLSearchParams({ period, source, region });
  const response = await fetch(`/api/fbb-data?${params.toString()}`);

  if (!response.ok) throw new Error("Failed to fetch fbb data");

  const json = await response.json();
  return json.data;
}