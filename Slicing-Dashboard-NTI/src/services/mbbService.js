export async function getMbbData({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const response = await fetch(`/api/mbb-data?${params.toString()}`)

  return response.json();
}