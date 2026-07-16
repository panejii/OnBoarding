import iconTelkomsel from '../../../../assets/iconTelkomsel.png'
import iconIndihome from '../../../../assets/LogoIndihome.png'

import { MoveDown } from 'lucide-react';

const ChurnCard = () => {
  return (
    <div className='bg-white border border-zinc-400 p-2 rounded-2xl gap-0.5 2xl:gap-1'>
        <div className='flex gap-0.5 items-center'>
            <img src={iconIndihome} alt="icon Indihome" className='w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 ' />
            <img src={iconTelkomsel} alt="icon Indihome" className='w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 ' />
            <p className='text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]'>FMC Churn</p>
        </div>
        <h1 className='text-[9px] lg:text-[10px] xl:text-xs 2xl:text-[16px] font-semibold'>
            32.32%
        </h1>
        <p className='text-[6px] lg:text-[7px] xl:text-[8px] 2xl:text-[12px] text-zinc-500'>
            (123.23k user)
        </p>

        <div className=' flex items-center'>
            <MoveDown className='w-1.5 h-1.5 xl:w-2.5 xl:h-2.5' color='#FF0000' />
            <p className='text-[6px] lg:text-[7px] xl:text-[8px] text-red-500'>6.4%</p>
        </div>


    </div>
  )
}

export default ChurnCard