export async function getRegionalData() {
  const response = await fetch("/api/regionalData");

  if (!response.ok) {
    throw new Error("Failed to fetch regional data");
  }

  return response.json();
}