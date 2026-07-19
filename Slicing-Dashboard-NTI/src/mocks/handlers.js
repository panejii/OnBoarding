import { http, HttpResponse, delay } from "msw";

import areaChartData from "./data/areaChartData.json";
import competitorData from './data/competitorData.json'
import competitorSummary from './data/competitorSummary.json'
import fbbData from './data/fbbData.json'
import mbbData from './data/mbbData.json'
import migrationData from './data/migrationData.json'
import regionalData from './data/regionalData.json'

export const handlers = [
  http.get("/api/area-chart", async () => {
    await delay(2000);
    
    return HttpResponse.json(areaChartData);
  }),

  http.get("/api/fbb-data", async () => {
    await delay(1500);
    return HttpResponse.json(fbbData);
  }),

  http.get("/api/mbb-data", async () => {
    await delay(2260);
    return HttpResponse.json(mbbData);
  }),

  http.get("/api/competitorData", async () => {
    await delay(2250);
    return HttpResponse.json(
      {
      message: "Internal Server Error",
    },
    {
      status: 500,
    });
  }),

  http.get("/api/competitorSummaryData", async () => {
    await delay(2500);
    return HttpResponse.json(competitorSummary);
  }),

  http.get("/api/migrationData", async () => {
    await delay(2000);
    return HttpResponse.json(migrationData);
  }),

  http.get("/api/regionalData", async () => {
    await delay(3000);
    return HttpResponse.json(regionalData);
  }),


];