import CompetitorSummary from "./CompetitorSummary";
import GroupBarChart from "./Charts/GroupBarChart";

import {
  competitorSummary,
  competitorData,
} from "../../../data/competitorData";

const CompetitorCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm h-full">

      <h2 className="text-xl font-semibold text-center mb-5">
        Gap with Competitor
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-5">

        {competitorSummary.map((item) => (
          <CompetitorSummary
            key={item.id}
            item={item}
          />
        ))}

      </div>

      <GroupBarChart data={competitorData} />

    </div>
  );
};

export default CompetitorCard;