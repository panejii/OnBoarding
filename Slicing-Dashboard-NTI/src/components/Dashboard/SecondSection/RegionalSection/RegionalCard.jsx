const RegionalCard = ({ data }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">

      <div className="flex">

        {/* Garis warna kiri */}
        <div
          className={`w-1 ${
            data.color === "purple"
              ? "bg-purple-500"
              : "bg-blue-500"
          }`}
        />

        {/* Isi */}
        <div className="flex justify-between items-center w-full p-1 ">

          {/* Kiri */}
          <div>

            <p className="text-[8px] text-gray-500">
              {data.title}
            </p>

            <div className="flex items-center gap-1 justify-center">
                <h2 className="text-xs font-bold mt-1">
                    {data.percentage}%
                </h2>

                <p className="text-[7px] text-gray-400">
                    ({data.users} user)
                </p>
            </div>
            

          </div>

          {/* Kanan */}
          <div className="text-right">

            <div className="flex items-center gap-1">
                <h2 className="text-xs font-semibold">
                    {data.totalGrid}
                </h2>

                <p className="text-gray-500 text-[10px]">
                    grid
                </p>
            </div>



            <p className="text-[8px] text-gray-400">
              ({data.totalPercent}% of total)
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RegionalCard;