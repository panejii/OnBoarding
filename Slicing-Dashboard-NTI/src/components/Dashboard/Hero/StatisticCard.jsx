import AreaChart from "../Hero/Charts/AreaCharts";
import { areaChartData } from "../../../data/areaChartData";
import iconTelkomsel from "../../../assets/iconTelkomsel.png"
import { User, UserRound, UsersRound } from 'lucide-react';

const StatisticCard = () => {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm h-full">

      <div className="flex gap-3 items-center">
        <img src={iconTelkomsel} alt="icon Telkomsel" className="w-8 h-8 border border-zinc-200 rounded-xl" />
        <div> 
          <h2 className="font-semibold text-xs">
            Total Test FMC
          </h2>

          <h1 className="text-lg font-bold">
            45.20%
          </h1>
        </div>
      </div>
      
      <div className="h-55 mt-3">
        <AreaChart data={areaChartData}/>
      </div>
      
      <div className="flex items-center gap-3 mt-3">
        <div className="border border-zinc-500 rounded-2xl">
            <UserRound/>
        </div>
        <div>
          <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nihil!</p>
        </div>
      </div>

    </div>
  );
};

export default StatisticCard;