export async function getAreaChart({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const response = await fetch(`/api/area-chart?${params.toString()}`)

  const json = await response.json()

  return json.data.category.map((date, i) => ({
    date,
    value: json.data.series[i],
  }));
}