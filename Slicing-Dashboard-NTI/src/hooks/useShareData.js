import { useQuery } from "@tanstack/react-query";
import { getFbbData,getMbbData } from "../services/shareService";

export function useFbbData({period, source, region}){
    return useQuery({
        queryKey:["fbb-data", period, source, region],
        queryFn: () => getFbbData({period, source, region})
    })
}   

export function useMbbData({period, source, region}){
    return useQuery({
        queryKey:["mbb-data", period, source, region],
        queryFn: () => getMbbData({period, source, region})
    })
}   