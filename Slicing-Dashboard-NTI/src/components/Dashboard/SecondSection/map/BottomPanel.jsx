const BottomPanel = () => {
  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-md p-4 z-10">

      <div className="flex gap-3 mb-4">
        <button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm">
          Most Concern Grid
        </button>

        <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
          Problem Device
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">

        {[1,2,3,4,5].map((item)=>(
          <div
            key={item}
            className="border rounded-lg p-3"
          >
            <p className="text-xs text-gray-500">
              {item}st
            </p>

            <h4 className="font-medium">
              JKT-KBY-012
            </h4>

            <p className="text-xs mt-2">
              123.32k
            </p>

            <p className="text-xs text-gray-500">
              Poor RSRP
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default BottomPanel;