import axios from "axios";
import axiosInstance from "../lib/axiosInstance";

export async function getCompetitor({ period, region }) {
  
  const response = await axiosInstance.get("/competitorData", {
    params: {period,region}
  })

  const { category, series } = response.data.data;

  return category.map((date, i) => ({
    date,
    telkomsel: series.telkomsel[i],
    indosat: series.indosat[i],
    xl: series.xl[i],
  }));
}

export async function getCompetitorSummary({ period, region }) {
  const response = await axiosInstance.get("/competitorSummaryData", {
    params: { period, region },
  });

  return response.data.data;
}