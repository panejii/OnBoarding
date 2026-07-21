import { http, HttpResponse, delay } from "msw";

import areaChartData from "./data/areaChartData.json";
import competitorData from './data/competitorData.json'
import competitorSummary from './data/competitorSummary.json'
import fbbData from './data/fbbData.json'
import mbbData from './data/mbbData.json'
import migrationData from './data/migrationData.json'
import regionalData from './data/regionalData.json'

export const handlers = [

  http.get("/api/area-chart", async ({request}) => {
    await delay(500);

    const url = new URL(request.url)
    const period = url.searchParams.get("period") ?? "this_month"
    const region = url.searchParams.get("region") ?? "nationwide"

    const result = areaChartData?.[period]?.[region] ?? []
    
    return HttpResponse.json(result);
  }),

  

  http.get("/api/fbb-data", async ({request}) => {
    await delay(500);

    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const region = url.searchParams.get("region") ?? "nationwide";

    const result = fbbData?.[period]?.[region] ?? [];

    return HttpResponse.json(result);
  }),

  http.get("/api/mbb-data", async ({ request }) => {
    await delay(500);

    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const region = url.searchParams.get("region") ?? "nationwide";

    const result = mbbData?.[period]?.[region] ?? [];

    return HttpResponse.json(result);
  }),

  http.get("/api/competitorData", async ({request}) => {
    await delay(500);

    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const region = url.searchParams.get("region") ?? "nationwide";

    const result = competitorData?.[period]?.[region] ?? [];

    return HttpResponse.json(result);
  }),

  http.get("/api/competitorSummaryData", async ({request}) => {
    await delay(500);
    const url = new URL(request.url);
    const period = url.searchParams.get("period") ?? "this_month";
    const region = url.searchParams.get("region") ?? "nationwide";

    const result = competitorSummary?.[period]?.[region] ?? [];

    return HttpResponse.json(result);
  }),

  http.get("/api/migrationData", async () => {
    await delay(500);
    return HttpResponse.json(migrationData);
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