import iconTelkomsel from '../../../../assets/iconTelkomsel.png'
import iconIndihome from '../../../../assets/LogoIndihome.png'

import { MoveDown, MoveUp } from 'lucide-react';

const ChurnCard = ({ data }) => {
  const isDown = (data?.trend ?? 0) <= 0;

  return (
    <div className='bg-white border border-zinc-400 p-2 rounded-2xl gap-0.5 2xl:gap-1'>
        <div className='flex gap-0.5 items-center'>
            <img src={iconIndihome} alt="icon Indihome" className='w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 ' />
            <img src={iconTelkomsel} alt="icon Indihome" className='w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 ' />
            <p className='text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]'>FMC Churn</p>
        </div>
        <h1 className='text-[9px] lg:text-[10px] xl:text-xs 2xl:text-[16px] font-semibold'>
            {data?.percentage ?? "-"}%
        </h1>
        <p className='text-[6px] lg:text-[7px] xl:text-[8px] 2xl:text-[12px] text-zinc-500'>
            ({data?.users ?? "-"} user)
        </p>

        <div className=' flex items-center'>
            {isDown ? (
                <MoveDown className='w-1.5 h-1.5 xl:w-2.5 xl:h-2.5' color='#FF0000' />
            ) : (
                <MoveUp className='w-1.5 h-1.5 xl:w-2.5 xl:h-2.5' color='#22C55E' />
            )}
            <p className={`text-[6px] lg:text-[7px] xl:text-[8px] ${isDown ? "text-red-500" : "text-green-500"}`}>
                {Math.abs(data?.trend ?? 0)}%
            </p>
        </div>


    </div>
  )
}

export default ChurnCard
