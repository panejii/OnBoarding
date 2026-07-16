import iconTelkomsel from '../../../../assets/iconTelkomsel.png'

const MobileBroadCard = () => {
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
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">32.12%</h2>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-green-500 ">↓ 6.4%</p>
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">RSRQ</p>
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">22.88%</h2>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-red-500 ">↑ 6.4%</p>
        </div>

        <div className='gap-0.5'>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">Cell Congestion</p>
          <h2 className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold ">45%</h2>
          <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-green-500 ">↓ 6.4%</p>
        </div>

      </div>

      <div className="mt-2 bg-gray-50 rounded-xl ">

        <div className="flex justify-between border border-gray-200 p-3 rounded-2xl">

          <div >
            <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">
              Impacted grid with issue
            </p>

            <h3 className="font-bold text-xs lg:text-sm xl:text-base 2xl:text-lg">
              31.25k
            </h3>

            <p className="text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs text-gray-500">
              from
              <span className="text-blue-500 font-semibold">
                {" "}32.53k grid
              </span>
              {" "}were impacted.
            </p>
          </div>

          <div className="text-right items-center flex flex-col">

            <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs">
              32.32%
            </span>

            <p className="text-green-500 text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-xs mt-2">
              ↓ 6.4%
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MobileBroadCard;