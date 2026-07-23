import axiosInstance from "../lib/axiosInstance";

export async function getAreaChart({period, region}) {
  
  const response = await axiosInstance.get("/area-chart", {
    params: {period,region},
  })

  const json = response.data

  return json.data.category.map((date, i) => ({
    date,
    value: json.data.series[i],
  }));
}