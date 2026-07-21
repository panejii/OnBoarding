export async function getAreaChart({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const reponse = await fetch(`/api/area-chart?${params.toString()}`)

  return response.json();
}