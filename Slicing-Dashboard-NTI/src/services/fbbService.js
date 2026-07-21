export async function getFbbData({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const reponse = await fetch(`/api/fbb-data?${params.toString()}`)

  return response.json();
}