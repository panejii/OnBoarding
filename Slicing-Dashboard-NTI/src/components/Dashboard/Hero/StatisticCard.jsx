import { useState,useEffect } from "react";
import AreaChart from "../Hero/Charts/AreaCharts";
import iconTelkomsel from "../../../assets/iconTelkomsel.png"
import { User, UserRound, UsersRound } from 'lucide-react';

import { getAreaChart } from "../../../services/areaChartService";
import { AnimatedCard, SkeletonHeaderStat, SkeletonChart, SkeletonBox } from "../../../animation";

const StatisticCard = () => {

  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadChart() {
      try {
        const data = await getAreaChart();
        setChartData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadChart();
  }, []);


  return (
    <div className="flex flex-col rounded-2xl bg-white p-2 lg:p-3 xl:p-4 2xl:p-5 shadow-sm h-full">

      <AnimatedCard
        isLoading={isLoading}
        skeleton={
          <div className="space-y-3">
            <SkeletonHeaderStat />
            <SkeletonChart className="h-48 lg:h-56 xl:h-64 2xl:h-72 mt-3" />
            <SkeletonBox className="h-14" />
          </div>
        }
      >
        <div className="flex gap-3 items-center">
          <img src={iconTelkomsel} alt="icon Telkomsel" className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 border border-zinc-200 rounded-xl" />
          <div>
            <h2 className="font-semibold text-xs lg:text-sm xl:text-sm 2xl:text-base">
              Total Test FMC
            </h2>

            <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
              45.20%
            </h1>
          </div>
        </div>

        <div className="h-48 lg:h-56 xl:h-64 2xl:h-72 mt-3">
          <AreaChart data={chartData}/>
        </div>

        <div className="flex items-center gap-3 mt-3 p-2 xl:p-3 2xl:p-3  bg-slate-100 rounded-2xl border-slate-300">
          <div className="border border-zinc-500 rounded-2xl">
              <UserRound size={12}/>
          </div>
          <div>
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm">Growth Potential: 8.2M FBB-Only and 145.2M MBB-Only users available for FMC</p>
          </div>
        </div>
      </AnimatedCard>

    </div>
  );
};

export default StatisticCard;
