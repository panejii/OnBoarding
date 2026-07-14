import SparklineChart from "./Charts/SparklineChart";
import { TrendingUp, TrendingDown } from "lucide-react";

const ShareItem = ({ item }) => {
  const isPositive = item.growth > 0;

  return (
    <div className="flex justify-between items-center border border-gray-200 rounded-xl overflow-hidden bg-white">

      {/* Left */}
      <div className="flex-1 p-3">

        <div className="flex items-center gap-2 mb-2">
          <img
            src={item.logo}
            alt={item.provider}
            className="w-6 h-6 object-contain"
          />

          <h3 className="text-xs font-medium text-gray-600">
            {item.provider}
          </h3>
        </div>

        <h2 className="text-2xl font-bold">
          {item.percentage}%
        </h2>

        <div
          className={`flex items-center gap-1 mt-1 text-xs font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}

          {Math.abs(item.growth)}%
        </div>

      </div>

      {/* Right */}
      <div className="w-40 h-28 border-l border-gray-100">
        <SparklineChart
          data={item.sparkline}
          color={isPositive ? "#22c55e" : "#dc2626"}
        />
      </div>

    </div>
  );
};

export default ShareItem;