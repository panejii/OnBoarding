export async function getMbbData({period, source, region}) {
  
  const params = new URLSearchParams({period,source,region})
  const response = await fetch(`/api/mbb-data?${params.toString()}`)

  return response.json();
}