import iconTelkomsel from '../../../../assets/iconTelkomsel.png'

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

const MobileBroadCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-2 mt-1">

      <div className="flex items-center gap-2 mb-2">
        <img src={iconTelkomsel} alt="icon Telkomsel" className='w-3 h-3' />

        <h2 className="font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl">
          Mobile Broadband
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-1">

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">RSRP</p>
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">{data?.rsrp ?? "-"}%</h2>
          <TrendLabel value={data?.trend?.rsrp} />
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">RSRQ</p>
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">{data?.rsrq ?? "-"}%</h2>
          <TrendLabel value={data?.trend?.rsrq} />
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">Cell Congestion</p>
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">{data?.cellCongestion ?? "-"}%</h2>
          <TrendLabel value={data?.trend?.cellCongestion} />
        </div>

      </div>

      <div className="mt-2 bg-gray-50 rounded-xl ">

        <div className="flex justify-between border border-gray-200 p-3 rounded-2xl">

          <div >
            <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">
              Impacted grid with issue
            </p>

            <h3 className="font-bold text-xs lg:text-sm xl:text-base 2xl:text-lg">
              {data?.impactedGrid ?? "-"}
            </h3>

            <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">
              from
              <span className="text-blue-500 font-semibold">
                {" "}{data?.totalGrid ?? "-"} grid
              </span>
              {" "}were impacted.
            </p>
          </div>

          <div className="text-right items-center flex flex-col">

            <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs">
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

export default MobileBroadCard;
