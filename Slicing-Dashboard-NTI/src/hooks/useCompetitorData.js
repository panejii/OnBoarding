import { useQuery } from "@tanstack/react-query";
import { getCompetitor, getCompetitorSummary } from "../services/competitorService";

export function useCompetitorData({period, region}){
    return useQuery({
        queryKey:["competitor", period, region],
        queryFn: () => getCompetitor({period, region})
    })
}   

export function useCompetitorSummaryData({period, region}){
    return useQuery({
        queryKey:["competitor-summary", period, region],
        queryFn: () => getCompetitorSummary({period, region})
    })
}   