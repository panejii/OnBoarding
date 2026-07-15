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
    <div className="flex justify-between items-center border border-gray-200 rounded-xl overflow-hidden bg-white">

      {/* Left */}
      <div className="flex-1 p-1">

        <div className="flex items-center gap-1 ">
          <img
            src={logoMap[item.logo]}
            alt={item.provider}
            className="w-2 h-2 object-contain"
          />

          <h3 className="text-[8px] font-medium text-gray-600">
            {item.provider}
          </h3>
        </div>

        <h2 className="text-xs font-bold">
          {item.percentage}%
        </h2>

        <div
          className={`flex items-center gap-1 mt-1 text-[8px] font-semibold ${
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
      <div className="w-20 h-14 border-l border-gray-100">
        <SparklineChart
          data={item.sparkline}
          color={isPositive ? "#22c55e" : "#dc2626"}
        />
      </div>

    </div>
  );
};

export default ShareItem;