import iconIndihome from '../../../../assets/LogoIndihome.png'

const FixedBroadCard = () => {
  return (
    <div className="bg-white rounded-2xl p-2 mt-1">

      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <img src={iconIndihome} alt="" className="w-3 h-3" />

        <h2 className="font-semibold text-sm">
          Fixed Broadband
        </h2>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-1">

        <div className='gap-0.5'>
          <p className="text-[8px] text-gray-500">RSSI</p>
          <h2 className="text-xs font-bold ">32.12%</h2>
          <p className="text-[8px] text-green-500 ">↓ 6.4%</p>
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] text-gray-500">Over Client</p>
          <h2 className="text-xs font-bold ">22.88%</h2>
          <p className="text-[8px] text-red-500 ">↑ 6.4%</p>
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] text-gray-500">Combination</p>
          <h2 className="text-xs font-bold ">45%</h2>
          <p className="text-[8px] text-green-500 ">↓ 6.4%</p>
        </div>

      </div>

      {/* Progress */}
      <div className="mt-2 bg-gray-50 border border-gray-200 p-3 rounded-2xl">

        <div className="flex justify-between">

          <div>
            <p className="text-[8px] text-gray-500">
              Impacted grid with issue
            </p>

            <h3 className="font-bold text-xs">
              31.25k
            </h3>

            <p className="text-[8px] text-gray-500">
              from
              <span className="text-purple-500 font-semibold">
                {" "}44.19k grid
              </span>
              {" "}were impacted.
            </p>
          </div>

          <div className="text-right items-center flex flex-col">

            <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-[8px]">
              32.32%
            </span>

            <p className="text-green-500 text-[8px] mt-2">
              ↓ 6.4%
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FixedBroadCard;