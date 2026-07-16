import SparklineChart from "./Charts/SparklineChart";
import { TrendingUp, TrendingDown } from "lucide-react";

import biznet from '../../../assets/LogoBiznet.png'
import telkomsel from '../../../assets/iconTelkomsel.png'
import indihome from '../../../assets/LogoIndihome.png'
import indosat from '../../../assets/LogoIndosat.png'
import xl from '../../../assets/LogoXL.png'
import xlhome from '../../../assets/LogoXLHome.png'

const ShareItem = ({ item }) => {
  const isPositive = item.growth > 0;

  const logoMap = {
    indihome,
    xl,
    indosat,
    xlhome,
    biznet,
    telkomsel
  };

  return (
    <div className="grid grid-cols-2 justify-between items-center border border-gray-200 rounded-xl overflow-hidden bg-white">

      {/* Left */}
      <div className="flex-1 2xl:p-2 xl:p-1.5 p-1 ">

        <div className="flex items-center gap-1 xl:gap-1.5  2xl:gap-2 ">
          <img
            src={logoMap[item.logo]}
            alt={item.provider}
            className="w-2 h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 2xl:w-5 2xl:h-5 object-contain"
          />

          <h3 className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs font-medium text-gray-600">
            {item.provider}
          </h3>
        </div>

        <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold">
          {item.percentage}%
        </h2>

        <div
          className={`flex items-center gap-1 mt-1 text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={10} />
          ) : (
            <TrendingDown size={10} />
          )}

          {Math.abs(item.growth)}%
        </div>

      </div>

      {/* Right */}
      <div className="w-20 h-14 lg:w-24 lg:h-16 xl:w-28 xl:h-20 2xl:w-26 2xl:h-24 border border-zinc-300 rounded-2xl m-2 px-0.5">
        <SparklineChart
          data={item.sparkline}
          color={isPositive ? "#22c55e" : "#dc2626"}
        />
      </div>

    </div>
  );
};

export default ShareItem;