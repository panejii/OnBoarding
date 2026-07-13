import AreaChart from "../Hero/Charts/AreaCharts";
import { areaChartData } from "../../../data/areaChartData";

const StatisticCard = () => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <h2 className="font-semibold text-lg">
        Total Test FMC
      </h2>

      <h1 className="text-4xl font-bold mt-2">
        45.20%
      </h1>

      <AreaChart data={areaChartData} />

    </div>
  );
};

export default StatisticCard;