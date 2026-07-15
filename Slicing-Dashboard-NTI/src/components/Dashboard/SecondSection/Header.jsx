import React from 'react'
import { CircleAlert } from 'lucide-react';

const Header = () => {
  return (
    <div className='grid grid-cols-5'>
        <div className='bg-slate-100 col-span-1 rounded-t-4xl px-1 py-2'>
            <div >
                <select className='text-[8px] bg-white rounded-2xl py-1 pl-3 pr-9 border border-slate-200 hover:bg-zinc-200 duration-300'>
                    <option value="">This Month</option>
                    <option value="">Last Month</option>
                    <option value="">Last 6 Month</option>
                </select>
            </div>
        </div>

        {/* MidField */}
        <div className='bg-white col-span-3 rounded-b-4xl flex justify-center items-center border-t-white '>
            <div className='bg-slate-200 flex gap-3 justify-center text-center items-center  rounded-4xl py-0.5 px-1'>
                <div className='bg-white py-0.5 px-2 rounded-4xl' >
                    <h1 className='font-semibold text-[8px]'>Moving Sample</h1>
                </div>
                <div className='py-1 pr-1 rounded-4xl text-[8px]'>
                    Moving By Connection Type
                </div>
            </div>

            <div className='mx-3 border border-zinc-300 p-1 rounded-lg'>
                <CircleAlert size={16}/>
            </div>
            
        </div>
        <div className='bg-slate-100 col-span-1'>
            
        </div>
    </div>
  )
}

export default Header