import iconTelkomsel from '../../../../assets/iconTelkomsel.png'
import iconIndihome from '../../../../assets/LogoIndihome.png'

import { MoveDown } from 'lucide-react';

const ChurnCard = () => {
  return (
    <div className='bg-white border border-zinc-400 p-2 rounded-2xl'>
        <div className='flex gap-0.5 items-center'>
            <img src={iconIndihome} alt="icon Indihome" className='w-3 h-3 ' />
            <img src={iconTelkomsel} alt="icon Indihome" className='w-3 h-3 ' />
            <p className='text-[10px]'>FMC Churn</p>
        </div>
        <h1 className='text-xs font-semibold my-1'>
            32.32%
        </h1>
        <p className='text-[8px] text-zinc-500'>
            (123.23k user)
        </p>

        <div className='mt-1 flex items-center'>
            <MoveDown color='#FF0000' size={8} />
            <p className='text-[8px] text-red-500'>6.4%</p>
        </div>


    </div>
  )
}

export default ChurnCard