export async function getMbbData({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const reponse = await fetch(`/api/mbb-data?${params.toString()}`)

  return response.json();
}