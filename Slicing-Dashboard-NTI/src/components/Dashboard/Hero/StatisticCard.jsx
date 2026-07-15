import { useState,useEffect } from "react";
import AreaChart from "../Hero/Charts/AreaCharts";
import iconTelkomsel from "../../../assets/iconTelkomsel.png"
import { User, UserRound, UsersRound } from 'lucide-react';

import { getAreaChart } from "../../../services/areaChartService";

const StatisticCard = () => {
  
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function loadChart() {
      try {
        const data = await getAreaChart();
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadChart();
  }, []);


  return (
    <div className="flex flex-col rounded-2xl bg-white p-2 shadow-sm h-full">

      <div className="flex gap-3 items-center">
        <img src={iconTelkomsel} alt="icon Telkomsel" className="w-8 h-8 border border-zinc-200 rounded-xl" />
        <div> 
          <h2 className="font-semibold text-xs">
            Total Test FMC
          </h2>

          <h1 className="text-lg font-semibold">
            45.20%
          </h1>
        </div>
      </div>
      
      <div className="h-55 mt-3">
        <AreaChart data={chartData}/>
      </div>
      
      <div className="flex items-center gap-3 mt-3 p-2 bg-slate-100 rounded-2xl border-slate-300">
        <div className="border border-zinc-500 rounded-2xl">
            <UserRound size={12}/>
        </div>
        <div>
          <p className="text-xs">Growth Potential: 8.2M FBB-Only and 145.2M MBB-Only users available for FMC</p>
        </div>
      </div>

    </div>
  );
};

export default StatisticCard;