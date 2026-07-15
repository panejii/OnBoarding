export async function getFbbData() {
  const response = await fetch("/api/fbb-data");

  if (!response.ok) {
    throw new Error("Failed to fetch fbb data");
  }

  return response.json();
}