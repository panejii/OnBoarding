import StatisticCard from "./StatisticCard";
import CompetitorCard from "./CompetitorCard";
import ShareCard from "./ShareCard";

const Hero = () => {
  return (
    <section className="grid grid-cols-12 gap-4">

      {/* Card kiri */}
      <div className="col-span-5">
        <StatisticCard />
      </div>

      {/* Card tengah */}
      <div className="col-span-4">
        <CompetitorCard />
      </div>

      {/* Card kanan */}
      <div className="col-span-3">
        <ShareCard />
      </div>

    </section>
  );
};

export default Hero;