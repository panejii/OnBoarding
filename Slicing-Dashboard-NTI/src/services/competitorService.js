export async function getCompetitor({ period, region }) {
  const params = new URLSearchParams({ period, region });
  const response = await fetch(`/api/competitorData?${params.toString()}`);

  if (!response.ok) throw new Error("Failed to fetch competitor data");

  const json = await response.json();
  const { category, series } = json.data;

  return category.map((date, i) => ({
    date,
    telkomsel: series.telkomsel[i],
    indosat: series.indosat[i],
    xl: series.xl[i],
  }));
}

export async function getCompetitorSummary({period, region}) {
  
  const params = new URLSearchParams({period,region})
  const response = await fetch(`/api/competitorSummaryData?${params.toString()}`)

  return response.json();
}