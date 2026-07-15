export async function getMigrationData() {
  const response = await fetch("/api/migrationData");

  if (!response.ok) {
    throw new Error("Failed to fetch migration data");
  }

  return response.json();
}