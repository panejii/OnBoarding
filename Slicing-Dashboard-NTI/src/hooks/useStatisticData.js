import { useQuery } from "@tanstack/react-query";
import { getAreaChart } from "../services/areaChartService";

export function useStatisticData({period, region}){
    return useQuery({
        queryKey:["area-chart", period, region],
        queryFn: () => getAreaChart({period, region})
    })
}   