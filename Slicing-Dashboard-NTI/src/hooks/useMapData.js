import { useQuery } from "@tanstack/react-query";
import { getMapData } from "../services/mapService";
import { getAdapter } from "axios";
import { getMap } from "echarts";

export function useMapData({period, region}){
    return useQuery({
        queryKey:["map", period, region],
        queryFn: () => getMapData({period, region})
    })
}