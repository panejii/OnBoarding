export async function getMigrationData({period, region, category, movement}) {

  const params = new URLSearchParams({period,region, category, movement})
  const response = await fetch(`/api/migrationData?${params.toString()}`)

  const result = await response.json()

  return result.data
}