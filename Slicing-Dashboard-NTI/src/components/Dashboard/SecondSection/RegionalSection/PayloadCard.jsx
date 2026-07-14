const PayloadCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3 mt-3">

      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <h3 className="text-gray-500 text-sm mb-4">
          Payload Crowdsource
        </h3>

        <div className="space-y-3">

          <div>
            <p className="text-xs text-gray-400">
              Total Payload
            </p>

            <h2 className="font-bold text-2xl">
              123Mbps
            </h2>

            <p className="text-xs text-green-500">
              ↓ 6.4%
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-2xl">
              32.1k
            </h2>

            <p className="text-xs text-green-500">
              ↓ 6.4%
            </p>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4">

        <h3 className="text-gray-500 text-sm mb-4">
          Payload OSS
        </h3>

        <div className="space-y-3">

          <div>
            <p className="text-xs text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-2xl">
              123Mbps
            </h2>

            <p className="text-xs text-green-500">
              ↓ 6.4%
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Impacted Grid
            </p>

            <h2 className="font-bold text-2xl">
              16.52k
            </h2>

            <p className="text-xs text-green-500">
              ↓ 6.4%
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default PayloadCard;