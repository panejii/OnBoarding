import { useQuery } from "@tanstack/react-query";
import { getMigrationData } from "../services/migrationService";

export function useMigrationData({period, region, category, movement}){
    return useQuery({
        queryKey:["migration", period, region, category, movement],
        queryFn: () => getMigrationData({period, region, category, movement})
    })
}