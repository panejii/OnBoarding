import CompetitorSummary from "./CompetitorSummary";
import GroupBarChart from "./Charts/GroupBarChart";

import { useState,useEffect } from "react";

import { getCompetitor,getCompetitorSummary } from "../../../services/competitorService";
import { AnimatedCard, SkeletonBox, SkeletonChart, SkeletonText } from "../../../animation";

const CompetitorCard = () => {

  const [competitorData, setcompetitorData] = useState([]);
  const [competitorSummaryData, setcompetitorSummaryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
      async function loadData(){
        try{
          const[compData,compSumData] = await Promise.all([
            getCompetitorSummary(),
            getCompetitor(),
          ])

          setcompetitorData(compSumData)
          setcompetitorSummaryData(compData)
        } catch(error){
          console.error(error)
        } finally {
          setIsLoading(false)
        }
      }

      loadData()
    },[])

  return (
    <div className="bg-white rounded-2xl p-2 shadow-sm h-full">

      <AnimatedCard
        isLoading={isLoading}
        skeleton={
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
        <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold text-center my-2">
          Gap with Competitor
        </h2>

        <div className="grid grid-cols-2 mb-2">

          {competitorSummaryData.map((item) => (
            <CompetitorSummary
              key={item.id}
              item={item}
            />
          ))}

        </div>

        <div className="w-full h-42 lg:h-46 xl:h-54 2xl:h-62">
          <GroupBarChart data={competitorData} />
        </div>
      </AnimatedCard>

    </div>
  );
};

export default CompetitorCard;
