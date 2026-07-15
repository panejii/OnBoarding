export async function getAreaChart() {
  const response = await fetch("/api/area-chart");

  if (!response.ok) {
    throw new Error("Failed to fetch area chart");
  }

  return response.json();
}