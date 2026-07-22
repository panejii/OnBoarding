const TrendLabel = ({ value }) => {
  const isDown = (value ?? 0) <= 0;
  return (
    <p className={`text-[8px] ${isDown ? "text-green-500" : "text-red-500"}`}>
      {isDown ? "↓" : "↑"} {Math.abs(value ?? 0)}%
    </p>
  );
};

const PayloadCard = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-3 ">

      <div className="bg-white rounded-2xl border border-gray-200 p-3">

        <h3 className="text-gray-500 text-[6px] lg:text-[8px] xl:text-[10px] mb-2">
          Payload Crowdsource
        </h3>

        <div className="space-y-3 grid grid-cols-2">

          <div>
            <p className="text-[8px] text-gray-400">
              Total Payload
            </p>

            <h2 className="font-bold text-xs">
              {data?.crowdsource?.totalPayload ?? "-"}
            </h2>

            <TrendLabel value={data?.crowdsource?.trend?.totalPayload} />
          </div>

          <div>
            <p className="text-[8px] text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-xs">
              {data?.crowdsource?.impactedGrid ?? "-"}
            </h2>

            <TrendLabel value={data?.crowdsource?.trend?.impactedGrid} />
          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <h3 className="text-gray-500 text-[6px] lg:text-[8px] xl:text-[10px] mb-2">
          Payload OSS
        </h3>

        <div className="space-y-3 grid grid-cols-2">

          <div>
            <p className="text-[8px] text-gray-400">
              Total Payload
            </p>

            <h2 className="font-bold text-xs">
              {data?.oss?.totalPayload ?? "-"}
            </h2>

            <TrendLabel value={data?.oss?.trend?.totalPayload} />
          </div>

          <div>
            <p className="text-[8px] text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-xs">
              {data?.oss?.impactedGrid ?? "-"}
            </h2>

            <TrendLabel value={data?.oss?.trend?.impactedGrid} />
          </div>

        </div>

      </div>

    </div>
  );
};

export default PayloadCard;
