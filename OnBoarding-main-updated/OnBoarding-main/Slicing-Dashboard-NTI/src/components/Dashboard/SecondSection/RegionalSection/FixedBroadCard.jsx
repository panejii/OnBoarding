import iconIndihome from '../../../../assets/LogoIndihome.png'

const TrendLabel = ({ value }) => {
  const isDown = (value ?? 0) <= 0;
  return (
    <p
      className={`text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs ${
        isDown ? "text-green-500" : "text-red-500"
      }`}
    >
      {isDown ? "↓" : "↑"} {Math.abs(value ?? 0)}%
    </p>
  );
};

const FixedBroadCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-2 mt-1">

      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <img src={iconIndihome} alt="" className="w-3 h-3" />

        <h2 className="font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl">
          Fixed Broadband
        </h2>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-1">

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs  text-gray-500">RSSI</p>
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">{data?.rssi ?? "-"}%</h2>
          <TrendLabel value={data?.trend?.rssi} />
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:   text-gray-500">Over Client</p>
          <h2 className=" text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">{data?.overClient ?? "-"}%</h2>
          <TrendLabel value={data?.trend?.overClient} />
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs  text-gray-500">Combination</p>
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">{data?.combination ?? "-"}%</h2>
          <TrendLabel value={data?.trend?.combination} />
        </div>

      </div>

      {/* Progress */}
      <div className="mt-2 bg-gray-50 border border-gray-200 p-3 rounded-2xl">

        <div className="flex justify-between">

          <div>
            <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">
              Impacted grid with issue
            </p>

            <h3 className="font-bold text-xs lg:text-sm xl:text-base 2xl:text-lg">
              {data?.impactedGrid ?? "-"}
            </h3>

            <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">
              from
              <span className="text-purple-500 font-semibold">
                {" "}{data?.totalGrid ?? "-"} grid
              </span>
              {" "}were impacted.
            </p>
          </div>

          <div className="text-right items-center flex flex-col">

            <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs">
              {data?.impactedPercent ?? "-"}%
            </span>

            <div className="mt-2">
              <TrendLabel value={data?.gridTrend} />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FixedBroadCard;
