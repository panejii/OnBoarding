import {Users, MessageCircleWarning} from 'lucide-react'

const PopupInfo = () => {
  return (
    <div className="absolute right-32 top-32 z-10 w-64 bg-white rounded-xl shadow-lg p-4">
      <h3 className="font-semibold mb-3">
        DKI JAKARTA
      </h3>

      <div className="space-y-3 text-sm">

        <div className="border border-zinc-200 rounded-lg p-2">
          <div className="flex justify-between">
            <span>FBB</span>

            <span className="text-red-500 bg-red-100 py-1 px-2 rounded-xl">
              Critical
            </span>
          </div>

            <div className='flex gap-3'>
                <p className="text-gray-500 mt-1 flex gap-1 ">
                    <Users size={18}/>
                    123.32k
                </p>
                <p className="text-gray-500 mt-1 flex gap-1">
                    <MessageCircleWarning size={18}/>
                    Poor RSSI
                </p>
            </div>
          
        </div>

        <div className="border border-zinc-200 rounded-lg p-2">
          <div className="flex justify-between">
            <span>MBB</span>

            <span className="text-red-500 bg-red-100 py-1 px-2 rounded-xl">
              Critical
            </span>
          </div>

          <p className="text-gray-500 mt-1">
            Poor RSRP
          </p>
        </div>

      </div>

      <button className="mt-4 w-full text-blue-600 text-sm">
        See Detail →
      </button>
    </div>
  );
};

export default PopupInfo;