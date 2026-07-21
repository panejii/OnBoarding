export async function getFbbData({period, source, region}) {
  
  const params = new URLSearchParams({period,source,region})
  const response = await fetch(`/api/fbb-data?${params.toString()}`)

  return response.json();
}