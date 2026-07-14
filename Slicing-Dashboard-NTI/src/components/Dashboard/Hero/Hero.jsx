import StatisticCard from "./StatisticCard";
import CompetitorCard from "./CompetitorCard";
import ShareCard from "./ShareCard";

const Hero = () => {
  return (
    <section className="grid grid-cols-12 gap-3">

      <div className="col-span-7 flex bg-white rounded-2xl p-2 gap-2">

        <div className="flex-2">
            <StatisticCard />
        </div>

        <div className="flex-1">
            <CompetitorCard />
        </div>

    </div>

      <div className="col-span-5">
          <ShareCard />
      </div>

  </section>
  );
};

export default Hero;