const PayloadCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3 ">

      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <h3 className="text-gray-500 text-[10px] mb-2">
          Payload Crowdsource
        </h3>

        <div className="space-y-3 grid grid-cols-2">

          <div>
            <p className="text-[8px] text-gray-400">
              Total Payload
            </p>

            <h2 className="font-bold text-xs">
              123Mbps
            </h2>

            <p className="text-[8px] text-green-500">
              ↓ 6.4%
            </p>
          </div>

          <div>
            <p className="text-[8px] text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-xs">
              32.1k
            </h2>

            <p className="text-[8px] text-green-500">
              ↓ 6.4%
            </p>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <h3 className="text-gray-500 text-[10px] mb-2">
          Payload OSS
        </h3>

        <div className="space-y-3 grid grid-cols-2">

          <div>
            <p className="text-[8px] text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-xs">
              123Mbps
            </h2>

            <p className="text-[8px] text-green-500">
              ↓ 6.4%
            </p>
          </div>

          <div>
            <p className="text-[8px] text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-xs">
              16.52k
            </h2>

            <p className="text-[8px] text-green-500">
              ↓ 6.4%
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PayloadCard;