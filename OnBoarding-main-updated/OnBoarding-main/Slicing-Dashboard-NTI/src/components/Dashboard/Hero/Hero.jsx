import StatisticCard from "./StatisticCard";
import CompetitorCard from "./CompetitorCard";
import ShareCard from "./ShareCard";
import { StaggerContainer, StaggerItem } from "../../../animation";

const Hero = () => {
  return (
    <StaggerContainer className="grid grid-cols-12" stagger={1.0}>

      <StaggerItem className="col-span-8 flex rounded-2xl my-2 2xl:my-3 ml-2 2xl:ml-3 gap-2 bg-white">

        <div className="flex-2 ">
            <StatisticCard />
        </div>

        <div className="flex-1 ">
            <CompetitorCard />
        </div>

      </StaggerItem>

      <StaggerItem className="col-span-4 m-2 xl:m-3 2xl:m-4">
          <ShareCard />
      </StaggerItem>

    </StaggerContainer>
  );
};

export default Hero;
