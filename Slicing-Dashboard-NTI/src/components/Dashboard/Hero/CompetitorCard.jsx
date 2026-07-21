import CompetitorSummary from "./CompetitorSummary";
import GroupBarChart from "./Charts/GroupBarChart";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCompetitor, getCompetitorSummary } from "../../../services/competitorService";
import { AnimatedCard, SkeletonBox, SkeletonChart, SkeletonText } from "../../../animation";
import ErrorState from "../../ErrorState";

const CompetitorCard = () => {

  const [period, setPeriod] = useState("this_month");
  const [region, setRegion] = useState("nationwide");

  const {
    data: competitorSummaryData = [],
    isLoading: isLoadingSummary,
    isError: isErrorSummary,
  } = useQuery({
    queryKey: ["competitorSummary", period, region],
    queryFn: () => getCompetitorSummary({period, region}),
  });

  const {
    data: competitorData = [],
    isLoading: isLoadingCompetitor,
    isError: isErrorCompetitor,
  } = useQuery({
    queryKey: ["competitor", period, region],
    queryFn: ()=> getCompetitor({period, region}),
  });

  const isLoading = isLoadingSummary || isLoadingCompetitor;

  return (
    <div className="bg-white rounded-2xl p-2 shadow-sm h-full">

      <AnimatedCard isLoading={isLoading} 
      skeleton=
        {
          <div className="space-y-2">
            <SkeletonText className="w-32 h-4 mx-auto my-2" />
            <div className="grid grid-cols-2 gap-2 mb-2">
              <SkeletonBox className="h-24" />
              <SkeletonBox className="h-24" />
            </div>
            <SkeletonChart className="h-42 lg:h-46 xl:h-54 2xl:h-62" />
          </div>
        }
      >

        {/* Judul statis, SELALU tampil, tidak peduli error atau tidak */}
        <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold text-center my-2">
          Gap with Competitor
        </h2>

        {/* Section summary: error-nya lokal di sini saja */}
        <div className="grid grid-cols-2 mb-2">
          {isErrorSummary ? (
            <div className="col-span-2">
              <ErrorState message="Gagal memuat ringkasan competitor" />
            </div>
          ) : (
            competitorSummaryData.map((item) => (
              <CompetitorSummary key={item.id} item={item} />
            ))
          )}
        </div>

        {/* Section chart: error-nya lokal di sini saja */}
        <div className="w-full h-42 lg:h-46 xl:h-54 2xl:h-62">
          {isErrorCompetitor ? (
            <ErrorState message="Gagal memuat grafik competitor" />
          ) : (
            <GroupBarChart data={competitorData} />
          )}
        </div>

      </AnimatedCard>

    </div>
  );
};



export default CompetitorCard;