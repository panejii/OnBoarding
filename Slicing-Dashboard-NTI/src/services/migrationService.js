export async function getMigrationData({period, region, category, movement}) {

  const params = new URLSearchParams({period,region, category, movement})
  const response = await fetch(`/api/migrationData?${params.toString()}`)

  return response.json();
}