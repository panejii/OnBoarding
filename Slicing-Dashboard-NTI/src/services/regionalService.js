import axiosInstance from "../lib/axiosInstance";

export async function getRegionalData({ period, region }) {
  const response = await axiosInstance.get(`/regionalData`, {
    params: {period,region}
  });

  const json = response.data;
  return json.data;
}
