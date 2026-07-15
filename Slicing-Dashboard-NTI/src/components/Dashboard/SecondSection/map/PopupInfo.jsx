import {Users, MessageCircleWarning, Gauge, MoveDown} from 'lucide-react'

const PopupInfo = () => {
  return (
    <div className="absolute right-32 top-32 z-10 w-32 bg-white rounded-xl shadow-lg p-2">
      <h3 className="font-semibold mb-1 text-[10px]">
        DKI JAKARTA
      </h3>

      <div className="space-y-3 text-[10px]">

        <div className="border border-zinc-200 rounded-lg p-1">
          <div className="flex justify-between">
            <span className='text-[8px]'>FBB</span>

            <span className="text-red-500 bg-red-100  px-2 rounded-xl">
              Critical
            </span>
          </div>

            <div className='flex gap-3'>
                <p className="text-gray-500 mt-1 flex gap-1 text-[8px] ">
                    <Users size={9}/>
                    123.32k
                </p>
                <p className="text-gray-500 mt-1 flex gap-1 text-[8px]">
                    <MessageCircleWarning size={9} />
                    
                    Poor RSSI
                </p>
            </div>
          
        </div>

        <div className="border border-zinc-200 rounded-lg p-1">
          <div className="flex justify-between">
            <span className='text-[8px]'>MBB</span>

            <span className="text-red-500 bg-red-100 px-2 rounded-xl">
              Critical
            </span>
          </div>


          <div className='flex flex-col'>
                <p className="text-gray-500  flex gap-1 text-[8px] ">
                    <Users size={9}/>
                    123.32k
                </p>
                <p className="text-gray-500  flex gap-1 text-[8px]">
                    <MessageCircleWarning size={9} />
                    Poor RSSI
                </p>

                <p className="text-red-500  flex text-[8px] items-center">
                    <Gauge size={9} color='gray' />
                    <MoveDown size={7} color='red' className='ml-0.5'/>
                    6.4 Mbps
                    <p className='text-gray-500 text-[8px] ml-0.5'>
                        (2%)
                    </p>
                </p>
            </div>
        </div>

      </div>

      <button className="mt-1 w-full text-blue-600 text-[10px]">
        See Detail →
      </button>
    </div>
  );
};

export default PopupInfo;