export async function getMbbData() {
  const response = await fetch("/api/mbb-data");

  if (!response.ok) {
    throw new Error("Failed to fetch mbb data");
  }

  return response.json();
}