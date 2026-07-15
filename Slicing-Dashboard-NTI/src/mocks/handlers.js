import { http, HttpResponse } from "msw";

import areaChartData from "./data/areaChartData.json";
import competitorData from './data/competitorData.json'
import competitorSummary from './data/competitorSummary.json'
import fbbData from './data/fbbData.json'
import mbbData from './data/mbbData.json'
import migrationData from './data/migrationData.json'
import regionalData from './data/regionalData.json'

export const handlers = [
  http.get("/api/area-chart", () => {
    return HttpResponse.json(areaChartData);
  }),

  http.get("/api/fbb-data", () => {
    return HttpResponse.json(fbbData);
  }),

  http.get("/api/mbb-data", () => {
    return HttpResponse.json(mbbData);
  }),

  http.get("/api/competitorData", () => {
    return HttpResponse.json(competitorData);
  }),

  http.get("/api/competitorSummaryData", () => {
    return HttpResponse.json(competitorSummary);
  }),

  http.get("/api/migrationData", () => {
    return HttpResponse.json(migrationData);
  }),

  http.get("/api/regionalData", () => {
    return HttpResponse.json(regionalData);
  }),


];