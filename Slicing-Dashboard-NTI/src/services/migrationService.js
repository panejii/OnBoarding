import axiosInstance from "../lib/axiosInstance"

export async function getMigrationData({period, region, category, movement}) {

  const response = await axiosInstance.get(`/migrationData`, {
    params: {period,region,category,movement}
  })

  const result = response.data

  return result.data
}