import {Users, TicketX} from 'lucide-react'

const BottomPanel = () => {
  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-md p-2 z-10">

      <div className="flex gap-1 mb-2">
        <button className="bg-violet-600 text-white px-2 py-2 rounded-lg text-[10px]">
          Most Concern Grid
        </button>

        <button className="bg-gray-100 px-4 py-2 rounded-lg text-[10px]">
          Problem Device
        </button>
      </div>

      <div className="grid grid-cols-5 gap-1">

        {[1,2,3,4,5].map((item)=>(
          <div
            key={item}
            className="border rounded-lg p-1"
          >
            <p className="text-[8px] text-gray-500">
              {item}st
            </p>

            <h4 className="font-medium text-xs text-gray-500">
              JKT-KBY-012
            </h4>

            <p className="text-[8px] mt-2 flex gap-1">
                <Users size={9}/>
              123.32k
            </p>

            <p className="text-[8px] text-gray-500 flex gap-1">
              <TicketX size={9}/>
              Poor RSRP
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default BottomPanel;