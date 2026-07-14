import iconIndihome from '../../../../assets/LogoIndihome.png'

const FixedBroadCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 mt-3">

      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <img src={iconIndihome} alt="" className="w-6 h-6" />

        <h2 className="font-semibold">
          Fixed Broadband
        </h2>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-5">

        <div>
          <p className="text-xs text-gray-500">RSSI</p>
          <h2 className="text-2xl font-bold mt-1">32.12%</h2>
          <p className="text-xs text-green-500 mt-1">↓ 6.4%</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Over Client</p>
          <h2 className="text-2xl font-bold mt-1">22.88%</h2>
          <p className="text-xs text-red-500 mt-1">↑ 6.4%</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Combination</p>
          <h2 className="text-2xl font-bold mt-1">45%</h2>
          <p className="text-xs text-green-500 mt-1">↓ 6.4%</p>
        </div>

      </div>

      {/* Progress */}
      <div className="mt-5 bg-gray-50 border border-gray-200 p-3 rounded-2xl">

        <div className="flex justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Impacted grid with issue
            </p>

            <h3 className="font-bold text-xl">
              31.25k
            </h3>

            <p className="text-xs text-gray-500">
              from
              <span className="text-purple-500 font-semibold">
                {" "}44.19k grid
              </span>
              {" "}were impacted.
            </p>
          </div>

          <div className="text-right">

            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
              32.32%
            </span>

            <p className="text-green-500 text-xs mt-2">
              ↓ 6.4%
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FixedBroadCard;