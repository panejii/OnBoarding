import axiosInstance from "../lib/axiosInstance";

export async function getFbbData({ period, source, region }) {
  
  const response = await axiosInstance.get(`/fbb-data`, {
    params: {period, source, region}
  });

  const json =  response.data;
  return json.data;
}

export async function getMbbData({ period, source, region }) {
  
  const response = await axiosInstance.get(`/mbb-data`, {
    params: {period, source, region}
  });

  const json = response.data
  return json.data;
}