import axiosInstance from "../lib/axiosInstance";

export async function getMapData({ period, region }) {
  const response = await axiosInstance.get(`/mapData`, {
    params: {period, region}
  });

  const json = response.data;
  return json.data;
}