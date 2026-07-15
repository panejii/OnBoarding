import indihome from '../../../assets/LogoIndosat.png'
import xl from '../../../assets/LogoXL.png'

const CompetitorSummary = ({ item }) => {

  const logoMap = {
    indihome,
    xl,
  };

  return (
    <div className="rounded-xl border border-gray-100 p-4 text-center">

      <img
        src={logoMap[item.logo]}
        alt={item.provider}
        className="w-4 h-4 mx-auto mb-2"
      />

      <p className="text-[8px] font-semibold/loose text-gray-500">
        {item.provider}
      </p>

      <h2 className="text-[12px] font-semibold">
        {item.percentage}%
      </h2>


      <div className="flex gap-1 items-center text-center">
        <p
          className={`text-xs font-semibold ${
            item.color === "green"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {item.value} 
        </p>
        <p className="text-xs text-zinc-500">
          {item.status}
        </p>
      </div>
      

    </div>
  );
};

export default CompetitorSummary;                   