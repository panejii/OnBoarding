export async function getCompetitor() {
  const response = await fetch("/api/competitorData");

  if (!response.ok) {
    throw new Error("Failed to fetch competitor data");
  }

  return response.json();
}

export async function getCompetitorSummary() {
  const response = await fetch("/api/competitorSummaryData");

  if (!response.ok) {
    throw new Error("Failed to fetch competitor Summary data");
  }

  return response.json();
}