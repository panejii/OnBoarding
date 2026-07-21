import { http, HttpResponse, delay } from "msw";

import areaChartData from "./data/areaChartData.json";
import competitorData from './data/competitorData.json'
import competitorSummary from './data/competitorSummary.json'
import fbbData from './data/fbbData.json'
import mbbData from './data/mbbData.json'
import migrationData from './data/migrationData.json'
import regionalData from './data/regionalData.json'

function periodToRange(period) {
  const end = new Date("2026-08-21");
  const start = new Date(end);

  if (period === "today") start.setDate(end.getDate());
  if (period === "this_week") start.setDate(end.getDate() - 6);
  if (period === "this_month") start.setDate(end.getDate() - 30);

  const fmt = (d) => d.toISOString().split("T")[0];
  return { start: fmt(start), end: fmt(end) };
}

function buildShareData(rawData, { period, source, region }) {
  const { start, end } = periodToRange(period);

  const filtered = rawData
    .filter(
      (row) =>
        row.source === source &&
        row.region === region.toUpperCase() &&
        row.date >= start &&
        row.date <= end
    )
    .sort((a, b) => a.date.localeCompare(b.date));

  const grouped = filtered.reduce((acc, row) => {
    (acc[row.provider] ??= []).push(row);
    return acc;
  }, {});

  return Object.entries(grouped).map(([provider, rows], i) => {
    const latest = rows.at(-1);
    const prev = rows.at(-2) ?? latest;
    const growth = prev.value ? +(latest.value - prev.value).toFixed(1) : 0;

    return {
      id: i + 1,
      provider,
      logo: latest.logo,
      percentage: latest.value,
      growth,
      sparkline: rows.map((r) => r.value),
    };
  });
}


export const handlers = [

  http.get("/api/area-chart", async ({request}) => {
    await delay(500);

    const url = new URL(request.url)
    const period = url.searchParams.get("period") ?? "this_month"
    const region = (url.searchParams.get("region") ?? "nationwide").toUpperCase()

    const {start, end} = periodToRange(period)

    const filtered = areaChartData.filter(
      (row) => row.region === region && row.date >= start && row.date <= end
    );
    
    return HttpResponse.json({
      status: true,
      data: {
        category: filtered.map((r) => r.date),
        series: filtered.map((r) => r.value),
      },
      message: "Area chart data retrieved successfully.",
      pagination: null,
    });
  }),

  http.get("/api/competitorData", async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const region = (url.searchParams.get("region") ?? "nationwide").toUpperCase();

    const { start, end } = periodToRange(period);

    const filtered = competitorData.filter(
      (row) => row.region === region && row.date >= start && row.date <= end
    );

    return HttpResponse.json({
      status: true,
      data: {
        category: filtered.map((r) => r.date),
        series: {
          telkomsel: filtered.map((r) => r.telkomsel),
          indosat: filtered.map((r) => r.indosat),
          xl: filtered.map((r) => r.xl),
        },
      },
      message: "Competitor data retrieved successfully.",
      pagination: null,
    });
  }),

  http.get("/api/competitorSummaryData", async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const region = (url.searchParams.get("region") ?? "nationwide").toUpperCase();

    const { start, end } = periodToRange(period);

    const filtered = competitorData
      .filter((row) => row.region === region && row.date >= start && row.date <= end)
      .sort((a, b) => a.date.localeCompare(b.date));

    if (filtered.length === 0) {
      return HttpResponse.json({
        status: true,
        data: [],
        message: "Competitor summary retrieved successfully.",
        pagination: null,
      });
    }

    const competitors = ["indosat", "xl"]; // telkomsel dikecualikan (provider sendiri)
    const latest = filtered.at(-1);
    const prev = filtered.at(-2) ?? latest;

    const nameMap = { indosat: "FMC Indosat", xl: "FMC XL Axiata" };
    const logoMap = { indosat: "indihome", xl: "xl" }; // sesuai key yang dikenal komponen

    const data = competitors.map((p, i) => {
      const value = latest[p];
      const prevValue = prev[p];
      const trendPercent = prevValue ? +(((value - prevValue) / prevValue) * 100).toFixed(1) : 0;
      const isUp = trendPercent >= 0;

      return {
        id: i + 1,
        logo: logoMap[p],
        provider: nameMap[p],
        percentage: value,
        value: `${isUp ? "+" : ""}${trendPercent}%`,
        color: isUp ? "green" : "red",
        status: isUp ? "ahead" : "behind",   // ⬅️ diganti, ikut arah tren, bukan dibanding Telkomsel
      };
    });

    return HttpResponse.json({
      status: true,
      data,
      message: "Competitor summary retrieved successfully.",
      pagination: null,
    });
  }),

  http.get("/api/mbb-data", async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const source = url.searchParams.get("source") ?? "meta";
    const region = url.searchParams.get("region") ?? "nationwide";

    const data = buildShareData(mbbData, { period, source, region });

    return HttpResponse.json({
      status: true,
      data,
      message: "MBB share data retrieved successfully.",
      pagination: null,
    });
  }),

  http.get("/api/fbb-data", async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const source = url.searchParams.get("source") ?? "meta";
    const region = url.searchParams.get("region") ?? "nationwide";

    const data = buildShareData(fbbData, { period, source, region });

    return HttpResponse.json({
      status: true,
      data,
      message: "FBB share data retrieved successfully.",
      pagination: null,
    });
  }),

  http.get("/api/migrationData", async ({request}) => {
    await delay(500);

    const url = new URL(request.url)
    const period = url.searchParams.get("period") ?? "this_month"
    const region = url.searchParams.get("region") ?? "nationwide"
    const category = url.searchParams.get("category") ?? "fmc"
    const movement = url.searchParams.get("movement") ?? "sample"

    const result = migrationData?.[period]?.[region]?.[category]?.[movement] ?? []

    return HttpResponse.json(result);
  }),

  http.get("/api/regionalData", async () => {
    await delay(500);
    return HttpResponse.json(regionalData);
  }),


];

  //  {
  //     message: "Internal Server Error",
  //   },
  //   {
  //     status: 500,
  //   }