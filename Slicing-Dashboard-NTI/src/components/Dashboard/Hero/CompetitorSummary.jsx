const CompetitorSummary = ({ item }) => {
  return (
    <div className="rounded-xl border border-gray-100 p-4 text-center">

      <img
        src={item.logo}
        alt={item.provider}
        className="w-8 h-8 mx-auto mb-2"
      />

      <p className="text-[8px] font-semibold/loose text-gray-500">
        {item.provider}
      </p>

      <h2 className="text-m font-semibold">
        {item.percentage}%
      </h2>

      <p
        className={`text-xs font-semibold ${
          item.color === "green"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {item.value} {item.status}
      </p>

    </div>
  );
};

export default CompetitorSummary;                   