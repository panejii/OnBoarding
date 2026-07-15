import CompetitorSummary from "./CompetitorSummary";
import GroupBarChart from "./Charts/GroupBarChart";

import { useState,useEffect } from "react";

import { getCompetitor,getCompetitorSummary } from "../../../services/competitorService";

const CompetitorCard = () => {

  const [competitorData, setcompetitorData] = useState([]);
    const [competitorSummaryData, setcompetitorSummaryData] = useState([]);
  
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
        }
      }
  
      loadData()
    },[]) 

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm h-full">

      <h2 className="text-xl font-semibold text-center mb-2">
        Gap with Competitor
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-5">

        {competitorSummaryData.map((item) => (
          <CompetitorSummary
            key={item.id}
            item={item}
          />
        ))}

      </div>
      
      <div className="w-full h-60">
        <GroupBarChart data={competitorData} />
      </div>
      

    </div>
  );
};

export default CompetitorCard;