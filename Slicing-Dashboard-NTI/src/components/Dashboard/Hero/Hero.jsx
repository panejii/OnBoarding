import StatisticCard from "./StatisticCard";
import CompetitorCard from "./CompetitorCard";
import ShareCard from "./ShareCard";

const Hero = () => {
  return (
    <section className="
    grid 
    grid-cols-12 
    gap-1
    
    xl:grid-cols-6">

      <div className="col-span-8 xl:col-span-4 flex rounded-2xl my-2 ml-2 gap-2 bg-white">

        <div className="flex-2 ">
            <StatisticCard />
        </div>

        <div className="flex-1 ">
            <CompetitorCard />
        </div>

    </div>

      <div className="col-span-4 xl:col-span-2 m-2">
          <ShareCard />
      </div>

  </section>
  );
};

export default Hero;