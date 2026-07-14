import iconTelkomsel from '../../../../assets/iconTelkomsel.png'
import iconIndihome from '../../../../assets/LogoIndihome.png'

import { MoveDown } from 'lucide-react';

const ChurnCard = () => {
  return (
    <div className='bg-white border border-zinc-400 p-2 rounded-2xl'>
        <div className='flex gap-0.5 items-center'>
            <img src={iconIndihome} alt="icon Indihome" className='w-7 h-7 ' />
            <img src={iconTelkomsel} alt="icon Indihome" className='w-7 h-7 ' />
            <p className='text-[12px]'>FMC Churn</p>
        </div>
        <h1 className='text-2xl font-semibold my-1'>
            32.32%
        </h1>
        <p className='text-xs text-zinc-500'>
            (123.23k user)
        </p>

        <div className='mt-1 flex items-center'>
            <MoveDown color='#FF0000' size={12} />
            <p className='text-xs text-red-500'>6.4%</p>
        </div>


    </div>
  )
}

export default ChurnCard