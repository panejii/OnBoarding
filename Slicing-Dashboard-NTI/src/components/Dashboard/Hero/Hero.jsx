import StatisticCard from "./StatisticCard";
import CompetitorCard from "./CompetitorCard";
import ShareCard from "./ShareCard";

const Hero = () => {
  return (
    <section className="grid grid-cols-12  ">

      <div className="col-span-8 flex rounded-2xl my-2 2xl:my-3 ml-2 2xl:ml-3 gap-2 bg-white">

        <div className="flex-2 ">
            <StatisticCard />
        </div>

        <div className="flex-1 ">
            <CompetitorCard />
        </div>

    </div>

      <div className="col-span-4 m-2 xl:m-3 2xl:m-4">
          <ShareCard />
      </div>

  </section>
  );
};

export default Hero;