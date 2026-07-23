import { useQuery } from "@tanstack/react-query";
import { getRegionalData } from "../services/regionalService";

export function useRegionalData({period, region}){
    return useQuery({
        queryKey:["regional", period, region],
        queryFn: () => getRegionalData({period, region})
    })
}