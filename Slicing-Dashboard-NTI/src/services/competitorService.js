export async function getCompetitor({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const reponse = await fetch(`/api/competitorData?${params.toString()}`)

  return response.json();
}

export async function getCompetitorSummary({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const reponse = await fetch(`/api/competitorSummaryData?${params.toString()}`)

  return response.json();
}